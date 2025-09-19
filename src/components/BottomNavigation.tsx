import { Home, Search, ShoppingCart, FileText, User } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  cartItemCount?: number;
}

export function BottomNavigation({ activeTab, onTabChange, cartItemCount = 0 }: BottomNavigationProps) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'cart', label: 'Cart', icon: ShoppingCart },
    { id: 'prescriptions', label: 'Scripts', icon: FileText },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[390px] bg-card border-t border-border">
      <div className="flex items-center justify-around px-2 py-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <Button
              key={tab.id}
              variant="ghost"
              className={`flex flex-col items-center gap-1 h-16 px-3 py-2 animate-scale-press ${
                isActive 
                  ? 'text-primary bg-primary/10' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => onTabChange(tab.id)}
            >
              <div className="relative">
                <Icon className="h-5 w-5" />
                {tab.id === 'cart' && cartItemCount > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-4 w-4 p-0 text-xs flex items-center justify-center"
                  >
                    {cartItemCount > 9 ? '9+' : cartItemCount}
                  </Badge>
                )}
              </div>
              <span className="text-xs leading-none">{tab.label}</span>
            </Button>
          );
        })}
      </div>
    </nav>
  );
}