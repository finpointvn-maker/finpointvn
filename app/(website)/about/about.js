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
        <div className="mx-auto mb-4 mt-2 grid grid-cols-2 gap-10">
          <OverviewSection />
          <ProfileSection />
        </div>
        <MissionSection />
      </Container>
    </>
  );
}
