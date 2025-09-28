"use client"; 

import Footer5 from "@/components/footers/Footer5";
import Header5 from "@/components/headers/Header5";
import Blogs from "@/components/home/Blogs";
import Brands from "@/components/home/Brands";
import Cta from "@/components/home/Cta";
import Faq from "@/components/home/Faq";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import KeyFeatures from "@/components/home/KeyFeatures";
import Pricing from "@/components/home/Pricing";
import Testimonials from "@/components/home/Testimonials";
import VideoComponent from "@/components/home/VideoComponent";
import React from "react";
import RtlConverter from "@/components/common/RtlConverter";

export default function HomePageRtl() {
  return (
    <>
      <RtlConverter />
      <div dir="rtl">
        <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg dom-ready bp-xl bp-xxl">
          <Header5 />
          <div id="wrapper" className="wrap">
            <Hero />
            <Features />
            <Brands />
            <VideoComponent />
            <KeyFeatures />
            <Pricing />
            <Testimonials />
            <Faq />
            <Blogs />
            <Cta />
          </div>
          <Footer5 />
        </div>{" "}
      </div>
    </>
  );
}
