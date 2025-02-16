"use client"

import { useEffect, useState } from 'react';
import SectionIntro from '@/components/home/secciones/section-intro';
import SectionWhatWeDo from '@/components/home/secciones/section-what-we-do';
import SectionServices from '@/components/home/secciones/section-service';
import Footer from '@/components/home/footer';
import Testimonials from '@/components/home/secciones/section-testimons';
import PriceTable from '@/components/home/secciones/section-table';
import FooterText from '@/components/footer/footer-tm';

const HomePage = () => {
  const [visibleSections, setVisibleSections] = useState({
    intro: false,
    whatWeDo: false,
    services: false,
    testimonials: false,
    priceTable: false,
    footer: false,
    footerText: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prevState) => ({
            ...prevState,
            [entry.target.id]: true
          }));
        } else {
          setVisibleSections((prevState) => ({
            ...prevState,
            [entry.target.id]: false
          }));
        }
      });
    }, {
      threshold: 0.5 // Esto asegura que la sección se considera visible cuando al menos el 50% está en la vista
    });

    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white min-h-screen">
      <div
        id="intro"
        className={`section transition-all duration-800 ${visibleSections.intro ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'}`}
      >
        <SectionIntro />
      </div>

      <div
        id="whatWeDo"
        className={`section transition-all duration-700 ${visibleSections.whatWeDo ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
      >
        <SectionWhatWeDo />
      </div>

      <div
        id="services"
        className={`section transition-all duration-700 ${visibleSections.services ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
      >
        <SectionServices />
      </div>

      <div
        id="testimonials"
        className={`section transition-all duration-700 ${visibleSections.testimonials ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
      >
        <Testimonials />
      </div>

      <div
        id="priceTable"
        className={`section transition-all duration-700 ${visibleSections.priceTable ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
      >
        <PriceTable />
      </div>

      <div
        id="footer"
        className={`section transition-all duration-700 ${visibleSections.footer ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
      >
        <Footer />
      </div>

      <div
        id="footerText"
        className={`section transition-all duration-700 ${visibleSections.footerText ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
      >
        <FooterText />
      </div>

      {/* Agrega más secciones aquí */}
    </div>
  );
};

export default HomePage;
