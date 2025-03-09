
import { cn } from "@/lib/utils";

const featuresList = [
  {
    id: 'solutions',
    title: 'Software Solutions',
    description: 'Discover and download curated software tools and solutions for your development needs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    ),
    color: 'bg-indigo-500',
    items: [
      'Comprehensive software catalog',
      'Verified and secure downloads',
      'Developer reviews and ratings',
      'Regular updates and version control'
    ]
  },
  {
    id: 'marketplace',
    title: 'Freelance Marketplace',
    description: 'Connect with skilled developers or find projects that match your expertise.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: 'bg-cyan-500',
    items: [
      'Talent matching algorithms',
      'Secure payment processing',
      'Project milestone tracking',
      'Verified developer profiles'
    ]
  },
  {
    id: 'community',
    title: 'Community Hub',
    description: 'Join a thriving community of developers to share knowledge and collaborate.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M17 14V2" />
        <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
      </svg>
    ),
    color: 'bg-rose-500',
    items: [
      'Discussion forums and Q&A',
      'Knowledge sharing resources',
      'Live coding events and challenges',
      'Mentorship opportunities'
    ]
  },
  {
    id: 'admin',
    title: 'Full Admin Control',
    description: 'Comprehensive admin panel for complete content and user management.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0 1.32 4.24 2.5 2.5 0 0 0 1.98 3A2.5 2.5 0 0 0 12 19.5a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 1.98-2.94 2.5 2.5 0 0 0-1.32-4.28 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5Z" />
        <path d="M12 12v.01" />
      </svg>
    ),
    color: 'bg-amber-500',
    items: [
      'Content moderation tools',
      'User management and permissions',
      'Activity monitoring and analytics',
      'Email notifications and reporting'
    ]
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-4 animate-fade-down">
            Core Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">
            Everything you need to succeed
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-up animation-delay-100">
            TechForge offers a complete ecosystem for developers to find resources, 
            connect with opportunities, and grow their skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-up animation-delay-200">
          {featuresList.map((feature, index) => (
            <div 
              key={feature.id}
              id={feature.id}
              className={cn(
                "glass border rounded-xl p-8 transition-all duration-300 hover:translate-y-[-4px]",
                "hover:shadow-md"
              )}
            >
              <div className="flex items-start gap-4">
                <div className={cn("p-2.5 rounded-lg text-white", feature.color)}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                  
                  <ul className="space-y-3">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="rounded-full bg-brand-100 text-brand-700 p-1 mt-0.5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
