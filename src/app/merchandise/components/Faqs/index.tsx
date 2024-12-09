"use client";
import Image from "next/image";
import Collapsible from "react-collapsible";
import { memo, useState } from "react";

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

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const toggleCollapsible = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="fag mb-10">
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
  );
};

export default memo(Faqs);
