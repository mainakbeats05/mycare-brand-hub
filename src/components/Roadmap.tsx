import { motion } from "framer-motion";
import { Rocket, Stethoscope, Globe2 } from "lucide-react";

const phases = [
  {
    icon: Rocket,
    phase: "Phase 1",
    title: "Quick Pharma Launch",
    text: "15-minute medicine delivery rolls out as our flagship service across pilot cities.",
  },
  {
    icon: Stethoscope,
    phase: "Phase 2",
    title: "Doctor Consultations",
    text: "AI-assisted online consultations with verified doctors go live nationwide.",
  },
  {
    icon: Globe2,
    phase: "Phase 3",
    title: "Full Healthcare Ecosystem",
    text: "Ambulance, labs, home care, and provider tools complete the integrated platform.",
  },
];

export const Roadmap = () => {
  return (
    <section id="roadmap" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Roadmap</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            The journey <span className="text-gradient">ahead.</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10 md:-translate-x-px" />

          <div className="space-y-12">
            {phases.map((p, i) => (
              <motion.div
                key={p.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative flex items-start gap-6 md:gap-0 md:grid md:grid-cols-2 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* node */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-hero ring-4 ring-background shadow-glow z-10" />

                <div className={`pl-16 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-gradient-card rounded-2xl p-6 shadow-card border border-border/50 inline-block text-left">
                    <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <p.icon size={20} />
                      </div>
                      <div className="text-xs font-bold text-primary uppercase tracking-widest">{p.phase}</div>
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2">{p.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{p.text}</p>
                  </div>
                </div>
                <div />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
