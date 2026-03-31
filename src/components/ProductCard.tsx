import React from 'react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  id: string | number;
  name: string;
  price: number;
  unit: string;
  icon: string | React.ReactNode;
  tag?: string;
  image?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, unit, icon, tag, image }) => {
  const { getItemQty, addToCart, removeFromCart } = useCart();
  const qty = getItemQty(id);

  return (
    <div className="flex flex-col group p-3 bg-surface-container-lowest rounded-xl shadow-[0px_8px_24px_rgba(28,28,24,0.04)] hover:shadow-[0px_12px_32px_rgba(28,28,24,0.08)] transition-all border-none h-full relative">
      <div className="relative bg-surface-container rounded-lg aspect-square mb-3 overflow-hidden border-none text-on-surface">
        <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
          {image ? <img src={image} className="w-full h-full object-contain p-4" alt={name} /> : <span className="text-4xl">{icon}</span>}
        </div>
      </div>
      {tag && (
        <span className="text-[9px] font-bold text-secondary uppercase tracking-wider mb-0.5">{tag}</span>
      )}
      <h4 className="font-headline font-bold text-sm text-on-surface mb-0.5 line-clamp-2 leading-tight min-h-[36px]">{name}</h4>
      <p className="text-[10px] text-outline-variant mb-4 font-bold uppercase tracking-widest">{unit}</p>
      
      <div className="flex items-center justify-between mt-auto gap-2">
        <span className="text-sm font-extrabold text-primary font-headline tracking-tighter">Rs.{price}</span>
        
        {qty === 0 ? (
          <button 
            onClick={() => addToCart({ id, name, price })}
            className="flex items-center justify-center bg-primary border-none text-white w-[70px] h-[32px] rounded-lg font-headline font-extrabold text-[10px] hover:opacity-90 transition-all active:scale-95 uppercase shadow-sm"
          >
            Add
          </button>
        ) : (
          <div className="flex items-center bg-white border border-primary text-primary rounded-lg shadow-sm overflow-hidden w-[70px] h-[32px] justify-between">
            <button 
              onClick={() => removeFromCart(id)}
              className="w-1/3 h-full flex items-center justify-center bg-primary/10 text-primary hover:bg-primary/20 transition-all font-bold"
            >
              <span className="material-symbols-outlined text-[14px]">remove</span>
            </button>
            <span className="text-[11px] font-bold font-headline select-none w-1/3 text-center bg-white h-full flex items-center justify-center text-primary">{qty}</span>
            <button 
              onClick={() => addToCart({ id, name, price })}
              className="w-1/3 h-full flex items-center justify-center bg-primary/10 text-primary hover:bg-primary/20 transition-all font-bold"
            >
              <span className="material-symbols-outlined text-[14px]">add</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
