import CallToAction from "./components/CallToAction";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import ServicesSection from "./components/ServicesSection";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <ServicesSection/>
      <Portfolio/>
      <WhyChooseUs/>
      <Testimonials/>
      <CallToAction/>
      <ContactSection/>
      <Footer/>
    </>
  );
}
