"use client";
import Container from "@/themes/Container";
import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

const MOCK_DATA = [
  {
    image: "/kequaduong.png",
    songName: "Tên sản phẩm âm nhạc",
    artistName: "Tăng Phúc",
  },
  {
    image: "/kequaduong.png",
    songName: "Tên sản phẩm âm nhạc",
    artistName: "Tăng Phúc",
  },
  {
    image: "/kequaduong.png",
    songName: "Tên sản phẩm âm nhạc",
    artistName: "Tăng Phúc",
  },
  {
    image: "/kequaduong.png",
    songName: "Tên sản phẩm âm nhạc",
    artistName: "Tăng Phúc",
  },
  {
    image: "/kequaduong.png",
    songName: "Tên sản phẩm âm nhạc",
    artistName: "Tăng Phúc",
  },
  {
    image: "/kequaduong.png",
    songName: "Tên sản phẩm âm nhạc",
    artistName: "Tăng Phúc",
  },
  {
    image: "/kequaduong.png",
    songName: "Tên sản phẩm âm nhạc",
    artistName: "Tăng Phúc",
  },
];

const Playlist = () => {
  const [sliderValue, setSliderValue] = useState<number>(50);
  const [_, setInit] = useState<boolean>(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleSliderChange = (event: any) => {
    const newValue = event.target.value;
    setSliderValue(newValue);
  };

  const sliderBackground = {
    background: `linear-gradient(to right, #081F5C ${
      (sliderValue / 100) * 100
    }%, #7096D1 ${(sliderValue / 100) * 100}%)`,
  };

  return (
    <Container style="relative">
      <p className="main-title text-center">Sản phẩm âm nhạc</p>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={() => setInit(true)}
        loop={true}
        modules={[Navigation]}
      >
        {MOCK_DATA.map((item, index) => {
          return (
            <SwiperSlide className="playlist-item flex flex-col p-7">
              <div className="playlist-item-thumbnail">
                <Image
                  src={"/kequaduong.png"}
                  width={290}
                  height={290}
                  alt="thumbnail"
                />
              </div>
              <div className="playlist-item-content--bottom mt-4">
                <div className="playlist-item-info flex justify-between items-center">
                  <div className="playlist-item-info--name">
                    <h1 className="sub-title--bold">Tên sản phẩm âm nhạc</h1>
                    <h2 className="sub-title--small">Tăng Phúc</h2>
                  </div>
                  <div className="playlist-item-info--wishlist">
                    <Image
                      src={"/icons/heart.png"}
                      width={25}
                      height={25}
                      alt="wishlist-icon"
                    />
                  </div>
                </div>
                <div className="playlist-item-volume">
                  <input
                    type="range"
                    id="seek-slider"
                    max="100"
                    value={sliderValue}
                    onChange={handleSliderChange}
                    style={sliderBackground}
                  />
                  <div className="flex justify-between">
                    <span id="current-time" className="sub-title--small">
                      0:00
                    </span>
                    <span id="duration" className="sub-title--small">
                      0:00
                    </span>
                  </div>
                </div>
                <div className="playlist-item-control flex items-center justify-center gap-5">
                  <button>
                    <Image
                      src={"/icons/play-prev.png"}
                      width={24}
                      height={24}
                      alt="play-prev-icon"
                    />
                  </button>
                  <button className="playlist-item-control--play-btn rounded-full flex items-center justify-center p-3">
                    <Image
                      src={"/icons/play.png"}
                      width={24}
                      height={24}
                      alt="play-icon"
                    />
                  </button>
                  <button>
                    <Image
                      src={"/icons/play-next.png"}
                      width={24}
                      height={24}
                      alt="play-next-icon"
                    />
                  </button>
                </div>
                <div className="playlist-item-links flex items-center justify-center gap-3 mt-5">
                  <button className="w-10 h-10 flex items-center justify-center rounded-full border-[0.5px] border-[#081F5C] p-2">
                    <Image
                      src={"/icons/spotify-primary.png"}
                      width={24}
                      height={24}
                      alt="spotify-icon"
                    />
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full border-[0.5px] border-[#081F5C] p-2">
                    <Image
                      src={"/icons/youtube-primary.png"}
                      width={24}
                      height={24}
                      alt="youtube-icon"
                    />
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full border-[0.5px] border-[#081F5C] p-2">
                    <Image
                      src={"/icons/apple-music-primary.png"}
                      width={24}
                      height={24}
                      alt="apple-music-icon"
                    />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button
        className="buttonSlider buttonSliderLeft rounded-full flex items-center justify-center"
        ref={prevRef}
      >
        <Image
          className="rotate-180"
          src={"/icons/next.png"}
          width={40}
          height={40}
          alt="prev-icon"
        />
      </button>
      <button
        className="buttonSlider buttonSliderRight rounded-full flex items-center justify-center"
        ref={nextRef}
      >
        <Image src={"/icons/next.png"} width={40} height={40} alt="next-icon" />
      </button>
    </Container>
  );
};

export default Playlist;
