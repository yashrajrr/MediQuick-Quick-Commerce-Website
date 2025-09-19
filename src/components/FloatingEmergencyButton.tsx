import { useState } from "react";
import { Phone, Zap, MessageCircle, MapPin, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";

interface FloatingEmergencyButtonProps {
  onEmergencyCall: () => void;
  onTeleConsult: () => void;
  onFindPharmacy: () => void;
  onCardiacEmergency: () => void;
}

export function FloatingEmergencyButton({
  onEmergencyCall,
  onTeleConsult,
  onFindPharmacy,
  onCardiacEmergency
}: FloatingEmergencyButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const actions = [
    { 
      id: 'call', 
      icon: Phone, 
      label: 'Emergency Call', 
      action: onEmergencyCall,
      color: '#EF4444'
    },
    { 
      id: 'consult', 
      icon: MessageCircle, 
      label: 'Tele Consult', 
      action: onTeleConsult,
      color: '#3B82F6'
    },
    { 
      id: 'pharmacy', 
      icon: MapPin, 
      label: 'Find Pharmacy', 
      action: onFindPharmacy,
      color: '#10B981'
    },
    { 
      id: 'cardiac', 
      icon: Heart, 
      label: 'Cardiac Emergency', 
      action: onCardiacEmergency,
      color: '#F59E0B'
    }
  ];

  return (
    <div className="fixed bottom-20 right-4 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="mb-4 space-y-3"
          >
            {actions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.div
                  key={action.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ 
                    duration: 0.2, 
                    delay: index * 0.05 
                  }}
                  className="flex items-center gap-3"
                >
                  <span className="text-sm font-medium bg-card px-3 py-2 rounded-full shadow-lg border text-nowrap">
                    {action.label}
                  </span>
                  <Button
                    size="icon"
                    className="h-12 w-12 rounded-full shadow-lg animate-scale-press"
                    style={{ backgroundColor: action.color }}
                    onClick={() => {
                      action.action();
                      setIsExpanded(false);
                    }}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Emergency Button */}
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-accent hover:bg-accent/90 shadow-lg animate-scale-press"
        onPointerDown={() => setIsExpanded(true)}
        onPointerUp={() => setTimeout(() => setIsExpanded(false), 3000)}
        onPointerLeave={() => setIsExpanded(false)}
      >
        <Zap className="h-6 w-6" />
      </Button>
    </div>
  );
}