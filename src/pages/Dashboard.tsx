
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [user, setUser] = useState<{ name?: string; email: string } | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate("/");
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="glass border rounded-xl p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold mb-2">Welcome, {user.name || "User"}!</h1>
                <p className="text-muted-foreground">Your TechForge dashboard</p>
              </div>
              <Button 
                variant="outline" 
                onClick={handleLogout}
                className="self-start"
              >
                Log out
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass bg-secondary/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Software Solutions</h3>
                <p className="text-muted-foreground mb-4">Explore our curated software solutions</p>
                <Button className="bg-brand-500 hover:bg-brand-600 w-full">
                  Browse Solutions
                </Button>
              </div>
              
              <div className="glass bg-secondary/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Freelance Marketplace</h3>
                <p className="text-muted-foreground mb-4">Find freelance opportunities or hire talent</p>
                <Button className="bg-brand-500 hover:bg-brand-600 w-full">
                  Open Marketplace
                </Button>
              </div>
              
              <div className="glass bg-secondary/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Community Hub</h3>
                <p className="text-muted-foreground mb-4">Connect with other developers</p>
                <Button className="bg-brand-500 hover:bg-brand-600 w-full">
                  Join Discussions
                </Button>
              </div>
            </div>
          </div>
          
          <div className="glass border rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Connect with our community</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href="https://discord.gg/7bWtj887" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass bg-secondary/30 rounded-lg p-6 hover:bg-secondary/50 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2">Join our Discord</h3>
                <p className="text-muted-foreground">Connect with developers in our Discord community</p>
              </a>
              
              <a 
                href="https://www.instagram.com/logic_loom_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass bg-secondary/30 rounded-lg p-6 hover:bg-secondary/50 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2">Follow on Instagram</h3>
                <p className="text-muted-foreground">Follow our Instagram for updates and insights</p>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
