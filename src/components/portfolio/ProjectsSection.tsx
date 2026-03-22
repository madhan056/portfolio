import { motion } from "framer-motion";
import { ExternalLink, Database, Bot, CheckSquare } from "lucide-react";

const projects = [
  {
    icon: Bot,
    title: "Face Recognition Attendance System",
    tech: ["Python", "MySQL", "ArcFace", "OpenCV"],
    description:
      "Automated attendance system developed using ArcFace, OpenCV, and MySQL for real-time face detection and recognition via webcam. Stores attendance data (name, date, time) in the database. Utilizes opencv-contrib-python, onnxruntime, and insightface for optimized face recognition performance.",
  },
  {
    icon: CheckSquare,
    title: "Task Management System",
    tech: ["Python", "SQLite", "Django", "React.js"],
    description:
      "Full-stack task management app with backend focus. Developed using Django REST Framework and React.js, implementing APIs for task CRUD operations, filtering, status management, prioritization, deadline tracking, analytics data generation, and CSV export, with a clean and efficient API architecture.",
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
        <h3 className="text-3xl md:text-4xl font-bold mb-12 font-mono text-left">
          for project in <span className="text-gradient-primary">Projects:</span>
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all hover:shadow-[0_0_30px_hsl(160_84%_39%/0.06)]"
            >
              <project.icon className="w-8 h-8 text-primary mb-4 group-hover:drop-shadow-[0_0_8px_hsl(160_84%_39%/0.5)] transition-all" />
              <h4 className="text-lg font-semibold text-foreground mb-2">{project.title}</h4>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-[10px] font-mono rounded bg-muted text-primary border border-primary/10"
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
