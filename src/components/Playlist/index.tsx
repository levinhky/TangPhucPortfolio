"use client";
import Container from "@/themes/Container";
import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Link from "next/link";

const MOCK_DATA = [
  {
    image:
      "https://res.cloudinary.com/dahnkbdxi/image/upload/v1731905361/465115822_865795635717614_4911399115053937585_n.jpg_jnhr7h.jpg",
    songName: "EP 2024 - TỪ ĐÂY TỪ NAY",
    artistName: "Tăng Phúc",
    spotifyLink: "",
    youtubeLink: "https://www.youtube.com/watch?v=MfvuNYlLaM8",
    appleMusicLink: "",
  },
  {
    image:
      "https://res.cloudinary.com/dahnkbdxi/image/upload/v1731905420/465987094_868091935487984_2383903536338991917_n.jpg_okes3a.jpg",
    songName: "TỪ ĐÂY TỪ NAY",
    artistName: "Tăng Phúc",
    spotifyLink:
      "https://open.spotify.com/intl-fr/album/35sltgYSEezRAGFI9zpSAV",
    youtubeLink: "https://www.youtube.com/watch?v=pEMk7UX8o4s",
    appleMusicLink: "",
  },
  {
    image:
      "https://res.cloudinary.com/dahnkbdxi/image/upload/v1731905507/465909744_868091942154650_3731301368957798322_n.jpg_gsy6pa.jpg",
    songName: "Kẻ qua đường",
    artistName: "Tăng Phúc",
    spotifyLink: "https://open.spotify.com/track/5ZLQsBfbX1gmjQ9vA7RiU2",
    youtubeLink: "https://www.youtube.com/watch?v=zaeDB9rl0-g",
    appleMusicLink:
      "https://music.apple.com/ca/album/k%E1%BA%BB-qua-%C4%91%C6%B0%E1%BB%9Dng-single/1753245317",
  },
  {
    image:
      "https://res.cloudinary.com/dahnkbdxi/image/upload/v1731905552/466102229_868092028821308_2708097383808128044_n.jpg_ho7izv.jpg",
    songName: "Sau Ngần Ấy Năm",
    artistName: "Tăng Phúc",
    spotifyLink: "https://open.spotify.com/track/0PjHvg4fqC05flmP9zEfMk",
    youtubeLink: "https://www.youtube.com/watch?v=7WtWfcc_JGM",
    appleMusicLink: "",
  },
  {
    image:
      "https://res.cloudinary.com/dahnkbdxi/image/upload/v1731905690/465969889_868092062154638_2490715934168529661_n.jpg_viyd78.jpg",
    songName: "Thành Phố Cô Đơn",
    artistName: "Tăng Phúc",
    spotifyLink:
      "https://open.spotify.com/track/3ZUfp4lXGDx8um1rIKBFt8?si=ROrBJMqWQ7iuQ4yxVUe0fA",
    youtubeLink: "https://www.youtube.com/watch?v=PpVXAlz1jxA&t=2s",
    appleMusicLink: "",
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
    appleMusicLink:
      "https://music.apple.com/vn/album/k%E1%BB%B3-v%E1%BB%8Dng-sai-l%E1%BA%A7m-feat-nguy%E1%BB%85n-%C4%91%C3%ACnh-v%C5%A9-yuno-bigboi/1647572614?i=1647572862",
  },
  {
    image:
      "https://res.cloudinary.com/dahnkbdxi/image/upload/v1731851478/maxresdefault_ktilff.jpg",
    songName: "Trả người về tự do",
    artistName: "Tăng Phúc",
    spotifyLink: "https://open.spotify.com/track/4YLpxRPxTYFvuUvp6NpvAO",
    youtubeLink: "https://www.youtube.com/watch?v=p80T353DyFA",
    appleMusicLink:
      "https://music.apple.com/vn/album/tr%E1%BA%A3-ng%C6%B0%E1%BB%9Di-v%E1%BB%81-t%E1%BB%B1-do/1635587417?i=1635587485",
  },
  {
    image:
      "https://res.cloudinary.com/dahnkbdxi/image/upload/v1731851536/maxresdefault_f6jgfp.jpg",
    songName: "Đừng chờ anh nữa",
    artistName: "Tăng Phúc",
    spotifyLink: "https://open.spotify.com/track/3Wobxka7sgqeMNHgHZat8q",
    youtubeLink: "https://www.youtube.com/watch?v=C3GqqnJ9ID0",
    appleMusicLink:
      "https://music.apple.com/vn/album/%C4%91%E1%BB%ABng-ch%E1%BB%9D-anh-n%E1%BB%AFa/1637657850?i=1637657857",
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
    background: `linear-gradient(to right, #003EA0 ${
      (sliderValue / 100) * 100
    }%, #E4E4E4 ${(sliderValue / 100) * 100}%)`,
  };

  return (
    <Container style="relative px-[100px] mt-[5%] esm:px-0">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          "320": {
            slidesPerView: 1,
          },
          "768": {
            slidesPerView: 3,
          },
        }}
        onInit={() => setInit(true)}
        loop={true}
        modules={[Navigation]}
        className="w-[90%]"
      >
        {MOCK_DATA.map((item, index) => {
          return (
            <SwiperSlide>
              <div className="playlist-item flex flex-col p-5 pt-0 h-[auto] min-h-[486px]">
                <div className="playlist-item-thumbnail mt-5">
                  <Image
                    src={item.image}
                    width={280}
                    height={280}
                    className="rounded-lg aspect-280/280"
                    alt="thumbnail"
                  />
                  <h1 className="sub-title--bold mt-3">{item.songName}</h1>
                </div>
                <div className="playlist-item-content--bottom mt-auto">
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
                    <Link
                      href={item.youtubeLink}
                      className="playlist-item-control--play-btn rounded-full flex items-center justify-center p-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={"/icons/play.png"}
                        width={24}
                        height={24}
                        alt="play-icon"
                      />
                    </Link>
                    <button>
                      <Image
                        src={"/icons/play-next.png"}
                        width={24}
                        height={24}
                        alt="play-next-icon"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button
        className="buttonSlider buttonSliderLeft rounded-lg flex w-10 h-10 items-center justify-center"
        ref={prevRef}
      >
        <Image
          className="rotate-180"
          src={"/icons/next.png"}
          width={24}
          height={24}
          alt="prev-icon"
        />
      </button>
      <button
        className="buttonSlider buttonSliderRight rounded-lg flex w-10 h-10 items-center justify-center"
        ref={nextRef}
      >
        <Image src={"/icons/next.png"} width={24} height={24} alt="next-icon" />
      </button>
    </Container>
  );
};

export default Playlist;
