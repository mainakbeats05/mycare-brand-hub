import logo from "@/assets/mycare-logo.jpeg";

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
              <li><a href="mailto:hello@mycare.health" className="hover:text-primary transition-colors">hello@mycare.health</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Partner with us</a></li>
            </ul>
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
