import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Dynamic Glow orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -50, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/10 blur-[100px]" 
      />

      <div className="section-container relative z-10 pt-16 md:pt-24 lg:pt-32">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Left Column: Text & CTA */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Terminal-style intro */}
              <div className="inline-block code-block mb-8 text-left">
                <span className="text-terminal-comment">Hello World</span>
                <br />
                <span className="text-terminal-blue">const</span>{" "}
                <span className="text-terminal-yellow">developer</span>{" "}
                <span className="text-foreground">=</span>{" "}
                <span className="text-terminal-green">"Madhan Thangavel"</span>
                <span className="text-foreground">;</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              <span className="text-foreground">Python</span>
              <br />
              <span className="text-gradient-primary">Backend Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed"
            >
              Building scalable APIs & backend systems with Flask, PostgreSQL, Docker — 
              and a growing passion for DevOps practices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8"
            >
              <a
                href="mailto:madhanthangavelu04@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
              <a
                href="https://drive.google.com/file/d/10M0KTlsEreaplhVeVJIbToeJbNqx424t/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:border-primary/50 hover:text-primary transition-colors bg-card/50 backdrop-blur-sm"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
              <a
                href="https://www.linkedin.com/in/madhan04"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:border-primary/50 hover:text-primary transition-colors bg-card/50 backdrop-blur-sm"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0 relative group mb-8 md:mb-0"
          >
            {/* Decorative background glow that offsets behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 -z-10 translate-x-4 translate-y-4"></div>
            
            {/* Image Container */}
            <div className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/40 relative shadow-[0_0_40px_hsl(160_84%_39%/0.15)] bg-card group-hover:border-primary/70 group-hover:shadow-[0_0_60px_hsl(160_84%_39%/0.3)] transition-all duration-500 z-10 flex items-center justify-center">
              <img src="/profile.jpg" alt="Madhan Thangavel" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="animate-bounce"
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
