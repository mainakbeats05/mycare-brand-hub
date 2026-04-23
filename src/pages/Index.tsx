import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { VisionMission } from "@/components/VisionMission";
import { Services } from "@/components/Services";
import { Ecosystem } from "@/components/Ecosystem";
import { WhyMyCare } from "@/components/WhyMyCare";
import { Team } from "@/components/Team";
import { Roadmap } from "@/components/Roadmap";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "MyCare — Smarter Healthcare. Faster Access.";
    const desc = "MyCare is an AI-powered healthcare ecosystem for modern India — doctors, pharmacy, ambulance, labs and home care in one platform.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <Services />
      <Ecosystem />
      <WhyMyCare />
      <Team />
      <Roadmap />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
