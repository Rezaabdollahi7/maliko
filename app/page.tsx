import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import SocialProofs from "./sections/SocialProofs";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <SocialProofs />
      <Cta />
      <Footer />
    </div>
  );
}
