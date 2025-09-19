import { Brain, AlertTriangle, BarChart3, Users, Recycle, Upload, Clock, Shield, Zap, Bot } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion } from "motion/react";

interface FeaturesSectionProps {
  onNavigate?: (page: string) => void;
}

export function FeaturesSection({ onNavigate }: FeaturesSectionProps) {
  const coreFeatures = [
    {
      icon: Clock,
      title: "Ultra-fast Delivery",
      description: "Get your medicines delivered in just 30 minutes with our lightning-fast logistics network.",
      badge: "⚡ Core",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Upload,
      title: "Smart Prescription Upload",
      description: "AI-powered OCR scanner detects, validates, and prevents prescription errors automatically.",
      badge: "📷 Smart",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Zap,
      title: "Emergency Mode",
      description: "One-tap emergency ordering for critical medicines with priority fast-track delivery.",
      badge: "🚨 Emergency",
      color: "text-destructive",
      bgColor: "bg-destructive/10"
    },
    {
      icon: Shield,
      title: "Auto Subscriptions",
      description: "Never run out of regular medicines with intelligent auto-refill and delivery scheduling.",
      badge: "📦 Auto",
      color: "text-success",
      bgColor: "bg-success/10"
    }
  ];

  const advancedFeatures = [
    {
      icon: Brain,
      title: "AI Symptom Checker",
      description: "Advanced AI analyzes your symptoms and connects you with qualified doctors for teleconsultation.",
      badge: "🤖 AI Powered",
      action: () => onNavigate?.('ai-symptom-checker'),
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: AlertTriangle,
      title: "Drug Interaction Alerts",
      description: "Pre-purchase safety checks prevent dangerous drug combinations and allergic reactions.",
      badge: "⚠️ Safety First",
      action: () => onNavigate?.('drug-interactions'),
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: BarChart3,
      title: "Health Insights",
      description: "Track your medication usage, expenses, and health trends with detailed analytics dashboard.",
      badge: "📊 Analytics",
      action: () => onNavigate?.('health-insights'),
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Users,
      title: "Community Health",
      description: "Local rare-medicine stock alerts and peer support network for better health outcomes.",
      badge: "🏥 Community",
      action: () => onNavigate?.('community'),
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Recycle,
      title: "Green Pharma Initiative",
      description: "Eco-friendly packaging and medicine strip recycling program with reward points.",
      badge: "🌱 Sustainable",
      action: () => onNavigate?.('sustainability'),
      gradient: "from-emerald-500 to-green-600"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="content-wrapper">
        {/* Core Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">Core Features</Badge>
          <h2 className="text-4xl font-bold mb-4">Everything you need for health</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform combines speed, safety, and convenience to revolutionize how you access healthcare.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {coreFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow animate-card-hover">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <Badge variant="outline" className="mb-2 text-xs">{feature.badge}</Badge>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Advanced Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">🚀 Advanced Features</Badge>
          <h2 className="text-4xl font-bold mb-4">Next-generation healthcare technology</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge AI and community-driven features that set new standards in digital healthcare.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advancedFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="relative overflow-hidden h-full group hover:shadow-xl transition-all duration-300 animate-card-hover">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  
                  <CardHeader className="relative">
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="outline" className="mb-2 text-xs w-fit">{feature.badge}</Badge>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative pt-0">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={feature.action}
                      className="group-hover:bg-foreground group-hover:text-background transition-colors"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-0 shadow-xl">
            <CardContent className="p-12">
              <div className="max-w-2xl mx-auto">
                <Bot className="h-16 w-16 mx-auto mb-6 opacity-90" />
                <h3 className="text-3xl font-bold mb-4">Ready to experience the future of healthcare?</h3>
                <p className="text-xl opacity-90 mb-8">
                  Join thousands of users who trust MediQuick for their medicine delivery needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    onClick={() => onNavigate?.('search')}
                  >
                    Start Shopping
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-primary"
                    onClick={() => onNavigate?.('ai-symptom-checker')}
                  >
                    Try AI Symptom Checker
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}