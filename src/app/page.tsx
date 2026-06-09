import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Evidence from "@/components/Evidence";
import ThePlaybook from "@/components/ThePlaybook";
import Defendants from "@/components/Defendants";
import Victims from "@/components/Victims";
import Testimonies from "@/components/Testimonies";
import TakeAction from "@/components/TakeAction";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f0f0f0]">
      <Nav />
      <Hero />
      <Evidence />
      <ThePlaybook />
      <Defendants />
      <Victims />
      <Testimonies />
      <TakeAction />
      <Resources />
      <Footer />
    </main>
  );
}
