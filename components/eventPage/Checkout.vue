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
                <Button class="form-layout__button">
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
    name: 'Checkout',
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
                rule: ['required'],
                label: 'Name',
            },
            email: {
                value: '',
                error: '',
                rule: ['required', 'email'],
                label: 'Email',
            },
        },
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
    methods: {
        validateField,
        validateForm,
        clearError,
        getQuantityString(ticketType, ticketObj) {
            return `${ticketObj.quantity}
                ${ticketType.toLowerCase()}
                ${Number(ticketObj.quantity) === 1 ? 'ticket' : 'tickets'}`;
        },
        payForTickets() {
            const isValid = validateForm(this.form);

            if (!isValid) return;

            alert('pay');
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