import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-12 pt-16 pb-12 border-t border-emerald-900/10 text-center">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div>
               <h3 className="font-headline font-bold text-xl mb-4 text-primary">BR Fresh</h3>
               <p className="text-outline-variant leading-relaxed">Bringing the authentic mandi experience to your doorstep with modern technology and local love.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-primary font-headline">Quick Links</h4>
              <ul className="space-y-2 text-outline">
                <li><Link to="/orders">My Orders</Link></li>
                <li><Link to="/">Stores</Link></li>
                <li><Link to="/">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-primary font-headline">Newsletter</h4>
              <div className="flex gap-2">
                <input className="bg-surface-container border-none rounded-xl px-4 w-full" placeholder="Your email" />
                <button className="bg-primary text-white px-4 py-2 rounded-xl font-bold">Join</button>
              </div>
            </div>
        </div>
        <div className="mt-12 text-xs text-outline-variant">© 2024 BR Fresh Private Limited</div>
    </footer>
  );
};

export default Footer;
