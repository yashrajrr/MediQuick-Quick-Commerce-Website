import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Clock, Shield, Truck } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface OnboardingStep {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const onboardingSteps: OnboardingStep[] = [
  {
    id: 'speed',
    title: 'Lightning Fast',
    subtitle: 'Delivery in 30 minutes',
    description: 'Get your medicines delivered to your doorstep in just 30 minutes. No more waiting in long pharmacy queues.',
    icon: Clock,
    color: '#0FB5A6'
  },
  {
    id: 'verified',
    title: 'Verified & Safe',
    subtitle: 'Licensed pharmacies only',
    description: 'All our partner pharmacies are licensed and verified. Your health and safety are our top priorities.',
    icon: Shield,
    color: '#3B82F6'
  },
  {
    id: 'convenient',
    title: 'Super Convenient',
    subtitle: 'Upload prescriptions easily',
    description: 'Simply take a photo of your prescription and we\'ll handle the rest. Track your order in real-time.',
    icon: Truck,
    color: '#10B981'
  }
];

interface OnboardingScreenProps {
  onComplete: () => void;
}

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const step = onboardingSteps[currentStep];
  const Icon = step.icon;

  return (
    <div className="h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevStep}
          disabled={currentStep === 0}
          className="h-9 w-9"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <div className="flex gap-2">
          {onboardingSteps.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentStep ? 'w-6 bg-primary' : 'w-2 bg-muted'
              }`}
            />
          ))}
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={onComplete}
          className="text-muted-foreground"
        >
          Skip
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-center space-y-8 max-w-sm"
          >
            {/* Illustration */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "backOut" }}
              className="mx-auto w-32 h-32 rounded-3xl flex items-center justify-center"
              style={{ backgroundColor: `${step.color}15` }}
            >
              <Icon 
                className="h-16 w-16" 
                style={{ color: step.color }} 
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">{step.title}</h2>
                <p className="text-primary font-medium">{step.subtitle}</p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="p-6 space-y-4">
        <Button
          onClick={nextStep}
          className="w-full h-12 bg-accent hover:bg-accent/90"
          size="lg"
        >
          {currentStep === onboardingSteps.length - 1 ? 'Get Started' : 'Continue'}
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
        
        {currentStep === onboardingSteps.length - 1 && (
          <p className="text-center text-xs text-muted-foreground">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        )}
      </div>
    </div>
  );
}