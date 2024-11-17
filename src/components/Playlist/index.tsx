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
import Link from "next/link";

const MOCK_DATA = [
  {
    image:
      "https://res.cloudinary.com/dahnkbdxi/image/upload/v1731843884/maxresdefault_nfzjpz.jpg",
    songName: "Kẻ qua đường",
    artistName: "Tăng Phúc",
    spotifyLink: "https://open.spotify.com/track/5ZLQsBfbX1gmjQ9vA7RiU2",
    youtubeLink: "https://www.youtube.com/watch?v=zaeDB9rl0-g",
    appleMusicLink:
      "https://music.apple.com/ca/album/k%E1%BA%BB-qua-%C4%91%C6%B0%E1%BB%9Dng-single/1753245317",
  },
  {
    image:
      "https://res.cloudinary.com/dahnkbdxi/image/upload/v1731851267/artwork-440x220_xvecnz.jpg",
    songName: "l'vavie (là vì anh vẫn yêu em)",
    artistName: "Tăng Phúc",
    spotifyLink: "https://open.spotify.com/track/64Y4PpLsnVU4frbPRRjNiG",
    youtubeLink: "https://www.youtube.com/watch?v=Dapx1t7S-ok",
    appleMusicLink:
      "https://music.apple.com/vn/album/lvavie-l%C3%A0-v%C3%AC-anh-v%E1%BA%ABn-y%C3%AAu-em-single/1712815116",
  },
  {
    image:
      "https://res.cloudinary.com/dahnkbdxi/image/upload/v1731843421/96bb397a8f563079a00d786d5136406e_r2j4kk.jpg",
    songName: "Nhờ em nhắn với người đó",
    artistName: "Tăng Phúc",
    spotifyLink: "https://open.spotify.com/track/22hp9EGjcLPEMVtSkxwFpe",
    youtubeLink: "https://www.youtube.com/watch?v=thLwEkS-GbA",
    appleMusicLink:
      "https://music.apple.com/vn/album/nh%E1%BB%9D-em-nh%E1%BA%AFn-v%E1%BB%9Bi-ng%C6%B0%E1%BB%9Di-%C4%91%C3%B3-single/1707293260",
  },
  {
    image:
      "https://res.cloudinary.com/dahnkbdxi/image/upload/v1731851601/maxresdefault_imhoon.jpg",
    songName: "Kỳ vọng sai lầm",
    artistName: "Tăng Phúc",
    spotifyLink: "https://open.spotify.com/track/5pbc99769AMASq8pREi52a",
    youtubeLink: "https://www.youtube.com/watch?v=1v2YWTZb1Js",
    appleMusicLink: "https://music.apple.com/vn/album/k%E1%BB%B3-v%E1%BB%8Dng-sai-l%E1%BA%A7m-feat-nguy%E1%BB%85n-%C4%91%C3%ACnh-v%C5%A9-yuno-bigboi/1647572614?i=1647572862",
  },
  {
    image:
      "https://res.cloudinary.com/dahnkbdxi/image/upload/v1731851478/maxresdefault_ktilff.jpg",
    songName: "Trả người về tự do",
    artistName: "Tăng Phúc",
    spotifyLink: "https://open.spotify.com/track/4YLpxRPxTYFvuUvp6NpvAO",
    youtubeLink: "https://www.youtube.com/watch?v=p80T353DyFA",
    appleMusicLink: "https://music.apple.com/vn/album/tr%E1%BA%A3-ng%C6%B0%E1%BB%9Di-v%E1%BB%81-t%E1%BB%B1-do/1635587417?i=1635587485",
  },
  {
    image:
      "https://res.cloudinary.com/dahnkbdxi/image/upload/v1731851536/maxresdefault_f6jgfp.jpg",
    songName: "Đừng chờ anh nữa",
    artistName: "Tăng Phúc",
    spotifyLink: "https://open.spotify.com/track/3Wobxka7sgqeMNHgHZat8q",
    youtubeLink: "https://www.youtube.com/watch?v=C3GqqnJ9ID0",
    appleMusicLink: "https://music.apple.com/vn/album/%C4%91%E1%BB%ABng-ch%E1%BB%9D-anh-n%E1%BB%AFa/1637657850?i=1637657857",
  },
  {
    image:
      "https://res.cloudinary.com/dahnkbdxi/image/upload/v1731843266/maxresdefault_zrqdaf.jpg",
    songName: "Chẳng hề đổi thay",
    artistName: "Tăng Phúc",
    spotifyLink: "https://open.spotify.com/album/3jbh5O4QZQvBcLPMCdt2j4",
    youtubeLink: "https://www.youtube.com/watch?v=RJwF-daYyrs",
    appleMusicLink:
      "https://music.apple.com/us/album/ch%E1%BA%B3ng-h%E1%BB%81-%C4%91%E1%BB%95i-thay-single/1693501419",
  },
  {
    image:
      "https://res.cloudinary.com/dahnkbdxi/image/upload/v1731843335/hq720_ct18gb.jpg",
    songName: "Hãy để anh yêu em lần nữa",
    artistName: "Tăng Phúc",
    spotifyLink: "https://open.spotify.com/track/0pGvf4jhu4xzGecwvqIGSp",
    youtubeLink: "https://www.youtube.com/watch?v=-ZfAU59j0p4",
    appleMusicLink:
      "https://music.apple.com/us/album/h%C3%A3y-%C4%91%E1%BB%83-anh-y%C3%AAu-em-l%E1%BA%A7n-n%E1%BB%AFa-single/1749143196",
  },
  {
    image:
      "https://res.cloudinary.com/dahnkbdxi/image/upload/v1731843378/maxresdefault_rh6bnb.jpg",
    songName: "Chỉ là không cùng nhau",
    artistName: "Tăng Phúc",
    spotifyLink: "https://open.spotify.com/track/6iWPQ9xAYH3ZePu2Z209Y6",
    youtubeLink: "https://www.youtube.com/watch?v=UqKVL56IJB8",
    appleMusicLink:
      "https://music.apple.com/tr/album/ch%E1%BB%89-l%C3%A0-kh%C3%B4ng-c%C3%B9ng-nhau-live-version-single/1691343070",
  },
  {
    image:
      "https://res.cloudinary.com/dahnkbdxi/image/upload/v1731843455/hq720_n8jfq8.jpg",
    songName: "Thèm được về nhà",
    artistName: "Tăng Phúc",
    spotifyLink: "https://open.spotify.com/album/11rcuvZP96DkCpAWN2Rqq6",
    youtubeLink: "https://www.youtube.com/watch?v=thLwEkS-GbA",
    appleMusicLink:
      "https://music.apple.com/us/album/nh%E1%BB%9D-em-nh%E1%BA%AFn-v%E1%BB%9Bi-ng%C6%B0%E1%BB%9Di-%C4%91%C3%B3-single/1707293260",
  },
  {
    image:
      "https://res.cloudinary.com/dahnkbdxi/image/upload/v1731843483/maxresdefault_ypksuf.jpg",
    songName: "Tình đầu",
    artistName: "Tăng Phúc",
    spotifyLink: "https://open.spotify.com/track/0YDBCU042Gpy1P4Hpqzlxx",
    youtubeLink: "https://www.youtube.com/watch?v=RKSSDvZAXMc",
    appleMusicLink:
      "https://music.apple.com/vn/album/t%C3%ACnh-%C4%91%E1%BA%A7u-single/1624879206",
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
    <Container style="relative px-[100px]">
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
            <SwiperSlide>
              <div className="playlist-item flex flex-col p-7 h-[500px]">
                <div className="playlist-item-thumbnail m-auto">
                  <Image
                    src={item.image}
                    width={290}
                    height={290}
                    alt="thumbnail"
                  />
                </div>
                <div className="playlist-item-content--bottom mt-auto">
                  <div className="playlist-item-info flex justify-between items-center">
                    <div className="playlist-item-info--name">
                      <h1 className="sub-title--bold">{item.songName}</h1>
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
                  <div className="playlist-item-links flex items-center justify-center gap-3 pt-5">
                    <Link
                      target={"_blank"}
                      href={item.spotifyLink}
                      className="w-10 h-10 flex items-center justify-center rounded-full border-[0.5px] border-[#081F5C] p-2"
                    >
                      <Image
                        src={"/icons/spotify-primary.png"}
                        width={24}
                        height={24}
                        alt="spotify-icon"
                      />
                    </Link>
                    <Link
                      target={"_blank"}
                      href={item.youtubeLink}
                      className="w-10 h-10 flex items-center justify-center rounded-full border-[0.5px] border-[#081F5C] p-2"
                    >
                      <Image
                        src={"/icons/youtube-primary.png"}
                        width={24}
                        height={24}
                        alt="youtube-icon"
                      />
                    </Link>
                    <Link
                      target={"_blank"}
                      href={item.appleMusicLink}
                      className="w-10 h-10 flex items-center justify-center rounded-full border-[0.5px] border-[#081F5C] p-2"
                    >
                      <Image
                        src={"/icons/apple-music-primary.png"}
                        width={17}
                        height={17}
                        alt="apple-music-icon"
                      />
                    </Link>
                  </div>
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
