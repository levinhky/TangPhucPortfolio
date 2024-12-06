"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { memo, useCallback, useRef, useState } from "react";

interface ImageGalleryProps {
  images: any[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const sliderRef = useRef<any>(null);
  const thumbRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
    thumbRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
    thumbRef.current.swiper.slideNext();
  }, []);

  const renderThumbnails = () => (
    <Swiper
      ref={thumbRef}
      onSwiper={setThumbsSwiper}
      loop
      spaceBetween={12}
      slidesPerView={4}
      freeMode
      watchSlidesProgress
      className="thumbs mt-3 h-32 w-full rounded-xl"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            width={100}
            height={100}
            src={image.original}
            alt={image.thumbnail}
            className="aspect-100/100 rounded-xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  const renderNavigation = () => (
    <div className="absolute bottom-3 right-3 z-10 flex gap-5">
      <button
        className="w-10 h-10 bg-white rounded-lg flex items-center justify-center"
        onClick={handlePrev}
      >
        <Image
          src={"/icons/next.png"}
          width={24}
          height={24}
          className="rotate-180"
          alt="prev-icon"
        />
      </button>
      <button
        className="w-10 h-10 bg-white rounded-lg flex items-center justify-center"
        onClick={handleNext}
      >
        <Image src={"/icons/next.png"} width={24} height={24} alt="next-icon" />
      </button>
    </div>
  );

  return (
    <div className="flex flex-col">
      <Swiper
        ref={sliderRef}
        loop
        spaceBetween={10}
        pagination
        id={"swiperGallery"}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Pagination, Thumbs]}
        className="h-96 w-full rounded-xl"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-full w-full items-center justify-center relative">
              <Image
                width={438}
                height={438}
                src={image.original}
                alt={image.thumbnail}
                className="aspect-438/438"
              />
            </div>
          </SwiperSlide>
        ))}
        {renderNavigation()}
      </Swiper>

      {renderThumbnails()}
    </div>
  );
};

export default memo(ImageGallery);
