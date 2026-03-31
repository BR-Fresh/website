import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-background text-on-background font-body selection:bg-secondary-container min-h-screen">
      <Navbar />

      <main className="pt-[72px]">
        {/* Hero Section */}
        <section className="bg-surface-container-low overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <h1 className="font-headline font-extrabold text-5xl md:text-6xl text-primary leading-tight mb-6">
                Fresh groceries from your neighbourhood store
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant mb-10 max-w-xl">
                Order from trusted local kirana stores. Delivered in 20–30 minutes directly to your doorstep.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-10 bg-surface-container-lowest p-2 rounded-xl editorial-shadow max-w-2xl">
                <div className="flex-1 flex items-center px-4 py-3">
                  <span className="material-symbols-outlined text-outline mr-3">map</span>
                  <input className="w-full border-none focus:ring-0 bg-transparent text-on-surface placeholder:text-outline" placeholder="Enter your area or PIN code..." type="text"/>
                </div>
                <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-all flex items-center justify-center">
                  Find stores
                </button>
              </div>
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="text-sm font-semibold text-on-surface">20+ stores</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
                  <span className="text-sm font-semibold text-on-surface">30 min delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                  <span className="text-sm font-semibold text-on-surface">Fresh daily stock</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <div className="aspect-square rounded-3xl overflow-hidden editorial-shadow bg-surface-container">
                <img className="w-full h-full object-cover" alt="Delivery Hero" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5YO2TwjegOEp0bLAvHaOvezEDOQoRuB9V3rZ5nBYow18oKWnufSaG83EBDs0yn8qUGZIoPjIh4ItuC0vYcfVbN2EO0rWkvVQOtohmVnK5Najot6gqIeT4qI6YYRXYFY3hj3TV1kuvkiMHrbNOxYYJrtCyWkOBvr2kaoYVHVxoYgBnCAJCl2_dUOZSbjehIaI9_aRok2POn4SIxOy6Y39nHDF_6OTrO3FKczd2Pknih_cOzzg3d8ZtmFmKAugsE-L73Q8Na81GdAh2"/>
              </div>
            </div>
          </div>
        </section>

        {/* Category Strip */}
        <section className="bg-surface-container-lowest py-8 sticky top-[72px] z-40 border-b border-surface-container">
          <div className="max-w-7xl mx-auto px-6 flex overflow-x-auto gap-8 no-scrollbar scroll-smooth">
            {[
              { name: 'Dairy & Eggs', icon: 'egg' },
              { name: 'Fresh Vegetables', icon: 'potted_plant' },
              { name: 'Fruits', icon: 'nutrition' },
              { name: 'Atta & Rice', icon: 'grain' },
              { name: 'Snacks & Biscuits', icon: 'cookie' },
              { name: 'Beverages', icon: 'local_bar' },
              { name: 'Personal Care', icon: 'face_6' },
              { name: 'Household', icon: 'cleaning_services' },
              { name: 'Masala & Spices', icon: 'skillet' }
            ].map((cat, i) => (
              <button key={i} className="flex flex-col items-center gap-2 group min-w-fit">
                <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-secondary-container transition-colors">
                  <span className="material-symbols-outlined text-primary">{cat.icon}</span>
                </div>
                <span className="text-xs font-bold font-label uppercase tracking-wider text-on-surface-variant group-hover:text-primary">{cat.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Stores Near You */}
        <section className="py-20 max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-headline font-extrabold text-primary mb-2">Stores near you</h2>
              <p className="text-on-surface-variant">Handpicked local stores in Sector 21</p>
            </div>
            <button className="text-primary font-bold flex items-center gap-1 hover:underline text-sm">
              View all <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 'sharma', name: 'Sharma General Store', loc: 'Sector 21, Chandigarh', rate: '4.8', time: '20-25 mins', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3IyCRN2GT8k1AL3dEkKJuVuLE3vm9Djs4by2DzIptgK1ptGkZ9g5E965hCCBeOwaMspFZR_FPvTLUNqlRvlFzLC6BVg2ljs7YClWCphJiPbIink4RmApHiqNfAb-9cT6mm7UfDykzEkxvUOTOmV7M_tJ3y_iEAbJMYrJpQQDU8BLQBlt79H7cxCZHoASbH62bOD0kTh_opFjoBCfHCYfn41eswxl2uws5UdFHV5tIXAaBZgVKt9NtXb4K4b6lw_Zui_YQbXPmcXFN' }
            ].map((store, i) => (
              <Link to={`/store/${store.id}`} key={i} className="group bg-surface-container-lowest rounded-2xl editorial-shadow overflow-hidden transition-transform hover:-translate-y-1 block">
                <div className="h-48 overflow-hidden bg-surface-container">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={store.name} src={store.img}/>
                </div>
                <div className="p-5">
                  <h3 className="font-headline font-bold text-lg mb-1">{store.name}</h3>
                  <p className="text-sm text-outline mb-3 flex items-center">
                    <span className="material-symbols-outlined text-sm mr-1">location_on</span> {store.loc}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="inline-flex items-center px-2 py-1 rounded bg-secondary-container text-on-secondary-container text-xs font-bold">
                      <span className="material-symbols-outlined text-sm mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> {store.rate}
                    </span>
                    <span className="text-xs font-bold text-secondary">{store.time}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Popular Right Now */}
        <section className="bg-surface-container-low py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-headline font-extrabold text-primary mb-12">Popular right now</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { name: 'Amul Taaza Toned Milk (1L)', price: '54', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbY0dtvfcwvtq51LgKi9qDYi2hHMAXcJuichqcEboareA2-Pp_cULJ5Fpss1RJ3vWqrG-YeaMIMTxEUkTxdALd1--5f_9H2FWKr7PNY4TSnJ2BAmKCX8eWsZNtaOxDVM1OYyVxkDBn4JbjFQrkYBxPVSUyUUVKk7IF9tmIll3F5lONV9E8jOhH_IKyqjdbVg9IvaPsaC_OjLA8kn8vVTJbFFaA5by1HcCYBAQf3MjLS0C0uf1ZDldPHrMcXz9mRz4QRdI5rgSX2ifF' },
                { name: 'Aashirvaad Shudh Chakki Atta (5kg)', price: '245', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDemYLeLY2Mw0ZiKXkYXH4HlwNV-RZj0yqlBclEYZtencN1uQKpLt6htpLJuH8TObH75DAq_PqxYapCZqdzoqRwb6Y3wUfEqPG46C51PeSjdWC57S12FhXOFVjvPCIZrLvFtaJMLlN5Aj9QtNNC2tME9p7tPXG-1_XnCDlOr2x22Qs06YN0sK7RDkrbBTIogv1_5e1Gj6RqXIfu-3PXsdihkRT7u3kWeMxjr-CUDb_aycAETzAkEi4bLuXL3-w5cxZAdffboFV6ScE6' },
                { name: 'Tata Salt Vacuum Evaporated (1kg)', price: '28', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYwcBTWbxyeCs_BrSPmRgM7mm7kgXdvjJ-PzMgFo6EJlV5Hg-sCN6_5pfhsVVxK6vxPNEtzmXm4EOqNuT1d8l3Uym5OqEm0OoQSuIHZDORCgOdqAelNUZfgvyoUMdK1PGevKJ9jDgjnKpGaA9zAnC-sUt4i23HjZ31323kYyJ6gk4RkU44Y1_1zkZSaydGwUeIw9dFLIUCBW64gl_bp4WEsP8NgIwXszpkMtGykdAmiaslFEyN3jYfRaUR62amOzQjRAqLhN0GjRGN' },
                { name: 'Parle-G Original Gluco Biscuits (800g)', price: '75', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcVWdY0xaWAloCeP9-4QW0MuOav_7UADhm6Q9lz11rdvgHIOONnMc2aUu9sWBYIsSzjf-lc0-lHeh6UbFX1zMETdYzIwUmLDOOX-HZ1IRv55hkYuYQuWe7UDx0SIkUAzpuEdlBSnlPCxw156KWO6ok56mwO28kLvxaTD2DH2atgoGx2C93bMM3-PEJ85heVelj_rgPIBkc3eHkVuuHOXeDHPvYlOffTFNIdCSMFc-IxdlIWBiMMw0cff1Ca9tEfhf-m2f6v37zX2zK' },
                { name: 'Britannia Bourbon Chocolate (150g)', price: '30', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEzw3wpe8GBj1KGR4eUhZTqR8TS0ZRtSHSk2HK1Gafyv84fv2cRR34ak3y-mRpTHcZ3vv9mZHNNjpXsrFg_LKOgsBOW7-TnIeUCGq8z3kesxh-V1xfOehvoMrdvMuo2ga2pJLB5m3_TS7FwSQqWnCnBRuhJtoOe20fRhugQG2zhPEVqW6Doq2kfwyj1XBjZKYQqfaH8hEhutF2mqeABVJeZLEJx09KSDWy4G6o7RICl_ssk9qqeR-sdx8qToPHgdhMX3fb5Mz5Zvyz' }
              ].map((prod, i) => (
                <div key={i} className="bg-surface-container-lowest p-4 rounded-xl editorial-shadow hover:shadow-lg transition-shadow">
                  <div className="aspect-square rounded-lg bg-surface mb-4 overflow-hidden p-4 flex items-center justify-center">
                    <img className="max-h-full object-contain" alt={prod.name} src={prod.img}/>
                  </div>
                  <h4 className="font-bold text-sm mb-1 line-clamp-2 min-h-[40px]">{prod.name}</h4>
                  <div className="flex justify-between items-center mt-3">
                    <span className="font-extrabold text-primary">Rs. {prod.price}</span>
                    <button className="bg-secondary-container text-on-secondary-container px-3 py-1.5 rounded-lg text-xs font-bold uppercase hover:bg-secondary hover:text-white transition-colors">Add</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-headline font-extrabold text-primary text-center mb-16">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center text-2xl font-extrabold mb-6 editorial-shadow">1</div>
              <h3 className="text-xl font-bold mb-3">Choose your store</h3>
              <p className="text-on-surface-variant">Select from your favorite neighbourhood kirana stores you trust.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center text-2xl font-extrabold mb-6 editorial-shadow">2</div>
              <h3 className="text-xl font-bold mb-3">Add to cart</h3>
              <p className="text-on-surface-variant">Browse through thousands of products and build your basket.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center text-2xl font-extrabold mb-6 editorial-shadow">3</div>
              <h3 className="text-xl font-bold mb-3">Get it delivered</h3>
              <p className="text-on-surface-variant">Our rider picks up your order and delivers it in under 30 minutes.</p>
            </div>
          </div>
        </section>

        {/* Why Choose BR Fresh */}
        <section className="py-20 bg-surface-container">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: 'storefront', title: 'Local stores', desc: 'Supporting your local community with every order you place.' },
                { icon: 'temp_preferences_eco', title: 'Fresh daily', desc: 'Stock updated daily from local distributors to ensure freshness.' },
                { icon: 'bolt', title: 'Fast delivery', desc: 'Hyper-local riders ensure your milk and bread reach you warm.' },
                { icon: 'payments', title: 'Best prices', desc: 'Direct store prices with exclusive app discounts and deals.' }
              ].map((feature, i) => (
                <div key={i} className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/15 transition-transform hover:scale-[1.02]">
                  <span className="material-symbols-outlined text-4xl text-primary mb-4">{feature.icon}</span>
                  <h4 className="font-headline font-bold text-lg mb-2">{feature.title}</h4>
                  <p className="text-sm text-on-surface-variant">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App Download Banner */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="bg-primary-container rounded-[2rem] p-8 md:p-16 overflow-hidden relative flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 z-10">
              <h2 className="text-4xl font-headline font-extrabold text-white mb-6">Shopping is easier on the app</h2>
              <p className="text-emerald-100/80 text-lg mb-10 max-w-md">Get exclusive offers, order tracking, and priority support only on the BR Fresh mobile app.</p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-neutral-900 transition-colors">
                  <span className="material-symbols-outlined text-3xl">play_store_installed</span>
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold opacity-60">Get it on</p>
                    <p className="text-lg font-bold leading-none">Google Play</p>
                  </div>
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-neutral-900 transition-colors">
                  <span className="material-symbols-outlined text-3xl">ios</span>
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold opacity-60">Download on the</p>
                    <p className="text-lg font-bold leading-none">App Store</p>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex-1 relative h-64 md:h-96 w-full">
              <img className="absolute -bottom-16 right-0 w-64 md:w-80 editorial-shadow rounded-t-3xl" alt="App Preview" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlcRIjMDvJAOjv83AzH1kpCltmlgroBBQMeRdOnLczbTFKei5isgKmPW_8HbkBTHYFZxLmhFYUHezjRBkgKbj0x8VGe1Ftfw230Ca2FYsNfnbHWCwbVElJJcUtRh-UgRFlJciHbWpG3n-8zR-0g0HLtOk4FNoleQi67D5K-l1hxwXb694VzP9JE1WO6ilp8K1FOwpBA-fY-Cqs49SlqfWNb0GiD7LiNZRRx5PXUBUzo5uXu0d89AI0W5HmfcA4pOgVmW7IuRbR1OlC"/>
            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Support */}
      <button className="fixed bottom-8 right-8 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-[60] hover:scale-110 active:scale-95 transition-transform">
        <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
      </button>

      <Footer />
    </div>
  );
};

export default Home;
