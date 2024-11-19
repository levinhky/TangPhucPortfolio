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
    <div id="schedule-list" className="mt-[50px]">
      <div className="flex esm:flex-wrap justify-between items-center">
        <div className="flex items-center esm:justify-between esm:w-full">
          <div className="flex flex-col">
            <p className="font-semibold text-primary text-4xl esm:text-3xl">
              Lịch hoạt động
            </p>
            <p className="font-semibold text-primary text-4xl esm:text-3xl uppercase">
              {currentYear}
            </p>
          </div>
          <strong className="month">{currentMonth}</strong>
        </div>
        <div className="flex gap-4">
          <p className="text-primary font-semibold">Xem dạng</p>
          <div className="flex gap-2">
            <button
              onClick={() => setGridType(false)}
              style={{ background: !gridType ? "#fff" : "" }}
              className="border border-black flex items-center justify-center px-2"
            >
              <Image
                src={"/icons/round-menu.png"}
                width={14}
                height={14}
                alt="round-menu"
              />
            </button>
            <button
              onClick={() => setGridType(true)}
              style={{ background: gridType ? "#fff" : "" }}
              className="border border-black flex items-center justify-center px-2"
            >
              <Image
                src={"/icons/grid-menu.png"}
                width={14}
                height={14}
                alt="grid-menu"
              />
            </button>
          </div>
        </div>
      </div>

      {!gridType && <GridCalendar calendarRef={calendarRef} />}

      {gridType && <ListCalendar calendarRef={calendarRef} />}

      <div className="nav-container">
        <button className="nav-link prev" onClick={goPrev}>
          Trang trước
        </button>
        <button className="nav-link next" onClick={goNext}>
          Trang sau
        </button>
      </div>
    </div>
  );
};

export default memo(CalendarView);
