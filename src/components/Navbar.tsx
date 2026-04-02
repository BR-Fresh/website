import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/icon transparent.png';
import LocationSelector from './LocationSelector';

const Navbar = () => {
  const { totalItems } = useCart();
  const { openAuthModal, user, logout } = useAuth();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full h-[72px] z-50 bg-white shadow-sm border-none">
      <div className="flex justify-between items-center px-6 w-full max-w-7xl mx-auto h-full">
        {/* Left: Logo with signature overflow */}
        <Link to="/" className="flex items-center h-full group">
          <img src={logo} alt="BR Fresh Logo" className="h-[116px] w-auto object-contain transition-transform group-active:scale-95 translate-y-2" />
        </Link>

        {/* Center: Material 3 Inspired Location Selector */}
        <LocationSelector />

        {/* Right: Actions */}
        <div className="flex items-center gap-6">
          <button className="flex items-center text-outline hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[24px]">search</span>
          </button>
          
          {user ? (
            <div className="relative">
              <button 
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary border border-surface-container shadow-sm hover:bg-surface-container transition-all active:scale-95 group overflow-hidden"
              >
                <span className="material-symbols-outlined text-[24px] group-hover:scale-110 transition-transform">person</span>
              </button>
              
              {isProfileMenuOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsProfileMenuOpen(false)}
                  ></div>
                  <div className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-[0px_24px_48px_rgba(0,0,0,0.12)] border border-surface-container py-2 z-50 animate-fade-in">
                    <div className="px-4 py-3 border-b border-surface-container mb-1">
                       <p className="text-[10px] font-black uppercase text-outline tracking-widest leading-none mb-1">Logged in as</p>
                       <p className="text-sm font-extrabold text-on-surface truncate">{user.name}</p>
                    </div>
                    <Link 
                      to="/profile"
                      onClick={() => setIsProfileMenuOpen(false)}
                      className="w-full px-4 py-2.5 text-left text-sm font-bold text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all flex items-center gap-3"
                    >
                       <span className="material-symbols-outlined text-[20px]">account_circle</span> Profile
                    </Link>
                    <div className="border-t border-surface-container mt-1 pt-1">
                      <button 
                        onClick={() => { logout(); setIsProfileMenuOpen(false); }}
                        className="w-full px-4 py-2.5 text-left text-sm font-bold text-error hover:bg-error/5 transition-colors flex items-center gap-3"
                      >
                         <span className="material-symbols-outlined text-[20px]">logout</span> Logout
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            <button 
              onClick={openAuthModal}
              className="hidden md:block bg-primary text-white px-6 py-2 rounded-xl text-sm font-extrabold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95 tracking-tight"
            >
              Login/Signup
            </button>
          )}
          
          <Link 
            to="/orders"
            className="relative flex items-center text-outline hover:text-primary transition-colors group"
          >
            <span className="material-symbols-outlined text-[28px]">shopping_cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[10px] font-extrabold w-5 h-5 flex items-center justify-center rounded-lg shadow-lg ring-2 ring-white animate-bounce-subtle">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
