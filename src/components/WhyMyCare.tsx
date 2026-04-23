import { motion } from "framer-motion";
import { Brain, Zap, Layers, UserCheck } from "lucide-react";

const usps = [
  { icon: Brain, title: "AI-powered Healthcare", text: "Smart triage, recommendations, and assistance — built into every step." },
  { icon: Zap, title: "10–15 Minute Response", text: "Quick Pharma, ambulance, and consultations designed for speed when it matters." },
  { icon: Layers, title: "Fully Integrated", text: "One app for doctors, medicines, labs, ambulance, and home care." },
  { icon: UserCheck, title: "Patient-first Experience", text: "Every flow designed around clarity, trust, and outcomes — not paperwork." },
];

export const WhyMyCare = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Why MyCare</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Built different. <span className="text-gradient">Built for India.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {usps.map((u, i) => (
            <motion.div
              key={u.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 p-6 rounded-2xl hover:bg-secondary/50 transition-colors"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center text-primary-foreground shadow-glow">
                <u.icon size={22} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-2">{u.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{u.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
