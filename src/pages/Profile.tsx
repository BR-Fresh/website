import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="bg-[#F8F9F8] font-body text-on-surface antialiased min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-[116px] pb-20 px-6">
        <div className="max-w-4xl mx-auto py-12">
           <div className="flex flex-col md:flex-row items-start gap-12">
              {/* Left Column: Avatar & Basic Info */}
              <div className="w-full md:w-[320px]">
                 <div className="bg-white rounded-[40px] p-10 shadow-[0px_48px_96px_rgba(0,0,0,0.04)] border border-surface-container/50 text-center sticky top-[120px]">
                    <div className="relative inline-block mb-6">
                       <div className="w-32 h-32 bg-[#E6F3E6] rounded-full flex items-center justify-center mx-auto border-4 border-white shadow-xl">
                          <span className="material-symbols-outlined text-[64px] text-primary">person</span>
                       </div>
                       <div className="absolute bottom-1 right-1 bg-primary text-white p-2 rounded-xl shadow-lg border-2 border-white">
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                       </div>
                    </div>
                    <h1 className="text-3xl font-extrabold font-headline text-on-surface tracking-tighter mb-1">{user.name}</h1>
                    <p className="text-xs font-black uppercase text-outline-variant tracking-widest leading-none mb-8">Premium Harvester</p>
                    
                    <div className="space-y-3">
                       <button className="w-full bg-[#E6F3E6] text-[#004D2C] py-4 rounded-2xl font-headline font-extrabold text-sm hover:bg-[#D9EBD1] transition-all flex items-center justify-center gap-3">
                          <span className="material-symbols-outlined text-[20px]">shopping_bag</span> Order History
                       </button>
                       <button 
                         onClick={() => { logout(); navigate('/'); }}
                         className="w-full bg-white border border-error/20 text-error py-4 rounded-2xl font-headline font-extrabold text-sm hover:bg-error/5 transition-all flex items-center justify-center gap-3"
                       >
                          <span className="material-symbols-outlined text-[20px]">logout</span> Sign Out
                       </button>
                    </div>
                 </div>
              </div>

              {/* Right Column: Profile Details */}
              <div className="flex-grow">
                 <div className="bg-white rounded-[40px] p-12 shadow-[0px_32px_64px_rgba(0,0,0,0.04)] border border-surface-container/50">
                    <div className="flex justify-between items-center mb-10 pb-6 border-b border-surface-container">
                       <h2 className="text-2xl font-extrabold font-headline text-[#004D2C]">Account Information</h2>
                       <button className="text-sm font-black uppercase text-primary hover:underline tracking-widest">Edit Details</button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                       <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase text-outline tracking-widest">Phone Number</label>
                          <p className="text-base font-extrabold text-on-surface">+91 98765 43210</p>
                       </div>
                       <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase text-outline tracking-widest">Email Address</label>
                          <p className="text-base font-extrabold text-on-surface">{user.name.toLowerCase().replace(' ', '.')}@example.com</p>
                       </div>
                       <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase text-outline tracking-widest">Default Address</label>
                          <p className="text-base font-extrabold text-on-surface leading-tight">Sector 21, Chandigarh, India</p>
                       </div>
                       <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase text-outline tracking-widest">Member Since</label>
                          <p className="text-base font-extrabold text-on-surface">March 2026</p>
                       </div>
                    </div>

                    <div className="mt-16 pt-10 border-t border-surface-container">
                       <h3 className="text-xl font-extrabold font-headline text-on-surface mb-8">Security & Preferences</h3>
                       <div className="space-y-6">
                          <div className="flex justify-between items-center group cursor-pointer hover:bg-surface-container-low p-4 rounded-2xl transition-all border border-transparent hover:border-surface-container">
                             <div className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-outline-variant text-[24px]">lock</span>
                                <div>
                                   <h4 className="text-sm font-extrabold text-on-surface">Password</h4>
                                   <p className="text-xs font-bold text-outline-variant">Update your security passKey</p>
                                </div>
                             </div>
                             <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
                          </div>
                          <div className="flex justify-between items-center group cursor-pointer hover:bg-surface-container-low p-4 rounded-2xl transition-all border border-transparent hover:border-surface-container">
                             <div className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-outline-variant text-[24px]">notifications</span>
                                <div>
                                   <h4 className="text-sm font-extrabold text-on-surface">Notifications</h4>
                                   <p className="text-xs font-bold text-outline-variant">Manage your harvesting alerts</p>
                                </div>
                             </div>
                             <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
                          </div>
                       </div>
                    </div>
                 </div>
                 
                 {/* Referral Card */}
                 <div className="mt-8 bg-[#004D2C] rounded-[32px] p-10 text-white relative overflow-hidden flex flex-col sm:flex-row items-center gap-8 group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none group-hover:scale-110 transition-transform">
                       <span className="material-symbols-outlined text-[160px]">diversity_3</span>
                    </div>
                    <div className="flex-grow relative z-10 text-center sm:text-left">
                       <h4 className="text-2xl font-extrabold font-headline tracking-tight mb-2">Share the Harvest</h4>
                       <p className="text-sm font-bold text-white/70 leading-tight">Invite your friends to BR Fresh and both of you get <span className="text-white">Rs.150 OFF</span> on your next orders!</p>
                    </div>
                    <button className="bg-white text-[#004D2C] px-8 py-4 rounded-2xl font-headline font-extrabold tracking-tight hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/10 relative z-10 whitespace-nowrap">Invite Now</button>
                 </div>
              </div>
           </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
