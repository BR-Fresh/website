import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ShippingPolicy = () => {
  return (
    <div className="bg-background text-on-background font-body min-h-screen">
      <Navbar />
      <main className="pt-[100px] pb-20 max-w-4xl mx-auto px-6">
        <h1 className="font-headline font-extrabold text-4xl text-primary mb-8">Shipping and Delivery Policy</h1>
        <div className="prose prose-emerald max-w-none text-on-surface-variant space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">1. Delivery Areas</h2>
            <p>We provide hyper-local delivery services from stores within your specified neighborhood and PIN code areas.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">2. Delivery Times</h2>
            <p>Standard delivery times are typically between 20 to 30 minutes from the time your order is picked up by our delivery partner. Delivery times may vary during peak hours or due to weather conditions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">3. Shipping Charges</h2>
            <p>Shipping or delivery charges are calculated based on the distance between the store and your delivery address. These charges will be clearly displayed at checkout before you finalize your order.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">4. Order Tracking</h2>
            <p>You can track the real-time status of your order through the 'Track Order' section of our website or mobile application once your order is accepted by the store.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">5. Issues with Delivery</h2>
            <p>If you experience any issues with your delivery, such as missing items or items arriving in poor condition, please contact our support team immediately for assistance.</p>
          </section>

          <p className="text-sm italic mt-12 text-outline">Last updated: April 2024</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShippingPolicy;
