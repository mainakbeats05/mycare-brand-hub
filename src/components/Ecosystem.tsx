import { motion } from "framer-motion";
import { Smartphone, Briefcase, ShieldCheck, Sparkles, Check } from "lucide-react";

const platforms = [
  {
    icon: Smartphone,
    label: "MyCare App",
    role: "User Platform",
    tagline: "For patients & families",
    text: "The patient-facing app for booking, consultations, and care delivery.",
    features: [
      "Book doctors & video consults",
      "Order medicines in 15 minutes",
      "Personal health records",
    ],
    accent: "from-primary to-primary-deep",
  },
  {
    icon: Briefcase,
    label: "MyCare Service",
    role: "Provider Platform",
    tagline: "For doctors & pharmacies",
    text: "Tools for doctors, pharmacies, and partners to serve patients seamlessly.",
    features: [
      "Smart scheduling & queues",
      "Digital prescriptions & inventory",
      "Earnings & insights dashboard",
    ],
    accent: "from-accent to-primary",
    featured: true,
  },
  {
    icon: ShieldCheck,
    label: "MyCare Admin",
    role: "Admin System",
    tagline: "For operations & oversight",
    text: "Operations, oversight, and analytics across the entire ecosystem.",
    features: [
      "Real-time network monitoring",
      "Compliance & quality control",
      "Cross-platform analytics",
    ],
    accent: "from-primary-deep to-accent",
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Sparkles size={14} />
            Our Ecosystem
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            One ecosystem. <span className="text-gradient">Three platforms.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            MyCare connects users, providers, and operations into a single, intelligent network — all powered by AI.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* connector line */}
          <div className="hidden md:block absolute top-32 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 pt-4">
            {platforms.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative bg-card rounded-3xl p-6 sm:p-8 border transition-all hover:-translate-y-1 ${
                  p.featured
                    ? "border-primary/30 shadow-elevated md:scale-105"
                    : "border-border/50 shadow-card hover:shadow-elevated"
                }`}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-hero text-primary-foreground text-xs font-semibold uppercase tracking-wider shadow-glow">
                    Core
                  </div>
                )}

                <div className="relative mx-auto w-20 h-20 mb-6">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${p.accent} opacity-20 blur-xl`} />
                  <div className={`relative w-full h-full rounded-2xl bg-gradient-to-br ${p.accent} flex items-center justify-center text-primary-foreground shadow-glow`}>
                    <p.icon size={32} />
                  </div>
                </div>

                <div className="text-center mb-5">
                  <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">{p.role}</div>
                  <h3 className="font-display text-2xl font-bold mb-1">{p.label}</h3>
                  <div className="text-sm text-muted-foreground">{p.tagline}</div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed text-center mb-6">
                  {p.text}
                </p>

                <ul className="space-y-2.5 pt-5 border-t border-border/50">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-0.5 w-4 h-4 rounded-full bg-primary/15 text-primary flex items-center justify-center flex-shrink-0">
                        <Check size={11} strokeWidth={3} />
                      </span>
                      <span className="text-foreground/80">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Hub footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 max-w-2xl mx-auto text-center px-6 py-5 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50"
          >
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Unified by AI.</span> Every platform shares one intelligence layer — so care flows seamlessly between patients, providers, and operations.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
