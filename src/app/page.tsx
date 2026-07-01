import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Services from "@/components/Service";
import Testimonials from "@/components/Testimonial";
import Work from "@/components/Work";
import ClientsSection from "@/components/ClientsSection";
import ClientsAndTestimonials from "@/components/ClientsAndTestimonials";
import HowWeWorkTimeline from "@/components/Howweworktimeline";
import MeetVisionXSection from "@/components/Meetvisionxsection";
import VbmLine from "@/components/VbmLine";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#09090B]">
      <Navbar />

      <Hero />

      <Services />

      <HowWeWorkTimeline />

      <ClientsSection />

      {/* <ClientsAndTestimonials /> */}

      <Work />

      <Testimonials />

      <VbmLine />

      <MeetVisionXSection />

      {/* <HowWeWorkSection /> */}

      {/* <Footer /> */}
    </main>
  );
}
