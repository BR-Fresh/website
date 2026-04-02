import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="bg-background text-on-background font-body min-h-screen">
      <Navbar />
      <main className="pt-[100px] pb-20 max-w-4xl mx-auto px-6">
        <h1 className="font-headline font-extrabold text-4xl text-primary mb-8">Privacy Policy</h1>
        <div className="prose prose-emerald max-w-none text-on-surface-variant space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">1. Information We Collect</h2>
            <p>We collect personal information such as your name, contact details, and location to provide you with our services. We also collect data related to your browsing and purchasing history.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">2. Use of Information</h2>
            <p>Your information is used to process orders, facilitate deliveries, communicate with you about your account and our services, and improve your overall user experience.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">3. Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal information from unauthorized access, loss, or disclosure. However, no method of online transmission or storage is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">4. Sharing with Third Parties</h2>
            <p>We share necessary information with our store partners and delivery personnel to complete your orders. We do not sell or rent your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">5. Cookies and Tracking</h2>
            <p>We use cookies and similar technologies to enhance your browsing experience and analyze website traffic. You can manage your cookie preferences through your browser settings.</p>
          </section>

          <p className="text-sm italic mt-12 text-outline">Last updated: April 2024</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
