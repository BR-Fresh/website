import React, { useState } from 'react';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (location: string) => void;
}

const LocationModal: React.FC<LocationModalProps> = ({ isOpen, onClose, onSelect }) => {
  const [pincode, setPincode] = useState('');
  const savedLocations = [
    { id: 1, name: 'Home', address: 'B-402, Green Valley Apartments, Sector 21, Chandigarh', pincode: '160022' },
    { id: 2, name: 'Office', address: 'Tower A, IT Park, Chandigarh', pincode: '160101' }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-surface-container-lowest w-full max-w-lg rounded-[2rem] shadow-[0px_32px_64px_rgba(0,0,0,0.24)] overflow-hidden animate-slide-up border border-surface-container-high/20">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-headline font-extrabold text-primary flex items-center gap-3">
              <span className="material-symbols-outlined text-[28px]">location_on</span>
              Select location
            </h2>
            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-full hover:bg-surface-container transition-colors flex items-center justify-center text-outline group"
            >
              <span className="material-symbols-outlined text-[24px] group-hover:scale-110 transition-transform">close</span>
            </button>
          </div>

          {/* Search/Pincode Input */}
          <div className="space-y-6">
            <div className="bg-surface-container-low p-2 rounded-2xl border border-surface-container-high/50 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
              <div className="flex items-center px-4 py-2">
                <span className="material-symbols-outlined text-primary/60 mr-3">pin_drop</span>
                <input 
                  type="text" 
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="Enter pincode or area..." 
                  className="bg-transparent border-none focus:ring-0 w-full text-sm font-bold text-on-surface placeholder:text-outline/50"
                  maxLength={6}
                />
                {pincode.length >= 6 && (
                   <button 
                    onClick={() => onSelect(`Pincode: ${pincode}`)}
                    className="bg-primary text-white px-4 py-2 rounded-xl text-xs font-bold hover:opacity-90 transition-all uppercase tracking-wider"
                   >
                    Apply
                   </button>
                )}
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-secondary-container text-on-secondary-container font-bold hover:bg-secondary hover:text-white transition-all group shadow-sm">
              <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">my_location</span>
              Search on map
            </button>

            {/* Saved Locations */}
            <div className="pt-4">
              <p className="text-[11px] font-black uppercase text-outline tracking-widest mb-4 px-2">Saved locations</p>
              <div className="space-y-3">
                {savedLocations.map((loc) => (
                  <button 
                    key={loc.id}
                    onClick={() => onSelect(`${loc.address.split(',')[0]}, ${loc.pincode}`)}
                    className="w-full text-left p-4 rounded-2xl bg-white border border-surface-container hover:border-primary/30 hover:shadow-md transition-all group flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary/70 group-hover:bg-primary group-hover:text-white transition-all">
                      <span className="material-symbols-outlined text-[20px]">{loc.name === 'Home' ? 'home' : 'work'}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">{loc.name}</h4>
                      <p className="text-sm text-on-surface-variant line-clamp-1 opacity-70">{loc.address}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-surface-container-low p-6 flex items-center justify-center text-xs text-outline/60 font-medium">
          Delivering fresh groceries within 30 minutes
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
