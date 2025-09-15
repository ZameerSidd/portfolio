import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { Send, Mail, Github, Linkedin, Phone, MapPin, Rocket, Satellite, Globe, Wifi, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface FormData {
  name: string;
  email: string;
  message: string;
}

// Space Background Component
const SpaceBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Nebula clouds */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-60 right-32 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-40 w-72 h-72 bg-cyan-600/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-pink-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }} />
      </div>
      
      {/* Stars */}
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() > 0.8 ? '2px' : '1px',
            height: Math.random() > 0.8 ? '2px' : '1px',
            opacity: Math.random() * 0.8 + 0.2,
            animation: `twinkle ${2 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}
      
      {/* Moving comets */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `comet ${8 + Math.random() * 4}s linear infinite`,
            animationDelay: `${Math.random() * 8}s`,
          }}
        >
          <div className="w-1 h-1 bg-cyan-300 rounded-full relative">
            <div className="absolute top-0 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-300/80 to-transparent rounded-full transform -rotate-45" />
          </div>
        </div>
      ))}
    </div>
  );
};

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Mock email sending - replace with actual email service
    setTimeout(() => {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      {/* Space Background */}
      <SpaceBackground />
      
      {/* Main gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-purple-900/30 to-black/95" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            className="flex items-center justify-center mb-4"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Satellite className="text-cyan-400 w-8 h-8" />
          </motion.div>
          <p className="text-cyan-400 text-lg mb-4 flex items-center justify-center">
            <Rocket className="w-5 h-5 mr-2" />
            Establish Communication
          </p>
          <h2 className="text-4xl md:text-6xl bg-gradient-to-r from-white via-cyan-300 to-purple-400 bg-clip-text text-transparent">
            Contact Mission Control
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Ready to launch your next project into orbit? Send a transmission and let's explore the possibilities together.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Form - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Form Card */}
            <div className="bg-black/40 backdrop-blur-lg p-8 rounded-2xl border border-cyan-500/20 shadow-2xl relative overflow-hidden">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl" />
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
              
              <div className="relative z-10">
                <h3 className="text-2xl text-white mb-6 flex items-center">
                  <Send className="w-6 h-6 mr-3 text-cyan-400" />
                  Send Message
                </h3>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-cyan-400 mb-2">Mission Commander</label>
                      <Input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your name..."
                        className="bg-gray-900/70 backdrop-blur-sm border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20 rounded-lg h-12"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-cyan-400 mb-2">Communication Channel</label>
                      <Input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your.email@galaxy.com"
                        className="bg-gray-900/70 backdrop-blur-sm border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20 rounded-lg h-12"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-cyan-400 mb-2">Mission Briefing</label>
                      <Textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Describe your project, goals, or any questions you have..."
                        className="bg-gray-900/70 backdrop-blur-sm border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20 rounded-lg resize-none"
                        rows={5}
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Transmitting...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="mr-2 h-5 w-5" />
                        Launch Message
                      </div>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-black/40 backdrop-blur-lg p-6 rounded-2xl border border-purple-500/20 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-2xl" />
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
              
              <div className="relative z-10">
                <h3 className="text-xl text-white mb-4">Direct Communication</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <a
                    href="mailto:786zameer6@gmail.com"
                    className="flex items-center text-cyan-300 hover:text-cyan-200 transition-colors p-3 rounded-lg hover:bg-cyan-500/10"
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    <span className="text-sm">Email</span>
                  </a>
                  <a
                    href="tel:+918104610491"
                    className="flex items-center text-cyan-300 hover:text-cyan-200 transition-colors p-3 rounded-lg hover:bg-cyan-500/10"
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    <span className="text-sm">Phone</span>
                  </a>
                  <a
                    href="https://github.com/ZameerSidd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-300 hover:text-purple-200 transition-colors p-3 rounded-lg hover:bg-purple-500/10"
                  >
                    <Github className="w-5 h-5 mr-3" />
                    <span className="text-sm">GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/zameer-siddique"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-300 hover:text-purple-200 transition-colors p-3 rounded-lg hover:bg-purple-500/10"
                  >
                    <Linkedin className="w-5 h-5 mr-3" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-700/50">
                  <div className="flex items-center text-gray-400 text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    Mumbai, India • GMT+5:30
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Info Panel - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-20"
          >
            <div className="relative h-[600px] lg:h-[700px] rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl bg-gradient-to-br from-gray-900/80 via-purple-900/30 to-black/80 backdrop-blur-sm">
              
              {/* Central Globe Animation */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="relative"
                >
                  <Globe className="w-32 h-32 text-cyan-400/60" />
                  
                  {/* Orbit rings */}
                  <motion.div 
                    className="absolute inset-0 border-2 border-purple-500/30 rounded-full"
                    style={{ width: '200px', height: '200px', left: '-34px', top: '-34px' }}
                    animate={{ rotate: [0, -360] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div 
                    className="absolute inset-0 border border-cyan-500/20 rounded-full"
                    style={{ width: '240px', height: '240px', left: '-54px', top: '-54px' }}
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
                
                {/* Floating connection nodes */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                    style={{
                      left: `${50 + Math.cos((i * 60) * Math.PI / 180) * 80}px`,
                      top: `${50 + Math.sin((i * 60) * Math.PI / 180) * 80}px`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
              
              {/* Tech Stack Floating Icons */}
              <div className="absolute inset-0">
                {[
                  { icon: Wifi, pos: { top: '20%', left: '15%' }, color: 'text-blue-400' },
                  { icon: Zap, pos: { top: '25%', right: '20%' }, color: 'text-yellow-400' },
                  { icon: Globe, pos: { bottom: '30%', left: '10%' }, color: 'text-green-400' },
                  { icon: Satellite, pos: { bottom: '25%', right: '15%' }, color: 'text-purple-400' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className={`absolute ${item.color}`}
                    style={item.pos}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  >
                    <item.icon className="w-6 h-6" />
                  </motion.div>
                ))}
              </div>
              
              {/* Status Cards */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg p-3 border border-cyan-500/30">
                <div className="text-xs text-cyan-400 mb-1">STATUS</div>
                <div className="text-sm text-green-400 flex items-center">
                  <motion.div 
                    className="w-2 h-2 bg-green-400 rounded-full mr-2"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  ONLINE
                </div>
              </div>
              
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-3 border border-purple-500/30">
                <div className="text-xs text-purple-400 mb-1">RESPONSE TIME</div>
                <div className="text-sm text-white">&lt; 24hrs</div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg p-3 border border-green-500/30">
                <div className="text-xs text-green-400 mb-1">AVAILABILITY</div>
                <div className="text-sm text-white">Ready for Projects</div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-3 border border-yellow-500/30">
                <div className="text-xs text-yellow-400 mb-1">TIMEZONE</div>
                <div className="text-sm text-white">GMT+5:30</div>
              </div>
              
              {/* Data stream effect */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-px h-8 bg-gradient-to-b from-cyan-400/60 to-transparent"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, 50],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
}