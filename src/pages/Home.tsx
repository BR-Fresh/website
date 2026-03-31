import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StoreCard from '../components/StoreCard';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <div className="bg-background font-body text-on-background antialiased min-h-screen pb-10">
      <Navbar showSearch={false} />

      <main className="pt-[72px]">
        {/* Location Selector */}
        <section className="px-6 py-4 bg-surface-container-low border-b border-outline-variant/10">
          <div className="flex items-center gap-2 text-primary max-w-7xl mx-auto font-body">
            <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>location_on</span>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider font-bold text-outline">Delivering to</span>
              <button className="flex items-center gap-1 font-semibold text-sm">
                Indiranagar, Bangalore
                <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </button>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="px-6 py-12 relative overflow-hidden bg-surface-container">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div>
              <h1 className="font-headline text-[40px] md:text-[56px] font-extrabold leading-tight text-primary mb-4 tracking-tight">
                Freshness delivered <br/>in <span className="text-secondary">10 minutes.</span>
              </h1>
              <p className="text-on-surface-variant text-lg mb-8 max-w-md">Organic farm-to-table groceries at your doorstep. We bring the mandi home.</p>
              <div className="relative max-w-md">
                <input className="w-full h-14 pl-12 pr-4 bg-surface-container-lowest border-none rounded-2xl shadow-sm focus:ring-2 focus:ring-primary/20 placeholder:text-outline-variant text-on-surface" placeholder="Search for 'avocados' or 'milk'" type="text" />
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <img alt="Delivery Scooter" className="w-96 h-auto drop-shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmq2axgdZhVcMS9aBjpW_k7JqpNdZ0FO1i0IvDLijBGdOUHx5dZplkkpJ5rLcPEniYxvM7ZCeCnJ6uz6MWyX-zBw53_asunJRvyltlofsH1IhpcAUwnR7l5O4K1QZdwr2j5Rc4IxZquShtwrK-w2Z8Qh-kg13WK3nkNA-mCLFWngTSKQFGBV3JPrLK_YQAGqYf9OVojStE8k0oQAiK89_pz9tobktAdsvdoq92jUQRiqsxnuSOCARaL0iA_diCTJhARjbG-dTCGD0b" />
            </div>
          </div>
        </section>

        {/* Category Grid */}
        <section className="py-12 max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-8">
            <h2 className="font-headline text-2xl font-bold">Shop by Category</h2>
            <Link className="text-secondary text-sm font-bold hover:underline" to="#">View all</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Vegetables', color: 'bg-secondary-container/20', icon: '🌽' },
              { name: 'Fruits', color: 'bg-tertiary-fixed/20', icon: '🍎' },
              { name: 'Dairy', color: 'bg-orange-100/20', icon: '🥛' },
              { name: 'Bakery', color: 'bg-blue-50', icon: '🍞' },
              { name: 'Snacks', color: 'bg-amber-50', icon: '🥨' },
              { name: 'Meat', color: 'bg-pink-50', icon: '🥩' },
            ].map((cat, i) => (
              <div key={i} className="group flex flex-col items-center gap-3 cursor-pointer">
                <div className={`${cat.color} w-full aspect-square rounded-[32px] flex items-center justify-center p-6 group-hover:scale-105 transition-transform shadow-sm`}>
                  <span className="text-4xl">{cat.icon}</span>
                </div>
                <span className="text-sm font-bold text-center leading-tight">{cat.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Stores near you */}
        <section className="py-12 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="font-headline text-2xl font-bold mb-1 font-headline">Stores near you</h2>
              <p className="text-sm text-outline">Partnered local mandis & organic stores</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <StoreCard id="sharma" name="Farmer's Harvest Mandi" distance="1.2 km" time="12 mins" rating="4.8" categories={['Dairy', 'Organic']} image="https://lh3.googleusercontent.com/aida-public/AB6AXuBwUIKN8ZQc-UlCTRqh-6aOoNHV99-E3-3dxjLayxwv4tNZa7l3mYiO77aRzTYBRYeb7iVZAYocIWoHhZZhmueXHSgxb4v4yWckUnqLvLLoRTP-_7fAoJRR6a74bryTA4B8wwRBnJHTPqzKxMxm2AfK-3TNNaHN89An_tZu5vcgM0gbhkBRbbHNThsZDvxxIgM8sjSVhV0-XzsN8vwNa00bbgZSmxxTbwi-mNcIWctoxvbUkN9WA6HM7Hj-gR_wiFm465884251l8u3" />
              <StoreCard id="sharma" name="The Green Organic Mandi" distance="2.4 km" time="8 mins" rating="4.5" categories={['Grocery', 'Fresh']} image="https://lh3.googleusercontent.com/aida-public/AB6AXuCfnOzNH2aBXwZWekCcqQ3yeLmaWrFuX8TcqOX1bKPMk7uBOYU9QYKATYzXiW8GGohpj6UEpvreXgMHw1JhFGzdGnVPPqFuOzBhrVr37vZRIG8hj-awJkvGTLP-0FXhke5jEaVd0vkZYBeXu2sTFxDwRVfw9cGQwvejYdA21g5Q33Yce_abEpx7hiVQIdQjLrWTyE1a3H9qqSdq7uJEb8Qq4h7AYgj6XBhG4TX26EYalvHSZDx6JdZlocH0mUag_IXKGMm-FjBhlRfn" />
            </div>
          </div>
        </section>

        {/* Popular Right Now */}
        <section className="py-16 max-w-7xl mx-auto px-6">
          <div className="mb-8 flex justify-between items-center">
            <h2 className="font-headline text-2xl font-bold">Popular right now</h2>
            <span className="material-symbols-outlined text-outline">trending_up</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ProductCard name="Hass Avocado" price={189} unit="1 unit (200g)" icon="🥑" tag="Organic" />
            <ProductCard name="Vine Tomatoes" price={45} unit="500g" icon="🍅" tag="Fresh" />
            <ProductCard name="Country Eggs" price={72} unit="Pack of 6" icon="🥚" tag="Farm" />
            <ProductCard name="Baby Spinach" price={38} unit="200g" icon="🥬" tag="Organic" />
          </div>
        </section>

        {/* App Banner */}
        <section className="px-6 py-12 max-w-7xl mx-auto">
          <div className="bg-primary-container rounded-[40px] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between text-white">
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 font-headline tracking-tight">Get the full <br/>Fresh experience.</h2>
              <p className="text-on-primary-container text-lg mb-8 max-w-xs mx-auto md:mx-0">Unlock exclusive deals and lightning fast checkout on our app.</p>
              <button className="bg-secondary-fixed text-on-secondary-fixed px-8 py-4 rounded-2xl font-bold text-lg shadow-xl active:scale-95 transition-transform">
                Download App
              </button>
            </div>
            <div className="mt-10 md:mt-0 flex">
               <span className="material-symbols-outlined text-[160px] md:text-[240px] opacity-20">smartphone</span>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-secondary-fixed text-on-secondary-fixed rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-transform z-40">
        <span className="material-symbols-outlined text-[32px]" style={{fontVariationSettings: "'FILL' 1"}}>bolt</span>
      </button>
    </div>
  );
};

export default Home;
