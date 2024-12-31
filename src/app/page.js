import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import AboutUs from "./component/AboutUs";
import VisionStatement from "./component/VisionStatement";
import FocusArea from "./component/FocusArea";
import TechSkills from "./component/TechSkills";
import CommunityAid from "./component/CommunityAid";
import OurApproach from "./component/OurApproach";
import GetInvolved from "./component/GetInvolved";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <VisionStatement />
      <FocusArea />
      <TechSkills />
      <CommunityAid />
      <OurApproach />
      <GetInvolved />
      <Footer />
    </>
  );
}
