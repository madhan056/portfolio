import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
          return <span className="text-gradient-primary">Contact</span>
        </h3>
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
          Open to opportunities in Python Backend Development and DevOps roles. 
          Feel free to reach out!
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=madhanthangavelu04@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-card border border-border hover:border-primary/40 text-foreground hover:text-primary transition-colors text-sm"
          >
            <Mail className="w-4 h-4" />
            madhanthangavelu04@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/madhan04"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-card border border-border hover:border-primary/40 text-foreground hover:text-primary transition-colors text-sm"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="tel:+919360739056"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-card border border-border hover:border-primary/40 text-foreground hover:text-primary transition-colors text-sm"
          >
            <Phone className="w-4 h-4" />
            +91 93607 39056
          </a>
          <span className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-card border border-border text-muted-foreground text-sm">
            <MapPin className="w-4 h-4" />
            Chennai, Tamil Nadu
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
