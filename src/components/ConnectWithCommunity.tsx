
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, MessageCircle, Github } from "lucide-react";

const ConnectWithCommunity = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30" id="community">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect with Our Community</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            TechForge isn't just a community—it's a revolution. Join our growing network of developers, 
            cybersecurity enthusiasts, and tech innovators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
          <div className="glass border rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">👑 Forge Master</h3>
            <p className="text-muted-foreground">Admins & Founders who oversee the community</p>
          </div>
          <div className="glass border rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">⚡ Tech Elite</h3>
            <p className="text-muted-foreground">Trusted contributors and industry experts</p>
          </div>
          <div className="glass border rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">🔥 Code Warrior</h3>
            <p className="text-muted-foreground">Experienced developers and cybersecurity pros</p>
          </div>
          <div className="glass border rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">🌱 Rookie Dev</h3>
            <p className="text-muted-foreground">Newcomers learning & growing with the community</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <a 
            href="https://discord.gg/7bWtj887" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center glass border rounded-xl p-8 hover:shadow-md transition-all hover:-translate-y-1"
          >
            <MessageCircle className="h-12 w-12 text-brand-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Discord</h3>
            <p className="text-center text-muted-foreground mb-4">
              Join discussions, get help, and collaborate with the community.
            </p>
            <Button className="bg-brand-500 hover:bg-brand-600 mt-auto">Join Discord</Button>
          </a>

          <a 
            href="https://www.instagram.com/logic_loom_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center glass border rounded-xl p-8 hover:shadow-md transition-all hover:-translate-y-1"
          >
            <Instagram className="h-12 w-12 text-brand-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instagram</h3>
            <p className="text-center text-muted-foreground mb-4">
              Follow us for updates, showcases, and behind-the-scenes content.
            </p>
            <Button className="bg-brand-500 hover:bg-brand-600 mt-auto">Follow Us</Button>
          </a>

          <a 
            href="https://github.com/TechForge-Dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center glass border rounded-xl p-8 hover:shadow-md transition-all hover:-translate-y-1"
          >
            <Github className="h-12 w-12 text-brand-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">GitHub</h3>
            <p className="text-center text-muted-foreground mb-4">
              Check out our open source projects and contribute to our codebase.
            </p>
            <Button className="bg-brand-500 hover:bg-brand-600 mt-auto">Follow Us</Button>
          </a>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Why Join TechForge?</h3>
            <ul className="flex flex-col gap-3 text-left max-w-lg mx-auto">
              <li className="flex items-start gap-2">
                <span className="text-brand-500 font-bold">✅</span> 
                <span>Learn from experts in cybersecurity, AI, blockchain, and software development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-500 font-bold">✅</span> 
                <span>Network with freelancers and potential job recruiters</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-500 font-bold">✅</span> 
                <span>Participate in hackathons and coding challenges</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-500 font-bold">✅</span> 
                <span>Stay updated on tech trends and industry insights</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-500 font-bold">✅</span> 
                <span>Have fun! Because tech isn't just work—it's a passion</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithCommunity;
