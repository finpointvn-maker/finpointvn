import HeroSection from "@/components/about/HeroSection";
import OverviewSection from "@/components/about/OverviewSection";
import ProfileSection from "@/components/about/ProfileSection";
import ContainerContent from "@/components/containerContent";

export default function About({ authors, settings }) {
  return (
    <>
      <HeroSection />
      <ContainerContent>
        <div className="mx-auto my-2 grid grid-rows-2 gap-4 lg:grid-cols-2 lg:grid-rows-none lg:gap-10">
          <OverviewSection />
          <ProfileSection />
        </div>
      </ContainerContent>
    </>
  );
}
