import Image from "next/image";
import Container from "@/components/ui/container";
import { HousePlus, MoveRight } from "lucide-react";
import Button from "@/components/ui/button";
import Link from "next/link";
import MainProjects from "@/components/shared/main-projects";
import SwiperSlider from "@/components/shared/slider";
import Hero from "@/components/shared/hero";

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <Hero />
      <SwiperSlider />
      {/* Projects Section */}
      <MainProjects />
    </main>
  );
}
