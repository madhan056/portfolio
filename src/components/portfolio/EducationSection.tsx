import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Sc. in Computer Science",
    institution: "St. Thomas College of Arts & Science (affiliated to University of Madras)",
    period: "Jun 2021 – May 2024",
  },
  {
    degree: "Higher Secondary (HSC)",
    institution: "Sri Sayee Vivekananda Vidyalaya Matriculation Higher Secondary School",
    period: "Passed out - 2021",
  },
  {
    degree: "Secondary School (SSLC)",
    institution: "Sri Sayee Vivekananda Vidyalaya Matriculation Higher Secondary School",
    period: "Passed out - 2019",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-12 font-mono text-left">
          # <span className="text-gradient-primary">Education</span>
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
            >
              <GraduationCap className="w-6 h-6 text-primary mb-3" />
              <h4 className="font-semibold text-foreground text-sm mb-1">{edu.degree}</h4>
              <p className="text-xs text-primary font-mono mb-2">{edu.institution}</p>
              <p className="text-xs text-muted-foreground">{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
