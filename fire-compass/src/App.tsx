import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FireAnimation } from "@/components/FireAnimation";
import {
  BarChart3,
  CreditCard,
  PiggyBank,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(251,146,60,0.05),transparent_50%)]" />
        </div>
        
        <header className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="relative mb-8">
              <FireAnimation />
              <h1 className="text-6xl font-bold bg-gradient-to-r from-orange-500 via-primary to-yellow-500 bg-clip-text text-transparent mt-8">
                Fam F.I.R.E
              </h1>
            </div>
            <p className="text-2xl text-muted-foreground mb-12 max-w-2xl">
              Ignite your path to Financial Independence and Early Retirement with our advanced AI-powered guidance system
            </p>
            <div className="flex gap-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
        </header>
      </div>

      {/* Features Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/50 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
            Your Financial Freedom Toolkit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CreditCard,
                title: "Credit Score Optimization",
                description: "AI-powered recommendations to boost your credit score and unlock premium financial opportunities."
              },
              {
                icon: BarChart3,
                title: "Smart Expense Tracking",
                description: "Real-time analysis of your spending patterns with intelligent optimization suggestions."
              },
              {
                icon: PiggyBank,
                title: "Wealth Building Strategy",
                description: "Personalized investment and savings plans tailored to your F.I.R.E goals."
              }
            ].map((feature, index) => (
              <Card key={index} className="glass-card p-8 backdrop-blur-xl hover:bg-primary/5 transition-all duration-500 animate-float group" style={{ animationDelay: `${index * 0.2}s` }}>
                <feature.icon className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,146,60,0.1),transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { value: "$2.5M+", label: "Average Retirement Savings" },
              { value: "45+", label: "Early Retirement Age" },
              { value: "98%", label: "User Success Rate" }
            ].map((stat, index) => (
              <div key={index} className="p-8 glass-card rounded-xl">
                <h3 className="text-5xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent mb-4">
                  {stat.value}
                </h3>
                <p className="text-lg text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background to-background" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
            Ready to Ignite Your Financial Future?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands who have transformed their financial destiny with F.I.R.E Compass.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
            Begin Your F.I.R.E Journey
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-primary/10">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 F.I.R.E Compass. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;