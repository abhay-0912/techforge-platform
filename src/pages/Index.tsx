
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ConnectWithCommunity from "@/components/ConnectWithCommunity";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <ConnectWithCommunity />
      <Footer />
    </div>
  );
};

export default Index;
