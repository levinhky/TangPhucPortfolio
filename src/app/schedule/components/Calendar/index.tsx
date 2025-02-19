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

  const renderPrevButton = (
    <button
      className="nav-link flex items-center justify-center rounded-lg w-10 h-10 bg-white prev"
      onClick={goPrev}
    >
      <Image src={"/icons/next.png"} width={20} height={20} alt="grid-menu" />
    </button>
  );

  const renderNextButton = (
    <button
      className="nav-link flex items-center justify-center rounded-lg w-10 h-10 bg-white next"
      onClick={goNext}
    >
      <Image src={"/icons/next.png"} width={20} height={20} alt="grid-menu" />
    </button>
  );

  const renderListButton = (
    <button
      onClick={() => {
        setGridType(false);
        setCurrentMonth(new Date().getMonth() + 1);
      }}
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
  );

  const renderGridButton = (
    <button
      onClick={() => {
        setGridType(true);
        setCurrentMonth(new Date().getMonth() + 1);
      }}
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
  );

  return (
    <div id="schedule-list">
      <div className="flex flex-col mx-auto items-center esm:justify-between esm:w-full esm:mb-5 relative">
        <strong className="month">Tháng {currentMonth}</strong>
        <p className="font-semibold text-textSecondaryTwo text-2xl esm:text-xl">
          Lịch hoạt động
        </p>
        {renderPrevButton}
        {renderNextButton}
      </div>

      <div
        className={`flex justify-end items-center gap-4 mb-5 esm:mb-0 ${
          gridType ? "w-[90%] esm:w-full" : "w-full"
        }`}
      >
        <p className="text-primary font-semibold">Xem dạng</p>
        <div className="flex gap-2">
          {renderListButton}
          {renderGridButton}
        </div>
      </div>

      {!gridType && <ListCalendar calendarRef={calendarRef} />}
      {gridType && <GridCalendar calendarRef={calendarRef} />}
    </div>
  );
};

export default memo(CalendarView);
