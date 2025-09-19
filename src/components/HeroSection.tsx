import { useState } from "react";
import { Search, Upload, Clock, Shield, Zap, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";

interface HeroSectionProps {
  onSearch?: (query: string) => void;
  onUploadPrescription?: () => void;
  onEmergencyOrder?: () => void;
}

export function HeroSection({ onSearch, onUploadPrescription, onEmergencyOrder }: HeroSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  const stats = [
    { label: "Average Delivery", value: "28 mins", icon: Clock },
    { label: "Verified Pharmacies", value: "500+", icon: Shield },
    { label: "Emergency Response", value: "15 mins", icon: Zap }
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="content-wrapper relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                🚀 Now delivering in 30+ cities across India
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="space-y-4"
            >
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Your medicines,
                <span className="text-primary block">delivered in 30 minutes</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                India's fastest medicine delivery service. Upload prescription, get verified medicines delivered to your doorstep instantly.
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              onSubmit={handleSearch}
              className="flex gap-3 max-w-md"
            >
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search medicines..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-base"
                />
              </div>
              <Button type="submit" size="lg" className="px-8">
                Search
              </Button>
            </motion.form>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-background hover:bg-accent hover:text-accent-foreground"
                onClick={onUploadPrescription}
              >
                <Upload className="h-5 w-5 mr-2" />
                Upload Prescription
              </Button>
              <Button 
                size="lg" 
                variant="destructive"
                onClick={onEmergencyOrder}
              >
                <Zap className="h-5 w-5 mr-2" />
                Emergency Order
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-2">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            {/* Main Card */}
            <Card className="bg-card border-0 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Order Summary</h3>
                      <p className="text-sm text-muted-foreground">Delivery in 28 mins</p>
                    </div>
                    <Badge variant="secondary">Verified ✓</Badge>
                  </div>

                  {/* Prescription Items */}
                  <div className="space-y-3">
                    {[
                      { name: "Paracetamol 500mg", qty: "10 tablets", price: "₹45" },
                      { name: "Vitamin D3", qty: "30 capsules", price: "₹180" },
                      { name: "Omeprazole", qty: "20mg x 14", price: "₹95" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                      >
                        <div>
                          <div className="font-medium text-sm">{item.name}</div>
                          <div className="text-xs text-muted-foreground">{item.qty}</div>
                        </div>
                        <div className="font-semibold">{item.price}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Total */}
                  <div className="flex items-center justify-between pt-3 border-t">
                    <span className="font-semibold">Total</span>
                    <span className="text-lg font-bold text-primary">₹320</span>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full" size="lg">
                    Place Order
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -top-4 -left-4 bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg"
            >
              AI Verified ✓
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 bg-warning text-warning-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg"
            >
              30 min delivery
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}