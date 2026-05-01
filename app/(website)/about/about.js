import HeroSection from "@/components/about/HeroSection";
import OverviewSection from "@/components/about/OverviewSection";
import ProfileSection from "@/components/about/ProfileSection";
import Container from "@/components/container";

export default function About({ authors, settings }) {
  return (
    <Container>
      <HeroSection />
      <div className="mx-auto grid w-4/5 grid-cols-2 gap-10">
        <OverviewSection />
        <ProfileSection />
      </div>
    </Container>
  );
}
