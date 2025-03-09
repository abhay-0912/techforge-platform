
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-brand-500 flex items-center justify-center text-white font-bold">TF</div>
          <span className="text-xl font-semibold tracking-tight">TechForge</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium hover:text-brand-600 transition-colors">
            Features
          </a>
          <a href="#solutions" className="text-sm font-medium hover:text-brand-600 transition-colors">
            Solutions
          </a>
          <a href="#marketplace" className="text-sm font-medium hover:text-brand-600 transition-colors">
            Marketplace
          </a>
          <a href="#community" className="text-sm font-medium hover:text-brand-600 transition-colors">
            Community
          </a>
          <Button variant="outline" className="ml-2" size="sm">
            Login
          </Button>
          <Button className="bg-brand-500 hover:bg-brand-600" size="sm">
            Sign Up
          </Button>
        </nav>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 glass border-t animate-fade-down">
          <nav className="flex flex-col p-4 max-w-7xl mx-auto">
            <a 
              href="#features" 
              className="px-4 py-3 text-sm hover:bg-secondary rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#solutions" 
              className="px-4 py-3 text-sm hover:bg-secondary rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solutions
            </a>
            <a 
              href="#marketplace" 
              className="px-4 py-3 text-sm hover:bg-secondary rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Marketplace
            </a>
            <a 
              href="#community" 
              className="px-4 py-3 text-sm hover:bg-secondary rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Community
            </a>
            <div className="flex gap-2 p-4">
              <Button variant="outline" className="w-full" size="sm">
                Login
              </Button>
              <Button className="w-full bg-brand-500 hover:bg-brand-600" size="sm">
                Sign Up
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
