import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import ProblemsSection from "@/components/problems-section";
import AdvantageSection from "@/components/advantage-section";
import ProductsSection from "@/components/products-section";
import SunfindSection from "@/components/sunfind-section";
import TeamSection from "@/components/team-section";
import CultureSection from "@/components/culture-section";
import ProcessSection from "@/components/process-section";

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return (
    <div className="bg-black text-white">
      <Header lng={lng} />
      <main>
        <HeroSection lng={lng} />
        <ProblemsSection lng={lng} />
        <AdvantageSection lng={lng} />
        <ProductsSection lng={lng} />
        <SunfindSection lng={lng} />
        <TeamSection lng={lng} />
        <CultureSection lng={lng} />
        <ProcessSection lng={lng} />
      </main>
      <Footer lng={lng} />
    </div>
  );
}
