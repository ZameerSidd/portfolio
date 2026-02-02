import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps = [
    { text: "Initializing", icon: "</>", delay: 600 },
    { text: "Loading Portfolio", icon: "⚡", delay: 700 },
    { text: "Ready", icon: "</>", delay: 500 },
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 4;
      });
    }, 25);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (currentStep < steps.length) {
      timeout = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, steps[currentStep].delay);
    }

    return () => clearTimeout(timeout);
  }, [currentStep, steps]);

  // Only complete when all steps are done AND progress is 100%
  useEffect(() => {
    if (currentStep >= steps.length && progress >= 100) {
      const timeout = setTimeout(onComplete, 300);
      return () => clearTimeout(timeout);
    }
  }, [currentStep, progress, onComplete, steps.length]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-background"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Subtle background gradient effects matching the theme */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        {/* Code Icon with gradient circle */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 relative z-10"
        >
          <div className="relative">
            {/* Outer glow */}
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/30 blur-xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {/* Gradient circle */}
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-primary/80 to-primary p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center border border-primary/20">
                <motion.span
                  className="text-3xl md:text-4xl font-bold text-primary"
                  animate={{ 
                    textShadow: [
                      "0 0 20px hsl(var(--primary) / 0.3)",
                      "0 0 40px hsl(var(--primary) / 0.5)",
                      "0 0 20px hsl(var(--primary) / 0.3)",
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {"</>"}
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-2 relative z-10 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent"
        >
          Zameer Siddique
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-muted-foreground text-lg md:text-xl mb-10 relative z-10"
        >
          Full-Stack & Mobile Engineer
        </motion.p>

        {/* Loading Steps as Pills */}
        <div className="flex flex-col items-center gap-3 mb-10 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: currentStep >= index ? 1 : 0.3,
                y: 0 
              }}
              transition={{ delay: 0.5 + index * 0.15, duration: 0.3 }}
              className={`relative w-64 md:w-72 h-11 rounded-full flex items-center justify-center gap-3 backdrop-blur-sm border shadow-lg overflow-hidden transition-all duration-300 ${
                currentStep > index 
                  ? "bg-primary/20 border-primary/40"
                  : currentStep === index 
                  ? "bg-primary/10 border-primary/30"
                  : "bg-muted/30 border-border"
              }`}
            >
              {/* Icon */}
              <span className={`text-sm font-bold transition-colors ${
                currentStep >= index ? "text-primary" : "text-muted-foreground/50"
              }`}>
                {step.icon}
              </span>
              
              {/* Text */}
              <span className={`text-sm font-medium transition-colors ${
                currentStep >= index ? "text-foreground" : "text-muted-foreground/50"
              }`}>
                {step.text}
              </span>

              {/* Spinner */}
              {currentStep === index && (
                <motion.div
                  className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              )}

              {/* Checkmark for completed */}
              {currentStep > index && (
                <motion.svg
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-4 h-4 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </motion.svg>
              )}
            </motion.div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-56 md:w-72 h-1 bg-muted rounded-full overflow-hidden relative z-10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Skip hint */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1 }}
          onClick={onComplete}
          className="mt-8 text-xs text-muted-foreground hover:text-foreground transition-colors relative z-10"
        >
          Press to skip
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
