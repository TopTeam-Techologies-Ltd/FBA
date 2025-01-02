import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import AboutUs from "./component/AboutUs";
import VisionStatement from "./component/VisionStatement";
import FocusArea from "./component/FocusArea";
import TechSkills from "./component/TechSkills";
import OurApproach from "./component/OurApproach";
import Footer from "./component/Footer";
import PromotionModal from "./component/PromotionModal";

export default function Home() {
  return (
    <>
      <PromotionModal />
      <Navbar />
      <HeroSection />
      <AboutUs />
      <VisionStatement />
      <FocusArea />
      <TechSkills />
      <OurApproach />
      {/* <GetInvolved /> */}
      <Footer />
    </>
  );
}
