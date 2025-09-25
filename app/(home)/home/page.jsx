"use client" 

import Footer5 from "@/components/footers/Footer5";
import Header5 from "@/components/headers/Header5";
import Blogs from "@/components/home/Blogs";
import Brands from "@/components/home/Brands";
import Cta from "@/components/home/Cta";
import Elements from "@/components/home/Elements";
import Faq from "@/components/home/Faq";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import KeyFeatures from "@/components/home/KeyFeatures";
import Pricing from "@/components/home/Pricing";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";
import VideoComponent from "@/components/home/VideoComponent";


export default function HomePage6() {
  return (
    <>
      <div
        style={{ overflow: "clip" }}
        className="uni-body page-wrapper panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 home-6 bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl-max dom-ready"
      >
        <Header5 />
        <div id="wrapper" className="wrap">
          <Hero />
          <Features />
          <Brands />
          <VideoComponent />
          <KeyFeatures />
          <Elements />
          <Pricing />
          <Testimonials />
          <Faq />
          <Team />
          <Blogs />
          <Cta />
        </div>
        <Footer5 />
      </div>
    </>
  );
}
