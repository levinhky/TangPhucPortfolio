"use client";
import Container from "@/themes/Container";
import ImageGallery from "react-image-gallery";
import { useState } from "react";

const MerchandiseDetail = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <Container>
      <div className="flex gap-12 my-12" id="merchandise-detail">
        <ImageGallery items={images} showBullets showPlayButton={false} />

        <div className="content basis-[100%]">
          <h1 className="font-semibold text-2xl mb-4">
            Tên sản phẩm Tên sản phẩm Tên sản phẩm Tên sản phẩm Tên sản phẩm Tên
            sản phẩm Tên sản phẩm
          </h1>
          <h2 className="sub-title--small">
            Lorem ipsum dolor sit amet consectetur. Vitae velit volutpat aliquam
            sed id odio. Sagittis lectus nulla aliquet tortor venenatis mi. Ut
            aenean lectus aliquam mattis curabitur quisque commodo sed in.
            Suspendisse ullamcorper nunc nulla rutrum.
          </h2>
          <h3 className="text-3xl font-semibold my-4">000.000đ</h3>
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
