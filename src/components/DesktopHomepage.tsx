import { useState } from "react";
import { ArrowRight, Star, Quote, Users, Shield, Leaf, Clock } from "lucide-react";
import { DesktopHeader } from "./DesktopHeader";
import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";
import { DesktopProductCard } from "./DesktopProductCard";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { motion } from "motion/react";

interface DesktopHomepageProps {
  onNavigate?: (page: string, data?: any) => void;
  onAddToCart?: (productId: string, quantity: number) => void;
  cartItemCount?: number;
  currentTheme?: string;
  onThemeChange?: (theme: string) => void;
}

export function DesktopHomepage({ 
  onNavigate, 
  onAddToCart, 
  cartItemCount = 0,
  currentTheme = 'default',
  onThemeChange
}: DesktopHomepageProps) {
  const [featuredProducts] = useState([
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
      prescriptionRequired: false,
      rating: 4.5,
      reviewCount: 124,
      discount: 25
    },
    {
      id: '2',
      name: 'Vitamin D3 60K',
      genericName: 'Cholecalciferol',
      price: 180,
      originalPrice: 220,
      type: 'otc' as const,
      inStock: true,
      eta: '30 mins',
      dosage: '60,000 IU',
      quantity: '4 capsules',
      prescriptionRequired: false,
      rating: 4.7,
      reviewCount: 89,
      discount: 18
    },
    {
      id: '3',
      name: 'Amoxicillin 250mg',
      genericName: 'Amoxicillin Trihydrate',
      price: 120,
      type: 'prescription' as const,
      inStock: true,
      eta: '30 mins',
      dosage: '250mg',
      quantity: '20 capsules',
      prescriptionRequired: true,
      rating: 4.3,
      reviewCount: 67
    },
    {
      id: '4',
      name: 'Omega-3 Fish Oil',
      genericName: 'EPA & DHA Capsules',
      price: 350,
      originalPrice: 450,
      type: 'otc' as const,
      inStock: true,
      eta: '35 mins',
      dosage: '1000mg',
      quantity: '60 capsules',
      prescriptionRequired: false,
      rating: 4.6,
      reviewCount: 156,
      discount: 22
    }
  ]);

  const categories = [
    { name: "Prescription Medicines", count: "500+ items", color: "bg-blue-500" },
    { name: "OTC Medicines", count: "800+ items", color: "bg-green-500" },
    { name: "Vitamins & Supplements", count: "300+ items", color: "bg-orange-500" },
    { name: "Personal Care", count: "200+ items", color: "bg-purple-500" },
    { name: "Baby Care", count: "150+ items", color: "bg-pink-500" },
    { name: "Health Devices", count: "100+ items", color: "bg-indigo-500" }
  ];

  const pharmacies = [
    {
      name: "Apollo Pharmacy",
      rating: 4.8,
      deliveryTime: "25 mins",
      verified: true,
      discount: "Up to 20% off"
    },
    {
      name: "Guardian Pharmacy",
      rating: 4.7,
      deliveryTime: "30 mins",
      verified: true,
      discount: "Free delivery"
    },
    {
      name: "MedPlus",
      rating: 4.6,
      deliveryTime: "28 mins",
      verified: true,
      discount: "Extra 15% off"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Working Mother",
      rating: 5,
      comment: "MediQuick saved my day when my daughter fell sick at night. 15-minute delivery for emergency medicines is incredible!",
      avatar: "/avatars/priya.jpg"
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "General Physician",
      rating: 5,
      comment: "I recommend MediQuick to my patients. Their prescription verification system and drug interaction alerts are top-notch.",
      avatar: "/avatars/rajesh.jpg"
    },
    {
      name: "Ankit Verma",
      role: "Diabetes Patient",
      rating: 5,
      comment: "The subscription feature ensures I never run out of my insulin. Plus, the AI health insights help me track my progress.",
      avatar: "/avatars/ankit.jpg"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "30-Min Delivery",
      description: "Fastest in the industry"
    },
    {
      icon: Shield,
      title: "100% Genuine",
      description: "Verified medicines only"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 pharmacist helpline"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Sustainable packaging"
    }
  ];

  return (
    <div className="desktop-container bg-background">
      {/* Header */}
      <DesktopHeader
        variant="expanded"
        cartItemCount={cartItemCount}
        onSearch={(query) => onNavigate?.('search', { query })}
        onNavigate={onNavigate}
        currentTheme={currentTheme}
        onThemeChange={onThemeChange}
      />

      {/* Hero Section */}
      <HeroSection
        onSearch={(query) => onNavigate?.('search', { query })}
        onUploadPrescription={() => onNavigate?.('prescription-upload')}
        onEmergencyOrder={() => onNavigate?.('emergency')}
      />

      {/* Benefits Strip */}
      <section className="py-12 bg-muted/50">
        <div className="content-wrapper">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="content-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground text-lg">Find everything you need for your health and wellness</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="cursor-pointer hover:shadow-lg transition-all animate-card-hover group"
                  onClick={() => onNavigate?.('category', { category: category.name })}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 ${category.color} rounded-lg mx-auto mb-4 group-hover:scale-110 transition-transform`} />
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.count}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-muted/30">
        <div className="content-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl font-bold mb-2">Popular Medicines</h2>
              <p className="text-muted-foreground">Trusted by thousands of customers</p>
            </div>
            <Button 
              variant="outline"
              onClick={() => onNavigate?.('search', { category: 'popular' })}
            >
              View All Products
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <DesktopProductCard
                  {...product}
                  onAddToCart={(id, quantity) => onAddToCart?.(id, quantity)}
                  onViewDetails={(id) => onNavigate?.('product', { productId: id })}
                  onQuickView={(id) => onNavigate?.('quick-view', { productId: id })}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Pharmacies */}
      <section className="py-20">
        <div className="content-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Trusted Pharmacy Partners</h2>
            <p className="text-muted-foreground text-lg">Verified pharmacies with fastest delivery</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {pharmacies.map((pharmacy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow animate-card-hover">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary-foreground font-bold text-xl">
                        {pharmacy.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="font-semibold mb-2">{pharmacy.name}</h3>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <Star className="h-4 w-4 fill-current text-yellow-400" />
                      <span className="font-medium">{pharmacy.rating}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Delivery in {pharmacy.deliveryTime}</p>
                    <Badge variant="secondary">{pharmacy.discount}</Badge>
                    {pharmacy.verified && (
                      <Badge variant="outline" className="ml-2 bg-success/10 text-success border-success/20">
                        Verified ✓
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <FeaturesSection onNavigate={onNavigate} />

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="content-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground text-lg">Real stories from real people</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                      <Quote className="h-4 w-4 text-muted-foreground/40 mb-2" />
                      "{testimonial.comment}"
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} />
                        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Highlight */}
      <section className="py-20">
        <div className="content-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-12 text-center">
                <Leaf className="h-16 w-16 text-green-600 mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4 text-green-800">🌱 Green Pharma Initiative</h2>
                <p className="text-green-700 text-lg mb-6 max-w-2xl mx-auto">
                  Join our mission to reduce pharmaceutical waste. Return your empty medicine strips and earn reward points while helping the environment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700"
                    onClick={() => onNavigate?.('sustainability')}
                  >
                    Learn More About Green Pharma
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                  >
                    Find Recycling Centers
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="content-wrapper text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Experience the future of medicine delivery. Fast, safe, and convenient healthcare at your fingertips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => onNavigate?.('search')}
              >
                Start Shopping Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={() => onNavigate?.('prescription-upload')}
              >
                Upload Prescription
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-16">
        <div className="content-wrapper">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pharmacy Locator</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Return Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Compliance</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">YouTube</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">M</span>
              </div>
              <span className="text-xl font-bold">MediQuick</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 MediQuick. All rights reserved. | Licensed by Drugs Controller General of India
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}