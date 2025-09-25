"use client"; 

import { tiers2 } from "@/data/pricing";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Pricing() {
  const { t } = useTranslation();

  return (
    <div
      id="pricing"
      className="pricing section panel overflow-hidden uc-dark scrollSpysection"
    >
      <div className="section-outer panel py-4 overflow-hidden md:py-6 xl:py-10 mx-2 rounded-2 lg:rounded-3 bg-secondary dark:bg-primary-700 dark:text-white">
        <div
          className="position-cover opacity-70 bg-contain"
          style={{ backgroundPosition: "50% 85%" }}
          data-src="/assets/images/template/pricing-06-bg-masked.png"
          data-uc-img=""
        />
        <div className="position-cover bg-gradient-to-t from-gray-800 via-transparent to-gray-900" />
        <div className="container xl:max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
              <div
                className="heading vstack items-center gap-2 panel max-w-550px mx-auto text-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                  <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
                  <span className="fs-8 fw-bold text-uppercase">
                    {t("pricing.title")}
                  </span>
                </div>
                <h2 className="title h3 lg:h2 xl:h1 m-0 px-2">
                  {t("pricing.simple")}{" "}
                  <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                    {t("pricing.scalable")}
                  </span>{" "}
                  {t("pricing.pricing")}
                </h2>
                <p className="fs-6 xl:fs-5 text-opacity-70">
                  {t("pricing.no_hidden_fees")}
                </p>
              </div>
              <div className="content panel">
                <div
                  className="row child-cols-12 sm:child-cols-6 xl:child-cols-4 col-match justify-center g-2 lg:g-4"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
                >
                  {tiers2.map((tier, index) => (
                    <div key={index}>
                      <div className="tier panel vstack justify-between p-2 rounded-1-5 lg:rounded-2 bg-white text-gray-900 text-center">
                        {tier.offer && (
                          <div className="position-absolute top-0 end-0 cstack gap-1 py-narrow px-1 my-2 mx-3 bg-secondary rounded-default -rotate-2">
                            <span className="fs-8 fw-bold text-uppercase text-primary">
                              {t(`pricing.tiers.${index}.offer`, { defaultValue: tier.offer })}
                            </span>
                          </div>
                        )}
                        <header className="tier-header vstack gap-2 items-center p-2 md:p-4">
                          <h5 className="h5 lg:h4 m-0 text-primary">
                            {t(`pricing.tiers.${index}.name`)}
                          </h5>
                          <div className="d-flex gap-narrow items-end mt-1">
                            <h3 className="h1 lg:display-6 price m-0 text-dark">
                              {tier.price}
                            </h3>
                            <span className="h6 lg:h3 m-0 pb-narrow text-dark">
                              / {t("pricing.per_month")}
                            </span>
                          </div>
                          <p
                            className="desc lg:fs-5"
                            dangerouslySetInnerHTML={{
                              __html: t(`pricing.tiers.${index}.description`),
                            }}
                          />
                          <Link
                            className={`btn btn-md lg:btn-lg ${tier.buttonClass} w-100 mt-2`}
                            href={`/sign-up`}
                          >
                            <span>{t("pricing.get_started")}</span>
                          </Link>
                          <p className="details">{t(`pricing.tiers.${index}.details`)}</p>
                        </header>
                        <div className="tier-body border rounded-1-5 p-2 md:p-4">
                          <ul className="nav-y gap-2 text-start">
                            {tier.features.map((feature, i) => (
                              <li key={i} className="hstack items-start gap-2">
                                <i className="cstack w-24px h-24px bg-secondary text-primary rounded-circle unicon-checkmark fw-bold" />
                                <span className="d-inline">{t(`pricing.tiers.${index}.features.${i}`)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p
                className="text-center dark:text-white"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;"
              >
                {t("pricing.prices_exclude_tax")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
