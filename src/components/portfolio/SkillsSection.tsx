import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Backend & Core",
    skills: ["Python", "Flask", "Django REST Framework", "REST APIs", "OOP Principles"],
  },
  {
    title: "Databases & Caching",
    skills: ["PostgreSQL", "MySQL", "Redis Caching", "Supabase DB", "SQL Schema Design", "Keyset Pagination"],
  },
  {
    title: "APIs & Integrations",
    skills: ["Twilio API", "Meta WhatsApp API", "Webhooks", "JWT Auth Middleware"],
  },
  {
    title: "Data & Processing",
    skills: ["Celery", "RabbitMQ", "Pandas", "Wasabi S3 (Boto3)"],
  },
  {
    title: "DevOps & Infrastructure",
    skills: ["Docker", "Docker Compose", "GitHub Actions (CI/CD)", "Nginx Reverse Proxy", "Linux / Ubuntu", "SSL / Certbot"],
  },
  {
    title: "AI & Computer Vision",
    skills: ["ArcFace", "OpenCV", "YOLOv5 / YOLOv8", "n8n Workflows"],
  },
];

const skillsList = [
  { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Flask", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg", imgClass: "invert brightness-200" },
  { name: "Django REST Framework", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg", imgClass: "invert brightness-200" },
  { name: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "Redis", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
  { name: "RESTful API", iconUrl: "https://img.icons8.com/fluency/96/api-settings.png" },
  { name: "Celery & RabbitMQ", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg" },
  { name: "Twilio & WhatsApp API", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twilio/twilio-original.svg" },
  { name: "Pandas", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
  { name: "Wasabi (S3 Storage)", iconUrl: "https://cdn.simpleicons.org/wasabi/23C02E" },
  { name: "Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "GitHub Actions", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" },
  { name: "Nginx", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
  { name: "Linux / Server", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
  { name: "Supabase", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "n8n", iconUrl: "https://cdn.simpleicons.org/n8n/FF6666" },
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
        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-mono text-left">
          class <span className="text-gradient-primary">Skills:</span>
        </h2>

        {/* Categorized Skills for ATS & Quick Recruiter Scanning */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover:shadow-[0_0_20px_hsl(160_84%_39%/0.08)]"
            >
              <h3 className="text-sm font-semibold text-primary font-mono mb-3 uppercase tracking-wider">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-muted text-foreground border border-border/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Skill Icon Grid */}
        <div 
          className="grid gap-4 md:gap-6 w-full"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))" }}
        >
          {skillsList.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.08 }}
              className="group relative p-4 md:p-6 rounded-2xl bg-[#111318] border border-border/30 flex flex-col items-center justify-center hover:border-primary/50 hover:bg-[#151821] hover:shadow-[0_0_25px_hsl(160_84%_39%/0.15)] transition-all duration-300 backdrop-blur-sm aspect-square"
            >
              {/* Tooltip Label */}
              <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:-translate-y-1 px-3 py-1 bg-background border border-border/50 rounded text-xs font-semibold text-foreground whitespace-nowrap z-20 pointer-events-none shadow-lg">
                {skill.name}
              </div>

              {/* Skill Logo */}
              <img 
                src={skill.iconUrl} 
                alt={skill.name} 
                className={`w-12 h-12 md:w-16 md:h-16 object-contain opacity-85 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ${skill.imgClass || ""}`} 
                loading="lazy"
              />
              <span className="text-[11px] font-mono text-muted-foreground mt-2 text-center truncate max-w-full group-hover:text-foreground transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
