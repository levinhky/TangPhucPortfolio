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
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1376 770"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask id="svgMask">
          <path
            fill="white"
            d="M1324 26C1324 20.4219 1324 17.6328 1323.45 15.3311C1321.69 8.01812 1315.98 2.30829 1308.67 0.552601C1306.37 0 1303.58 0 1298 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V730C0 748.856 0 758.284 5.85786 764.142C11.7157 770 21.1438 770 40 770H1336C1354.86 770 1364.28 770 1370.14 764.142C1376 758.284 1376 748.856 1376 730V78C1376 72.4219 1376 69.6328 1375.45 67.3311C1373.69 60.0181 1367.98 54.3083 1360.67 52.5526C1358.37 52 1355.58 52 1350 52C1344.42 52 1341.63 52 1339.33 51.4474C1332.02 49.6917 1326.31 43.9819 1324.55 36.6689C1324 34.3672 1324 31.5781 1324 26Z"
          />
        </mask>
      </defs>
      <foreignObject
        width="100%"
        height="100%"
        mask={device === DEVICE.MOBILE ? "" : "url(#svgMask)"}
      >
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          loop
          className="h-full"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
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
                    className="object-cover aspect-1376/770"
                    priority
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {isHomeType && (
          <div className="z-10 flex flex-col items-center absolute bottom-2 left-2/4 -translate-x-2/4">
            <Image
              src={"/icons/mouse-scroll.png"}
              width={24}
              height={24}
              id="mouseScroll"
              alt="mouse-scroll"
            />
            <p className="text-white mt-2 text-[14px]">
              Scroll down to view more
            </p>
          </div>
        )}
      </foreignObject>
    </svg>
  );
};

export default Background;
