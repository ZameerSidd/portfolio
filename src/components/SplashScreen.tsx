import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Zap, Sparkles } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const steps = [
    { text: 'Initializing', icon: Code2 },
    { text: 'Loading Portfolio', icon: Zap },
    { text: 'Ready', icon: Sparkles }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setIsComplete(true);
        setTimeout(() => {
          onComplete();
        }, 800);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentStep, onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ 
                x: [0, 100, 0],
                y: [0, -50, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
            />
            <motion.div
              animate={{ 
                x: [0, -80, 0],
                y: [0, 60, 0],
                rotate: [0, -180, -360]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
            />
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }} />
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center">
            {/* Logo/Brand */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
              className="mb-8"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-purple-500/30 border-t-purple-500"
                  style={{ width: '120px', height: '120px' }}
                />
                <div className="w-30 h-30 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center border-4 border-gray-800 shadow-2xl" style={{ width: '120px', height: '120px' }}>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Code2 className="w-12 h-12 text-white" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Brand Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl mb-2 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
            >
              Zameer Siddique
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-purple-400 mb-8"
            >
              Flutter Developer
            </motion.p>

            {/* Loading Steps */}
            <div className="space-y-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === currentStep;
                const isCompleted = index < currentStep;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: isActive || isCompleted ? 1 : 0.3,
                      x: 0,
                      scale: isActive ? 1.05 : 1
                    }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex items-center justify-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'bg-purple-500/20 border border-purple-500/30' 
                        : isCompleted 
                          ? 'bg-green-500/20 border border-green-500/30'
                          : 'bg-gray-800/50 border border-gray-700'
                    }`}
                  >
                    <motion.div
                      animate={isActive ? { rotate: 360 } : {}}
                      transition={{ duration: 1, repeat: isActive ? Infinity : 0, ease: "linear" }}
                    >
                      <Icon className={`w-5 h-5 ${
                        isActive 
                          ? 'text-purple-400' 
                          : isCompleted 
                            ? 'text-green-400'
                            : 'text-gray-500'
                      }`} />
                    </motion.div>
                    <span className={`text-sm ${
                      isActive 
                        ? 'text-white' 
                        : isCompleted 
                          ? 'text-green-300'
                          : 'text-gray-400'
                    }`}>
                      {step.text}
                    </span>
                    {isActive && (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-purple-400 border-t-transparent rounded-full"
                      />
                    )}
                    {isCompleted && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"
                      >
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Progress Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
              className="mt-8 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"
              style={{ maxWidth: '200px' }}
            />

            {/* Completion Message */}
            <AnimatePresence>
              {currentStep === steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-6"
                >
                  <motion.p
                    animate={{ 
                      background: [
                        'linear-gradient(45deg, #8B5CF6, #3B82F6)',
                        'linear-gradient(45deg, #3B82F6, #06B6D4)',
                        'linear-gradient(45deg, #06B6D4, #8B5CF6)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-transparent bg-clip-text"
                    style={{ backgroundImage: 'linear-gradient(45deg, #8B5CF6, #3B82F6)' }}
                  >
                    Welcome to my portfolio!
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}