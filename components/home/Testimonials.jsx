"use client";
import { reviews, slidesData } from "@/data/testimonials";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <div
      id="clients_feedback"
      className="clients-feedback section panel scrollSpysection"
    >
      <div className="section-outer panel py-6 lg:py-8 xl:py-10 bg-secondary text-black rounded-2 lg:rounded-3 m-2">
        <div className="container xl:max-w-xl">
          <div
            className="section-inner panel vstack items-center gap-4 md:gap-6 lg:gap-8 max-w-100"
            data-anime="onview: -100; targets: >*; translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(200);"
          >
            <div
              className="panel vstack items-center gap-2 xl:gap-3 text-center"
              data-anime="onview: -100; targets: >*; translateY: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div className="cstack gap-1 py-1 px-3 border rounded-pill">
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary" />
                <span className="fs-8 fw-bold text-uppercase">
                  {t("testimonials.clients_feedback")}
                </span>
              </div>
              <p className="h3 lg:h2 xl:h1 m-0 px-2 text-black">
                {t("testimonials.dont_just_take_our_words")}
                <span className="d-inline-flex px-1 bg-primary text-secondary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                  {t("testimonials.highlight_text")}
                </span>
              </p>
            </div>

            <div className="panel w-100 mask-x">
              {/* SlidesData Swiper */}
              <Swiper
                className="swiper"
                slidesPerView={1}
                spaceBetween={16}
                centeredSlides={true}
                loop={true}
                speed={10000}
                modules={[Autoplay]}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                allowTouchMove={false}
                breakpoints={{
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                }}
              >
                {slidesData.map((slide, index) => (
                  <SwiperSlide className="swiper-slide" key={index}>
                    <div className="panel vstack justify-between gap-3 p-3 lg:p-4 xl:p-6 bg-white text-black rounded-1-5 h-100">
                      <div className="panel vstack items-start gap-2 lg:gap-4">
                        <div className="rating d-flex gap-0">
                          {Array.from({ length: slide.rating }).map((_, i) => (
                            <Image
                              className="icon icon-1"
                              alt={t("testimonials.star")}
                              key={i}
                              src="/assets/images/star.svg"
                              width={24}
                              height={25}
                            />
                          ))}
                        </div>
                        <p className="fs-5 lg:fs-4">“{t(slide.quote)}”</p>
                      </div>
                      <div className="panel mt-2 lg:mt-4">
                        <div className="panel vstack items-start gap-narrow">
                          <h6 className="h5 m-0 text-black">{t(slide.name)}</h6>
                          <span className="fs-7 lg:h6 opacity-70">
                            {t(slide.title)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Reviews Swiper */}
              <Swiper
                className="swiper mt-2 lg:mt-3"
                slidesPerView={1}
                spaceBetween={16}
                centeredSlides={true}
                loop={true}
                speed={10000}
                modules={[Autoplay]}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                allowTouchMove={false}
                breakpoints={{
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                }}
                style={{ transform: "rotate(180deg)" }}
              >
                {reviews.map((review, index) => (
                  <SwiperSlide
                    style={{ transform: "rotate(180deg)" }}
                    className="swiper-slide"
                    key={index}
                  >
                    <div className="panel vstack justify-between gap-3 p-3 lg:p-4 xl:p-6 bg-white text-black rounded-1-5 h-100">
                      <div className="panel vstack items-start gap-2 lg:gap-4">
                        <div className="rating d-flex gap-0">
                          {[...Array(5)].map((_, starIndex) => (
                            <Image
                              key={starIndex}
                              className="icon icon-1"
                              alt={t("testimonials.star")}
                              src="/assets/images/star.svg"
                              width={24}
                              height={25}
                            />
                          ))}
                        </div>
                        <p className="fs-5 lg:fs-4">{t(review.feedback)}</p>
                      </div>
                      <div className="panel mt-2 lg:mt-4">
                        <div className="panel vstack items-start gap-narrow">
                          <h6 className="h5 m-0 text-black">{t(review.name)}</h6>
                          <span className="fs-7 lg:h6 opacity-70">
                            {t(review.position)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
