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
      "Promoted from Trainee to full-time Python Developer based on performance",
      "Developed and maintained RESTful backend APIs using Flask with scalable architecture",
      "Designed and optimized PostgreSQL database schemas and queries",
      "Implemented media storage workflows using Wasabi S3-compatible cloud storage",
      "Integrated Twilio API and Meta WhatsApp API for messaging automation",
      "Built CI/CD pipelines using GitHub Actions, containerized apps with Docker",
      "Deployed and managed apps on Linux-based cloud servers (Linode & Hostinger)",
      "Configured Nginx reverse proxy with SSL (Certbot) and SSH key authentication",
    ],
  },
  {
    company: "Lead Integrated Business Services",
    role: "Python Developer Intern",
    period: "Jan 2025 – Apr 2025",
    location: "Chennai",
    project: "Face Recognition Attendance System",
    points: [
      "Developed automated attendance system using Python, ArcFace, OpenCV, and MySQL",
      "Implemented face detection and recognition pipelines with real-time IP camera input",
      "Gained hands-on experience with YOLOv5 and YOLOv8 for object detection",
      "Built n8n automation workflows integrating Mistral AI, Telegram Bot, and Webhooks",
      "Designed and optimized MySQL databases with constraints and relational schemas",
    ],
  },
  {
    company: "Uddhava Logistics Pvt Limited",
    role: "MIS Executive",
    period: "Aug 2024 – Nov 2024",
    location: "Chennai",
    points: [
      "Ensured accurate data entry and maintained system integrity from invoices",
      "Generated MIS reports and contributed to data analysis for operational efficiency",
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
        <h2 className="font-mono text-primary text-sm mb-2">{"// experience"}</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-12">
          Work <span className="text-gradient-primary">Experience</span>
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
