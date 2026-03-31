import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const AuthModal = () => {
  const { isAuthModalOpen, closeAuthModal, login } = useAuth();
  const [tab, setTab] = useState<'login' | 'signup'>('login');

  if (!isAuthModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-on-surface/40 backdrop-blur-[6px]"
        onClick={closeAuthModal}
      ></div>

      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-white rounded-[32px] overflow-hidden shadow-[0px_48px_96px_rgba(28,28,24,0.16)] border border-surface-container/50 animate-bounce-subtle">
        
        {/* Close Button */}
        <button 
          onClick={closeAuthModal}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-outline-variant hover:bg-surface-container hover:text-on-surface transition-all active:scale-95 z-10"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Brand Area */}
        <div className="bg-[#BBD0A8] p-10 text-center relative">
           <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[120px]">eco</span>
           </div>
           <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-primary/10 rotate-3">
              <span className="material-symbols-outlined text-[42px] text-primary">login</span>
           </div>
           <h2 className="text-3xl font-extrabold font-headline text-on-surface tracking-tighter">Welcome to BR Fresh</h2>
           <p className="text-sm font-bold text-on-surface-variant opacity-80 mt-1 uppercase tracking-widest leading-none">Fresh picked quality, daily.</p>
        </div>

        <div className="p-10">
          {/* Tabs */}
          <div className="flex bg-surface-container-lowest border border-surface-container rounded-2xl p-1.5 mb-8">
            <button 
              onClick={() => setTab('login')}
              className={`flex-grow h-12 rounded-xl font-headline font-extrabold text-sm transition-all ${tab === 'login' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-outline-variant hover:bg-surface-container-low'}`}
            >
              Login
            </button>
            <button 
              onClick={() => setTab('signup')}
              className={`flex-grow h-12 rounded-xl font-headline font-extrabold text-sm transition-all ${tab === 'signup' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-outline-variant hover:bg-surface-container-low'}`}
            >
              Sign Up
            </button>
          </div>

          {/* Forms */}
          <div className="space-y-6">
            {tab === 'login' ? (
              <>
                <div className="space-y-4">
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant text-[20px] group-focus-within:text-primary transition-colors">phone_iphone</span>
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full h-14 bg-surface-container-lowest border border-surface-container rounded-2xl pl-12 pr-6 font-bold text-on-surface focus:outline-none focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all text-sm placeholder:text-outline-variant/60 shadow-sm"
                    />
                  </div>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant text-[20px] group-focus-within:text-primary transition-colors">lock</span>
                    <input 
                      type="password" 
                      placeholder="Password" 
                      className="w-full h-14 bg-surface-container-lowest border border-surface-container rounded-2xl pl-12 pr-6 font-bold text-on-surface focus:outline-none focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all text-sm placeholder:text-outline-variant/60 shadow-sm"
                    />
                  </div>
                </div>
                <button className="text-[11px] font-black uppercase text-primary hover:underline tracking-widest">Forgot Password?</button>
              </>
            ) : (
              <>
                <div className="space-y-4">
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant text-[20px] group-focus-within:text-primary transition-colors">person</span>
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      className="w-full h-14 bg-surface-container-lowest border border-surface-container rounded-2xl pl-12 pr-6 font-bold text-on-surface focus:outline-none focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all text-sm placeholder:text-outline-variant/60 shadow-sm"
                    />
                  </div>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant text-[20px] group-focus-within:text-primary transition-colors">phone_iphone</span>
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full h-14 bg-surface-container-lowest border border-surface-container rounded-2xl pl-12 pr-6 font-bold text-on-surface focus:outline-none focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all text-sm placeholder:text-outline-variant/60 shadow-sm"
                    />
                  </div>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant text-[20px] group-focus-within:text-primary transition-colors">lock</span>
                    <input 
                      type="password" 
                      placeholder="Create Password" 
                      className="w-full h-14 bg-surface-container-lowest border border-surface-container rounded-2xl pl-12 pr-6 font-bold text-on-surface focus:outline-none focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all text-sm placeholder:text-outline-variant/60 shadow-sm"
                    />
                  </div>
                </div>
              </>
            )}

            <button 
              onClick={login}
              className="w-full h-16 bg-primary text-white rounded-2xl font-headline font-extrabold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
            >
              {tab === 'login' ? 'Proceed to Freshness' : 'Start Harvesting Quality'}
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>

            <div className="relative py-4">
               <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-surface-container/50"></div>
               </div>
               <div className="relative flex justify-center text-[10px] font-black uppercase text-outline-variant tracking-widest bg-white px-4">
                  Or continue with
               </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <button className="flex items-center justify-center gap-2 h-14 bg-white border border-surface-container-high rounded-2xl font-bold text-sm hover:bg-surface-container transition-all active:scale-95 shadow-sm">
                  <img src="https://www.google.com/favicon.ico" className="w-4 h-4 grayscale group-hover:grayscale-0 transition-all opacity-60" alt="Google" />
                  Google
               </button>
               <button className="flex items-center justify-center gap-2 h-14 bg-white border border-surface-container-high rounded-2xl font-bold text-sm hover:bg-surface-container transition-all active:scale-95 shadow-sm">
                  <img src="https://www.facebook.com/favicon.ico" className="w-4 h-4 grayscale group-hover:grayscale-0 transition-all opacity-60" alt="Facebook" />
                  Facebook
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
