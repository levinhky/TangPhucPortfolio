"use client";
import useDetectDevice from "@/hooks/useDetectDevice";
import Container from "@/themes/Container";
import { formatPrice } from "@/utils/functions";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";

const MerchandiseDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params || {};
  const images = [
    {
      original:
        "https://res.cloudinary.com/dahnkbdxi/image/upload/v1731831577/463620900_946517870830211_4163009015280798425_n.jpg_yabvmy.jpg",
      thumbnail:
        "https://res.cloudinary.com/dahnkbdxi/image/upload/v1731831577/463620900_946517870830211_4163009015280798425_n.jpg_yabvmy.jpg",
    },
  ];

  const images2 = [
    {
      original:
        "https://res.cloudinary.com/dahnkbdxi/image/upload/v1731842716/462473598_846713767625801_8362309805917196511_n.jpg_s5xdrl.jpg",
      thumbnail:
        "https://res.cloudinary.com/dahnkbdxi/image/upload/v1731842716/462473598_846713767625801_8362309805917196511_n.jpg_s5xdrl.jpg",
    },
  ];
  const { device } = useDetectDevice();
  return (
    <Container style="mt-[7%]">
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
          <ImageGallery
            items={+id === 2 ? images2 : images}
            showBullets
            showPlayButton={false}
            showThumbnails={device === "mobile" ? false : true}
            showFullscreenButton={false}
          />
        </div>

        <div className="content basis-[50%] esm:basis-full esm:mb-7 mt-[10%]">
          <h1 className="font-semibold text-2xl mb-4">
            {+id === 2 ? "Áo 9M" : "Túi tote"}
          </h1>
          <h2 className="sub-title--small !text-textSecondaryTwo">
            Lorem ipsum dolor sit amet consectetur. Vitae velit volutpat aliquam
            sed id odio. Sagittis lectus nulla aliquet tortor venenatis mi. Ut
            aenean lectus aliquam mattis curabitur quisque commodo sed in.
            Suspendisse ullamcorper nunc nulla rutrum.
          </h2>
          <h3 className="text-3xl font-semibold my-4">
            {+id === 2 ? formatPrice(349000) : formatPrice(225000)}
          </h3>
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
