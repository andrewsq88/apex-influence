import Stripe from 'stripe';
let stripeInstance: Stripe | null = null;
export function getStripe(): Stripe {
  if (!stripeInstance) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) throw new Error('Missing STRIPE_SECRET_KEY environment variable');
    stripeInstance = new Stripe(key, { apiVersion: '2023-10-16' as const, typescript: true });
  }
  return stripeInstance;
}
export const getStripePublishableKey = () => {
  const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  if (!key) throw new Error('Missing NEXT_PUBLIC_STRIPU_PUBLISHABKE_KEY');
  return key;
};