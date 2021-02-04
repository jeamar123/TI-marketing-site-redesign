<template>
  <GenericSection class="checkout">
      <div class="checkout__tickets">
        <TicketCard
            v-for="ticket in tickets"
            :key="ticket.type"
            v-model="ticketsQuantity[ticket.type.toLowerCase()].quantity"
            :ticket="ticket"
            is-checkout
        />
        <div v-if="hasTickets" class="checkout__totals">
            <Heading color="white" class="checkout__heading">
                Total: ${{totalPrice}}
            </Heading>
            <dl class="checkout__total-list">
                <dt>In your order:</dt>
                <template v-for="([key, value]) in quantityArr">
                    <dd
                        :key="key"
                        v-if="value.quantity"
                        class="checkout__total-ticket"
                    >
                        {{getQuantityString(key, value)}}
                    </dd>
                </template>
            </dl>
            <form>
                <Input
                    v-model="form.name"
                    name="name"
                    label="Name"
                />
                <Input
                    v-model="form.email"
                    name="email"
                    label="Email"
                />
                <Button>
                    pay ${{totalPrice}}
                </Button>
            </form>
        </div>          
      </div>
  </GenericSection>
</template>

<script>
import GenericSection from '~/components/common/GenericSection';
import Heading from '~/components/common/Heading';
import Input from '~/components/common/Input';
import Button from '~/components/common/Button';
import TicketCard from '~/components/eventPage/Tickets/TicketCard';

export default {
    name: 'Checkout',
    components: {
        GenericSection,
        Heading,
        Input,
        Button,
        TicketCard,
    },
    data: () => ({
        tickets: [
            {
                type: 'Free',
                price: 0,
                access: [ 'Access to live conference' ]
            },
            {
                type: 'Basic',
                price: 10,
                access: [ 'Access to live conference', 'Access to record of talks' ]
            },
            {
                type: 'Premium',
                price: 30,
                access: [ 'Access to offline conference', 'Access to live conference', 'Access to record of talks' ]
            }
        ],
        // write function to form this object dynamically from available types of tickets
        ticketsQuantity: {
            free: {
                price: 0,
                quantity: 0,
            },
            basic: {
                price: 10,
                quantity: 0,
            },
            premium: {
                price: 30,
                quantity: 0,
            },
        },
        form: {
            name: '',
            email: '',
        },
    }),
    computed: {
        totalPrice() {
            return Object.values(this.ticketsQuantity).reduce((acc, cur) => {
                return acc = acc + (cur.price * Number(cur.quantity));
            }, 0);
        },
        quantityArr() {
            return Object.entries(this.ticketsQuantity);
        },
        hasTickets() {
            return Object.values(this.ticketsQuantity).some(cur => cur.quantity);
        },
    },
    methods: {
        getQuantityString(ticketType, ticketObj) {
            return `${ticketObj.quantity}
                ${ticketType.toLowerCase()}
                ${Number(ticketObj.quantity) === 1 ? 'ticket' : 'tickets'}`;
        },
    },
}
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.checkout {
    padding-top: 72px;
    padding-bottom: 24px;

    &__tickets {
        display: grid;
        grid-gap: 8px;
    }
}
</style>