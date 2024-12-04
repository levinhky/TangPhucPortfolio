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
      <div className="merchandise-list  esm:mt-12">
        <div className="flex items-center justify-center gap-4">
          <div
            className={`category ${
              categoryActive === "all" ? "category--active" : ""
            } sub-title--small h-10 px-5 flex items-center justify-center`}
            onClick={handleActiveCategory("all")}
          >
            Tất cả
          </div>
          <button
            className={`category ${
              categoryActive === "hat" ? "category--active" : ""
            } sub-title--small h-10 px-5 flex items-center justify-center`}
            onClick={handleActiveCategory("hat")}
          >
            Nón
          </button>
          <button
            className={`category ${
              categoryActive === "shirt" ? "category--active" : ""
            } sub-title--small h-10 px-5 flex items-center justify-center`}
            onClick={handleActiveCategory("shirt")}
          >
            Áo
          </button>
          <button
            className={`category ${
              categoryActive === "bag" ? "category--active" : ""
            } sub-title--small h-10 px-5 flex items-center justify-center`}
            onClick={handleActiveCategory("bag")}
          >
            Túi
          </button>
        </div>
        <div className="items grid grid-cols-3 esm:grid-cols-1 mt-12 gap-7">
          <MerchandiseItem
          image={
            "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733256405/TDTNPre1_bkxn0p.jpg"
          }
            category={"Album"}
            productName={"EP Từ Đây Từ Nay"}
            price={599000}
            id={6}
          />
          <MerchandiseItem
          image={
            "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733256404/pinTVMP1_baucid.jpg"
          }
            category={"Merch"}
            productName={"Pin TVMP"}
            price={349000}
            id={7}
          />
          <MerchandiseItem
            category={"Chín Muồi"}
            productName={"Chín Vừa Tee"}
            price={349000}
            id={8}
          />
           <MerchandiseItem
            image={
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733284295/4_xar3nt.jpg"
            }
            category={"Từ Đây… Từ Nay…"}
            productName={"Túi Tote"}
            price={225000}
            stockStatus={"out-stock"}
            id={9}
          />
           <MerchandiseItem
            image={
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733284295/z6095929752842_19a8cd219f714d974007bb5ed8691029_meszcf.jpg"
            }
            category={"TDTN"}
            productName={"Khăn Bandana TDTN"}
            price={229000}
            // stockStatus={"out-stock"}
            id={5}
          />
            <MerchandiseItem
            image={
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733256404/pinTVMP1_baucid.jpg"
            }
            category={"TVMP"}
            productName={"Pin TVMP"}
            price={99000}
            // stockStatus={"out-stock"}
            id={7}
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
                <div className="flex items-center justify-between w-full">
                  <p className="w-[80%]">{question}</p>
                  <Image
                    src={
                      activeIndex === index
                        ? "/icons/minus.png"
                        : "/icons/plus.png"
                    }
                    width={24}
                    height={24}
                    alt="plus"
                  />
                </div>
              </button>
            }
            className="w-2/4 esm:w-full mx-auto"
            openedClassName="w-2/4 esm:w-full mx-auto"
            contentInnerClassName="bg-white p-4"
            open={activeIndex === index}
          >
            <p className="text-textSecondaryTwo">{answers[index]}</p>
          </Collapsible>
        ))}
      </div>
    </Container>
  );
};

export default MerchandiseList;
