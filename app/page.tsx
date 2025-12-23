import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import ImageSection from '@/components/landing/ImageSection';
import TrustedBySection from '@/components/landing/TrustedBySection';
import ServicesSection from '@/components/landing/ServicesSection';
import WhySection from '@/components/landing/WhySection';
import StatsSection from '@/components/landing/StatsSection';
import CtaSection from '@/components/landing/CtaSection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <ImageSection/>
      <TrustedBySection/>
      <ServicesSection/>
      <WhySection/>
      <StatsSection/>
      <CtaSection/>
      <Footer/>
    </>
  );
}
