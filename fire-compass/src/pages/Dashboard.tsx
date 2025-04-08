import {
    BarChart3,
    CreditCard,
    Settings,
    PiggyBank,
    Goal,
    Bell,
    User,
    LogOut,
    Wallet,
    TrendingUp,
    HelpCircle,
  } from "lucide-react";
  import { cn } from "@/lib/utils";
  import { Button } from "@/components/ui/button";
  import { Card } from "@/components/ui/card";
  import { useState, useEffect } from "react";
  
  const sidebarItems = [
    { icon: BarChart3, label: "Dashboard", id: "dashboard" },
    { icon: Wallet, label: "Expenses", id: "expenses" },
    { icon: CreditCard, label: "Credit Score", id: "credit" },
    { icon: PiggyBank, label: "Savings", id: "savings" },
    { icon: TrendingUp, label: "Investments", id: "investments" },
    { icon: Goal, label: "Goals", id: "goals" },
    { icon: Bell, label: "Notifications", id: "notifications" },
    { icon: User, label: "Profile", id: "profile" },
    { icon: Settings, label: "Settings", id: "settings" },
    { icon: HelpCircle, label: "Help", id: "help" },
  ];
  
  export const Dashboard = () => {
    const [activeSection, setActiveSection] = useState("dashboard");
    const [animate, setAnimate] = useState(false);
  
    useEffect(() => {
      setAnimate(true);
    }, []);
  
    return (
      <div className="flex h-screen bg-background">
        {/* Sidebar */}
        <div className="w-64 border-r border-border bg-card">
          <div className="p-6">
            <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent animate-pulse-slow">
              FamFire
            </h2>
          </div>
          <nav className="px-4 py-2">
            {sidebarItems.map((item, _) => (
              <Button
                key={item.id}
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-3 mb-1 sidebar-item",
                  activeSection === item.id && "bg-primary/10 text-primary",
                  animate && "animate-slide-in"
                )}
                style={{ animationDelay: `Rs {index * 0.1}s` }}
                onClick={() => setActiveSection(item.id)}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Button>
            ))}
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 mb-1 text-destructive hover:text-destructive sidebar-item"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </nav>
        </div>
  
        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <header className="border-b border-border p-4 bg-card/50 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                {sidebarItems.find((item) => item.id === activeSection)?.label}
              </h1>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" className="animate-pulse-slow">
                  <Bell className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:scale-105 transition-transform">
                  <User className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </header>
  
          <main className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {[
                { title: "Net Worth", value: "Rs 245,000", change: "+12.5% from last month", icon: Wallet },
                { title: "Monthly Savings", value: "Rs 3,500", change: "On track to reach goal", icon: PiggyBank },
                { title: "Credit Score", value: "785", change: "Excellent", icon: CreditCard }
              ].map((stat, index) => (
                <Card 
                  key={index} 
                  className={cn(
                    "p-6 glass-card hover:scale-105 transition-all duration-300",
                    animate && "animate-fade-in"
                  )}
                  style={{ animationDelay: `Rs {index * 0.2}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-semibold">{stat.title}</h3>
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.change}</p>
                </Card>
              ))}
            </div>
  
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className={cn(
                "p-6 glass-card",
                animate && "animate-fade-in"
              )} style={{ animationDelay: "0.6s" }}>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Wallet className="h-5 w-5 text-primary" />
                  Recent Transactions
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "Grocery Store", amount: -120.50, date: "Today" },
                    { name: "Salary Deposit", amount: 5000, date: "Yesterday" },
                    { name: "Electric Bill", amount: -85.20, date: "2 days ago" },
                  ].map((transaction, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "flex items-center justify-between py-2 border-b border-border last:border-0 hover:bg-primary/5 transition-coloRs  rounded-lg p-2",
                        animate && "animate-slide-in"
                      )}
                      style={{ animationDelay: `Rs {0.8 + i * 0.1}s` }}
                    >
                      <div>
                        <p className="font-medium">{transaction.name}</p>
                        <p className="text-sm text-muted-foreground">{transaction.date}</p>
                      </div>
                      <p className={cn(
                        "font-medium",
                        transaction.amount > 0 ? "text-green-500" : "text-red-500"
                      )}>
                        {transaction.amount > 0 ? "+" : ""}{transaction.amount.toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
  
              <Card className={cn(
                "p-6 glass-card",
                animate && "animate-fade-in"
              )} style={{ animationDelay: "0.6s" }}>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Goal className="h-5 w-5 text-primary" />
                  F.I.R.E Progress
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Savings Goal", progress: 75 },
                    { label: "Investment Goal", progress: 60 },
                    { label: "Debt Reduction", progress: 90 }
                  ].map((goal, i) => (
                    <div 
                      key={i}
                      className={cn(
                        animate && "animate-fade-in"
                      )}
                      style={{ animationDelay: `Rs {1 + i * 0.1}s` }}
                    >
                      <div className="flex justify-between mb-2">
                        <span>{goal.label}</span>
                        <span>{goal.progress}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full progress-bar">
                        <div 
                          className="h-full bg-primary rounded-full animate-progress-fill"
                          style={{ width: `Rs {goal.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </main>
        </div>
      </div>
    );
  };