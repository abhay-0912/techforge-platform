
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass border rounded-xl p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">
                Ready to simplify your development workflow?
              </h3>
              <p className="text-muted-foreground">
                Join TechForge today and connect with a community of developers, resources, and opportunities.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <Button variant="outline" className="px-6 h-12">
                Learn More
              </Button>
              <Button className="bg-brand-500 hover:bg-brand-600 px-6 h-12">
                Get Started
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 rounded-md bg-brand-500 flex items-center justify-center text-white font-bold">TF</div>
              <span className="text-xl font-semibold tracking-tight">TechForge</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Streamlined development platform for software solutions, freelance marketplace, and community hub.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-3">
              <li><a href="#solutions" className="text-muted-foreground hover:text-foreground transition-colors">Software Solutions</a></li>
              <li><a href="#marketplace" className="text-muted-foreground hover:text-foreground transition-colors">Freelance Marketplace</a></li>
              <li><a href="#community" className="text-muted-foreground hover:text-foreground transition-colors">Community Hub</a></li>
              <li><a href="#admin" className="text-muted-foreground hover:text-foreground transition-colors">Admin Control</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Guides</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">API Reference</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TechForge. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
