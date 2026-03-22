import { motion } from "framer-motion";

const skillsList = [
  { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Flask", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg", imgClass: "invert brightness-200" },
  { name: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "RESTful API", iconUrl: "https://img.icons8.com/fluency/96/api-settings.png" },
  { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "Supabase", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  { name: "Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Nginx", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
  { name: "Linux Server Deployment", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
  { name: "Wasabi (S3-Compatible Object Storage)", iconUrl: "https://cdn.simpleicons.org/wasabi/23C02E" },
  { name: "N8N", iconUrl: "https://cdn.simpleicons.org/n8n/FF6666" },
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

        <div 
          className="grid gap-4 md:gap-6 w-full"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))" }}
        >
          {skillsList.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.1 }}
              className="group relative p-6 rounded-3xl bg-[#111318] border border-border/30 flex flex-col items-center justify-center hover:border-primary/50 hover:bg-[#151821] hover:shadow-[0_0_25px_hsl(160_84%_39%/0.15)] transition-all duration-500 backdrop-blur-sm cursor-none aspect-square"
            >
              {/* Animated Tooltip Label */}
              <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:-translate-y-2 px-4 py-2 bg-background border border-border/50 rounded-lg text-sm font-semibold tracking-wide text-foreground whitespace-nowrap z-20 pointer-events-none drop-shadow-2xl">
                {skill.name}
              </div>

              {/* Skill Logo */}
              <img 
                src={skill.iconUrl} 
                alt={skill.name} 
                className={`w-16 h-16 md:w-20 md:h-20 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all duration-500 ${skill.imgClass || ""}`} 
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
