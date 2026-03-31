interface ProductCardProps {
  name: string;
  price: number;
  unit: string;
  icon: string | React.ReactNode;
  tag?: string;
  image?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, unit, icon, tag, image }) => {
  return (
    <div className="flex flex-col group p-4 bg-surface-container-lowest rounded-[12px] shadow-[0px_12px_32px_rgba(28,28,24,0.06)] hover:shadow-[0px_16px_48px_rgba(28,28,24,0.1)] transition-all border-none">
      <div className="relative bg-surface-container rounded-xl aspect-square mb-4 overflow-hidden border-none transition-shadow">
        <div className="w-full h-full flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
          {image ? <img src={image} className="w-full h-full object-contain p-4" alt={name} /> : icon}
        </div>
        <button className="absolute bottom-4 right-4 bg-gradient-to-br from-primary to-primary-container text-white p-2.5 rounded-lg shadow-lg active:scale-90 transition-transform">
          <span className="material-symbols-outlined text-[24px]">add</span>
        </button>
      </div>
      {tag && (
        <span className="text-[10px] font-bold text-secondary uppercase tracking-tighter mb-1">{tag}</span>
      )}
      <h4 className="font-headline font-bold text-base text-on-surface mb-1 truncate leading-tight">{name}</h4>
      <span className="text-sm text-outline mb-3 font-body">{unit}</span>
      <span className="text-xl font-extrabold text-primary font-headline mt-auto">Rs. {price}</span>
    </div>
  );
};

export default ProductCard;
