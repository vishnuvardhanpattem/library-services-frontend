import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { BrowserRouter } from "react-router-dom"
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51PJ7VySBbqP5438xmBISf3Xd6nthfVv6IpTTN6uCPEhRKxOazZwUEL569thOe3CNKv0RgsvKMAoBLPM5PnbV7Yjy00yiDxJtDv');


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
  </BrowserRouter>
);


