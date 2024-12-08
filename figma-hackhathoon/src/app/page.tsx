import { HeroSection } from "@/components/HeroSection";
import { BrowseRange } from "@/components/BrowseRange";
import { Products } from "@/components/Products";
import  Inspiration  from "@/components/Inspiration";
import { ShareSection } from "@/components/ShareSection";
import Gallery from "@/components/Gallery";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <BrowseRange />
      <Products />
      <Inspiration />
      <Gallery />
      <ShareSection />

    </div>
  );
}