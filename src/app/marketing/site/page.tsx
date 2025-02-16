"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/home/footer";
import FooterText from "@/components/footer/footer-tm";
import React from 'react';

// Nuevas secciones
import SectionIntroduction from "@/components/site/secciones/section-introduction";

import SectionWhyNextJS from "@/components/site/secciones/section-why-nextjs";

import SectionSEOOptimized from "@/components/site/secciones/section-seo-optimized";
import SectionModernDesign from "@/components/site/secciones/section-modern-design";
import SectionCustomSolutions from "@/components/site/secciones/section-custom-solutions";
import SectionPerformance from "@/components/site/secciones/section-performance";
import SectionScalability from "@/components/site/secciones/section-scalability";
import SectionSecurity from "@/components/site/secciones/section-security";
import SectionMobileFriendly from "@/components/site/secciones/section-mobile-friendly";
import SectionIntegration from "@/components/site/secciones/section-integration";

const HomePage = () => {
  const [visibleSections, setVisibleSections] = useState({
    introduction: false,
    whyNextJS: false,
    seoOptimized: false,
    modernDesign: false,
    customSolutions: false,
    performance: false,
    scalability: false,
    security: false,
    mobileFriendly: false,
    integration: false,
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
      threshold: 0.5
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
        id="introduction"
        className={`section transition-all duration-800 ${visibleSections.introduction ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'}`}
      >
        <SectionIntroduction />
      </div>

      <div
        id="whyNextJS"
        className={`section transition-all duration-700 ${visibleSections.whyNextJS ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
      >
        <SectionWhyNextJS />
      </div>

      <div
        id="seoOptimized"
        className={`section transition-all duration-700 ${visibleSections.seoOptimized ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
      >
        <SectionSEOOptimized />
      </div>

      <div
        id="modernDesign"
        className={`section transition-all duration-700 ${visibleSections.modernDesign ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
      >
        <SectionModernDesign />
      </div>

      <div
        id="customSolutions"
        className={`section transition-all duration-700 ${visibleSections.customSolutions ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
      >
        <SectionCustomSolutions />
      </div>

      <div
        id="performance"
        className={`section transition-all duration-700 ${visibleSections.performance ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
      >
        <SectionPerformance />
      </div>

      <div
        id="scalability"
        className={`section transition-all duration-700 ${visibleSections.scalability ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
      >
        <SectionScalability />
      </div>

      <div
        id="security"
        className={`section transition-all duration-700 ${visibleSections.security ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
      >
        <SectionSecurity />
      </div>

      <div
        id="mobileFriendly"
        className={`section transition-all duration-700 ${visibleSections.mobileFriendly ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
      >
        <SectionMobileFriendly />
      </div>

      <div
        id="integration"
        className={`section transition-all duration-700 ${visibleSections.integration ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
      >
        <SectionIntegration />
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
    </div>
  );
};

export default HomePage;
