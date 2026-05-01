import logo from "@/assets/mycare-logo.jpeg";
import collabLogo from "@/assets/mycare-sevra.jpeg";

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 py-12 bg-card">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="MyCare" className="h-9 w-auto rounded-md" />
              <span className="font-display font-bold text-lg text-primary-deep">MyCare</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              A healthcare revolution — making care fast, intelligent, and accessible for everyone.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-widest text-foreground/70">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#ecosystem" className="hover:text-primary transition-colors">Ecosystem</a></li>
              <li><a href="#team" className="hover:text-primary transition-colors">Team</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-widest text-foreground/70">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="mailto:getmycare108@gmail.com" className="hover:text-primary transition-colors">getmycare108@gmail.com</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Partner with us</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border/60">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              In Collaboration With
            </div>
            <div className="w-full max-w-xl rounded-2xl overflow-hidden shadow-card border border-border/40 bg-[#050a1f]">
              <img
                src={collabLogo}
                alt="MyCare in collaboration with SEVRA Ai"
                loading="lazy"
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              MyCare™ × <span className="font-semibold text-foreground">SEVRA Ai</span> — building the next generation of intelligent healthcare together.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} MyCare™. All rights reserved.</div>
          <div>A Healthcare Revolution.</div>
        </div>
      </div>
    </footer>
  );
};
