import Image from "next/image";
import Hero from "./components/Hero";
import QuickAccess from "./components/QuickAccess";
import ServicesSection from "./components/ServicesSection";

import DoctorsInfo from "./components/DoctorsInfo";
import WhyChooseUs from "./components/WhyChooseUs";
import { Link2 } from "lucide-react";
import Link from "next/link";



export default function Home() {
  return (
    <div >
      <Hero></Hero>
      <QuickAccess></QuickAccess>
      <ServicesSection></ServicesSection>
      <WhyChooseUs></WhyChooseUs>
      <DoctorsInfo></DoctorsInfo>
    </div>
  );
}
