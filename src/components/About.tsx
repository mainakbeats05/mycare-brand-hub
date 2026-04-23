import { motion } from "framer-motion";
import { GraduationCap, Heart, Lightbulb } from "lucide-react";

const pillars = [
  { icon: GraduationCap, title: "Student-led Innovation", text: "Built by young founders who experienced the gaps in Indian healthcare firsthand." },
  { icon: Heart, title: "Real-world Impact", text: "Solving actual access, speed, and trust problems patients face every day." },
  { icon: Lightbulb, title: "Vision-driven", text: "Building an accessible, intelligent digital healthcare layer for India." },
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">About MyCare</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            A healthcare revolution, <span className="text-gradient">born from a real need.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            MyCare started as a student-led mission to fix the slow, fragmented experience of getting care in India.
            What began as a simple idea is now a full ecosystem — connecting patients with doctors, medicines, labs,
            and emergency services through one intelligent platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gradient-card rounded-3xl p-8 shadow-card border border-border/50 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center text-primary-foreground mb-5 shadow-glow">
                <p.icon size={26} />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
