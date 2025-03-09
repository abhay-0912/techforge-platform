
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-medium animate-fade-down">
              Simplifying Development
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight animate-fade-up">
              Build, Connect, <span className="text-brand-500">Collaborate</span>
            </h1>
            
            <p className="text-lg text-muted-foreground animate-fade-up animation-delay-100">
              TechForge is your all-in-one platform for software solutions, 
              freelance opportunities, and tech community engagement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-up animation-delay-200">
              <Button className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-6 h-auto">
                Get Started
              </Button>
              <Button variant="outline" className="px-8 py-6 h-auto">
                Explore Marketplace
              </Button>
            </div>
            
            <div className="pt-6 animate-fade-up animation-delay-300">
              <p className="text-sm font-medium text-muted-foreground mb-3">
                Trusted by developers from
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="h-8 text-muted-foreground/70 font-semibold">Google</div>
                <div className="h-8 text-muted-foreground/70 font-semibold">Microsoft</div>
                <div className="h-8 text-muted-foreground/70 font-semibold">Amazon</div>
                <div className="h-8 text-muted-foreground/70 font-semibold">Meta</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-left animation-delay-300">
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-brand-400 to-cyan-300 opacity-30 blur-xl"></div>
            <div className="glass border rounded-xl shadow-soft relative overflow-hidden aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-transparent"></div>
              <div className="p-8 relative">
                <div className="flex flex-col gap-4">
                  <div className="w-16 h-16 rounded-full bg-brand-500 flex items-center justify-center text-white text-xl font-semibold">TF</div>
                  <div className="space-y-2">
                    <div className="h-3 bg-brand-200/70 rounded-full w-3/4"></div>
                    <div className="h-3 bg-brand-200/70 rounded-full w-1/2"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    <div className="h-24 bg-white/40 rounded-lg border border-white/20 p-4 flex flex-col justify-between">
                      <div className="w-8 h-8 rounded-md bg-brand-500/20 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-brand-500"></div>
                      </div>
                      <div className="space-y-1">
                        <div className="h-2 bg-brand-200 rounded-full w-2/3"></div>
                        <div className="h-2 bg-brand-200 rounded-full w-1/2"></div>
                      </div>
                    </div>
                    <div className="h-24 bg-white/40 rounded-lg border border-white/20 p-4 flex flex-col justify-between">
                      <div className="w-8 h-8 rounded-md bg-brand-500/20 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-brand-500"></div>
                      </div>
                      <div className="space-y-1">
                        <div className="h-2 bg-brand-200 rounded-full w-2/3"></div>
                        <div className="h-2 bg-brand-200 rounded-full w-1/2"></div>
                      </div>
                    </div>
                    <div className="h-24 bg-white/40 rounded-lg border border-white/20 p-4 flex flex-col justify-between">
                      <div className="w-8 h-8 rounded-md bg-brand-500/20 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-brand-500"></div>
                      </div>
                      <div className="space-y-1">
                        <div className="h-2 bg-brand-200 rounded-full w-2/3"></div>
                        <div className="h-2 bg-brand-200 rounded-full w-1/2"></div>
                      </div>
                    </div>
                    <div className="h-24 bg-white/40 rounded-lg border border-white/20 p-4 flex flex-col justify-between">
                      <div className="w-8 h-8 rounded-md bg-brand-500/20 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-brand-500"></div>
                      </div>
                      <div className="space-y-1">
                        <div className="h-2 bg-brand-200 rounded-full w-2/3"></div>
                        <div className="h-2 bg-brand-200 rounded-full w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
