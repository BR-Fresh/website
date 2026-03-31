import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

const Store = () => {
  return (
    <div className="bg-background font-body text-on-background antialiased min-h-screen">
      <Navbar showSearch={true} />

      <main className="pt-[72px]">
        {/* Store Hero Banner */}
        <section className="relative w-full h-[320px] overflow-hidden">
          <img alt="Sharma General Store storefront" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEuiyOZXApEvgTWewLjllqS6lhgwuMMME8Wum32KBbbAtsH2nylab0snepu47CX_I8TKsegq1EL6wjx1Xfgg_BeRXV0M_tAabC0CyeDfN9u_FS6WlleUeuF0jP5Se_X4fukZRHstlJD-pvuPB63u00YapUx_TPPbQpKMIru382aejaRdacP7hWR6xQmzXs5fnkiGtDDaHBKm1LKzain3gXeBjpBGr9URbOTY9pntqWjM1jIBfBpbQmhRF-2_9G7Dfj8gvTnbrmqALF" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-7xl mx-auto flex justify-between items-end">
              <div className="text-white">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Open</span>
                  <span className="flex items-center gap-1 text-sm font-medium"><span className="material-symbols-outlined text-yellow-400 text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span> 4.8 (500+ ratings)</span>
                </div>
                <h1 className="text-5xl font-extrabold font-headline tracking-tight mb-4">Sharma General Store</h1>
                <div className="flex items-center gap-6 text-emerald-50/90 font-medium">
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined text-xl">distance</span> 1.2 km</span>
                  <span className="flex items-center gap-2 flex items-center gap-2"><span className="material-symbols-outlined text-xl">schedule</span> 20-30 mins</span>
                </div>
              </div>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/20 transition-all font-headline font-semibold">
                <span className="material-symbols-outlined">info</span> Store Info
              </button>
            </div>
          </div>
        </section>

        {/* Sticky Sub-navigation */}
        <nav className="sticky top-[72px] z-40 bg-surface/90 backdrop-blur-xl shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center gap-8">
            <div className="flex gap-3 overflow-x-auto no-scrollbar">
              <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-semibold whitespace-nowrap">All</button>
              <button className="bg-surface-container hover:bg-surface-container-high px-6 py-2 rounded-full font-medium whitespace-nowrap transition-colors">Dairy</button>
              <button className="bg-surface-container hover:bg-surface-container-high px-6 py-2 rounded-full font-medium whitespace-nowrap transition-colors">Vegetables</button>
              <button className="bg-surface-container hover:bg-surface-container-high px-6 py-2 rounded-full font-medium whitespace-nowrap transition-colors">Packaged Food</button>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row gap-10">
          {/* Left Sidebar: Category List */}
          <aside className="w-full lg:w-[240px] flex-shrink-0">
            <h3 className="font-headline font-bold text-lg mb-6 px-2">Categories</h3>
            <ul className="space-y-1">
              <li><Link className="flex justify-between items-center px-4 py-3 bg-primary-container/10 text-primary font-bold rounded-xl" to="#"><span className="flex items-center gap-3"><span className="material-symbols-outlined text-xl">grocery</span> All Items</span> <span className="text-xs bg-primary/10 px-2 py-0.5 rounded-md">142</span></Link></li>
              <li><Link className="flex justify-between items-center px-4 py-3 hover:bg-surface-container rounded-xl transition-colors font-medium text-neutral-600" to="#"><span className="flex items-center gap-3"><span className="material-symbols-outlined text-xl">egg_alt</span> Dairy</span> <span className="text-xs text-neutral-400">24</span></Link></li>
              <li><Link className="flex justify-between items-center px-4 py-3 hover:bg-surface-container rounded-xl transition-colors font-medium text-neutral-600" to="#"><span className="flex items-center gap-3"><span className="material-symbols-outlined text-xl">eco</span> Vegetables</span> <span className="text-xs text-neutral-400">18</span></Link></li>
            </ul>
          </aside>

          {/* Main Content: Product Grid */}
          <div className="flex-grow">
            <div className="mb-12">
              <div className="flex justify-between items-end mb-8">
                <h2 className="text-3xl font-extrabold font-headline tracking-tight">Best Sellers</h2>
                <span className="text-primary font-semibold text-sm cursor-pointer hover:underline">View All</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProductCard name="Amul Taaza Milk" price={27} unit="500 ml" icon="🥛" image="https://lh3.googleusercontent.com/aida-public/AB6AXuCQu0vWtknzobmQgGhEjxAn4tzS8sgnmULDPCEXyJmEduzKnirRy-hFvwp9B_C_8d_E_-EAMULiPinzpxw93RqPHS2z_D1zMAWh1mPngiMRG_yT46FvbUMdLGDxws-CgTvMvSzw-btzB657lvdzJpin5yDRKOcjdL3MEMa74IC45DqXHayHpuOau7vFqYUwDI1Uonpk0IL3lkSAbzusNRN0BbcqLSCq6yMfrdCGCxZ6mqIXJa8tMuFkXbhdj_ASC9LbENGkUPIFlsTL" />
                <ProductCard name="Aashirvaad Atta" price={245} unit="5 kg" icon="🌾" image="https://lh3.googleusercontent.com/aida-public/AB6AXuCxZeszoa0cDBwvvYQLdg3vrA17FSUmMjWlAceW4TdA751Cmop1BbVjLEOIJF2KDnLDEAOf6NfpoabeRoGU0Obxr8uOmF-xCVkn3kiFKFrMy3ZwRHYiAOMEUbzJ9BPdVja4wGtTTMaYvL6xHYCvKnWktpjG3h8hFycbiIAi_k0HO3IR4yWaFoNq7TUX9DQasZXLe-nCcFEZc_f28jWwg242o7yBUeol_sjrH2pTaiBIlrW2j_EodvbE5_FzBmDoLVlhK5raUB-EH3aC" />
                <ProductCard name="Maggi Noodles" price={14} unit="70 g" icon="🍝" image="https://lh3.googleusercontent.com/aida-public/AB6AXuBPZkvr1XX7cR4ieVt2s8iPsaxvjYxqItg3dF_wKshgjIXypLMR2yRUIfGsM62M1MlNvUXFnTN3Vgb9M_ZKXDJI3Hh7DiwnMV09PTouyu7nTydA_RUZ1lWItyyGwedzE0zOPPvVlkvEKVW5NH4AtAbXwbrV2tSacttyYx-RHza--S354wdsG1Erlyy8ZRJ_MKH__S6H8zDspwQ88nVpHcVdKC9mpTndnNyYDF5YLwArkqqx1BlNXzVRzVhdIqVRnrhRQhDUnq196FMi" />
              </div>
            </div>
          </div>

          {/* Sticky Cart Sidebar */}
          <aside className="w-full lg:w-[320px] flex-shrink-0 relative">
            <div className="sticky top-[152px] bg-surface-container-lowest rounded-3xl shadow-xl p-6 border border-outline-variant/10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-headline font-extrabold text-xl">Your Cart</h3>
                  <p className="text-xs text-neutral-500 font-body">Sharma General Store</p>
                </div>
                <span className="bg-primary-container/20 text-primary px-3 py-1 rounded-full text-xs font-bold">3 items</span>
              </div>
              <div className="space-y-6 max-h-[400px] overflow-y-auto mb-8 pr-2 no-scrollbar">
                {/* Cart Item Sample */}
                <div className="flex gap-3">
                  <img alt="Amul Milk" className="w-14 h-14 rounded-lg object-cover bg-surface-container" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5CGT5T2q-4ZQGCsMfRc3IgwO3KdqmmY0A6kLeLRtDYFwamhVwAbUk9-PsrVKeGceg-X_PtqusEpw-5OJIzecFRWqXwINmH5jeJe4vYsI4EZjRRFbqyn4lZrRpfomGjcL7bl13Vz0-HXMZDQBmzbR0IKzq0DYk8aUTXD4mP2dAdG9MtlSgJwXtCliseWYQ-8MPbg4yFUhjjIP3XFEJgRu5hj5orDY5bMHQ61ye0MVlmXal-X1NffEX-xeBl0SrQFiDKakY6k0M_2ad" />
                  <div className="flex-grow">
                    <h4 className="text-sm font-bold leading-tight">Amul Taaza Milk</h4>
                    <p className="text-[10px] text-neutral-500 mb-2">500 ml</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center bg-surface-container rounded-lg px-2 py-1 gap-3">
                        <button className="text-primary hover:bg-white rounded p-0.5"><span className="material-symbols-outlined text-xs">remove</span></button>
                        <span className="text-xs font-bold">2</span>
                        <button className="text-primary hover:bg-white rounded p-0.5"><span className="material-symbols-outlined text-xs">add</span></button>
                      </div>
                      <span className="text-sm font-bold">Rs. 54</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t border-outline-variant/30 pt-6 space-y-3 mb-8">
                <div className="flex justify-between text-lg font-extrabold font-headline pt-2">
                  <span>Total</span>
                  <span className="text-primary">Rs. 71.40</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-br from-primary to-primary-container text-white py-4 rounded-2xl font-headline font-bold text-lg shadow-lg flex items-center justify-center gap-3 active:scale-95 transition-transform">
                Checkout <span className="material-symbols-outlined">arrow_forward</span>
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
