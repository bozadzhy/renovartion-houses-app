import MainProjects from "@/components/shared/main-projects";
import SwiperSlider from "@/components/shared/slider";
import Hero from "@/components/shared/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <SwiperSlider />
      <MainProjects />
    </main>
  );
}
