"use client";
import MerchandiseItem from "@/components/MerchandiseItem";
import Container from "@/themes/Container";
import Image from "next/image";
import { useRef, useState } from "react";

const MerchandiseList = () => {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef<any>(null);

  const toggleCollapsible = () => {
    setIsActive(!isActive);
  };

  return (
    <Container style="py-7 merchandise">
      <div className="relative">
        <Image
          src={"/merchandise-list-banner.png"}
          width={900}
          height={400}
          alt="placeholder"
          className="mx-auto"
        />
        <h6 className="floating-text">Merchandise</h6>
      </div>

      <div className="merchandise-list mt-[100px]">
        <div className="flex items-center justify-center gap-4">
          <div className="category category--active sub-title--small py-3 px-4">
            Tất cả
          </div>
          <button className="category sub-title--small py-3 px-4">Nón</button>
          <button className="category sub-title--small py-3 px-4">Áo</button>
          <button className="category sub-title--small py-3 px-4">Túi</button>
          <button className="category sub-title--small py-3 px-4">
            Tên danh mục sản phẩm
          </button>
        </div>
        <div className="items flex mt-12">
          <MerchandiseItem />
          <MerchandiseItem />
          <MerchandiseItem />
        </div>
      </div>

      <div className="fag my-10">
        <h6 className="main-title text-center uppercase">Câu hỏi thường gặp</h6>

        <div className="w-2/4 mx-auto">
          <button
            type="button"
            className={`collapsible ${
              isActive ? "active" : ""
            } flex items-center justify-between`}
            onClick={toggleCollapsible}
          >
            <div className="flex items-center">
              <strong className="text-3xl mr-4">Q</strong>
              Lorem ipsum dolor sit amet consectetur. Pellentesque vitae morbi a
              nisi hac?
            </div>
          </button>
          <div
            ref={contentRef}
            className="content flex items-center"
            style={{
              maxHeight:
                isActive && contentRef.current
                  ? `${contentRef.current.scrollHeight + 32}px`
                  : "0px",
              padding: isActive && contentRef.current ? `48px 32px` : "0px",
            }}
          >
            <p className="sub-title--small">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MerchandiseList;
