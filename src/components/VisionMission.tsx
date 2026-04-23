import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

export const VisionMission = () => {
  const items = [
    {
      icon: Eye,
      label: "Vision",
      title: "Healthcare that's fast, intelligent, and accessible for everyone.",
      text: "We see a future where quality care is never delayed by geography, paperwork, or complexity.",
    },
    {
      icon: Target,
      label: "Mission",
      title: "One seamless platform for technology, AI, and care.",
      text: "We integrate every layer of healthcare — from consultation to delivery — to elevate patient experience and outcomes.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-soft relative">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-card rounded-[2rem] p-10 shadow-card border border-border/50 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <it.icon size={22} />
                  </div>
                  <div className="text-sm font-semibold text-primary uppercase tracking-widest">{it.label}</div>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 leading-tight">{it.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{it.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
