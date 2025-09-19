import { useState } from "react";
import { Search, FileText, Zap, Repeat, Heart, Thermometer, Plus } from "lucide-react";
import { MediQuickHeader } from "./MediQuickHeader";
import { CategoryCard } from "./CategoryCard";
import { ProductCard } from "./ProductCard";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";

interface HomeScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  onAddToCart: (productId: string) => void;
}

export function HomeScreen({ onNavigate, onAddToCart }: HomeScreenProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { 
      id: 'prescriptions', 
      title: 'Prescriptions', 
      subtitle: 'Upload & order', 
      icon: FileText, 
      color: '#0FB5A6' 
    },
    { 
      id: 'emergency', 
      title: 'Emergency', 
      subtitle: '24/7 available', 
      icon: Zap, 
      color: '#EF4444' 
    },
    { 
      id: 'subscriptions', 
      title: 'Subscriptions', 
      subtitle: 'Auto-refill', 
      icon: Repeat, 
      color: '#8B5CF6' 
    },
    { 
      id: 'health-monitoring', 
      title: 'Health Monitor', 
      subtitle: 'Track vitals', 
      icon: Heart, 
      color: '#F59E0B' 
    }
  ];

  const quickCategories = [
    { id: 'fever', name: 'Fever & Pain', icon: Thermometer, color: '#EF4444' },
    { id: 'vitamins', name: 'Vitamins', icon: Plus, color: '#10B981' },
    { id: 'diabetes', name: 'Diabetes', icon: Heart, color: '#3B82F6' },
    { id: 'skincare', name: 'Skin Care', icon: FileText, color: '#F59E0B' }
  ];

  const featuredProducts = [
    {
      id: '1',
      name: 'Paracetamol 500mg',
      genericName: 'Acetaminophen',
      price: 45,
      originalPrice: 60,
      type: 'otc' as const,
      inStock: true,
      eta: '25 mins',
      dosage: '500mg',
      quantity: '10 tablets',
      prescriptionRequired: false
    },
    {
      id: '2',
      name: 'Amoxicillin 250mg',
      genericName: 'Amoxicillin Trihydrate',
      price: 120,
      type: 'prescription' as const,
      inStock: true,
      eta: '30 mins',
      dosage: '250mg',
      quantity: '20 capsules',
      prescriptionRequired: true
    },
    {
      id: '3',
      name: 'Vitamin D3 60K',
      genericName: 'Cholecalciferol',
      price: 180,
      originalPrice: 220,
      type: 'otc' as const,
      inStock: false,
      eta: '45 mins',
      dosage: '60,000 IU',
      quantity: '4 capsules',
      prescriptionRequired: false
    }
  ];

  return (
    <div className="pb-20">
      <MediQuickHeader 
        showLocation={true}
        onLocationClick={() => onNavigate('location')}
        onNotificationClick={() => onNavigate('notifications')}
        onSettingsClick={() => onNavigate('settings')}
      />

      <div className="px-4 space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search medicines, health products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 bg-input-background border-0"
            onFocus={() => onNavigate('search', { query: searchQuery })}
          />
        </div>

        {/* Quick Actions Banner */}
        <Card className="bg-gradient-to-r from-primary to-primary/80 border-0 text-primary-foreground">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Need urgent medicines?</h3>
                <p className="text-sm opacity-90">Get delivery in 15 minutes</p>
              </div>
              <Button 
                size="sm" 
                variant="secondary"
                onClick={() => onNavigate('emergency')}
              >
                Order Now
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Main Categories */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Access</h2>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                {...category}
                onClick={(id) => onNavigate(id)}
              />
            ))}
          </div>
        </div>

        {/* Quick Categories */}
        <div>
          <h3 className="font-semibold mb-3">Shop by Category</h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {quickCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant="outline"
                  className="flex-shrink-0 h-auto p-3 flex-col gap-2 min-w-[80px]"
                  onClick={() => onNavigate('category', { categoryId: category.id })}
                >
                  <Icon className="h-5 w-5" style={{ color: category.color }} />
                  <span className="text-xs">{category.name}</span>
                </Button>
              );
            })}
          </div>
        </div>

        {/* Featured Products */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Popular Medicines</h3>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => onNavigate('search', { category: 'popular' })}
            >
              View All
            </Button>
          </div>
          
          <div className="space-y-3">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={onAddToCart}
                onViewDetails={(id) => onNavigate('product', { productId: id })}
              />
            ))}
          </div>
        </div>

        {/* Health Tips Card */}
        <Card className="bg-secondary border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">💡 Health Tip of the Day</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm text-muted-foreground">
              Remember to take your medicines with water and maintain a gap of at least 30 minutes between different medications.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}