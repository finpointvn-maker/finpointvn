import HeroSection from "@/components/about/HeroSection";
import OverviewSection from "@/components/about/OverviewSection";
import ProfileSection from "@/components/about/ProfileSection";
import Container from "@/components/container";

export default function About({ authors, settings }) {
  return (
    <>
      <HeroSection />
      <Container>
        <div className="mx-auto mt-2 grid grid-cols-2 gap-10">
          <OverviewSection />
          <ProfileSection />
        </div>
      </Container>
    </>
  );
}
