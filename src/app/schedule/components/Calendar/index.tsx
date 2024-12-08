"use client";
import { memo, useRef, useState } from "react";
import Image from "next/image";

import GridCalendar from "./GridCalendar";
import ListCalendar from "./ListCalendar";

const CalendarView = () => {
  const [gridType, setGridType] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const calendarRef = useRef<any>(undefined);

  function goNext() {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.next();
    const activeMonth = calendarApi.getDate().getMonth();
    const activeYear = calendarApi.getDate().getFullYear();
    setCurrentMonth(activeMonth + 1);
    setCurrentYear(activeYear);
  }

  function goPrev() {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.prev();
    const activeMonth = calendarApi.getDate().getMonth();
    const activeYear = calendarApi.getDate().getFullYear();
    setCurrentMonth(activeMonth + 1);
    setCurrentYear(activeYear);
  }

  return (
    <div id="schedule-list">
      <div className="flex flex-col mx-auto items-center esm:justify-between esm:w-full relative">
        <strong className="month">Tháng {currentMonth}</strong>
        <p className="font-semibold text-textSecondaryTwo text-2xl esm:text-3xl">
          Lịch hoạt động
        </p>
        <button
          className="nav-link flex items-center justify-center rounded-lg w-10 h-10 bg-white prev"
          onClick={goPrev}
        >
          <Image
            src={"/icons/next.png"}
            width={20}
            height={20}
            alt="grid-menu"
          />
        </button>
        <button
          className="nav-link flex items-center justify-center rounded-lg w-10 h-10 bg-white next"
          onClick={goNext}
        >
          <Image
            src={"/icons/next.png"}
            width={20}
            height={20}
            alt="grid-menu"
          />
        </button>
      </div>

      <div
        className={`flex justify-end items-center gap-4 mb-5 ${
          gridType ? "w-[90%]" : "w-full"
        }`}
      >
        <p className="text-primary font-semibold">Xem dạng</p>
        <div className="flex gap-2">
          <button
            onClick={() => setGridType(false)}
            style={{ background: !gridType ? "#000B6E" : "#fff" }}
            className="rounded-lg flex h-10 w-10 items-center justify-center"
          >
            <Image
              src={
                !gridType
                  ? "/icons/list-menu-white.png"
                  : "/icons/list-menu-primary.png"
              }
              width={20}
              height={20}
              alt="round-menu"
            />
          </button>
          <button
            onClick={() => setGridType(true)}
            style={{ background: gridType ? "#000B6E" : "#fff" }}
            className="rounded-lg flex h-10 w-10 items-center justify-center"
          >
            <Image
              src={
                gridType
                  ? "/icons/grid-menu-white.png"
                  : "/icons/grid-menu-primary.png"
              }
              width={20}
              height={20}
              alt="grid-menu"
            />
          </button>
        </div>
      </div>

      {!gridType && <ListCalendar calendarRef={calendarRef} />}
      {gridType && <GridCalendar calendarRef={calendarRef} />}
    </div>
  );
};

export default memo(CalendarView);
