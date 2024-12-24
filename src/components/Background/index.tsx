import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import useDetectDevice from "@/hooks/useDetectDevice";

import { DEVICE, HERO_SWIPERS } from "@/utils/constants";

const Background = ({ isHomeType }: { isHomeType: boolean }) => {
  const { device } = useDetectDevice();

  return (
    <div className={`relative w-full h-full masked-background`}>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        loop
        className="h-full scale-x-[-1]"
        id={isHomeType ? "homeSlider" : "backgroundSlider"}
      >
        {HERO_SWIPERS.map((item, index) => {
          return (
            <SwiperSlide key={`keySwiperSlide${index}`}>
              <div className="w-full h-full">
                <Image
                  src={item.src}
                  alt="Background"
                  fill
                  className="object-cover aspect-1376/770 rounded-xl"
                  priority
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {isHomeType && (
        <div className="z-10 flex flex-col items-center absolute bottom-20 esm:bottom-10 esm:w-full left-2/4 -translate-x-2/4 ">
          <Image
            src={"/icons/mouse-scroll.png"}
            width={24}
            height={24}
            id="mouseScroll"
            alt="mouse-scroll"
          />
          <p className="text-white mt-2 text-[14px] esm:text-[12px] scale-x-[-1]">
            Scroll down to view more
          </p>
        </div>
      )}
    </div>
  );
};

export default Background;
