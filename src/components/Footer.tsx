import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0F3D22] dark:bg-black w-full pt-16 pb-8 border-t border-emerald-800">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto">
                <div>
                    <span className="text-xl font-bold text-white mb-6 block font-headline">BR Fresh</span>
                    <p className="text-emerald-100/70 text-sm leading-relaxed font-body">
                        Bringing the local mandi experience to your fingertips. Freshness guaranteed from the stores you know.
                    </p>
                    <div className="flex gap-4 mt-8">
                        <a className="text-emerald-100/70 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">social_leaderboard</span></a>
                        <a className="text-emerald-100/70 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">photo_camera</span></a>
                        <a className="text-emerald-100/70 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">crossword</span></a>
                    </div>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-6">Company</h4>
                    <ul className="space-y-4">
                        <li><Link className="text-emerald-100/70 hover:text-white transition-colors text-sm font-body" to="/terms">Terms and Conditions</Link></li>
                        <li><Link className="text-emerald-100/70 hover:text-white transition-colors text-sm font-body" to="/privacy">Privacy Policy</Link></li>
                        <li><Link className="text-emerald-100/70 hover:text-white transition-colors text-sm font-body" to="/shipping">Shipping Policy</Link></li>
                        <li><Link className="text-emerald-100/70 hover:text-white transition-colors text-sm font-body" to="/refund">Refund Policy</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-6">Support</h4>
                    <ul className="space-y-4">
                        <li><Link className="text-emerald-100/70 hover:text-white transition-colors text-sm font-body" to="/contact">Contact Us</Link></li>
                        <li><a className="text-emerald-100/70 hover:text-white transition-colors text-sm font-body" href="#">FAQs</a></li>
                        <li><a className="text-emerald-100/70 hover:text-white transition-colors text-sm font-body" href="#">Partner with us</a></li>
                        <li><a className="text-emerald-100/70 hover:text-white transition-colors text-sm font-body" href="#">Delivery info</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-6">Newsletter</h4>
                    <p className="text-emerald-100/70 text-sm mb-4">Stay updated on fresh arrivals and local deals.</p>
                    <div className="flex bg-emerald-900/50 rounded-lg p-1">
                        <input className="bg-transparent border-none text-white text-sm focus:ring-0 flex-1 px-3 outline-none" placeholder="Email address" type="email" />
                        <button className="bg-secondary px-4 py-2 rounded-md text-white font-bold text-sm">Join</button>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-emerald-800 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-emerald-100/70 text-sm font-body text-center">
                    © 2024 BR Fresh Private Limited · <Link to="/privacy">Privacy Policy</Link> · <Link to="/terms">Terms of Service</Link>
                </p>
                <div className="flex gap-6">
                    <img className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all cursor-default" alt="Payments" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAExpd9c2DZkdlEdqD5hjMIdTBl9kCb1V7_qMiP98AY9uk9UC72_BdlWvZyuOG43vKtmEOqh3LlcPdK6LMZ7GFkqo5RFbpX9PwIImhUPmMWgfENcl6uSIY1-LNqCp5qFuIZ0UfALRTfFn6EOk4e7epfrdwPKs2ZWdRNay0A1MWw-Qc3tmepu8FOYFywmcw5khlsd0kk82x5vFkiySByCJkNPpcwKjRHsx7q_QDBhYNsQCwURC-bBpLYxJKpzgObxWrTpXklXlSr0Ycf"/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
