import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Orders = () => {
  return (
    <div className="bg-background font-body text-on-background antialiased min-h-screen">
      <Navbar showSearch={true} />

      <main className="pt-[104px] pb-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">
          {/* Left Sidebar Navigation */}
          <aside className="w-full lg:w-[240px] shrink-0">
            <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm space-y-1">
              <div className="px-4 py-3 mb-4">
                <p className="text-xs font-bold text-outline uppercase tracking-widest">My Account</p>
              </div>
              <Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors" to="#">
                <span className="material-symbols-outlined text-xl">person</span>
                <span className="font-medium">Profile</span>
              </Link>
              <Link className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary-container/20 text-primary font-bold" to="/orders">
                <span className="material-symbols-outlined text-xl" style={{fontVariationSettings: "'FILL' 1"}}>package</span>
                <span className="font-medium">My Orders</span>
              </Link>
              <Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors" to="#">
                <span className="material-symbols-outlined text-xl">location_on</span>
                <span className="font-medium">My Addresses</span>
              </Link>
              <div className="h-px bg-surface-container-highest my-4 mx-4"></div>
              <Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-error hover:bg-error-container/20 transition-colors" to="#">
                <span className="material-symbols-outlined text-xl">logout</span>
                <span className="font-medium">Logout</span>
              </Link>
            </div>
          </aside>

          {/* Main Order Canvas */}
          <section className="flex-1">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <h1 className="text-4xl font-extrabold text-primary font-headline tracking-tight mb-2">My orders</h1>
                <p className="text-on-surface-variant font-body">Manage and track your recent fresh produce deliveries</p>
              </div>
              <div className="inline-flex bg-surface-container p-1 rounded-xl">
                <button className="px-6 py-2 rounded-lg bg-surface-container-lowest shadow-sm text-primary font-bold text-sm">All</button>
                <button className="px-6 py-2 rounded-lg text-on-surface-variant hover:text-primary font-medium text-sm transition-colors">Active</button>
                <button className="px-6 py-2 rounded-lg text-on-surface-variant hover:text-primary font-medium text-sm transition-colors">Delivered</button>
              </div>
            </div>

            {/* Order List */}
            <div className="space-y-6">
              {/* Order Card 1 (Delivered) */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-transparent hover:border-outline-variant/30 transition-all">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-1/4">
                    <h3 className="text-lg font-bold text-on-surface font-headline mb-1">Sharma General Store</h3>
                    <p className="text-sm text-outline mb-4">Ordered on Oct 24, 2024</p>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/20 text-on-secondary-container text-xs font-bold">
                      <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                      Delivered
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-3 bg-surface-container p-2 pr-4 rounded-xl">
                        <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center overflow-hidden font-bold text-sm">
                          🍅
                        </div>
                        <div>
                          <p className="text-xs font-bold text-on-surface">Farm Tomatoes</p>
                          <p className="text-[10px] text-outline">1 kg</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 bg-surface-container p-2 pr-4 rounded-xl">
                        <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center overflow-hidden font-bold text-sm">
                          🥛
                        </div>
                        <div>
                          <p className="text-xs font-bold text-on-surface">Baby Spinach</p>
                          <p className="text-[10px] text-outline">250g</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/5 flex flex-col justify-between items-end border-l-0 lg:border-l border-surface-container lg:pl-6">
                    <div className="text-right">
                      <p className="text-xs text-outline font-medium uppercase tracking-tighter">Total Amount</p>
                      <p className="text-xl font-extrabold text-primary font-headline font-headline">Rs. 485.00</p>
                    </div>
                    <div className="flex flex-col gap-3 w-full mt-6">
                      <button className="w-full bg-gradient-to-br from-primary to-primary-container text-white py-2.5 rounded-lg font-bold text-sm shadow-md active:scale-95 transition-all">Reorder</button>
                      <Link className="text-center text-primary text-xs font-bold hover:underline" to="#">View details</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Card 2 (In Progress) */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border-l-4 border-secondary-fixed">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-1/4">
                    <h3 className="text-lg font-bold text-on-surface font-headline mb-1">Modern Dairy Farm</h3>
                    <p className="text-sm text-outline mb-4">Ordered Today, 10:30 AM</p>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold">
                      <span className="material-symbols-outlined text-sm">local_shipping</span>
                      In progress
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-3 bg-surface-container p-2 pr-4 rounded-xl">
                        <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center font-bold">🥛</div>
                        <div>
                          <p className="text-xs font-bold text-on-surface">Organic Milk</p>
                          <p className="text-[10px] text-outline">1 Litre</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-surface-container-low rounded-lg border border-outline-variant/20 inline-flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></div>
                       <span className="text-xs font-medium text-on-surface-variant">Out for delivery • Expected in 15 mins</span>
                    </div>
                  </div>
                  <div className="lg:w-1/5 flex flex-col justify-between items-end lg:border-l border-surface-container lg:pl-6">
                    <div className="text-right">
                      <p className="text-xs text-outline font-medium uppercase tracking-tighter">Total Amount</p>
                      <p className="text-xl font-extrabold text-primary font-headline font-headline">Rs. 192.00</p>
                    </div>
                    <div className="flex flex-col gap-3 w-full mt-6">
                      <button className="w-full border-2 border-primary text-primary py-2.5 rounded-lg font-bold text-sm hover:bg-surface-container transition-all">Track Order</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Orders;
