import HeroSection from "@/components/about/HeroSection";
import MissionSection from "@/components/about/MissionSection";
import OverviewSection from "@/components/about/OverviewSection";
import ProfileSection from "@/components/about/ProfileSection";
import Container from "@/components/container";

export default function About({ authors, settings }) {
  return (
    <>
      <HeroSection />
      <Container>
        <div className="mx-auto my-2 grid grid-rows-2 gap-4 lg:grid-cols-2 lg:grid-rows-none lg:gap-10">
          <OverviewSection />
          <ProfileSection />
        </div>
      </Container>
    </>
  );
}
