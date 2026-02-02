import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Video, Wifi, Database } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    title: "High-Performance Media Sync",
    description: "Built APIs for large video uploads, high-volume image syncing, and metadata handling with unique file naming and efficient storage.",
    metrics: "Handles 200-300 routes daily with minimal errors",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Video,
    title: "Rust Video Streaming API",
    description: "Backend video streaming system serving HLS (.m3u8 playlist) streams with chunk-based delivery and efficient upload flow.",
    metrics: "High-performance systems-level backend",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Wifi,
    title: "Real-Time Communication",
    description: "WebSocket and SignalR implementations for live data sync, enabling real-time updates across distributed field applications.",
    metrics: "Live sync across unstable networks",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Database,
    title: "GraphQL API Design",
    description: "Flexible, efficient data fetching with GraphQL, enabling clients to request exactly what they need with reduced over-fetching.",
    metrics: "Optimized data transfer",
    color: "from-purple-500 to-pink-500"
  }
];

const TechnicalHighlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Technical <span className="text-primary">Highlights</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            System-level achievements showcasing expertise in building 
            scalable, high-performance backend systems.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${highlight.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="font-bold text-lg mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {highlight.description}
                </p>
                
                <div className="inline-flex items-center gap-2 text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                  <Zap className="w-3 h-3" />
                  {highlight.metrics}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalHighlights;
