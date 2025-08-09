import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Benefits } from "@/components/sections/Benefits"
import { Membership } from "@/components/sections/Membership"
import { Testimonials } from "@/components/sections/Testimonials"
import { Footer } from "@/components/layout/Footer"

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Benefits />
      <Testimonials />
      <Membership />
      <Footer />
    </main>
  );
};

export default Index;
