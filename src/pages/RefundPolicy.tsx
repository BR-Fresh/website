import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RefundPolicy = () => {
  return (
    <div className="bg-background text-on-background font-body min-h-screen">
      <Navbar />
      <main className="pt-[100px] pb-20 max-w-4xl mx-auto px-6">
        <h1 className="font-headline font-extrabold text-4xl text-primary mb-8">Cancellation and Refund Policy</h1>
        <div className="prose prose-emerald max-w-none text-on-surface-variant space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">1. Cancellation by Customer</h2>
            <p>You can cancel your order within 5 minutes of placing it, as long as it has not been accepted by the store. Once the store accepts the order, cancellation may not be possible.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">2. Cancellation by BR Fresh or Store</h2>
            <p>We or the store partner reserves the right to cancel an order due to stock unavailability, pricing errors, or other unforeseen circumstances. In such cases, you will be notified immediately, and a full refund will be processed (if applicable).</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">3. Refund Eligibility</h2>
            <p>Refunds are eligible for cancelled orders (as per section 1 and 2), damaged items, or missing items in your delivery. For quality concerns with fresh produce, please notify our support team within 1 hour of delivery for refund consideration.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">4. Refund Process</h2>
            <p>Approved refunds are typically processed back to the original payment method within 5-7 business days, depending on your bank or payment provider.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">5. Non-Refundable Items</h2>
            <p>Certain items, such as perishable goods that have been partially consumed, may not be eligible for a refund unless there is a clear quality issue present at the time of delivery.</p>
          </section>

          <p className="text-sm italic mt-12 text-outline">Last updated: April 2024</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
