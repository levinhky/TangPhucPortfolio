"use client";
import useDetectDevice from "@/hooks/useDetectDevice";
import Container from "@/themes/Container";
import { formatPrice } from "@/utils/functions";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const MerchandiseDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params || {};

  // TODO: remove when have api
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [gallery, setGallery] = useState([
    {
      original: "",
      thumbnail: "",
    },
  ]);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const { device } = useDetectDevice();

  // TODO: remove when have api
  useEffect(() => {
    const items = [
      {
        id: "1",
        title: "PRE-Order EP TDTN",
        price: 349000,
        images: [
          {
            original:
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733256405/TDTNPre1_bkxn0p.jpg",
            thumbnail:
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733256405/TDTNPre1_bkxn0p.jpg",
          },
        ],
      },
      {
        id: "2",
        title: "Sổ Tay TDTN",
        price: 99000,
        images: [
          {
            original:
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733284295/2_gno5mi.jpg",
            thumbnail:
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733284295/2_gno5mi.jpg",
          },
        ],
      },
      {
        id: "3",
        title: "Dây Thẻ TDTN",
        price: 99000,
        images: [
          {
            original:
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733284295/3_odtyvr.jpg",
            thumbnail:
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733284295/3_odtyvr.jpg",
          },
        ],
      },
      {
        id: "4",
        title: "Túi tote TDTN",
        price: 99000,
        images: [
          {
            original:
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733284295/4_xar3nt.jpg",
            thumbnail:
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733284295/4_xar3nt.jpg",
          },
        ],
      },
      {
        id: "5",
        title: "Khăn Bandada TDTN",
        price: 99000,
        images: [
          {
            original:
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733284295/z6095929752842_19a8cd219f714d974007bb5ed8691029_meszcf.jpg",
            thumbnail:
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733284295/z6095929752842_19a8cd219f714d974007bb5ed8691029_meszcf.jpg",
          },
        ],
      },
      {
        id: "6",
        title: "EP Từ Đây Từ Nay",
        price: 599000,
        images: [
          {
            original:
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733256405/TDTNPre1_bkxn0p.jpg",
            thumbnail:
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733256405/TDTNPre1_bkxn0p.jpg",
          },
        ],
      },
      {
        id: "7",
        title: "Pin TVMP",
        price: 349000,
        images: [
          {
            original:
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733256404/pinTVMP1_baucid.jpg",
            thumbnail:
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733256404/pinTVMP1_baucid.jpg",
          },
        ],
      },
      {
        id: "8",
        title: "Chín Vừa Tee",
        price: 349000,
        images: [
          {
            original: "/aochinmuoi.png",
            thumbnail: "/aochinmuoi.png",
          },
        ],
      },
      {
        id: "9",
        title: "Túi Tote",
        price: 225000,
        images: [
          {
            original:
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733284295/4_xar3nt.jpg",
            thumbnail:
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733284295/4_xar3nt.jpg",
          },
        ],
      },
      {
        id: "10",
        title: "Sổ Tay TDTN",
        price: 99000,
        images: [
          {
            original:
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733284295/2_gno5mi.jpg",
            thumbnail:
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733284295/2_gno5mi.jpg",
          },
        ],
      },
      {
        id: "11",
        title: "Bộ dây TDTN",
        price: 99000,
        images: [
          {
            original:
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733284295/3_odtyvr.jpg",
            thumbnail:
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733284295/3_odtyvr.jpg",
          },
        ],
      },
    ];

    const selectedItem = items.find((item) => item.id === id);

    if (selectedItem) {
      setTitle(selectedItem.title);
      setPrice(selectedItem.price);
      setGallery(selectedItem.images);
    } else {
      setTitle("");
      setPrice(0);
      setGallery([]);
    }
  }, [id]);

  return (
    <Container style="mt-[5%]">
      <div
        className="flex esm:flex-wrap gap-12 esm:gap-0 my-12 esm:my-0 justify-center"
        id="merchandise-detail"
      >
        <div className="esm:w-full">
          <Link
            href={"/merchandise"}
            style={{
              background:
                "linear-gradient(162.68deg, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0.2) 100%)",
            }}
            className="flex text-textSecondaryTwo w-fit py-2 px-4 rounded-lg mb-10"
          >
            <Image
              src={"/icons/arrow-right-primary.png"}
              width={24}
              height={24}
              className="rotate-180 mr-2"
              alt="arrow-left"
            />
            Trả về trang sản phẩm
          </Link>
          <div className="w-full flex">
            <Swiper
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="h-96 w-full rounded-lg"
            >
              {gallery.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="flex h-full w-full items-center justify-center">
                    <Image
                      width={100}
                      height={100}
                      src={image.original}
                      alt={image.thumbnail}
                      className="block h-full w-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Thumbnail */}
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={12}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="thumbs mt-3 h-32 w-full rounded-lg"
            >
              {gallery.map((image, index) => (
                <SwiperSlide key={index}>
                  <button className="flex h-full w-full items-center justify-center">
                    <Image
                      width={100}
                      height={100}
                      src={image.original}
                      alt={image.thumbnail}
                      className="block h-full w-full object-cover"
                    />
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="content basis-[50%] esm:basis-full esm:mb-7 mt-[10%]">
          <h1 className="font-semibold text-2xl mb-4">{title}</h1>
          <h2 className="sub-title--small !text-textSecondaryTwo">
            Lorem ipsum dolor sit amet consectetur. Vitae velit volutpat aliquam
            sed id odio. Sagittis lectus nulla aliquet tortor venenatis mi. Ut
            aenean lectus aliquam mattis curabitur quisque commodo sed in.
            Suspendisse ullamcorper nunc nulla rutrum.
          </h2>
          <h3 className="text-3xl font-semibold my-4">{formatPrice(price)}</h3>
          <div className="flex gap-[10%]">
            <div className="flex flex-col">
              <p className="font-semibold">Màu sắc</p>
              <div className="flex gap-4">
                <div className="px-3 bg-white justify-center mt-3 sub-title--small rounded-lg h-10 flex items-center !text-[#000A26]">
                  Xanh biển
                </div>
                <div className="px-3 bg-white justify-center mt-3 sub-title--small rounded-lg h-10 flex items-center !text-[#000A26]">
                  Tím
                </div>
                <div className="px-3 bg-white justify-center mt-3 sub-title--small rounded-lg h-10 flex items-center !text-[#000A26]">
                  Đen
                </div>
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <p className="font-semibold">Chất liệu</p>
              <div className="px-3 bg-[#000B6E] justify-center mt-3 sub-title--small rounded-lg h-10 flex items-center !text-white">
                Kaki
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">Kích thước</p>
              <div className="px-3 bg-white justify-center mt-3 sub-title--small rounded-lg h-10 flex items-center !text-[#000A26]">
                00x00cm
              </div>
            </div>
          </div>

          <Link
            href={"/merchandise"}
            className="flex text-white bg-[#000B6E] w-fit py-2 px-5 rounded-lg mb-10 mt-12"
          >
            <Image
              src={"/icons/shopping-bag.png"}
              width={24}
              height={24}
              className="rotate-180 mr-2"
              alt="arrow-left"
            />
            Đặt hàng
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default MerchandiseDetail;
