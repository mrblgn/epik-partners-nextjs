"use client"; // Important: Swiper runs on the client side

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FC } from "react";

type TSliderItem = {
  id: number;
  title: string;
  author: string;
  issueDate: string;
};

type TSliderData = TSliderItem[] | null;

export const ArticleSlider: FC<{ sliderData: TSliderData }> = ({
  sliderData,
}) => {
  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={4}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="mySwiper"
      >
        {sliderData?.map(({ id, title, author, issueDate }, index) => (
          <SwiperSlide key={title.substring(0, 8) + index}>
            <Link href={"/article?aId=" + id}>
              <div className="articles_card">
                <div className="articles_cardHeader">
                  <h4>
                    {title.length > 130
                      ? title.substring(0, 130) + "..."
                      : title}
                  </h4>
                </div>
                <div
                  className="articles_cardText"
                  dangerouslySetInnerHTML={{ __html: author }}
                />
                <div className="articles_cardDate">{issueDate}</div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
