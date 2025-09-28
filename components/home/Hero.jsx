"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div
      id="overview"
      className="overview section panel overflow-hidden uc-dark lg:m-2 lg:rounded-3 scrollSpysection"
    >
      <div className="position-cover bg-white dark:bg-gray-900" />
      <div
        className="position-cover opacity-70 bg-contain"
        style={{ backgroundPosition: "50% 85%" }}
        data-src="/assets/images/template/pricing-06-bg-masked.png"
        data-uc-img=""
      />
      <div className="position-cover bg-gradient-to-t from-gray-800 via-transparent to-gray-900" />
      <div
        className="position-absolute d-inline-block w-500px h-500px rounded-circle bg-gradient-45 from-primary to-white start-50 blur-10 translate-middle blend-color-dodge"
        style={{ top: "0%" }}
      />
      <div
        className="position-absolute d-inline-block w-250px h-250px rounded-circle bg-gradient-45 from-primary to-white start-0 blur-10 translate-middle blend-color-dodge"
        style={{ top: "0%" }}
      />
      <div
        className="position-absolute d-inline-block w-250px h-250px rounded-circle bg-gradient-45 from-primary to-white start-100 blur-10 translate-middle blend-color-dodge"
        style={{ top: "0%" }}
      />
      <div className="section-outer panel pt-9 xl:pt-10">
        <div className="container xl:max-w-xl">
          <div className="section-inner panel pt-0 lg:pt-4 xl:pt-0">
            <div className="row child-cols-12 justify-center items-center g-6 xl:g-8">
              <div>
                <div
                  className="panel vstack justify-center items-center gap-3 max-w-600px lg:max-w-750px mx-auto px-2 lg:px-0 text-center"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <div
                    className="position-absolute z-2"
                    style={{ top: "40%", right: "0%", rotate: "20deg" }}
                  >
                    <Image
                      className="w-48px lg:w-80px me-4"
                      alt="user-cursor"
                      data-anime="loop: true; translateX: [-80,80]; translateY: [-80,80]; easing: easeOutElastic(1, .8); direction: 'alternate'; duration: 10000; delay: 1000;"
                      src="/assets/images/template/icon-location-dark.svg"
                     
                      width="96"
                      height="106"
                    />
                  </div>
                  <div
                    className="position-absolute z-2"
                    style={{ bottom: "5%", left: "10%", rotate: "-10deg" }}
                  >
                    <Image
                      className="w-48px lg:w-80px"
                      alt="user-cursor"
                      data-anime="loop: true; translateX: [-80,80]; translateY: [-80,80]; easing: easeOutElastic(1, .8); direction: 'alternate'; duration: 5000; delay: 4000;"
                      src="/assets/images/template/icon-location-dark.svg"
                      width="94"
                      height="108"
                    />
                  </div>
                  <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                    <span className="d-inline-block w-4px h-4px rounded-circle bg-primary-400" />
                    <span className="fs-8 fw-bold text-uppercase text-white">
                      {t("hero.beta")}
                    </span>
                  </div>
                  <h1 className="h1 sm:display-6 md:display-5 lg:display-4 xl:display-3 m-0 text-white">
                    {t("hero.titleLine1")}
                    <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                      {t("hero.titleHighlight")}
                    </span>
                    <br />
                    {t("hero.titleLine2")}
                  </h1>
                  <p className="fs-5 xl:fs-4 text-black dark:text-white d-none md:d-block">
                    {t("hero.description")}
                  </p>
                  <Link
                    href={`/page-pricing`}
                    className="btn btn-md lg:btn-lg btn-primary min-w-150px mt-2"
                  >
                    <span>{t("hero.cta")}</span>
                    <i className="icon icon-narrow unicon-arrow-right fw-bold ltr:ms-narrow rtl:rotate-180 rtl:me-narrow" />
                  </Link>
                
                </div>
              </div>
              <div>
                <div
                  className="panel"
                  data-anime="targets: >*:not(.dashboard-image); scale: [0.5, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <div
                    className="dashboard-image max-w-lg mx-auto max-h-250px lg:max-h-550px overflow-hidden"
                    data-anime="translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                  >
                    <Image
                      className="shadow-md lg:shadow-lg rounded-3"
                      alt="gps-dashboard"
                      src="/assets/images/template/app-dashboard.png"
                      width="1280"
                    
                      height="853"
                    />
                  </div>
                  <div className="position-absolute top-50 end-0 translate-middle-y mt-2 lg:me-5">
                    <Image
                      className="w-100px text-primary lg:rounded-2 shadow-xl"
                      alt="gps-dashboard-helper-1"
                      data-anime="scale: [0.5, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 250;"
                      src="/assets/images/template/app-dashboard-helper-1.png"
                      width="306"
                      height="583"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
