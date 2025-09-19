import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Pill, Zap } from "lucide-react";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80 flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: "backOut",
            delay: 0.2 
          }}
          className="relative mx-auto w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
        >
          <Pill className="h-10 w-10 text-white" />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute -top-1 -right-1"
          >
            <Zap className="h-5 w-5 text-yellow-300" />
          </motion.div>
        </motion.div>

        {/* App Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="space-y-2"
        >
          <h1 className="text-3xl font-bold text-white">MediQuick</h1>
          <p className="text-white/80 text-sm">Ultra-fast medicine delivery</p>
        </motion.div>

        {/* Loading Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.4 }}
          className="w-48 mx-auto"
        >
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <div className="text-center mt-2">
            <span className="text-white/60 text-xs">Loading... {progress}%</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}