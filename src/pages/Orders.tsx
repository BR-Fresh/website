import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';

const Orders = () => {
  const navigate = useNavigate();
  const { cart, totalItems, removeFromCart, addToCart } = useCart();
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const gst = Math.round(subtotal * 0.05);
  const deliveryFee = 0; // FREE as per screenshot
  const grandTotal = subtotal + gst + deliveryFee;

  return (
    <div className="bg-[#F8F9F8] font-body text-on-surface antialiased min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-[100px] pb-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="mb-12">
            <h1 className="text-[44px] font-extrabold text-[#004D2C] font-headline tracking-tight leading-tight">Your cart</h1>
            <p className="text-lg font-bold text-outline-variant">({totalItems} items)</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Column: Items and Store Info */}
            <div className="flex-grow lg:w-[65%]">
              <div className="bg-[#F3F5F2] rounded-[24px] p-8 border border-surface-container/30">
                <div className="flex items-center gap-3 mb-8">
                  <span className="material-symbols-outlined text-[#004D2C] text-[32px]">storefront</span>
                  <h2 className="text-xl font-extrabold font-headline text-on-surface">Sharma General Store</h2>
                </div>

                <div className="space-y-4 mb-10">
                  {cart.map((item) => (
                    <div key={item.id} className="bg-white rounded-[16px] p-6 flex flex-col sm:flex-row items-center gap-6 shadow-sm group">
                      <div className="w-[100px] h-[100px] rounded-xl bg-surface-container flex-shrink-0 relative overflow-hidden">
                        <img 
                          src={item.image || "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=200"} 
                          className="w-full h-full object-contain" 
                          alt={item.name} 
                        />
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-extrabold font-headline text-[#004D2C] mb-0.5">{item.name}</h3>
                            <p className="text-sm font-bold text-outline-variant">{item.unit || '500ml'}</p>
                          </div>
                          <div className="text-right">
                             <p className="text-xl font-extrabold font-headline text-[#004D2C]">Rs.{item.price * item.qty}</p>
                             <p className="text-xs font-bold text-outline-variant line-through opacity-70">Rs.{item.price * item.qty + 10}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 mt-6">
                          <div className="flex items-center bg-[#E8EAE7] rounded-xl overflow-hidden h-[44px]">
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="w-12 h-full flex items-center justify-center text-on-surface-variant hover:bg-black/5 transition-colors"
                            >
                              <span className="material-symbols-outlined text-[20px]">remove</span>
                            </button>
                            <span className="w-10 text-center font-extrabold font-headline text-on-surface">{item.qty}</span>
                            <button 
                              onClick={() => addToCart(item)}
                              className="w-12 h-full flex items-center justify-center text-on-surface-variant hover:bg-black/5 transition-colors"
                            >
                              <span className="material-symbols-outlined text-[20px]">add</span>
                            </button>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="w-[44px] h-[44px] rounded-xl bg-transparent flex items-center justify-center border border-[#E8EAE7] text-outline-variant hover:text-error transition-colors"
                          >
                            <span className="material-symbols-outlined text-[22px]">delete</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {cart.length === 0 && (
                    <div className="bg-white rounded-[16px] p-12 text-center">
                       <p className="text-outline-variant font-bold">No items in your cart. <Link to="/" className="text-primary hover:underline">Shop now</Link></p>
                    </div>
                  )}
                </div>

                {/* Promo Code Area */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="text" 
                    placeholder="Enter promo code"
                    className="flex-grow bg-white rounded-xl px-6 py-4 border border-surface-container/50 focus:outline-none focus:border-primary/30 font-bold transition-all placeholder:text-outline-variant/60"
                  />
                  <button className="bg-[#004D2C] text-white px-10 py-4 rounded-xl font-headline font-extrabold tracking-tight hover:opacity-90 active:scale-95 transition-all">Apply</button>
                </div>
              </div>
              
              <Link to="/" className="inline-flex items-center gap-2 mt-8 text-[#004D2C] font-extrabold hover:translate-x-[-4px] transition-transform">
                <span className="material-symbols-outlined">arrow_back</span> Continue shopping
              </Link>
            </div>

            {/* Right Column: Order Summary */}
            <div className="lg:w-[350px]">
              <div className="bg-white rounded-[32px] p-8 shadow-[0px_48px_96px_rgba(0,0,0,0.04)] border border-surface-container/20 sticky top-[120px]">
                <h2 className="text-2xl font-extrabold font-headline text-[#004D2C] mb-8">Order summary</h2>
                
                <div className="space-y-5 mb-8">
                  <div className="flex justify-between items-center text-sm font-bold">
                    <span className="text-outline">Subtotal</span>
                    <span className="text-on-surface font-extrabold">Rs.{subtotal}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-bold">
                    <span className="text-outline">Delivery fee</span>
                    <span className="bg-[#A0D48C] text-[#004D2C] px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest">FREE</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-bold">
                    <span className="text-outline">GST (5%)</span>
                    <span className="text-on-surface font-extrabold">Rs.{gst}</span>
                  </div>
                </div>

                <div className="bg-[#E6F3E6] rounded-xl p-4 mb-10 flex justify-between items-center border border-primary/10">
                   <span className="text-[11px] font-black uppercase text-[#004D2C] tracking-widest">Savings</span>
                   <span className="text-[11px] font-bold text-[#004D2C]">You save Rs.20 on delivery</span>
                </div>

                <div className="flex justify-between items-end mb-10">
                  <span className="text-lg font-extrabold font-headline text-on-surface">Grand total</span>
                  <span className="text-2xl font-extrabold font-headline text-[#004D2C]">Rs.{grandTotal}</span>
                </div>

                <div className="space-y-4 mb-10">
                  {/* Delivery Address Card */}
                  <div className="bg-[#F8F9F8] border border-surface-container rounded-2xl p-5 flex items-start gap-4">
                    <div className="bg-[#E8EAE7] p-2 rounded-xl">
                       <span className="material-symbols-outlined text-outline text-[20px]">location_on</span>
                    </div>
                    <div className="flex-grow">
                       <div className="flex justify-between items-center mb-0.5">
                          <span className="text-[10px] font-black uppercase text-outline tracking-wider">Delivery Address</span>
                          <button className="text-[10px] font-black uppercase text-primary hover:underline">Change</button>
                       </div>
                       <p className="text-[13px] font-extrabold text-on-surface leading-tight">Sector 21, Chandigarh</p>
                    </div>
                  </div>

                  {/* Payment Method Card */}
                  <div className="bg-[#F8F9F8] border border-surface-container rounded-2xl p-5 flex items-start gap-4">
                    <div className="bg-[#E8EAE7] p-2 rounded-xl">
                       <span className="material-symbols-outlined text-outline text-[20px]">payments</span>
                    </div>
                    <div className="flex-grow">
                       <div className="flex justify-between items-center mb-0.5">
                          <span className="text-[10px] font-black uppercase text-outline tracking-wider">Payment Method</span>
                          <button className="text-[10px] font-black uppercase text-primary hover:underline">Change</button>
                       </div>
                       <p className="text-[13px] font-extrabold text-on-surface leading-tight">Cash on Delivery (COD)</p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => navigate('/success')}
                  className="w-full bg-[#004D2C] text-white py-5 rounded-2xl font-headline font-extrabold text-xl shadow-lg shadow-primary/20 hover:opacity-90 active:scale-[0.98] transition-all flex justify-between items-center px-8"
                >
                  <span>Place order</span>
                  <span className="text-sm opacity-80 decoration-white/30 decoration-2">Rs.{grandTotal}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Orders;
