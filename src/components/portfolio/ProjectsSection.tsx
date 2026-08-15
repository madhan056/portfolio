import { motion } from "framer-motion";
import { MessageSquare, Database, Bot, CheckSquare } from "lucide-react";

const projects = [
  {
    icon: MessageSquare,
    category: "Professional SaaS",
    company: "SoftClinch",
    title: "InaiWazhi — WhatsApp SaaS Platform",
    tech: ["Flask", "PostgreSQL", "Supabase Auth", "Redis", "Celery", "RabbitMQ", "Twilio API", "Meta WhatsApp API", "Wasabi S3", "Docker"],
    description:
      "Developed scalable Flask-based applications, managed PostgreSQL/MySQL databases, integrated Twilio, Meta WhatsApp, Supabase, and Wasabi S3 services, and handled production debugging and performance optimization. Also contributed to Docker-based deployment, GitHub Actions CI/CD, Linux server administration, Nginx configuration, SSL setup, and technical documentation.",
  },
  {
    icon: Database,
    category: "Enterprise Analytics",
    company: "SoftClinch",
    title: "SAP Financial Reporting Platform",
    tech: ["Django REST Framework", "PostgreSQL", "Psycopg", "Keyset Pagination", "Data Migration", "Docker"],
    description:
      "Enterprise accounting and financial reporting backend delivering secure APIs for historical SAP data analysis. Designed a 20+ table PostgreSQL schema (hundreds of columns), performed bulk staging data migrations, and implemented keyset pagination for high-volume dataset queries.",
  },
  {
    icon: Bot,
    category: "AI & Computer Vision",
    company: "LIBS",
    title: "Face Recognition Attendance System",
    tech: ["Python", "ArcFace", "OpenCV", "MySQL", "YOLOv5/v8", "n8n", "Mistral AI"],
    description:
      "Real-time automated face-recognition attendance management system integrating IP camera feeds with MySQL database logging. Built with ArcFace, OpenCV, and insightface, alongside object detection models (YOLOv5/v8) and n8n AI workflow automation.",
  },
  {
    icon: CheckSquare,
    category: "Backend REST APIs",
    company: "Academic / Personal",
    title: "Task Management System",
    tech: ["Django REST Framework", "MySQL", "RESTful APIs", "Pandas", "CSV Export"],
    description:
      "Task management backend service built using Django REST Framework and MySQL. Delivers RESTful APIs for task CRUD operations, priority filtering, deadline tracking, operational analytics data generation, and CSV report export.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 font-mono text-left">
          for project in <span className="text-gradient-primary">Projects:</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="group p-6 md:p-7 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all hover:shadow-[0_0_30px_hsl(160_84%_39%/0.08)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <project.icon className="w-8 h-8 text-primary group-hover:drop-shadow-[0_0_8px_hsl(160_84%_39%/0.5)] transition-all" />
                  <span className="text-xs font-mono text-muted-foreground bg-muted px-2.5 py-1 rounded-full border border-border/50">
                    {project.category} • {project.company}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/50">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-[11px] font-mono rounded bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
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

export default ProjectsSection;
