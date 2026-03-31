import { Link } from 'react-router-dom';

interface StoreCardProps {
  id: string;
  name: string;
  distance: string;
  time: string;
  image: string;
  rating: string;
  categories: string[];
}

const StoreCard: React.FC<StoreCardProps> = ({ id, name, distance, time, image, rating, categories }) => {
  return (
    <Link to={`/store/${id}`} className="bg-surface-container-lowest p-4 rounded-[28px] shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden rounded-2xl mb-4">
        <img alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" src={image} />
        <div className="absolute top-4 left-4">
          <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Open</span>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm font-bold text-xs">
          <span className="material-symbols-outlined text-yellow-500 text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
          {rating}
        </div>
      </div>
      <h3 className="font-bold text-lg leading-tight mb-1 text-primary">{name}</h3>
      <div className="flex flex-wrap gap-2 mb-4 mt-1">
        {categories.map((cat, i) => (
           <span key={i} className="bg-surface-container px-2 py-0.5 rounded text-[10px] font-bold text-outline uppercase">{cat}</span>
        ))}
      </div>
      <div className="mt-auto flex items-center gap-2 text-xs text-outline">
        <span className="material-symbols-outlined text-sm text-secondary">schedule</span>
        {time} • {distance}
      </div>
    </Link>
  );
};

export default StoreCard;
