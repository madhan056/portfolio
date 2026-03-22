import { motion } from "framer-motion";

// Use real colored svgs from devicon/jsdelivr
const skillsList = [
  { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Django", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
  { name: "Flask", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
  { name: "Postman API", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  { name: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "TensorFlow", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
  { name: "Linux", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-12 font-mono text-left">
          class <span className="text-gradient-primary">Skills:</span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          {skillsList.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border flex flex-col items-center justify-center gap-4 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(160_84%_39%/0.15)] transition-all duration-300 backdrop-blur-sm shadow-sm cursor-none"
            >
              <img src={skill.iconUrl} alt={skill.name} className="w-12 h-12 object-contain group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_hsl(160_84%_39%/0.8)] transition-all duration-300" />
              <h4 className="font-bold text-sm md:text-base text-muted-foreground group-hover:text-foreground tracking-wide text-center transition-colors">
                {skill.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
