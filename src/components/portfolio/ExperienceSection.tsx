import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Softclinch Consulting Services Pvt. Ltd.",
    role: "Python Developer",
    period: "Jul 2025 – Present",
    location: "Chennai",
    project: "WhatsApp Automation Tool (Inaiwazhi)",
    points: [
      "Developed and maintained RESTful backend APIs using Flask, focusing on scalable architecture, clean code, and secure data handling.",
      "Designed and optimized PostgreSQL database schemas and queries to improve application performance.",
      "Implemented media storage workflows using Wasabi S3- compatible cloud storage.",
      "Integrated Twilio API and Meta WhatsApp API to enable messaging automation and campaign management features.",
      "Utilized Supabase for authentication and database services.",
      "Collaborated with the Next.js (TypeScript) frontend team for backend–frontend API integration and debugging. Built CI/CD pipelines using GitHub Actions and containerized applications with Docker and Docker Compose.",
      "Deployed and managed applications on Linux-based cloud servers (Linode and Hostinger).",
      "Configured Nginx reverse proxy with SSL (Certbot) and implemented server security practices such as SSH key authentication and firewall configuration.",
    ],
  },
  {
    company: "Lead Integrated Business Services",
    role: "Python Developer Intern",
    period: "Jan 2025 – Apr 2025",
    location: "Chennai",
    project: "Face Recognition Attendance System",
    points: [
      "Developed an automated attendance system using Python, ArcFace, OpenCV, and MySQL, integrating real-time IP camera input for face recognition and attendance logging.",
      "Implemented face detection and recognition pipelines, improving accuracy and automation in attendance tracking.",
      "Gained hands-on experience with YOLOv5 and YOLOv8 for object detection, including dataset annotation, model training, and evaluation.",
      "Built automation workflows in n8n integrating Mistral AI cloud chat model, Telegram Bot, HTTP APIs, and Webhook nodes to generate AI-driven Instagram post content with dynamic user selection and approval logic.",
      "Designed and optimized MySQL databases with constraints and relational schema design to ensure data integrity and performance.",
      "Developed basic web applications using Flask, implementing routes, Jinja templates, and GET/POST request handling.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-12 font-mono text-left">
          def <span className="text-gradient-primary">Experience():</span>
        </h3>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-[12px] top-2 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background hidden md:block" />

                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{exp.role}</h4>
                      <p className="text-primary font-mono text-sm">{exp.company}</p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  {exp.project && (
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono text-terminal-yellow bg-muted px-2.5 py-1 rounded mb-3">
                      <Briefcase className="w-3 h-3" />
                      {exp.project}
                    </div>
                  )}

                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-primary mt-1 shrink-0">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
