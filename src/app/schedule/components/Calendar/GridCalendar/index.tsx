"use client";

import { LegacyRef, memo, useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Image from "next/image";
import Link from "next/link";
import { MOCK_DATA_EVENTS } from "@/utils/constants";
import { formatVietnameseDate } from "@/utils/functions";

const Modal = ({ onClose, calendarInfo }: any) => {
  const { title, start, extendedProps } = calendarInfo?.event || {};
  const { address, category, id, time } = extendedProps || {};
  const x = calendarInfo.jsEvent.x / 4;
  const y = calendarInfo.jsEvent.y / 3;
  return (
    <div className="relative w-full z-10">
      {/* Popup Modal */}
      <div
        style={{
          bottom: 10,
          left: "70%",
        }}
        className="absolute transform -translate-x-1/2 w-full max-w-2xl bg-white rounded-lg shadow-lg border border-gray-200"
      >
        {/* Header */}
        <div className="p-4 flex justify-between items-center border-b border-gray-200">
          <h3 className="text-lg flex gap-2 items-center justify-center font-semibold text-gray-800">
            <Image
              src={"/icons/calendar-blank.png"}
              width={24}
              height={24}
              alt="calendar-blank"
            />
            {formatVietnameseDate(start)}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700"
          >
            <Image
              src={"/icons/close.png"}
              width={24}
              height={24}
              alt="close"
            />
          </button>
        </div>

        {/* Events */}
        <div className="p-4 space-y-4">
          <div className="p-4 pt-0">
            <h4 className="text-base font-semibold text-gray-800 mb-2">
              {title}
            </h4>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <Image
                    src={"/icons/clock.png"}
                    width={24}
                    height={24}
                    alt="clock"
                  />
                  {time}
                </p>
                <p className="text-sm text-gray-600 flex items-center  gap-2 mt-1">
                  <Image
                    src={"/icons/marker.png"}
                    width={24}
                    height={24}
                    alt="marker"
                  />
                  {address}
                </p>
                {/* <p className="text-sm text-gray-500 mt-1 ml-7">
                    {address}
                  </p> */}
              </div>
              <Link
                href={`/schedule/${id}`}
                className="h-10 border-[#003EA0] border px-4 rounded-lg  flex gap-2 items-center justify-center text-textSecondaryTwo text-sm font-medium"
              >
                Xem chi tiết
                <Image
                  src={"/icons/arrow-right-primary.png"}
                  width={24}
                  height={24}
                  alt="arrow-right"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GridCalendar = ({
  calendarRef,
}: {
  calendarRef: LegacyRef<FullCalendar>;
}) => {
  const [calendarInfo, setCalendarInfo] = useState<any>(null);

  const onClose = () => setCalendarInfo(false);

  return (
    <div className="w-4/5 esm:w-full esm:mt-5 mx-auto">
      <div className="grid grid-cols-7 mb-7 rounded-lg border border-[#003EA0]">
        <div className="text-center relative day-header py-2">Thứ hai</div>
        <div className="text-center relative day-header py-2">Thứ ba</div>
        <div className="text-center relative day-header py-2">Thứ tư</div>
        <div className="text-center relative day-header py-2">Thứ năm</div>
        <div className="text-center relative day-header py-2">Thứ sáu</div>
        <div className="text-center relative day-header py-2">Thứ bảy</div>
        <div className="text-center relative day-header py-2">Chủ nhật</div>
      </div>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locale={"vi"}
        firstDay={1}
        dayHeaderFormat={{ weekday: "long" }}
        headerToolbar={false}
        dayHeaderClassNames={
          "!py-2 font-semibold bg-custom-gradient !align-middle hidden !border-[#7096D1]"
        }
        dayCellClassNames={"bg-custom-gradient"}
        viewClassNames={"grid-calendar-view"}
        eventClassNames={"bg-transparent border-0 relative"}
        eventTextColor={"#000054"}
        showNonCurrentDates={false}
        height={700}
        eventClick={(eventInfo) => {
          setCalendarInfo(eventInfo);
        }}
        events={MOCK_DATA_EVENTS}
      />

      {calendarInfo && <Modal calendarInfo={calendarInfo} onClose={onClose} />}
    </div>
  );
};

export default memo(GridCalendar);
