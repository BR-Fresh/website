import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <div className="bg-background text-on-background font-body min-h-screen">
      <Navbar />
      <main className="pt-[100px] mb-20 max-w-7xl mx-auto px-6">
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-primary text-center mb-16">Contact us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-on-surface mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">support_agent</span> Get in touch
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-10">
                Have a question or need assistance with your order? Our support team is here to help you between 8:00 AM and 10:00 PM, 7 days a week.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary">alternate_email</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface">Email support</h3>
                    <p className="text-sm text-on-surface-variant">support@brfresh.com</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary">call</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface">Phone support</h3>
                    <p className="text-sm text-on-surface-variant">+91 91234 56789</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface">Registered office</h3>
                    <p className="text-sm text-on-surface-variant max-w-xs">Plot No. 12, Sector 21-A, Chandigarh, Punjab - 160022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-surface-container-low p-8 md:p-12 rounded-3xl editorial-shadow">
            <h2 className="text-2xl font-bold text-on-surface mb-8">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-outline uppercase tracking-wider block" htmlFor="name">Full name</label>
                  <input className="w-full bg-surface-container-lowest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-outline/50" id="name" placeholder="Rahul Sharma" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-outline uppercase tracking-wider block" htmlFor="email">Email address</label>
                  <input className="w-full bg-surface-container-lowest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-outline/50" id="email" placeholder="rahul@example.com" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-outline uppercase tracking-wider block" htmlFor="subject">Subject</label>
                <select className="w-full bg-surface-container-lowest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all bg-no-repeat appearance-none" id="subject">
                  <option value="order">Order inquiry</option>
                  <option value="store">Partner as a store</option>
                  <option value="delivery">Delivery issue</option>
                  <option value="other">General feedback</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-outline uppercase tracking-wider block" htmlFor="message">Message</label>
                <textarea className="w-full bg-surface-container-lowest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all min-h-[150px] placeholder:text-outline/50" id="message" placeholder="How can we help you today?"></textarea>
              </div>
              <button className="w-full bg-primary text-on-primary font-bold py-5 rounded-2xl hover:opacity-90 transition-all flex items-center justify-center gap-3 mt-4">
                Send message <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
