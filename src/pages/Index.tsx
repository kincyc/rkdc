import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import GarmentsGallery from "@/components/GarmentsGallery";
import FashionShows from "@/components/FashionShows";
import Workshops from "@/components/Workshops";
import OnlineWorkshop from "@/components/OnlineWorkshop";
import AboutRachel from "@/components/AboutRachel";
import ContactBooking from "@/components/ContactBooking";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <GarmentsGallery />
        <FashionShows />
        <Workshops />
        <OnlineWorkshop />
        <AboutRachel />
        <ContactBooking />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
