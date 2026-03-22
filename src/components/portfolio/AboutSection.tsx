import { motion } from "framer-motion";
import { Server, Database, Container, Terminal } from "lucide-react";

const highlights = [
  { icon: Server, label: "Backend APIs", desc: "Flask & RESTful services" },
  { icon: Database, label: "Databases", desc: "PostgreSQL & MySQL" },
  { icon: Container, label: "DevOps", desc: "Docker, CI/CD, Nginx" },
  { icon: Terminal, label: "Linux", desc: "Server deployment & SSH" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-primary text-sm mb-2 uppercase tracking-wider">About</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-8">
          About <span className="text-gradient-primary">Me</span>
        </h3>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Python Backend Developer with hands-on experience building scalable web applications 
              and RESTful APIs using Python and Flask. Experienced in PostgreSQL database design, 
              API integration, and backend architecture, with a focus on clean code and secure data handling.
            </p>
            <p>
              Skilled in Docker, CI/CD (GitHub Actions), Linux server deployment, and Nginx configuration, 
              with experience deploying applications on Linode and Hostinger cloud servers. Worked with 
              Twilio API, Meta WhatsApp API, Supabase authentication, and Wasabi S3 cloud storage.
            </p>
            <p>
              Also have exposure to Computer Vision and AI models (YOLOv5, YOLOv8, ArcFace) 
              and workflow automation using n8n.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group"
              >
                <item.icon className="w-6 h-6 text-primary mb-3 group-hover:drop-shadow-[0_0_8px_hsl(175_80%_50%/0.5)] transition-all" />
                <p className="font-semibold text-foreground text-sm">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
