import { useState } from "react";
import { Search, ShoppingCart, User, Bell, Zap, Menu, MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ThemeSelector } from "./ThemeSelector";

interface DesktopHeaderProps {
  variant?: 'expanded' | 'sticky' | 'compact';
  cartItemCount?: number;
  onSearch?: (query: string) => void;
  onNavigate?: (page: string, data?: any) => void;
  currentTheme?: string;
  onThemeChange?: (theme: string) => void;
}

export function DesktopHeader({ 
  variant = 'expanded',
  cartItemCount = 0,
  onSearch,
  onNavigate,
  currentTheme = 'default',
  onThemeChange
}: DesktopHeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  const isCompact = variant === 'compact';
  const isSticky = variant === 'sticky';

  return (
    <header className={`w-full bg-background/95 backdrop-blur-sm border-b border-border ${isSticky ? 'sticky top-0 z-50' : ''}`}>
      <div className="content-wrapper">
        {/* Top Bar - Contact Info (only on expanded) */}
        {variant === 'expanded' && (
          <div className="flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Emergency: 1800-MEDIQUICK</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Free delivery in 30 mins</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => onNavigate?.('help')}>
                Help & Support
              </Button>
              <ThemeSelector 
                currentTheme={currentTheme}
                onThemeChange={onThemeChange || (() => {})}
              />
            </div>
          </div>
        )}

        {/* Main Header */}
        <div className={`flex items-center justify-between ${isCompact ? 'py-3' : 'py-4'}`}>
          {/* Logo */}
          <div className="flex items-center gap-8">
            <div 
              className="flex items-center gap-2 cursor-pointer" 
              onClick={() => onNavigate?.('home')}
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">M</span>
              </div>
              <span className="text-xl font-bold text-foreground">MediQuick</span>
            </div>

            {/* Navigation Menu */}
            {!isCompact && (
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Medicines</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-2">
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          onClick={() => onNavigate?.('category', { category: 'prescription' })}
                        >
                          <div className="text-sm font-medium leading-none">Prescription</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Upload prescription & order medicines
                          </p>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          onClick={() => onNavigate?.('category', { category: 'otc' })}
                        >
                          <div className="text-sm font-medium leading-none">OTC Medicines</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Over-the-counter medications
                          </p>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          onClick={() => onNavigate?.('category', { category: 'vitamins' })}
                        >
                          <div className="text-sm font-medium leading-none">Vitamins & Supplements</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Health supplements & vitamins
                          </p>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          onClick={() => onNavigate?.('subscriptions')}
                        >
                          <div className="text-sm font-medium leading-none">Subscriptions</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Auto-refill your regular medicines
                          </p>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Health Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[400px]">
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          onClick={() => onNavigate?.('ai-symptom-checker')}
                        >
                          <div className="text-sm font-medium leading-none">🤖 AI Symptom Checker</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Check symptoms & connect with doctors
                          </p>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          onClick={() => onNavigate?.('teleconsult')}
                        >
                          <div className="text-sm font-medium leading-none">📱 Teleconsultation</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Online doctor consultations
                          </p>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          onClick={() => onNavigate?.('health-insights')}
                        >
                          <div className="text-sm font-medium leading-none">📊 Health Insights</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Track your health & expenses
                          </p>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
                      onClick={() => onNavigate?.('community')}
                    >
                      Community
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
                      onClick={() => onNavigate?.('sustainability')}
                    >
                      🌱 Green Pharma
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            )}
          </div>

          {/* Search Bar */}
          {!isCompact && (
            <div className="flex-1 max-w-lg mx-8">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search medicines, health products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 h-10 w-full"
                />
              </form>
            </div>
          )}

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Emergency Button */}
            <Popover open={isEmergencyOpen} onOpenChange={setIsEmergencyOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">
                  <Zap className="h-4 w-4 mr-2" />
                  Emergency
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80" align="end">
                <div className="space-y-3">
                  <h4 className="font-medium">Emergency Services</h4>
                  <div className="grid gap-2">
                    <Button variant="ghost" className="justify-start h-auto p-3">
                      <Phone className="h-4 w-4 mr-3 text-destructive" />
                      <div className="text-left">
                        <div className="font-medium">Call Emergency</div>
                        <div className="text-xs text-muted-foreground">24/7 medical helpline</div>
                      </div>
                    </Button>
                    <Button variant="ghost" className="justify-start h-auto p-3">
                      <MessageCircle className="h-4 w-4 mr-3 text-primary" />
                      <div className="text-left">
                        <div className="font-medium">Urgent Consultation</div>
                        <div className="text-xs text-muted-foreground">Connect with doctor now</div>
                      </div>
                    </Button>
                    <Button variant="ghost" className="justify-start h-auto p-3">
                      <Zap className="h-4 w-4 mr-3 text-warning" />
                      <div className="text-left">
                        <div className="font-medium">Emergency Medicines</div>
                        <div className="text-xs text-muted-foreground">Fast-track delivery</div>
                      </div>
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs flex items-center justify-center">
                3
              </Badge>
            </Button>

            {/* Cart */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => onNavigate?.('cart')}
            >
              <ShoppingCart className="h-4 w-4" />
              {cartItemCount > 0 && (
                <Badge variant="default" className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs flex items-center justify-center">
                  {cartItemCount > 9 ? '9+' : cartItemCount}
                </Badge>
              )}
            </Button>

            {/* User Account */}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => onNavigate?.('profile')}
            >
              <User className="h-4 w-4" />
            </Button>

            {/* Mobile Menu (hidden on desktop) */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}