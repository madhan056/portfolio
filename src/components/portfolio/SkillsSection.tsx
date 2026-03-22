import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming & Backend",
    color: "primary",
    skills: ["Python", "Flask", "RESTful APIs", "SQL", "Git"],
  },
  {
    title: "Databases",
    color: "terminal-green",
    skills: ["PostgreSQL", "MySQL", "Supabase", "Schema Design"],
  },
  {
    title: "DevOps & Deployment",
    color: "terminal-yellow",
    skills: ["Docker", "Docker Compose", "Nginx", "GitHub Actions", "CI/CD", "Linux Server", "SSH", "SSL/Certbot"],
  },
  {
    title: "API & Integrations",
    color: "terminal-blue",
    skills: ["Twilio API", "Meta WhatsApp API", "Wasabi S3", "Supabase Auth"],
  },
  {
    title: "Web Technologies",
    color: "accent",
    skills: ["HTML5", "CSS3", "JavaScript", "Jinja Templates"],
  },
  {
    title: "AI/ML & Automation",
    color: "terminal-red",
    skills: ["ArcFace", "YOLOv5", "YOLOv8", "OpenCV", "n8n"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-primary text-sm mb-2 uppercase tracking-wider">Skills</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-12">
          Tech <span className="text-gradient-primary">Stack</span>
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
            >
              <h4 className="font-mono text-sm font-semibold text-primary mb-4">
                {cat.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-mono rounded-md bg-muted text-muted-foreground border border-border hover:text-primary hover:border-primary/30 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
