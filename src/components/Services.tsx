import { motion } from "framer-motion";
import { Bot, Stethoscope, Pill, Ambulance, FlaskConical, HeartHandshake } from "lucide-react";

const services = [
  { icon: Bot, title: "AI Doctor Assistant", text: "Instant, intelligent triage and health guidance powered by medical AI.", soon: false },
  { icon: Stethoscope, title: "Online Consultation", text: "Connect with verified doctors via video, voice, or chat in minutes.", soon: false },
  { icon: Pill, title: "Quick Pharma", text: "Essential medicines delivered to your door in under 15 minutes.", soon: false },
  { icon: Ambulance, title: "Ambulance Booking", text: "One-tap emergency response with real-time tracking and dispatch.", soon: true },
  { icon: FlaskConical, title: "Home Lab Tests", text: "Sample collection at home with fast, accurate digital reports.", soon: true },
  { icon: HeartHandshake, title: "Nursing & Home Care", text: "Trained caregivers and nurses for elderly and recovery support.", soon: true },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Our Services</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Complete care, <span className="text-gradient">one tap away.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Six integrated services designed to cover every healthcare moment in your life.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative bg-gradient-card rounded-3xl p-7 shadow-card border border-border/40 hover:border-primary/30 hover:shadow-elevated hover:-translate-y-2 transition-all duration-300"
            >
              {s.soon && (
                <span className="absolute top-5 right-5 text-[10px] font-bold uppercase tracking-wider bg-accent/15 text-accent px-2.5 py-1 rounded-full">
                  Coming Soon
                </span>
              )}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-gradient-hero group-hover:text-primary-foreground group-hover:shadow-glow transition-all duration-300">
                <s.icon size={26} />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
