import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

const Store = () => {
  return (
    <div className="bg-surface font-body text-on-surface antialiased min-h-screen">
      <Navbar />

      <main className="pt-[72px]">
        {/* Store Hero Banner - Lush Photography */}
        <section className="relative w-full h-[400px] overflow-hidden">
          <img alt="Sharma General Store storefront" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEuiyOZXApEvgTWewLjllqS6lhgwuMMME8Wum32KBbbAtsH2nylab0snepu47CX_I8TKsegq1EL6wjx1Xfgg_BeRXV0M_tAabC0CyeDfN9u_FS6WlleUeuF0jP5Se_X4fukZRHstlJD-pvuPB63u00YapUx_TPPbQpKMIru382aejaRdacP7hWR6xQmzXs5fnkiGtDDaHBKm1LKzain3gXeBjpBGr9URbOTY9pntqWjM1jIBfBpbQmhRF-2_9G7Dfj8gvTnbrmqALF" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
              <div className="text-white">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">Market Certified</span>
                  <span className="flex items-center gap-1.5 text-lg font-bold"><span className="material-symbols-outlined text-yellow-400 text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>star</span> 4.8 (1.2k reviews)</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tighter mb-4 leading-none">Sharma General Store</h1>
                <div className="flex items-center gap-8 text-secondary-fixed/90 font-bold text-lg">
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined text-2xl">distance</span> 1.2 km</span>
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined text-2xl">schedule</span> 15-20 mins</span>
                </div>
              </div>
              <button className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-white/20 transition-all font-headline font-bold text-lg">
                <span className="material-symbols-outlined">info</span> Store details
              </button>
            </div>
          </div>
        </section>

        {/* Glass Sticky Navigation */}
        <nav className="sticky top-[72px] z-40 bg-surface/80 backdrop-blur-[20px] shadow-[0px_4px_24px_rgba(0,0,0,0.02)]">
          <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center gap-8">
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-1">
              <button className="bg-primary text-on-primary px-8 py-2.5 rounded-xl font-bold font-headline whitespace-nowrap shadow-lg shadow-primary/20">All Harvest</button>
              <button className="bg-surface-container hover:bg-surface-container-high px-8 py-2.5 rounded-xl font-bold whitespace-nowrap transition-all text-on-surface-variant">Fresh Dairy</button>
              <button className="bg-surface-container hover:bg-surface-container-high px-8 py-2.5 rounded-xl font-bold whitespace-nowrap transition-all text-on-surface-variant">Seasonal Vegetables</button>
              <button className="bg-surface-container hover:bg-surface-container-high px-8 py-2.5 rounded-xl font-bold whitespace-nowrap transition-all text-on-surface-variant">Pantry Staples</button>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12">
          {/* Left Sidebar: Minimalist Category Select */}
          <aside className="w-full lg:w-[260px] flex-shrink-0">
            <h3 className="font-headline font-extrabold text-2xl mb-8 px-2 text-primary">Harvest Menu</h3>
            <ul className="space-y-2">
              <li><Link className="flex justify-between items-center px-5 py-4 bg-primary-container/10 text-primary font-bold rounded-2xl transition-all scale-[1.02] shadow-sm" to="#"><span className="flex items-center gap-3 text-lg"><span className="material-symbols-outlined text-2xl">grocery</span> All Essentials</span> <span className="text-xs bg-primary/10 px-2.5 py-1 rounded-lg">142</span></Link></li>
              <li><Link className="flex justify-between items-center px-5 py-4 hover:bg-surface-container rounded-2xl transition-all font-bold text-on-surface-variant hover:text-on-surface" to="#"><span className="flex items-center gap-3 text-lg"><span className="material-symbols-outlined text-2xl">egg_alt</span> Dairy & Eggs</span> <span className="text-xs text-outline-variant">24</span></Link></li>
              <li><Link className="flex justify-between items-center px-5 py-4 hover:bg-surface-container rounded-2xl transition-all font-bold text-on-surface-variant hover:text-on-surface" to="#"><span className="flex items-center gap-3 text-lg"><span className="material-symbols-outlined text-2xl">eco</span> Fresh Greens</span> <span className="text-xs text-outline-variant">18</span></Link></li>
            </ul>
          </aside>

          {/* Main Content: Product Selection */}
          <div className="flex-grow">
            <div className="mb-20">
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-4xl font-extrabold font-headline tracking-tighter">Bestsellers Today</h2>
                <div className="text-primary font-bold text-sm cursor-pointer hover:underline flex items-center gap-1 border-b-2 border-primary/20 pb-0.5">Explore more <span className="material-symbols-outlined text-sm">north_east</span></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                <ProductCard name="Amul Taaza Milk" price={27} unit="500 ml" icon="🥛" image="https://lh3.googleusercontent.com/aida-public/AB6AXuCQu0vWtknzobmQgGhEjxAn4tzS8sgnmULDPCEXyJmEduzKnirRy-hFvwp9B_C_8d_E_-EAMULiPinzpxw93RqPHS2z_D1zMAWh1mPngiMRG_yT46FvbUMdLGDxws-CgTvMvSzw-btzB657lvdzJpin5yDRKOcjdL3MEMa74IC45DqXHayHpuOau7vFqYUwDI1Uonpk0IL3lkSAbzusNRN0BbcqLSCq6yMfrdCGCxZ6mqIXJa8tMuFkXbhdj_ASC9LbENGkUPIFlsTL" />
                <ProductCard name="Aashirvaad Atta" price={245} unit="5 kg" icon="🌾" image="https://lh3.googleusercontent.com/aida-public/AB6AXuCxZeszoa0cDBwvvYQLdg3vrA17FSUmMjWlAceW4TdA751Cmop1BbVjLEOIJF2KDnLDEAOf6NfpoabeRoGU0Obxr8uOmF-xCVkn3kiFKFrMy3ZwRHYiAOMEUbzJ9BPdVja4wGtTTMaYvL6xHYCvKnWktpjG3h8hFycbiIAi_k0HO3IR4yWaFoNq7TUX9DQasZXLe-nCcFEZc_f28jWwg242o7yBUeol_sjrH2pTaiBIlrW2j_EodvbE5_FzBmDoLVlhK5raUB-EH3aC" />
                <ProductCard name="Maggi Noodles" price={14} unit="70 g" icon="🍝" image="https://lh3.googleusercontent.com/aida-public/AB6AXuBPZkvr1XX7cR4ieVt2s8iPsaxvjYxqItg3dF_wKshgjIXypLMR2yRUIfGsM62M1MlNvUXFnTN3Vgb9M_ZKXDJI3Hh7DiwnMV09PTouyu7nTydA_RUZ1lWItyyGwedzE0zOPPvVlkvEKVW5NH4AtAbXwbrV2tSacttyYx-RHza--S354wdsG1Erlyy8ZRJ_MKH__S6H8zDspwQ88nVpHcVdKC9mpTndnNyYDF5YLwArkqqx1BlNXzVRzVhdIqVRnrhRQhDUnq196FMi" />
              </div>
            </div>
          </div>

          {/* Cart Sidebar: Surface Layering */}
          <aside className="w-full lg:w-[360px] flex-shrink-0 relative">
            <div className="sticky top-[160px] bg-surface-container-lowest rounded-[12px] shadow-[0px_24px_48px_rgba(28,28,24,0.08)] p-8 border-none overflow-hidden transition-all">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="font-headline font-extrabold text-2xl tracking-tight">Your Basket</h3>
                  <p className="text-sm font-bold text-primary flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"></span> Ordering from Sharma's</p>
                </div>
                <div className="bg-primary/5 text-primary w-12 h-12 flex items-center justify-center rounded-xl font-extrabold font-headline">3</div>
              </div>
              <div className="space-y-8 max-h-[450px] overflow-y-auto mb-10 pr-2 no-scrollbar">
                {/* Minimalist Cart Item */}
                <div className="flex gap-5 group">
                  <div className="w-16 h-16 rounded-xl bg-surface-container flex-shrink-0 overflow-hidden">
                     <img alt="Amul Milk" className="w-full h-full object-cover group-hover:scale-110 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5CGT5T2q-4ZQGCsMfRc3IgwO3KdqmmY0A6kLeLRtDYFwamhVwAbUk9-PsrVKeGceg-X_PtqusEpw-5OJIzecFRWqXwINmH5jeJe4vYsI4EZjRRFbqyn4lZrRpfomGjcL7bl13Vz0-HXMZDQBmzbR0IKzq0DYk8aUTXD4mP2dAdG9MtlSgJwXtCliseWYQ-8MPbg4yFUhjjIP3XFEJgRu5hj5orDY5bMHQ61ye0MVlmXal-X1NffEX-xeBl0SrQFiDKakY6k0M_2ad" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-base font-extrabold leading-tight text-on-surface">Amul Taaza Milk</h4>
                    <p className="text-xs font-bold text-outline uppercase tracking-wider mb-3">500 ml</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center bg-surface-container rounded-lg px-2.5 py-1.5 gap-4">
                        <button className="text-primary hover:bg-white rounded p-0.5 transition-colors"><span className="material-symbols-outlined text-xs font-bold">remove</span></button>
                        <span className="text-xs font-extrabold font-headline">2</span>
                        <button className="text-primary hover:bg-white rounded p-0.5 transition-colors"><span className="material-symbols-outlined text-xs font-bold">add</span></button>
                      </div>
                      <span className="text-base font-extrabold text-primary font-headline tracking-tight">Rs. 54.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t-2 border-outline-variant/10 pt-8 space-y-4 mb-10">
                <div className="flex justify-between text-2xl font-extrabold font-headline tracking-tighter">
                  <span>Grand Total</span>
                  <span className="text-primary">Rs. 71.40</span>
                </div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-outline-variant text-center">Taxes and delivery calculated at checkout</p>
              </div>
              {/* Signature Gradient Button */}
              <button className="w-full bg-gradient-to-br from-primary to-primary-container text-white py-5 rounded-[12px] font-headline font-extrabold text-xl shadow-[0px_16px_32px_rgba(0,81,41,0.2)] hover:shadow-[0px_20px_40px_rgba(0,81,41,0.3)] flex items-center justify-center gap-3 active:scale-[0.98] transition-all group">
                Checkout Now <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </aside>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Store;
