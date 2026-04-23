import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const team = [
  { name: "Mainak Chakraborty", role: "Founder & CEO", initials: "MC" },
  { name: "Mandar Magar", role: "Co-Founder", initials: "MM" },
  { name: "Bhumi Changlani", role: "Managing Director", initials: "BC" },
  { name: "Ayush Shukla", role: "Technical Director", initials: "AS" },
];

export const Team = () => {
  return (
    <section id="team" className="py-24 md:py-32 bg-gradient-soft">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Our Team</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            The minds <span className="text-gradient">behind MyCare.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A young, driven team building the next generation of healthcare in India.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-3xl p-6 shadow-card border border-border/50 hover:shadow-elevated hover:-translate-y-1 transition-all"
            >
              <div className="relative aspect-square rounded-2xl bg-gradient-hero overflow-hidden mb-5 flex items-center justify-center">
                <div className="absolute inset-0 bg-mesh opacity-30" />
                <span className="relative font-display text-5xl font-extrabold text-primary-foreground">
                  {m.initials}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold">{m.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{m.role}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-deep transition-colors"
                aria-label={`Connect with ${m.name} on LinkedIn`}
              >
                <Linkedin size={14} /> Connect
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
