import { Link } from 'react-router-dom';
import logo from '../assets/icon transparent.png';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full h-[72px] z-50 bg-white shadow-sm border-none">
      <div className="flex justify-between items-center px-6 w-full max-w-7xl mx-auto h-full">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center h-full group">
          <img src={logo} alt="BR Fresh Logo" className="h-[116px] w-auto object-contain transition-transform group-active:scale-95" />
        </Link>

        {/* Center: Location Selector */}
        <div className="hidden md:flex items-center bg-surface-container-low px-4 py-2 rounded-full cursor-pointer hover:bg-surface-container transition-colors group">
          <span className="material-symbols-outlined text-primary mr-2">location_on</span>
          <span className="text-sm font-medium text-on-surface">Delivering to: <span className="text-primary">Sector 21, Chandigarh</span></span>
          <span className="material-symbols-outlined text-outline ml-1 group-hover:translate-y-0.5 transition-transform">expand_more</span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-6">
          <button className="flex items-center text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="hidden md:block px-5 py-2 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all active:scale-95">
            Login/Signup
          </button>
          <button className="relative flex items-center text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">0</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
