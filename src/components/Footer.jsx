import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-4">
              Dilians<span className="text-primary">IT</span>
            </h3>
            <p className="text-sm text-muted-foreground max-w-sm">
              Innovative solutions in Web Development, AI/ML, and UI/UX design.
              Transforming ideas into digital reality.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Product</h4>
            <ul className="space-y-3 text-sm">
              {['Services', 'About Us', 'Career', 'Blog'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '')}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog Posts
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://github.com/dilians-it" 
                   className="text-muted-foreground hover:text-primary transition-colors"
                   target="_blank"
                   rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://twitter.com/diliansit"
                   className="text-muted-foreground hover:text-primary transition-colors"
                   target="_blank"
                   rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/dilians-it"
                   className="text-muted-foreground hover:text-primary transition-colors"
                   target="_blank"
                   rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/40 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} DiliansIT. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
