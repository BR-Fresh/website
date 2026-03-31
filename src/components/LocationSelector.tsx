import React from 'react';

const LocationSelector: React.FC = () => {
  return (
    <div className="hidden md:flex items-center bg-surface-container-low px-5 py-2.5 rounded-full cursor-pointer hover:bg-surface-container transition-all group border border-surface-container-high/50">
      <span className="material-symbols-outlined text-primary mr-3 text-[22px]">location_on</span>
      <div className="flex items-center text-sm font-bold gap-1.5">
        <span className="text-on-surface whitespace-nowrap">Delivering to</span>
        <span className="text-primary font-extrabold flex items-center gap-1 transition-all">
          Sector 21, Chandigarh 
          <span className="material-symbols-outlined text-[18px] group-hover:translate-y-0.5 transition-transform font-bold">expand_more</span>
        </span>
      </div>
    </div>
  );
};

export default LocationSelector;
