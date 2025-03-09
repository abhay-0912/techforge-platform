
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // In a real application, this would connect to a backend API
      // Here we're simulating registration and email notification
      if (name && email && password) {
        // Simulate API call to register user
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Send notification email (simulated)
        console.log(`New user signup: ${name} (${email})`);
        
        // In a real application, you would make an API call to your server
        // which would then send an email to abhaysrivastava9@proton.me
        
        localStorage.setItem("user", JSON.stringify({ 
          name, 
          email, 
          isLoggedIn: true 
        }));
        
        toast({
          title: "Account created",
          description: "Welcome to TechForge! Your account has been created successfully.",
        });
        
        navigate("/dashboard");
      } else {
        toast({
          variant: "destructive",
          title: "Signup failed",
          description: "Please fill in all required fields.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Signup error",
        description: "An error occurred during signup. Please try again.",
      });
      console.error("Signup error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-6 py-24">
        <div className="w-full max-w-md">
          <div className="glass border rounded-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Create an account</h1>
              <p className="text-muted-foreground">
                Join TechForge and start your journey
              </p>
            </div>

            <form onSubmit={handleSignup} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-brand-500 hover:bg-brand-600"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Sign up"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-brand-500 hover:text-brand-600 font-medium"
                >
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
