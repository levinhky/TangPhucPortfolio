"use client";
import Image from "next/image";
import { useState } from "react";
import Collapsible from "react-collapsible";

import Container from "@/themes/Container";

import MerchandiseItem from "@/components/MerchandiseItem";

const questions = [
  "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae morbi a nisi hac?",
  "Proin nibh dignissim sagittis nisi. Eget lobortis faucibus in eros pharetra ut?",
  "Commodo pellentesque quis tortor sed bibendum volutpat tincidunt faucibus?",
];

const answers = [
  "Lorem ipsum dolor sit amet consectetur. Proin nibh dignissim sagittis nisi. Eget lobortis faucibus in eros pharetra ut.",
  "Cursus morbi tortor proin vitae tempor quis. Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  "Ut vulputate nisl quis suscipit nibh tristique. Sed id sapien quis tortor facilisis cursus.",
];

const MerchandiseList = () => {
  const [categoryActive, setCategoryActive] = useState("all");

  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const toggleCollapsible = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleActiveCategory = (type: string) => () => setCategoryActive(type);

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
          <div
            className={`category ${
              categoryActive === "all" ? "category--active" : ""
            } sub-title--small py-3 px-4`}
            onClick={handleActiveCategory("all")}
          >
            Tất cả
          </div>
          <button
            className={`category ${
              categoryActive === "hat" ? "category--active" : ""
            } sub-title--small py-3 px-4`}
            onClick={handleActiveCategory("hat")}
          >
            Nón
          </button>
          <button
            className={`category ${
              categoryActive === "shirt" ? "category--active" : ""
            } sub-title--small py-3 px-4`}
            onClick={handleActiveCategory("shirt")}
          >
            Áo
          </button>
          <button
            className={`category ${
              categoryActive === "bag" ? "category--active" : ""
            } sub-title--small py-3 px-4`}
            onClick={handleActiveCategory("bag")}
          >
            Túi
          </button>
        </div>
        <div className="items flex mt-12 gap-5">
          <MerchandiseItem
            category={"Chín Muồi"}
            productName={"Chín Vừa Tee"}
            price={349000}
            id={2}
          />
          <MerchandiseItem
            image={
              "https://res.cloudinary.com/dahnkbdxi/image/upload/v1731831577/463620900_946517870830211_4163009015280798425_n.jpg_yabvmy.jpg"
            }
            category={"Từ Đây… Từ Nay…"}
            productName={"Túi Tote"}
            price={225000}
            stockStatus={"out-stock"}
            id={1}
          />
        </div>
      </div>

      <div className="fag my-10">
        <h6 className="main-title text-center uppercase">Câu hỏi thường gặp</h6>
        {questions.map((question, index) => (
          <Collapsible
            key={index}
            onTriggerOpening={() => toggleCollapsible(index)}
            trigger={
              <button
                type="button"
                className={`collapsible flex ${
                  activeIndex === index ? "active" : ""
                } items-center justify-between`}
                onClick={() => toggleCollapsible(index)}
              >
                <div className="flex items-center">
                  <strong className="text-3xl mr-4">Q</strong>
                  {question}
                </div>
              </button>
            }
            className="w-2/4 mx-auto"
            openedClassName="w-2/4 mx-auto"
            contentInnerClassName="bg-white p-4"
            open={activeIndex === index}
          >
            <p>{answers[index]}</p>
          </Collapsible>
        ))}
      </div>
    </Container>
  );
};

export default MerchandiseList;
