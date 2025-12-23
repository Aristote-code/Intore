import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Lightbulb } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'The Experience', path: '/experiences' },
    { name: 'Accommodation', path: '/accommodation' },
    { name: 'Conferencing', path: '/conferencing' },
    { name: 'Gallery', path: '/gallery' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-green bg-brand-sand selection:bg-brand-gold selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out border-b border-white/10 ${
          scrolled || isMenuOpen ? 'bg-white shadow-sm py-4 border-brand-green/5' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo Recreated from Brand Asset */}
            <Link to="/" className="flex flex-col group z-50">
                <div className="flex items-end leading-none">
                    {/* The 'I' represented by a Lightbulb */}
                    <div className="mb-[2px] mr-[1px]">
                         <Lightbulb 
                            size={28} 
                            strokeWidth={2} 
                            className={`transition-colors ${scrolled || isMenuOpen ? 'text-brand-green' : 'text-white'}`}
                            fill={scrolled || isMenuOpen ? '#C9A050' : '#C9A050'} /* Warm Yellow Fill */
                            color={scrolled || isMenuOpen ? '#1A2E26' : '#FFFFFF'} /* Outline matches text */
                         />
                    </div>
                    <span className={`font-serif text-3xl font-bold tracking-widest uppercase transition-colors ${scrolled || isMenuOpen ? 'text-brand-green' : 'text-white'}`}>
                        NTORE
                    </span>
                </div>
                <span className={`text-[8px] uppercase tracking-[0.35em] pl-1 transition-colors ${scrolled || isMenuOpen ? 'text-brand-earth' : 'text-white/80'}`}>
                    Learning Community
                </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs font-medium uppercase tracking-widest transition-all hover:text-brand-gold ${
                    isActive(link.path) ? 'text-brand-gold' : (scrolled ? 'text-brand-green' : 'text-white/90 hover:text-white')
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/book"
                className={`px-6 py-2 border text-xs uppercase tracking-widest font-medium transition-all duration-300 ${
                  scrolled 
                    ? 'border-brand-green text-brand-green hover:bg-brand-green hover:text-white' 
                    : 'border-white text-white hover:bg-white hover:text-brand-green'
                }`}
              >
                Book Your Stay
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center z-50">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`focus:outline-none transition-colors ${scrolled || isMenuOpen ? 'text-brand-green' : 'text-white'}`}
              >
                {isMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Drawer - Full Screen Overlay */}
        <div className={`fixed inset-0 bg-brand-sand z-40 transform transition-transform duration-500 ease-in-out flex flex-col justify-center items-center ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col space-y-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-serif text-3xl text-brand-green hover:text-brand-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
               <Link
                  to="/packages"
                  onClick={() => setIsMenuOpen(false)}
                  className="font-serif text-3xl text-brand-green hover:text-brand-gold transition-colors"
                >
                  Packages
                </Link>
               <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="font-serif text-3xl text-brand-green hover:text-brand-gold transition-colors"
                >
                  Contact
                </Link>
              <div className="pt-8">
                <Link
                  to="/book"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-block px-10 py-4 border border-brand-green text-brand-green uppercase tracking-widest hover:bg-brand-green hover:text-white transition-all"
                >
                  Book Your Stay
                </Link>
              </div>
            </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer - Dark Luxury */}
      <footer className="bg-brand-green text-brand-sand pt-24 pb-12 border-t border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 text-center md:text-left">
            <div className="space-y-6">
              <div>
                 {/* Footer Logo */}
                 <div className="flex items-end leading-none mb-2 justify-center md:justify-start">
                    <Lightbulb size={24} className="text-brand-sand mb-1 mr-1" fill="#C9A050" color="#F9F7F2" />
                    <span className="font-serif text-2xl font-bold tracking-widest uppercase text-brand-sand">NTORE</span>
                 </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold block">Learning Community</span>
              </div>
              <p className="text-brand-sand/60 font-light leading-relaxed max-w-sm mx-auto md:mx-0">
                A sanctuary for connection, learning, and renewal in the heart of Rwanda’s Eastern Province.
              </p>
              <div className="flex space-x-6 justify-center md:justify-start pt-4">
                <a href="#" className="text-brand-sand/60 hover:text-brand-gold transition-colors"><Instagram size={20} strokeWidth={1} /></a>
                <a href="#" className="text-brand-sand/60 hover:text-brand-gold transition-colors"><Facebook size={20} strokeWidth={1} /></a>
              </div>
            </div>

            <div className="flex flex-col md:items-center">
              <h4 className="font-serif text-xl mb-8">Discover</h4>
              <ul className="space-y-4 font-light text-brand-sand/70 text-sm tracking-wide">
                <li><Link to="/accommodation" className="hover:text-brand-gold transition-colors">Accommodation</Link></li>
                <li><Link to="/experiences" className="hover:text-brand-gold transition-colors">Experiences</Link></li>
                <li><Link to="/conferencing" className="hover:text-brand-gold transition-colors">Conferencing</Link></li>
                <li><Link to="/packages" className="hover:text-brand-gold transition-colors">Offers</Link></li>
                <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div className="flex flex-col md:items-end">
              <h4 className="font-serif text-xl mb-8">Contact Us</h4>
              <ul className="space-y-4 font-light text-brand-sand/70 text-sm tracking-wide text-center md:text-right">
                <li className="flex flex-col items-center md:items-end">
                  <span className="block text-brand-gold uppercase text-[10px] tracking-widest mb-1">Address</span>
                  <span>Rwamagana District, Rwanda</span>
                </li>
                <li className="flex flex-col items-center md:items-end">
                  <span className="block text-brand-gold uppercase text-[10px] tracking-widest mb-1">Email</span>
                  <a href="mailto:visit@intore.rw" className="hover:text-brand-gold">visit@intore.rw</a>
                </li>
                <li className="flex flex-col items-center md:items-end">
                  <span className="block text-brand-gold uppercase text-[10px] tracking-widest mb-1">Phone</span>
                  <span>+250 788 000 000</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-xs text-brand-sand/40 uppercase tracking-widest font-light">
            <p>&copy; {new Date().getFullYear()} Intore Learning Community • TIN 121973074</p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <Link to="/privacy" className="hover:text-brand-gold">Privacy</Link>
              <Link to="/terms" className="hover:text-brand-gold">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;