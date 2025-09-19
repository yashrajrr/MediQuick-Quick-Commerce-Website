import { useState, useEffect } from "react";
import { Toaster } from "./components/ui/sonner";
import { DesktopHomepage } from "./components/DesktopHomepage";
import { toast } from "sonner@2.0.3";

type AppScreen = 'homepage' | 'search' | 'cart' | 'product' | 'prescription-upload' | 'profile' | 'ai-symptom-checker' | 'health-insights' | 'community' | 'sustainability' | 'teleconsult' | 'emergency';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('homepage');
  const [cartItems, setCartItems] = useState<{[key: string]: number}>({});
  const [currentTheme, setCurrentTheme] = useState('default');

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    root.className = root.className.replace(/theme-\w+/g, '');
    
    if (currentTheme === 'gradient') {
      root.classList.add('theme-gradient');
    } else if (currentTheme === 'dark') {
      root.classList.add('theme-dark');
    }
    // Default theme (clinical) doesn't need a class
  }, [currentTheme]);

  const handleNavigate = (screen: string, data?: any) => {
    setCurrentScreen(screen as AppScreen);
    
    // Show placeholder toast for unimplemented screens
    if (!['homepage'].includes(screen)) {
      toast.info(`Navigating to ${screen}`, {
        description: `${screen} functionality coming soon`,
        duration: 2000,
      });
    }
  };

  const handleAddToCart = (productId: string, quantity: number) => {
    setCartItems(prev => ({
      ...prev,
      [productId]: quantity
    }));
    
    toast.success("Added to cart", {
      description: "Product has been added to your cart",
      duration: 2000,
    });
  };

  const cartItemCount = Object.values(cartItems).reduce((sum, quantity) => sum + quantity, 0);

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'homepage':
        return (
          <DesktopHomepage
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            cartItemCount={cartItemCount}
            currentTheme={currentTheme}
            onThemeChange={setCurrentTheme}
          />
        );
      
      case 'search':
        return (
          <div className="desktop-container min-h-screen bg-background p-8">
            <div className="content-wrapper text-center py-20">
              <h1 className="text-3xl font-bold mb-4">Search Results</h1>
              <p className="text-muted-foreground">Advanced search functionality with filters coming soon...</p>
            </div>
          </div>
        );
      
      case 'cart':
        return (
          <div className="desktop-container min-h-screen bg-background p-8">
            <div className="content-wrapper text-center py-20">
              <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
              <p className="text-muted-foreground">
                {cartItemCount === 0 
                  ? "Your cart is empty" 
                  : `${cartItemCount} items in cart`
                }
              </p>
            </div>
          </div>
        );
      
      case 'ai-symptom-checker':
        return (
          <div className="desktop-container min-h-screen bg-background p-8">
            <div className="content-wrapper text-center py-20">
              <h1 className="text-3xl font-bold mb-4">🤖 AI Symptom Checker</h1>
              <p className="text-muted-foreground">AI-powered symptom analysis and doctor connect feature coming soon...</p>
            </div>
          </div>
        );
      
      case 'health-insights':
        return (
          <div className="desktop-container min-h-screen bg-background p-8">
            <div className="content-wrapper text-center py-20">
              <h1 className="text-3xl font-bold mb-4">📊 Health Insights</h1>
              <p className="text-muted-foreground">Comprehensive health tracking dashboard coming soon...</p>
            </div>
          </div>
        );
      
      case 'sustainability':
        return (
          <div className="desktop-container min-h-screen bg-background p-8">
            <div className="content-wrapper text-center py-20">
              <h1 className="text-3xl font-bold mb-4">🌱 Green Pharma Initiative</h1>
              <p className="text-muted-foreground">Sustainable medicine packaging and recycling program details coming soon...</p>
            </div>
          </div>
        );
      
      default:
        return (
          <DesktopHomepage
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            cartItemCount={cartItemCount}
            currentTheme={currentTheme}
            onThemeChange={setCurrentTheme}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderCurrentScreen()}
      
      <Toaster 
        position="top-right"
        toastOptions={{
          className: "animate-slide-up",
        }}
      />
    </div>
  );
}