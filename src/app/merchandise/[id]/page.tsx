"use client";
import Container from "@/themes/Container";
import { formatPrice } from "@/utils/functions";
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
  return (
    <Container>
      <div className="flex gap-12 my-12 justify-center" id="merchandise-detail">
        <ImageGallery
          items={+id === 2 ? images2 : images}
          showBullets
          showPlayButton={false}
        />

        <div className="content basis-[50%]">
          <h1 className="font-semibold text-2xl mb-4">
            {+id === 2 ? "Áo 9M" : "Túi tote"}
          </h1>
          <h2 className="sub-title--small">
            Lorem ipsum dolor sit amet consectetur. Vitae velit volutpat aliquam
            sed id odio. Sagittis lectus nulla aliquet tortor venenatis mi. Ut
            aenean lectus aliquam mattis curabitur quisque commodo sed in.
            Suspendisse ullamcorper nunc nulla rutrum.
          </h2>
          <h3 className="text-3xl font-semibold my-4">
            {+id === 2 ? formatPrice(349000) : formatPrice(225000)}
          </h3>
          <div className="flex flex-col">
            <p className="font-semibold">Màu sắc</p>
            <div className="flex gap-4 my-4">
              <div className="px-3 py-4 bg-white sub-title--small rounded-md h-10 flex items-center !text-[#000A26]">
                Xanh biển
              </div>
              <div className="px-3 py-4 bg-white sub-title--small rounded-md h-10 flex items-center !text-[#000A26]">
                Tím
              </div>
              <div className="px-3 py-4 bg-white sub-title--small rounded-md h-10 flex items-center !text-[#000A26]">
                Đen
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <p className="font-semibold">Chất liệu</p>
            <p className="sub-title--small !text-[#000A26]">Kaki</p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">Kích thước</p>
            <p className="sub-title--small !text-[#000A26]">00x00cm</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MerchandiseDetail;
