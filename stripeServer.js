const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static('.'));
app.use(bodyParser.json());
app.use(express.json()); 
const YOUR_DOMAIN = 'http://localhost:4242';
app.post('/create-checkout-session', async (req, res) => {
  const productInfo = req.body.data.reduce((acc, [key, value]) => {
    return {
      name: `${acc.name ? `${acc.name},` : ''} ${value.quantity} ${key} ${Number(value.quantity) === 1 ? 'ticket' : 'tickets' }`,
      quantity: acc.quantity + Number(value.quantity),
      price: acc.price + Number(value.price * value.quantity),
    }
  }, { name: '', quantity: 0, price: 0 });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: productInfo.name,
            images: [],
          },
          unit_amount: productInfo.price * 100,
        },
        quantity: 1,
      }
    ],
    mode: 'payment',
    success_url: `http://localhost:3000/tue2020/checkout?success=true`,
    cancel_url: `http://localhost:3000/tue2020/checkout?cancel=true`,
  });
  res.json({ id: session.id });
});
app.listen(4242, () => console.log('Running on port 4242'));