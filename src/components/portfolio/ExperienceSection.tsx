import { motion } from "framer-motion";
import { Briefcase, Award, MapPin } from "lucide-react";

interface ProjectDetail {
  name: string;
  desc: string;
  bullets: string[];
  tech: string[];
}

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  badge?: string;
  summary: string;
  projects?: ProjectDetail[];
  generalPoints?: string[];
}

const experiences: Experience[] = [
  {
    company: "SoftClinch Consulting Services Pvt. Ltd.",
    role: "Full Stack Developer (Backend-focused)",
    period: "Jul 2025 – Present",
    location: "Chennai",
    badge: "Promoted from Trainee Developer to Full Stack Developer based on performance",
    summary:
      "Own backend architecture and development end-to-end for live B2B SaaS and enterprise client platforms, maintaining RESTful APIs, relational databases, background tasks, and cloud deployment pipelines.",
    projects: [
      {
        name: "InaiWazhi — SaaS-based WhatsApp Business Automation Platform",
        desc: "Live messaging campaign and workflow automation SaaS engine",
        tech: ["Flask", "PostgreSQL", "Supabase", "Redis", "Celery", "RabbitMQ", "Twilio API", "Meta WhatsApp API", "Wasabi S3", "Docker", "Nginx"],
        bullets: [
          "Started as a Trainee Developer and was promoted to Full Stack Developer based on performance.",
          "Developed and maintained backend applications and RESTful APIs using Flask, writing clean, modular, and maintainable Python code with structured request validation and error handling.",
          "Applied Object-Oriented Programming (OOP) principles to build scalable backend services with reusable and extensible components.",
          "Designed and optimized PostgreSQL database schemas, implemented relational models, indexes, and optimized SQL queries for high-performance data access.",
          "Integrated applications with PostgreSQL, MySQL, Twilio API, and Meta WhatsApp API, handling authentication, request validation, and error management.",
          "Utilized Pandas for CSV/Excel data validation and structured data import into production databases, and implemented Celery for asynchronous and scheduled background task processing.",
          "Used Boto3 for S3 client creation to support file upload and delete operations within the API, integrating with Wasabi S3-compatible cloud storage; utilized Supabase for authentication and database services.",
          "Troubleshot and resolved production issues, improving application reliability and backend performance through debugging and optimization.",
          "Built CI/CD pipelines using GitHub Actions, containerized applications with Docker and Docker Compose, and deployed them on Linux-based cloud servers with Nginx, SSL (Certbot), SSH authentication, and firewall configuration.",
          "Collaborated with frontend developers, participated in technical discussions, and produced technical documentation to support development and maintenance.",
        ],
      },
      {
        name: "SAP Financial Reporting Platform",
        desc: "Enterprise financial analytics backend for client SAP data migration",
        tech: ["Django REST Framework", "PostgreSQL", "Psycopg", "Keyset Pagination", "Data Migration"],
        bullets: [
          "Developed and maintained backend applications and RESTful APIs using Django REST Framework, delivering secure APIs for SAP financial reporting and analytics.",
          "Designed and implemented a 20+ table PostgreSQL relational database schema (hundreds of columns) to support large-scale financial and accounting data processing.",
          "Performed large-scale SAP data migration, bulk data imports, and data validation while ensuring data accuracy, consistency, and referential integrity using PostgreSQL \\copy, explicit column mapping, and staging-table verification.",
          "Executed a live production database migration from Supabase to a self-hosted PostgreSQL instance via pg_dump/pg_restore.",
          "Optimized backend performance by improving database queries and API logic, and implementing efficient offset- and cursor-based pagination to improve API response times for large datasets.",
          "Resolved backend issues through root cause analysis, debugging, and collaborative problem-solving during development and production support.",
          "Collaborated with the Next.js frontend team to integrate APIs and enhance application functionality for financial reporting modules.",
          "Quickly learned and applied Django REST Framework and advanced PostgreSQL concepts to deliver enterprise-scale backend solutions.",
        ],
      },
    ],
  },
  {
    company: "Lead Integrated Business Services Pvt. Ltd.",
    role: "Python Developer Intern",
    period: "Jan 2025 – Apr 2025",
    location: "Chennai",
    summary: "Developed AI-powered computer vision applications and workflow automation.",
    projects: [
      {
        name: "Face Recognition-Based Attendance System",
        desc: "Real-time automated facial detection and attendance logging system",
        tech: ["Python", "ArcFace", "OpenCV", "MySQL", "YOLOv5", "YOLOv8", "n8n", "Mistral AI"],
        bullets: [
          "Developed a Python-based automated attendance system using ArcFace, OpenCV, and MySQL, writing clean, modular Python code for face detection, recognition, and attendance logging.",
          "Designed and optimized MySQL relational databases with normalized schemas, foreign key relationships, and efficient SQL queries to ensure data integrity and performance.",
          "Worked with YOLOv5 and YOLOv8 for object detection, including dataset annotation, model training, and model evaluation.",
          "Built automation workflows using n8n, integrating HTTP APIs, Webhooks, Telegram Bot, and Mistral AI cloud models to automate business processes.",
          "Developed Flask web applications with route handling, session management, and GET/POST request processing.",
          "Gained hands-on experience with Linux environments, application deployment workflows, and backend development best practices.",
        ],
      },
    ],
  },
  {
    company: "Uddhava Logistics Pvt. Ltd.",
    role: "MIS Executive",
    period: "Aug 2024 – Nov 2024",
    location: "Chennai",
    summary: "Managed operational data integrity, audit-ready documentation, and MIS reporting for logistics workflows.",
    generalPoints: [
      "Ensured accurate, complete, and error-free data entry from invoices into systems to maintain data integrity, and created MIS reports to support business operations.",
      "Organized and updated records of invoices, deliveries, and inventory to support auditing and compliance readiness.",
      "Generated and maintained accurate, compliant documentation related to logistics operations.",
      "Analyzed operational data to identify trends and support improvements in efficiency, and suggested process enhancements for data-entry and logistics workflows.",
      "Maintained confidentiality and security of sensitive operational and financial information.",
      "Collaborated with team members and external partners to resolve issues and ensure smooth day-to-day logistics operations.",
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

          <div className="space-y-12">
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

                <div className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all shadow-sm">
                  {/* Header Row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground">{exp.role}</h4>
                      <p className="text-primary font-mono text-base font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs font-mono text-muted-foreground bg-muted px-3 py-1 rounded-full border border-border/50">
                        {exp.period}
                      </span>
                      <span className="text-[11px] font-mono text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-primary" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Promotion Badge */}
                  {exp.badge && (
                    <div className="inline-flex items-center gap-2 text-xs font-mono text-terminal-yellow bg-terminal-yellow/10 border border-terminal-yellow/20 px-3 py-1.5 rounded-lg mb-4">
                      <Award className="w-4 h-4 shrink-0 text-terminal-yellow" />
                      <span>{exp.badge}</span>
                    </div>
                  )}

                  {/* Summary */}
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* General Bullet Points */}
                  {exp.generalPoints && (
                    <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                      {exp.generalPoints.map((point, j) => (
                        <li key={j} className="flex gap-2.5 items-start">
                          <span className="text-primary mt-1 shrink-0 text-xs">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Projects Breakdown */}
                  {exp.projects && exp.projects.length > 0 && (
                    <div className="space-y-6 mt-4 border-t border-border/50 pt-5">
                      {exp.projects.map((proj, k) => (
                        <div key={k} className="p-4 rounded-xl bg-background/50 border border-border/40">
                          <div className="flex items-center gap-2 mb-1">
                            <Briefcase className="w-4 h-4 text-primary shrink-0" />
                            <h5 className="text-base font-semibold text-foreground">{proj.name}</h5>
                          </div>
                          <p className="text-xs text-muted-foreground mb-3 font-mono">
                            {proj.desc}
                          </p>

                          {/* Tech Badges */}
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {proj.tech.map((t) => (
                              <span
                                key={t}
                                className="px-2 py-0.5 text-[11px] font-mono rounded bg-primary/10 text-primary border border-primary/20"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          {/* Project Bullets */}
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {proj.bullets.map((bullet, idx) => (
                              <li key={idx} className="flex gap-2.5 items-start">
                                <span className="text-primary mt-1 shrink-0 text-xs">▹</span>
                                <span className="leading-relaxed">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
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
