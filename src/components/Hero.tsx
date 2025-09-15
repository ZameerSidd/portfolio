import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Code2, Star, Zap, Download, Cpu, Globe, Rocket, Wifi } from 'lucide-react';
import { Button } from './ui/button';

// Pure CSS 3D Holographic Interface Component
const HolographicInterface = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central Holographic Sphere */}
      <motion.div
        className="relative w-64 h-64 rounded-full"
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 20, 0],
        }}
        transition={{
          rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{
          background: `
            radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.8), transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(34, 211, 238, 0.6), transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.4), transparent 70%)
          `,
          backdropFilter: 'blur(20px)',
          border: '2px solid rgba(139, 92, 246, 0.3)',
          boxShadow: `
            0 0 40px rgba(139, 92, 246, 0.4),
            0 0 80px rgba(34, 211, 238, 0.2),
            inset 0 0 40px rgba(255, 255, 255, 0.1)
          `,
        }}
      >
        {/* Inner glow effect */}
        <div 
          className="absolute inset-4 rounded-full opacity-60"
          style={{
            background: `
              radial-gradient(circle at center, 
                rgba(139, 92, 246, 0.3) 0%, 
                rgba(34, 211, 238, 0.2) 50%, 
                transparent 100%
              )
            `,
            filter: 'blur(10px)',
          }}
        />
        
        {/* Scanning line effect */}
        <motion.div
          className="absolute inset-0 rounded-full overflow-hidden"
          animate={{
            background: [
              'linear-gradient(0deg, transparent 0%, rgba(34, 211, 238, 0.5) 50%, transparent 100%)',
              'linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.5) 50%, transparent 100%)',
              'linear-gradient(0deg, transparent 0%, rgba(34, 211, 238, 0.5) 50%, transparent 100%)',
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Orbital Ring System */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border opacity-60"
          style={{
            width: `${320 + i * 60}px`,
            height: `${320 + i * 60}px`,
            borderColor: i % 2 === 0 ? 'rgba(139, 92, 246, 0.3)' : 'rgba(34, 211, 238, 0.3)',
            borderWidth: '1px',
          }}
          animate={{
            rotate: i % 2 === 0 ? [0, 360] : [360, 0],
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Ring particles */}
          {[...Array(6)].map((_, j) => (
            <motion.div
              key={j}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: i % 2 === 0 ? 'rgba(139, 92, 246, 0.8)' : 'rgba(34, 211, 238, 0.8)',
                left: '50%',
                top: `${(j * 60) % 360}px`,
                transformOrigin: 'center',
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: j * 0.3,
              }}
            />
          ))}
        </motion.div>
      ))}

      {/* Floating Tech Icons */}
      {[
        { Icon: Cpu, position: { top: '20%', left: '15%' }, color: '#8b5cf6' },
        { Icon: Globe, position: { top: '25%', right: '20%' }, color: '#22d3ee' },
        { Icon: Rocket, position: { bottom: '30%', left: '10%' }, color: '#10b981' },
        { Icon: Wifi, position: { bottom: '25%', right: '15%' }, color: '#f59e0b' },
      ].map((item, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ ...item.position }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          <item.Icon 
            className="w-8 h-8" 
            style={{ 
              color: item.color,
              filter: `drop-shadow(0 0 10px ${item.color})`,
            }}
          />
        </motion.div>
      ))}

      {/* Data Streams */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 rounded-full"
          style={{
            height: '30px',
            background: `linear-gradient(to bottom, ${i % 2 === 0 ? 'rgba(139, 92, 246, 0.8)' : 'rgba(34, 211, 238, 0.8)'}, transparent)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Holographic Grid */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(rgba(34, 211, 238, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px, 50px 50px, 10px 10px, 10px 10px',
        }}
      />
    </div>
  );
};

// Enhanced Particle System Component
const ParticleField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(60)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() > 0.7 ? '3px' : '1px',
            height: Math.random() > 0.7 ? '3px' : '1px',
            background: ['#8b5cf6', '#22d3ee', '#10b981'][Math.floor(Math.random() * 3)],
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 10px currentColor',
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
};

export function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const roles = [
    'Flutter Developer',
    'Mobile App Architect', 
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'Problem Solver'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    // For now, we'll create a dummy PDF download
    // Later this will be replaced with actual resume from assets
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjMKJcTl8uXrp/Og0MTGCjQgMCBvYmoKPDwKL0xlbmd0aCA4NTYKL0ZpbHRlciAvRmxhdGVEZWNvZGUKPj4Kc3RyZWFtCngBhVJNSwMxEL3nV8yxPUjSbD7OSi2FUsGDByuIFz2IbXq1UKs9+O9NsrtJdpvLZN68N/PezACwDgQJYAyIEiCagCQDsgqoOqAZgOYEOhDoWKBTgc4EuhDoUqArga4FuhHoVqA7ge4FehDoUaAnga4EehHoTaB3gT4E+hToS6Bvgb4F+hHoT6AvgX4F+hPoX6Bvgb4E+hHoV6A/gX4F+hHoR6Avgb4F+hHoV6Avga4F+hPoW6Bvgb4F+hLoR6A/gX4F+hPoW6Bvga4F+hHoV6A/gT4E+hPoW6Bvga4F+hLoS6Bvgb4F+hPo';
    link.download = 'Zameer_Siddique_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Particle Background */}
      <ParticleField />
      
      {/* Enhanced Gradient Orbs */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.35, 0.15]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-3/4 left-1/3 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/2 w-64 h-64 bg-green-500/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.05, 0.25, 0.05]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg text-purple-400 mb-2 flex items-center">
                <Star className="w-5 h-5 mr-2" />
                Welcome to my digital space
              </p>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <h1 className="text-5xl md:text-7xl mb-6">
                <span className="block text-white">Hi, I'm</span>
                <span 
                  className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
                  style={{
                    backgroundSize: '200% 200%',
                    animation: 'gradient-shift 3s ease-in-out infinite'
                  }}
                >
                  Zameer
                </span>
              </h1>
            </motion.div>

            {/* Typewriter Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mb-8"
            >
              <div className="text-2xl md:text-3xl text-gray-300 mb-4">
                I'm a {' '}
                <span className="text-cyan-400">
                  {text}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-cyan-400"
                  >
                    |
                  </motion.span>
                </span>
              </div>
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                I specialize in building exceptional mobile and web applications 
                with over 4 years of experience in Flutter, .NET Core, and modern web technologies.
                I transform ideas into digital reality with precision and creativity.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={scrollToAbout}
                className="group relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center">
                  <Code2 className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Explore My Work
                </span>
              </Button>
              
              <Button
                onClick={handleDownloadResume}
                className="group bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center">
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce transition-transform" />
                  Download Resume
                </span>
              </Button>
              
              <Button
                variant="outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3 rounded-lg transition-all duration-300"
              >
                <span className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Get In Touch
                </span>
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700/50"
            >
              <div className="text-center">
                <div className="text-3xl text-purple-400 mb-1">4+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-blue-400 mb-1">7+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-cyan-400 mb-1">3</div>
                <div className="text-sm text-gray-400">Companies</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Holographic Interface */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:h-screen h-96 relative"
          >
            <div className="relative h-full w-full">
              <HolographicInterface />
            </div>
            
            {/* Additional Floating Elements */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.random() * 30 - 15, 0],
                    scale: [1, 1.8, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400 hover:text-purple-400 transition-colors group"
          >
            <span className="text-xs mb-2 group-hover:text-purple-400">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

    </section>
  );
}