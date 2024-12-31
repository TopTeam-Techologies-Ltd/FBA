import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import AboutUs from "./component/AboutUs";
import VisionStatement from "./component/VisionStatement";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs/>
      <VisionStatement/>
    </>
  );
}
