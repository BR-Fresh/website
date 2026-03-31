import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const TrackOrder = () => {
  const { cart } = useCart();

  const STEPS = [
    { title: 'Order Placed', status: 'completed', time: '12:30 PM', icon: 'shopping_bag' },
    { title: 'Being Prepared', status: 'active', time: '12:35 PM', icon: 'restaurant_menu' },
    { title: 'On the Way', status: 'pending', time: '--:--', icon: 'delivery_dining' },
    { title: 'Delivered', status: 'pending', time: '--:--', icon: 'home' }
  ];

  return (
    <div className="bg-[#F8F9F8] font-body text-on-surface antialiased min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-[116px] pb-20 px-6">
        <div className="max-w-5xl mx-auto py-12">
           <div className="mb-6">
              <Link to="/" className="inline-flex items-center gap-2 text-[#004D2C] font-extrabold hover:translate-x-[-4px] transition-transform">
                <span className="material-symbols-outlined">arrow_back</span> Back to store
              </Link>
           </div>
           
           <div className="flex flex-col lg:flex-row items-start gap-12">
              {/* Left Column: Tracking Visualization */}
              <div className="flex-grow lg:w-[60%]">
                 <div className="bg-white rounded-[32px] p-10 shadow-[0px_48px_96px_rgba(0,0,0,0.04)] border border-surface-container/50 overflow-hidden relative group">
                    <div className="flex justify-between items-center mb-12">
                       <div>
                          <h1 className="text-3xl font-extrabold font-headline text-[#004D2C] leading-none mb-2">Tracking Your Freshness</h1>
                          <p className="text-xs font-bold text-outline-variant uppercase tracking-widest">Order ID: #BR-774291</p>
                       </div>
                       <div className="bg-[#E6F3E6] text-[#004D2C] px-6 py-2.5 rounded-2xl text-sm font-black uppercase tracking-widest animate-pulse border border-primary/20 shadow-sm">Preparing</div>
                    </div>

                    <div className="space-y-10 relative">
                       {/* Connection Line */}
                       <div className="absolute left-6 top-8 bottom-8 w-1 bg-surface-container-high rounded-full"></div>
                       <div className="absolute left-6 top-8 h-[30%] w-1 bg-primary rounded-full shadow-[0px_0px_12px_rgba(0,0,0,0.1)] transition-all"></div>

                       {STEPS.map((step, i) => (
                         <div key={i} className={`flex items-start gap-8 relative z-10 transition-all ${step.status === 'pending' ? 'opacity-40 grayscale' : 'opacity-100'}`}>
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-transform ${step.status === 'completed' ? 'bg-primary text-white scale-110 shadow-primary/20' : step.status === 'active' ? 'bg-white border-2 border-primary text-primary animate-bounce-subtle' : 'bg-surface-container text-outline-variant'}`}>
                               <span className="material-symbols-outlined text-[24px]">{step.icon}</span>
                            </div>
                            <div className="flex-grow mt-1">
                               <div className="flex justify-between items-center">
                                  <h3 className={`text-xl font-headline font-extrabold ${step.status === 'completed' || step.status === 'active' ? 'text-on-surface' : 'text-outline-variant'}`}>{step.title}</h3>
                                  <span className="text-xs font-bold text-outline uppercase whitespace-nowrap">{step.time}</span>
                               </div>
                               <p className="text-sm font-bold text-outline-variant mt-1">{step.status === 'completed' ? 'Everything looks fresh and ready!' : step.status === 'active' ? 'Our harvesters are picking the best for you.' : 'Coming to you shortly.'}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>

                 {/* Delivery Rep Info Overlay */}
                 <div className="mt-8 bg-[#004D2C] rounded-3xl p-8 text-white flex items-center justify-between shadow-xl shadow-primary/20 border border-white/10 group overflow-hidden relative">
                    <div className="flex items-center gap-6 relative z-10">
                       <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                          <span className="material-symbols-outlined text-white text-[32px]">directions_run</span>
                       </div>
                       <div>
                          <h4 className="text-xl font-extrabold font-headline leading-tight">Rahul Sharma</h4>
                          <p className="text-xs font-bold text-white/60 uppercase tracking-widest mt-1">Your Delivery Partner</p>
                       </div>
                    </div>
                    <div className="flex gap-4 relative z-10">
                       <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 px-6 py-4 rounded-xl border border-white/20 transition-all active:scale-95 flex items-center gap-2 font-bold text-sm shadow-sm hover:shadow-lg"><span className="material-symbols-outlined text-lg">call</span> Call</button>
                       <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 px-6 py-4 rounded-xl border border-white/20 transition-all active:scale-95 flex items-center gap-2 font-bold text-sm shadow-sm hover:shadow-lg"><span className="material-symbols-outlined text-lg">chat_bubble</span> Chat</button>
                    </div>
                 </div>
              </div>

              {/* Right Column: Order Details Summary */}
              <div className="lg:w-[400px]">
                 <div className="bg-white rounded-[32px] p-10 shadow-[0px_32px_64px_rgba(0,0,0,0.06)] border border-surface-container/50 sticky top-[120px]">
                    <h3 className="text-2xl font-extrabold font-headline text-[#004D2C] mb-8 pb-4 border-b-2 border-primary/10">Order Summary</h3>
                    
                    <div className="space-y-6 mb-10 max-h-[300px] overflow-y-auto pr-4 no-scrollbar">
                       {Object.keys(cart).length > 0 ? cart.map((item) => (
                         <div key={item.id} className="flex justify-between items-center gap-4 group">
                            <div className="flex items-center gap-4 flex-grow truncate">
                               <div className="w-12 h-12 rounded-xl bg-surface-container flex-shrink-0 flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform">
                                  {item.image ? <img src={item.image} className="w-full h-full object-contain" alt={item.name} /> : '📦'}
                               </div>
                               <div className="truncate">
                                  <h4 className="text-sm font-bold text-on-surface truncate leading-tight group-hover:text-primary transition-colors">{item.name}</h4>
                                  <p className="text-[10px] font-black text-outline-variant uppercase tracking-widest">{item.qty} × {item.unit || 'Standard'}</p>
                               </div>
                            </div>
                            <span className="text-sm font-extrabold text-[#004D2C] font-headline whitespace-nowrap">Rs.{item.price * item.qty}</span>
                         </div>
                       )) : <p className="text-center py-8 text-outline-variant font-bold">No active items in cart.</p>}
                    </div>

                    <div className="pt-8 border-t-2 border-primary/5 space-y-4 mb-10">
                       <div className="flex justify-between items-end">
                          <span className="text-xs font-black uppercase text-outline tracking-widest leading-none">Total Paid</span>
                          <span className="text-3xl font-extrabold font-headline text-primary leading-none">Rs.542</span>
                       </div>
                       <p className="text-[10px] text-outline-variant font-black text-center uppercase tracking-widest px-4 py-2 bg-surface-container-low rounded-lg shadow-inner">Payment Successful via COD</p>
                    </div>

                    <div className="bg-[#F8F9F8] border border-surface-container/50 rounded-[24px] p-6 space-y-2 opacity-80 group hover:opacity-100 transition-all">
                       <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-outline-variant text-[20px]">flag</span>
                          <p className="text-xs font-black text-outline uppercase tracking-widest">Delivery Address</p>
                       </div>
                       <p className="text-sm font-extrabold text-on-surface leading-tight px-8">Sector 21, Chandigarh, India</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TrackOrder;
