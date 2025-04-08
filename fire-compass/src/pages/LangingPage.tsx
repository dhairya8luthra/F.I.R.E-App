import { useNavigate } from 'react-router-dom';
import { BarChart3, CreditCard, PiggyBank, LogIn } from "lucide-react";
import { FireAnimation } from '@/components/FireAnimation';
export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-black to-black" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(251,146,60,0.05),transparent_50%)]" />
        </div>
        
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 p-6">
          <div className="container mx-auto flex justify-end">
            <button
              onClick={() => navigate('/login')}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white transition-all duration-300"
            >
              <LogIn className="w-4 h-4" />
              Sign In
            </button>
          </div>
        </nav>
        
        <header className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div>
                <FireAnimation  />
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent mt-8">
              Fam F.I.R.E
            </h1>
            <p className="text-2xl text-orange-200/60 mb-12 max-w-2xl">
              Ignite your path to Financial Independence and Early Retirement with our advanced AI-powered guidance system
            </p>
            <div className="flex gap-6">
              <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg text-lg transition-all duration-300">
                Start Your Journey
              </button>
              <button className="px-8 py-3 border border-orange-500 text-orange-500 hover:bg-orange-500/10 rounded-lg text-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Features Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/20 to-black" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
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
              <div key={index} className="p-8 rounded-xl bg-black/40 border border-orange-500/20 backdrop-blur-xl hover:bg-orange-500/5 transition-all duration-500">
                <feature.icon className="h-12 w-12 text-orange-500 mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-orange-200/60">{feature.description}</p>
              </div>
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
              <div key={index} className="p-8 rounded-xl bg-black/40 border border-orange-500/20 backdrop-blur-xl">
                <h3 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-4">
                  {stat.value}
                </h3>
                <p className="text-lg text-orange-200/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-black to-black" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Ready to Ignite Your Financial Future?
          </h2>
          <p className="text-xl text-orange-200/60 mb-12 max-w-2xl mx-auto">
            Join thousands who have transformed their financial destiny with F.I.R.E Compass.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg text-lg transition-all duration-300">
            Begin Your F.I.R.E Journey
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-orange-500/10">
        <div className="container mx-auto px-4 text-center text-orange-200/40">
          <p>© 2025 F.I.R.E Compass. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}