<template>
  <div class="checkout-container">
    <PaymentMsg
      v-if="infoMessage"
      :message="infoMessage"
      :is-cancel="isPaymentCancelled"
    />
    <template v-else>
      <Purchase
        v-if="!areTicketsPurchased"
        :tickets="event.ticket_type"
        @pay-for-tickets="payForTickets"
      />
      <ThankYou
        v-else
        :codes="codes"
        :event-name="event.name"
      />
    </template>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import PaymentMsg from './PaymentMsg';
import Purchase from './Purchase';
import ThankYou from './ThankYou';

export default {
  name: 'Checkout',
  props: {
    event: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    Purchase,
    ThankYou,
    PaymentMsg,
  },
  data: () => ({
    areTicketsPurchased: false,
    infoMessage: '',
    codes: [
      {
          type: 'free',
          codes: [11123, 23545, 11123, 23545, 11123, 23545]
      },
      {
          type: 'basic',
          codes: [11123, 23545, 11123, 23545, 11123, 23545]
      }
  ],
  }),
  computed: {
    isPaymentSucceed() {
      return !!this.$route.query.success;
    },
    isPaymentCancelled() {
      return !!this.$route.query.cancel;
    },
  },
  created() {
    this.infoMessage = this.getInfoMessage();
  },
  async mounted() {
    if (this.isPaymentSucceed) {
      const { quantityArr, email } = this.getStorageData();

      if (quantityArr && email) {
        await this.getTicketCodes(quantityArr, email);
        this.clearStorageData();
        this.infoMessage = '';
        this.areTicketsPurchased = true;
      }
    }
  },
  methods: {
    ...mapActions({
      'POST': 'crud/POST',
      'GET': 'crud/GET',
    }),
    payForTickets({ totalPrice, quantityArr, email }) {
      if (!totalPrice) {
          this.getTicketCodes(quantityArr, email);
      } else {
        this.saveStorageData(email, JSON.stringify(quantityArr));

        const stripe = Stripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
        const data = quantityArr.filter(([key, value]) => value.quantity);

        fetch("http://localhost:4242/create-checkout-session", {
          method: "POST",
          body: JSON.stringify({data}),
          headers: { 'Content-Type': 'application/json' },
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (session) {
            return stripe.redirectToCheckout({ sessionId: session.id });
          })
          .then(function (result) {
            // If redirectToCheckout fails due to a browser or network
            // error, you should display the localized error message to your
            // customer using error.message.
            if (result.error) {
                alert(result.error.message);
            }
          })
          .catch(function (error) {
            console.error("Error:", error);
          });
      }
    },
    getTicketCodes(quantityArr, email) {
      const form = {
        codes_requested: quantityArr.reduce((acc, [key, value]) => {
          return { ...acc, [key]: Number(value.quantity) };
        }, {}),
        receipt_email: email,
      };

      this.POST({ route: `/ticketing/${this.$route.params.event}/purchase`, data: form })
        .then((data) => { console.log(data); this.areTicketsPurchased = true; })
        .catch((err) => { console.log(err); this.areTicketsPurchased = true; })
        .finally(() => { this.areTicketsPurchased = true; });
    },
    getInfoMessage() {
      let message = '';

      if (this.isPaymentSucceed) {
        message = 'Your payment succeed. Getting your ticket codes...';
      } else if (this.isPaymentCancelled) {
        message = 'You cancelled your payment.';
      }

      return message;
    },
    saveStorageData(email, quantityArr) {
      window.sessionStorage.setItem('email', email);
      window.sessionStorage.setItem('quantityArr', quantityArr);
    },
    getStorageData() {
      return {
        email: window.sessionStorage.getItem('email'), 
        quantityArr: JSON.parse(window.sessionStorage.getItem('quantityArr')),
      }
    },
    clearStorageData() {
      window.sessionStorage.removeItem('email');
      window.sessionStorage.removeItem('quantityArr');
    }
  },
};
</script>
