<template>
  <GenericSection class="checkout">
    <div v-if="isQuantityReady" class="checkout__tickets">
        <TicketCard
            v-for="ticket in tickets"
            :key="ticket.type"
            v-model="ticketsQuantity[ticket.type.toLowerCase()].quantity"
            :ticket="ticket"
            is-checkout
        />
    </div>
    <FormLayout v-if="hasTickets" class="checkout__totals">
        <template #info>
            <Heading color="white" class="form-layout__heading">
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
        </template>
        <template #form>
            <form @submit.prevent="payForTickets">
                <Input
                    v-for="field in formFields"
                    :key="field"
                    v-model="form[field].value"
                    :name="field"
                    :label="form[field].label"
                    :error="form[field].error"
                    @blur="validateField(field, form)"
                    @input="clearError(field, form)"
                />
                <Button
                    :is-loading="isLoading"
                    class="form-layout__button"
                >
                    {{buttonText}}
                </Button>
            </form>
        </template>
    </FormLayout>
  </GenericSection>
</template>

<script>
import { validateField, validateForm, clearError } from '~/assets/js/validation';
import GenericSection from '~/components/common/GenericSection';
import Heading from '~/components/common/Heading';
import Input from '~/components/common/Input';
import Button from '~/components/common/Button';
import TicketCard from '~/components/eventPage/Tickets/TicketCard';
import FormLayout from '~/components/common/FormLayout';

export default {
    name: 'Purchase',
    props: {
        tickets: {
          type: Array,
          default: () => [],
        },
        isLoading: {
          type: Boolean,
          default: false,
        },
    },
    components: {
        GenericSection,
        Heading,
        Input,
        Button,
        TicketCard,
        FormLayout,
    },
    data: () => ({
        form: {
            name: {
                value: '',
                error: '',
                rules: ['required'],
                label: 'Name',
            },
            email: {
                value: '',
                error: '',
                rules: ['required', 'email'],
                label: 'Email',
            },
        },
        ticketsQuantity: {},
        isQuantityReady: false,
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
        buttonText() {
            return `${this.totalPrice ? `pay $${this.totalPrice}` : 'get free tickets'}`
        },
        formFields() {
            return Object.keys(this.form);
        },
    },
    created() {
        this.ticketsQuantity = this.getTicketsQuantity();
        this.isQuantityReady = true;
    },
    methods: {
        validateField,
        validateForm,
        clearError,
        getTicketsQuantity() {
            return this.tickets.reduce((acc, cur) => {
                return {
                    ...acc,
                    [cur.type]: {
                        price: cur.price,
                        quantity: 0,
                    }
                };
            }, {});
        },
        getQuantityString(ticketType, ticketObj) {
            return `${ticketObj.quantity}
                ${ticketType.toLowerCase()}
                ${Number(ticketObj.quantity) === 1 ? 'ticket' : 'tickets'}`;
        },
        payForTickets() {
            const isValid = validateForm(this.form);

            if (!isValid) return;

            this.$emit('pay-for-tickets', {
                totalPrice: this.totalPrice,
                quantityArr: this.quantityArr,
                email: this.form.email.value,
            })
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
        margin-bottom: 16px;
    }

    &__total-list {
        text-align: center;
        margin-bottom: 16px;
    }

    &__total-ticket {
        display: flex;
        align-items: baseline;
        justify-content: center;

        &::before {
        content: '\2013';
        width: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        }
    }

    @media (min-width: $media-sm) {
        padding-top: 120px;
        padding-bottom: 106px;

        &__tickets {
            grid-template-columns: repeat(3, 1fr);
            margin-bottom: 106px;
        }

        &__total-list {
            text-align: left;
        }

        &__total-ticket {
            justify-content: flex-start;
        }
    }

    @media (min-width: $media-lg) {
        padding-top: 152px;
        padding-bottom: 120px;
    }
}
</style>