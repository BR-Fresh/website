import { useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

const CATEGORIES = ['All Items', 'Fruits & Vegetables', 'Dairy & Eggs', 'Atta, Rice & Dal', 'Oil & Ghee', 'Masala & Spices', 'Beverages'];

const PRODUCTS = [
  { id: 1, name: "Amul Taaza Milk", price: 27, unit: "500 ml", icon: "🥛", category: "Dairy & Eggs", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQu0vWtknzobmQgGhEjxAn4tzS8sgnmULDPCEXyJmEduzKnirRy-hFvwp9B_C_8d_E_-EAMULiPinzpxw93RqPHS2z_D1zMAWh1mPngiMRG_yT46FvbUMdLGDxws-CgTvMvSzw-btzB657lvdzJpin5yDRKOcjdL3MEMa74IC45DqXHayHpuOau7vFqYUwDI1Uonpk0IL3lkSAbzusNRN0BbcqLSCq6yMfrdCGCxZ6mqIXJa8tMuFkXbhdj_ASC9LbENGkUPIFlsTL" },
  { id: 2, name: "Aashirvaad Atta", price: 245, unit: "5 kg", icon: "🌾", category: "Atta, Rice & Dal", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxZeszoa0cDBwvvYQLdg3vrA17FSUmMjWlAceW4TdA751Cmop1BbVjLEOIJF2KDnLDEAOf6NfpoabeRoGU0Obxr8uOmF-xCVkn3kiFKFrMy3ZwRHYiAOMEUbzJ9BPdVja4wGtTTMaYvL6xHYCvKnWktpjG3h8hFycbiIAi_k0HO3IR4yWaFoNq7TUX9DQasZXLe-nCcFEZc_f28jWwg242o7yBUeol_sjrH2pTaiBIlrW2j_EodvbE5_FzBmDoLVlhK5raUB-EH3aC" },
  { id: 3, name: "Maggi Noodles", price: 14, unit: "70 g", icon: "🍝", category: "Atta, Rice & Dal", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPZkvr1XX7cR4ieVt2s8iPsaxvjYxqItg3dF_wKshgjIXypLMR2yRUIfGsM62M1MlNvUXFnTN3Vgb9M_ZKXDJI3Hh7DiwnMV09PTouyu7nTydA_RUZ1lWItyyGwedzE0zOPPvVlkvEKVW5NH4AtAbXwbrV2tSacttyYx-RHza--S354wdsG1Erlyy8ZRJ_MKH__S6H8zDspwQ88nVpHcVdKC9mpTndnNyYDF5YLwArkqqx1BlNXzVRzVhdIqVRnrhRQhDUnq196FMi" },
  { id: 4, name: "Tata Salt", price: 28, unit: "1 kg", icon: "🧂", category: "Masala & Spices", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYwcBTWbxyeCs_BrSPmRgM7mm7kgXdvjJ-PzMgFo6EJlV5Hg-sCN6_5pfhsVVxK6vxPNEtzmXm4EOqNuT1d8l3Uym5OqEm0OoQSuIHZDORCgOdqAelNUZfgvyoUMdK1PGevKJ9jDgjnKpGaA9zAnC-sUt4i23HjZ31323kYyJ6gk4RkU44Y1_1zkZSaydGwUeIw9dFLIUCBW64gl_bp4WEsP8NgIwXszpkMtGykdAmiaslFEyN3jYfRaUR62amOzQjRAqLhN0GjRGN" },
  { id: 5, name: "Fortune Oil", price: 165, unit: "1 L", icon: "🛢️", category: "Oil & Ghee", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9wBv4l8j8Nf6nE-XG_fF0mPZy6Nl-9K_8Xl0q_n_m9V9_6j_U_y_x_w_v_z_x_9_v_y_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8" },
  { id: 6, name: "Fresh Tomato", price: 40, unit: "1 kg", icon: "🍅", category: "Fruits & Vegetables", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3IyCRN2GT8k1AL3dEkKJuVuLE3vm9Djs4by2DzIptgK1ptGkZ9g5E965hCCBeOwaMspFZR_FPvTLUNqlRvlFzLC6BVg2ljs7YClWCphJiPbIink4RmApHiqNfAb-9cT6mm7UfDykzEkxvUOTOmV7M_tJ3y_iEAbJMYrJpQQDU8BLQBlt79H7cxCZHoASbH62bOD0kTh_opFjoBCfHCYfn41eswxl2uws5UdFHV5tIXAaBZgVKt9NtXb4K4b6lw_Zui_YQbXPmcXFN" },
  { id: 7, name: "Fresh Eggs", price: 72, unit: "6 pcs", icon: "🥚", category: "Dairy & Eggs", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9wBv4l8j8Nf6nE-XG_fF0mPZy6Nl-9K_8Xl0q_n_m9V9_6j_U_y_x_w_v_z_x_9_v_y_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8" },
  { id: 8, name: "Britannia Bourbon", price: 30, unit: "150 g", icon: "🍪", category: "Beverages", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEzw3wpe8GBj1KGR4eUhZTqR8TS0ZRtSHSk2HK1Gafyv84fv2cRR34ak3y-mRpTHcZ3vv9mZHNNjpXsrFg_LKOgsBOW7-TnIeUCGq8z3kesxh-V1xfOehvoMrdvMuo2ga2pJLB5m3_TS7FwSQqWnCnBRuhJtoOe20fRhugQG2zhPEVqW6Doq2kfwyj1XBjZKYQqfaH8hEhutF2mqeABVJeZLEJx09KSDWy4G6o7RICl_ssk9qqeR-sdx8qToPHgdhMX3fb5Mz5Zvyz" },
  { id: 9, name: "Parle-G", price: 75, unit: "800 g", icon: "🍪", category: "Beverages", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcVWdY0xaWAloCeP9-4QW0MuOav_7UADhm6Q9lz11rdvgHIOONnMc2aUu9sWBYIsSzjf-lc0-lHeh6UbFX1zMETdYzIwUmLDOOX-HZ1IRv55hkYuYQuWe7UDx0SIkUAzpuEdlBSnlPCxw156KWO6ok56mwO28kLvxaTD2DH2atgoGx2C93bMM3-PEJ85heVelj_rgPIBkc3eHkVuuHOXeDHPvYlOffTFNIdCSMFc-IxdlIWBiMMw0cff1Ca9tEfhf-m2f6v37zX2zK" },
  { id: 10, name: "Dettol Handwash", price: 99, unit: "200 ml", icon: "🧼", category: "Beverages", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9wBv4l8j8Nf6nE-XG_fF0mPZy6Nl-9K_8Xl0q_n_m9V9_6j_U_y_x_w_v_z_x_9_v_y_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8" },
  { id: 11, name: "Amul Butter", price: 52, unit: "100 g", icon: "🧈", category: "Dairy & Eggs", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9wBv4l8j8Nf6nE-XG_fF0mPZy6Nl-9K_8Xl0q_n_m9V9_6j_U_y_x_w_v_z_x_9_v_y_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8" },
  { id: 12, name: "Catch Salt", price: 20, unit: "200 g", icon: "🧂", category: "Masala & Spices", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9wBv4l8j8Nf6nE-XG_fF0mPZy6Nl-9K_8Xl0q_n_m9V9_6j_U_y_x_w_v_z_x_9_v_y_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8_v_x_8" }
];

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Items");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = selectedCategory === "All Items" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-surface font-body text-on-surface antialiased min-h-screen">
      <Navbar />

      <main className="pt-[72px]">
        {/* Store Hero Banner */}
        <section className="relative w-full h-[300px] overflow-hidden">
          <img alt="Sharma General Store storefront" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEuiyOZXApEvgTWewLjllqS6lhgwuMMME8Wum32KBbbAtsH2nylab0snepu47CX_I8TKsegq1EL6wjx1Xfgg_BeRXV0M_tAabC0CyeDfN9u_FS6WlleUeuF0jP5Se_X4fukZRHstlJD-pvuPB63u00YapUx_TPPbQpKMIru382aejaRdacP7hWR6xQmzXs5fnkiGtDDaHBKm1LKzain3gXeBjpBGr9URbOTY9pntqWjM1jIBfBpbQmhRF-2_9G7Dfj8gvTnbrmqALF" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-4">
              <div className="text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-secondary text-white px-3 py-1 rounded-full text-[10px] font-extrabold uppercase">Market Favorite</span>
                  <span className="flex items-center gap-1 text-sm font-bold"><span className="material-symbols-outlined text-yellow-400 text-lg" style={{fontVariationSettings: "'FILL' 1"}}>star</span> 4.8</span>
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tighter mb-2">Sharma General Store</h1>
                  <p className="text-white/60 font-medium text-sm flex items-center gap-4">
                     <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base text-secondary">distance</span> 1.2 km away</span>
                     <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base text-secondary">schedule</span> 20 mins</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Stick - Themed Tab System */}
        <nav className="sticky top-[72px] z-40 bg-white border-b border-surface-container shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3 overflow-x-auto no-scrollbar">
            {CATEGORIES.map((cat, i) => (
              <button 
                key={i} 
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full font-headline font-extrabold text-xs whitespace-nowrap transition-all duration-300 transform active:scale-95 ${
                  selectedCategory === cat 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="mb-12">
            <div className="flex justify-between items-end mb-8 border-l-4 border-primary pl-6">
              <div>
                <h2 className="text-3xl font-extrabold font-headline tracking-tighter text-on-surface">{selectedCategory}</h2>
                <p className="text-xs font-bold text-outline uppercase tracking-[0.2em]">{filteredProducts.length} items available</p>
              </div>
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="relative group w-full md:w-64">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-[18px]">search</span>
                  <input 
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search in this store..."
                    className="w-full bg-surface-container-low border border-surface-container rounded-xl py-2 pl-10 pr-4 text-sm font-bold text-on-surface placeholder:text-outline focus:outline-none focus:border-primary/30 transition-all shadow-sm"
                  />
                </div>
                <div className="flex items-center bg-surface-container-low border border-surface-container px-4 py-2 rounded-xl cursor-default text-xs font-extrabold text-on-surface-variant gap-2 shadow-sm whitespace-nowrap">
                  <span className="material-symbols-outlined text-sm">sort</span> Sort
                </div>
              </div>
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {filteredProducts.map(p => (
                  <ProductCard 
                    key={p.id}
                    name={p.name} 
                    price={p.price} 
                    unit={p.unit} 
                    icon={p.icon} 
                    image={p.image} 
                  />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center bg-surface-container-lowest rounded-3xl border-2 border-dashed border-surface-container">
                <span className="material-symbols-outlined text-6xl text-outline-variant mb-4">inventory_2</span>
                <p className="text-outline font-headline font-bold">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Store;
