import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Success = () => {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<'loading' | 'success'>('loading');

  useEffect(() => {
    // Phase 1: Loading (Processing Payment)
    const loadTimer = setTimeout(() => {
      setPhase('success');
    }, 3000);

    // Phase 2: Redirect to Tracking after Success
    const redirectTimer = setTimeout(() => {
      if (phase === 'success') {
        navigate('/track');
      }
    }, 5500); // 3s loading + 2.5s success view

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(redirectTimer);
    };
  }, [phase, navigate]);

  if (phase === 'loading') {
    return (
      <div className="bg-[#F8F9F8] font-body text-on-surface antialiased min-h-screen flex flex-col items-center justify-center">
         <div className="text-center">
            <div className="w-24 h-24 border-4 border-surface-container border-t-primary rounded-full animate-spin mx-auto mb-8"></div>
            <h2 className="text-2xl font-extrabold font-headline text-[#004D2C] tracking-tight">Processing Payment...</h2>
            <p className="text-sm font-bold text-outline-variant mt-2">Almost there! Harvesting your fresh picks.</p>
         </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F9F8] font-body text-on-surface antialiased min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center pt-[116px] pb-20">
        <div className="max-w-md w-full px-6 text-center">
           <div className="relative mb-10 inline-block">
              <div className="w-32 h-32 bg-[#E6F3E6] rounded-full flex items-center justify-center mx-auto animate-bounce-subtle">
                 <span className="material-symbols-outlined text-[64px] text-[#004D2C]">check_circle</span>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white p-3 rounded-2xl shadow-xl animate-pulse-subtle">
                 <span className="material-symbols-outlined text-primary text-[32px]">payments</span>
              </div>
           </div>

           <h1 className="text-4xl font-extrabold font-headline text-[#004D2C] mb-4 tracking-tighter">Payment Confirmed!</h1>
           <p className="text-outline-variant font-bold mb-10 px-4">Your order #BR-774291 is confirmed. Redirecting you to tracking...</p>

           <div className="bg-white rounded-3xl p-8 border border-surface-container/50 shadow-[0px_24px_48px_rgba(0,0,0,0.04)] mb-10 text-left">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-surface-container/50">
                 <span className="text-[10px] font-black uppercase text-outline tracking-widest">Status</span>
                 <span className="text-sm font-extrabold text-[#004D2C]">Preparing Order</span>
              </div>
              <div className="space-y-4">
                 <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px] animate-pulse">local_shipping</span>
                    <p className="text-xs font-bold text-on-surface">Redirecting to Live Track...</p>
                 </div>
              </div>
           </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Success;
