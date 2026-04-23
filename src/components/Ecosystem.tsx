import { motion } from "framer-motion";
import { Smartphone, Briefcase, ShieldCheck } from "lucide-react";

const nodes = [
  {
    icon: Smartphone,
    label: "MyCare App",
    role: "User Platform",
    text: "The patient-facing app for booking, consultations, and care delivery.",
  },
  {
    icon: Briefcase,
    label: "MyCare Service",
    role: "Provider Platform",
    text: "Tools for doctors, pharmacies, and partners to serve patients seamlessly.",
  },
  {
    icon: ShieldCheck,
    label: "MyCare Admin",
    role: "Admin System",
    text: "Operations, oversight, and analytics across the entire ecosystem.",
  },
];

export const Ecosystem = () => {
  return (
    <section id="ecosystem" className="py-24 md:py-32 bg-gradient-soft relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Our Ecosystem</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            One ecosystem. <span className="text-gradient">Three platforms.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            MyCare connects users, providers, and operations into a single, intelligent network.
          </p>
        </motion.div>

        <div className="relative grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* connector lines */}
          <div className="hidden md:block absolute top-24 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          {nodes.map((n, i) => (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative bg-card rounded-3xl p-8 shadow-card border border-border/50 text-center group hover:shadow-elevated transition-all"
            >
              <div className="relative mx-auto w-20 h-20 mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-hero opacity-20 blur-xl animate-pulse-glow" />
                <div className="relative w-full h-full rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground shadow-glow">
                  <n.icon size={32} />
                </div>
              </div>
              <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">{n.role}</div>
              <h3 className="font-display text-2xl font-bold mb-3">{n.label}</h3>
              <p className="text-muted-foreground leading-relaxed">{n.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
