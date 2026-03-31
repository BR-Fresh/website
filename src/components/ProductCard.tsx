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
    <div className="flex flex-col group p-4 bg-surface-container-lowest rounded-3xl hover:shadow-xl transition-all border border-transparent hover:border-outline-variant/10">
      <div className="relative bg-surface-container-low rounded-[28px] aspect-square mb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="w-full h-full flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
          {image ? <img src={image} className="w-full h-full object-contain p-4" alt={name} /> : icon}
        </div>
        <button className="absolute bottom-4 right-4 bg-secondary text-white p-2 rounded-xl shadow-lg active:scale-90 transition-transform">
          <span className="material-symbols-outlined text-[24px]">add</span>
        </button>
      </div>
      {tag && (
        <span className="text-[10px] font-bold text-secondary uppercase tracking-tighter mb-1">{tag}</span>
      )}
      <h4 className="font-bold text-base text-on-surface mb-1 truncate">{name}</h4>
      <span className="text-sm text-outline mb-3">{unit}</span>
      <span className="text-xl font-extrabold text-primary font-headline mt-auto font-headline">Rs. {price}</span>
    </div>
  );
};

export default ProductCard;
