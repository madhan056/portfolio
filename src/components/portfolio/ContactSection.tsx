import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Phone, Github, Globe } from "lucide-react";
import { profile, mailtoHref } from "@/data/profile";

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
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
          return <span className="text-gradient-primary">Contact</span>
        </h2>
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto leading-relaxed">
          Open to opportunities in Python Full Stack Development, Backend Engineering, and Flask/Django REST Framework roles.
          Feel free to connect!
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href={mailtoHref}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-card border border-border hover:border-primary/40 text-foreground hover:text-primary transition-colors text-sm"
          >
            <Mail className="w-4 h-4" />
            {profile.email}
          </a>
          <a
            href={profile.github.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-card border border-border hover:border-primary/40 text-foreground hover:text-primary transition-colors text-sm"
          >
            <Github className="w-4 h-4" />
            {profile.github.display}
          </a>
          <a
            href={profile.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-card border border-border hover:border-primary/40 text-foreground hover:text-primary transition-colors text-sm"
          >
            <Linkedin className="w-4 h-4" />
            {profile.linkedin.display}
          </a>
          <a
            href={profile.website.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-card border border-border hover:border-primary/40 text-foreground hover:text-primary transition-colors text-sm"
          >
            <Globe className="w-4 h-4" />
            {profile.website.display}
          </a>
          <a
            href={profile.phone.href}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-card border border-border hover:border-primary/40 text-foreground hover:text-primary transition-colors text-sm"
          >
            <Phone className="w-4 h-4" />
            {profile.phone.display}
          </a>
          <span className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-card border border-border text-muted-foreground text-sm">
            <MapPin className="w-4 h-4" />
            {profile.location}
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
