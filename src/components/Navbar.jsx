import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'Projects', path: '/projects' },
    { title: 'Services', path: '/services' },
    { title: 'Career', path: '/career' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'nav-glass' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/"
            className="relative flex items-center space-x-2"
          >
            <span className="text-xl font-bold">
              Dilians<span className="text-primary">IT</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm rounded-lg relative transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary font-medium'
                    : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.title}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                    initial={false}
                  />
                )}
              </Link>
            ))}
            
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg hover:bg-primary/5 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaMoon className="w-5 h-5" /> : <FaSun className="w-5 h-5" />}
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-primary/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
              <span className={`block w-5 h-0.5 bg-current transform transition-all ${isOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <span className={`block w-5 h-0.5 bg-current transition-all ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-current transform transition-all ${isOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/10"
          >
            <div className="px-2 py-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md ${
                    location.pathname === item.path
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <button
                onClick={() => {
                  setTheme(theme === 'dark' ? 'light' : 'dark');
                  setIsOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/5"
              >
                {theme === 'dark' ? (
                  <span className="flex items-center gap-2">
                    <FaMoon className="w-4 h-4" /> Dark Mode
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <FaSun className="w-4 h-4" /> Light Mode
                  </span>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
