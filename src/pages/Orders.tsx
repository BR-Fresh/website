import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Orders = () => {
  return (
    <div className="bg-surface font-body text-on-surface antialiased min-h-screen">
      <Navbar />

      <main className="pt-[104px] pb-24 max-w-7xl mx-auto px-6 font-body">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start">
          {/* Left Sidebar: Tonal Navigation Layering */}
          <aside className="w-full lg:w-[280px] shrink-0 sticky top-[104px]">
            <div className="bg-surface-container rounded-[12px] p-4 shadow-sm space-y-1.5 border-none transition-all">
              <div className="px-5 py-4 mb-3">
                <p className="text-[10px] font-extrabold text-outline uppercase tracking-[0.2em]">Dashboard</p>
              </div>
              <Link className="flex items-center gap-4 px-5 py-4 rounded-xl text-on-surface-variant font-bold hover:bg-surface hover:text-on-surface transition-all text-lg" to="#">
                <span className="material-symbols-outlined text-2xl">person</span>
                <span>Profile Settings</span>
              </Link>
              <Link className="flex items-center gap-4 px-5 py-4 rounded-xl bg-surface-container-lowest text-primary font-extrabold shadow-[0px_8px_24px_rgba(28,28,24,0.04)] transition-all text-lg" to="/orders">
                <span className="material-symbols-outlined text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>package</span>
                <span>My Harvests</span>
              </Link>
              <Link className="flex items-center gap-4 px-5 py-4 rounded-xl text-on-surface-variant font-bold hover:bg-surface hover:text-on-surface transition-all text-lg" to="#">
                <span className="material-symbols-outlined text-2xl">location_on</span>
                <span>Addresses</span>
              </Link>
              <div className="h-0.5 bg-surface-container-highest/20 my-6 mx-5"></div>
              <Link className="flex items-center gap-4 px-5 py-4 rounded-xl text-error font-extrabold hover:bg-error-container/20 transition-all text-lg" to="#">
                <span className="material-symbols-outlined text-2xl">logout</span>
                <span>Logout</span>
              </Link>
            </div>
          </aside>

          {/* Main Content: Editorial Order History */}
          <section className="flex-1">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16 px-4">
              <div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-primary font-headline tracking-tighter mb-4 leading-none">Experience <br/>History.</h1>
                <p className="text-xl text-on-surface-variant font-medium leading-relaxed">Manage your recent farm-fresh pickups and pending deliveries.</p>
              </div>
              <div className="inline-flex bg-surface-container p-1.5 rounded-xl self-start md:self-end">
                <button className="px-8 py-3 rounded-xl bg-surface-container-lowest shadow-[0px_4px_16px_rgba(28,28,24,0.06)] text-primary font-extrabold text-base transition-all">Full Log</button>
                <button className="px-8 py-3 rounded-xl text-on-surface-variant hover:text-primary font-bold text-base transition-all">Tracking</button>
              </div>
            </div>

            {/* Ambient Order Cards */}
            <div className="space-y-10">
              {/* Order Card: Sharma Store */}
              <div className="bg-surface-container-lowest rounded-[12px] p-8 shadow-[0px_12px_32px_rgba(28,28,24,0.06)] transition-all hover:shadow-[0px_16px_48px_rgba(28,28,24,0.1)] group border-none">
                <div className="flex flex-col lg:flex-row gap-10">
                  <div className="lg:w-[280px]">
                    <h3 className="text-2xl font-extrabold text-on-surface font-headline mb-2 tracking-tight">Sharma General Store</h3>
                    <p className="text-base text-outline-variant font-bold mb-6 font-headline tracking-wide">Placed Oct 24, 2024</p>
                    <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-secondary-container/10 text-on-secondary-container text-xs font-extrabold uppercase tracking-widest border border-secondary-container/20">
                      <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                      Delivered
                    </span>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-4 bg-surface-container/50 p-4 rounded-xl">
                        <div className="w-14 h-14 rounded-lg bg-white flex items-center justify-center text-3xl shadow-sm">🍅</div>
                        <div>
                          <p className="text-base font-extrabold text-on-surface">Farm Tomatoes</p>
                          <p className="text-xs font-bold text-outline-variant uppercase">1 kg bundle</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 bg-surface-container/50 p-4 rounded-xl">
                        <div className="w-14 h-14 rounded-lg bg-white flex items-center justify-center text-3xl shadow-sm">🥦</div>
                        <div>
                          <p className="text-base font-extrabold text-on-surface">Organic Broccoli</p>
                          <p className="text-xs font-bold text-outline-variant uppercase">Single head</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-[240px] flex flex-col justify-between items-end lg:pl-10 lg:border-l-2 border-surface-container/50 py-2">
                    <div className="text-right">
                      <p className="text-[10px] text-outline-variant font-extrabold uppercase tracking-[0.2em] mb-1">Impact Total</p>
                      <p className="text-3xl font-extrabold text-primary font-headline tracking-tighter leading-tight">Rs. 485.00</p>
                    </div>
                    <div className="flex flex-col gap-4 w-full mt-10">
                      <button className="w-full bg-gradient-to-br from-primary to-primary-container text-white py-4 rounded-xl font-extrabold text-base shadow-[0px_12px_24px_rgba(0,81,41,0.2)] active:scale-95 transition-all">Re-order Basket</button>
                      <Link className="text-center text-outline font-extrabold text-xs uppercase tracking-widest hover:text-primary transition-all underline underline-offset-8 decoration-primary/20" to="#">View Details</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Card: Living Progress */}
              <div className="bg-surface-container-lowest rounded-[12px] p-8 shadow-[0px_12px_32px_rgba(28,28,24,0.06)] relative overflow-hidden group border-none">
                <div className="absolute top-0 left-0 w-2 h-full bg-secondary-fixed"></div>
                <div className="flex flex-col lg:flex-row gap-10 ml-2">
                  <div className="lg:w-[280px]">
                    <h3 className="text-2xl font-extrabold text-on-surface font-headline mb-2 tracking-tight">Modern Dairy Farm</h3>
                    <p className="text-base text-outline-variant font-bold mb-6 font-headline tracking-wide">Today, 10:30 AM</p>
                    <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-extrabold uppercase tracking-widest">
                      <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                      In Transit
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 bg-surface-container/50 p-6 rounded-2xl mb-6">
                      <div className="w-16 h-16 rounded-xl bg-emerald-50 flex items-center justify-center text-4xl shadow-sm">🥛</div>
                      <div>
                        <p className="text-lg font-extrabold text-on-surface">Cow Ghee (Organic)</p>
                        <p className="text-xs font-bold text-outline-variant uppercase">500ml Glass Jar</p>
                      </div>
                    </div>
                    <div className="p-4 bg-secondary-fixed/10 rounded-xl inline-flex items-center gap-3 w-full border border-secondary-fixed/20 shadow-sm">
                       <div className="w-2.5 h-2.5 rounded-full bg-secondary-fixed animate-ping"></div>
                       <span className="text-sm font-extrabold text-on-secondary-fixed font-headline uppercase tracking-wide">Arriving in 15 mins • Out with Nitish</span>
                    </div>
                  </div>
                  <div className="lg:w-[240px] flex flex-col justify-between items-end lg:pl-10 lg:border-l-2 border-surface-container/50 py-2">
                    <div className="text-right">
                      <p className="text-[10px] text-outline-variant font-extrabold uppercase tracking-[0.2em] mb-1">Impact Total</p>
                      <p className="text-3xl font-extrabold text-primary font-headline tracking-tighter leading-tight">Rs. 192.00</p>
                    </div>
                    <div className="flex flex-col gap-4 w-full mt-10">
                      <button className="w-full bg-surface-container text-on-surface-variant font-extrabold py-4 rounded-xl text-base hover:bg-surface transition-all shadow-sm">Track Progress</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Orders;
