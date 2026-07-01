import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import OrganizedSection from "@/components/OrganizedSection";
import FeatureGrid from "@/components/FeatureGrid";
import Comparison from "@/components/Comparison";
import SocialProof from "@/components/SocialProof";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <OrganizedSection />
        <FeatureGrid />
        <Comparison />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
