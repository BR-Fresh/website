import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import logo from '../assets/icon transparent.png';
import LocationSelector from './LocationSelector';

const Navbar = () => {
  const { totalItems } = useCart();

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
          <button className="hidden md:block bg-primary text-white px-6 py-2 rounded-xl text-sm font-extrabold  shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95 tracking-tight">
            Login/Signup
          </button>
          <button className="relative flex items-center text-outline hover:text-primary transition-colors group">
            <span className="material-symbols-outlined text-[28px]">shopping_cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[10px] font-extrabold w-5 h-5 flex items-center justify-center rounded-lg shadow-lg ring-2 ring-white animate-bounce-subtle">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
