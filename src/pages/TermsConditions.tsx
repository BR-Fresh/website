import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsConditions = () => {
  return (
    <div className="bg-background text-on-background font-body min-h-screen">
      <Navbar />
      <main className="pt-[100px] pb-20 max-w-4xl mx-auto px-6">
        <h1 className="font-headline font-extrabold text-4xl text-primary mb-8">Terms and Conditions</h1>
        <div className="prose prose-emerald max-w-none text-on-surface-variant space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">1. Introduction</h2>
            <p>Welcome to BR Fresh. These Terms and Conditions govern your use of our website and mobile application. By accessing or using our services, you agree to be bound by these terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">2. Use of Services</h2>
            <p>You must be at least 18 years old to use our services. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">3. Ordering and Delivery</h2>
            <p>All orders are subject to availability. We strive to provide accurate pricing and product information, but errors may occur. Delivery times are estimates and may vary based on store availability and delivery partner schedules.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">4. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, and images, is the property of BR Fresh and is protected by intellectual property laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">5. Limitation of Liability</h2>
            <p>BR Fresh shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.</p>
          </section>

          <p className="text-sm italic mt-12 text-outline">Last updated: April 2024</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditions;
