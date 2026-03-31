import { Link } from 'react-router-dom';

interface NavbarProps {
  showSearch?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ showSearch = true }) => {
  return (
    <nav className="fixed top-0 w-full h-[72px] z-50 bg-white backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-6 h-full max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <button className="p-2 -ml-2 active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-primary">menu</span>
          </button>
          <Link to="/" className="text-2xl font-bold text-emerald-900 tracking-tight font-headline">
            BR Fresh
          </Link>
        </div>
        
        {showSearch && (
          <div className="hidden md:flex items-center bg-surface-container px-4 py-2 rounded-full w-80 group focus-within:ring-2 ring-primary/20 transition-all">
            <span className="material-symbols-outlined text-outline text-lg mr-2">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-sm w-full p-0" placeholder="Search for groceries..." type="text" />
          </div>
        )}

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6 font-headline font-medium mr-4">
            <Link className="text-neutral-600 hover:bg-neutral-50 transition-colors" to="/">Home</Link>
            <Link className="text-neutral-600 hover:bg-neutral-50 transition-colors" to="/orders">Orders</Link>
          </div>
          <button className="p-2 hover:bg-neutral-50 rounded-full relative">
            <span className="material-symbols-outlined text-neutral-600">shopping_cart</span>
            <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">2</span>
          </button>
          <button className="px-5 py-2 bg-primary text-white font-headline font-bold rounded-full text-sm active:scale-95 transition-transform">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
