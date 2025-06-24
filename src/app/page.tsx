import Footer from "@/components/Footers";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestmonials from "@/components/TestmonialCards";
import Upcoming from "@/components/Upcoming";
import { h1 } from "framer-motion/client";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <MusicSchoolTestmonials/>
      <Upcoming/>
      <Instructors/>
      <Footer/>
    </main>
   
  );
}
