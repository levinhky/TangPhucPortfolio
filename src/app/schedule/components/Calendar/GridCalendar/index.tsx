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
  if (!calendarInfo) {
    return null;
  }

  return (
    <div className="absolute transform -top-10 -translate-x-1/2 w-[500px] max-w-2xl bg-custom-gradient rounded-lg shadow-lg border border-[#7096D1] backdrop-blur-md">
      <div className="p-4 flex justify-between items-center border-b border-[#7096D1]">
        <h3 className="text-lg flex gap-2 items-center justify-center font-semibold text-gray-800">
          <Image
            src={"/icons/calendar-blank.png"}
            width={24}
            height={24}
            alt="calendar-blank"
          />
          {formatVietnameseDate(start)}
        </h3>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-700">
          <Image src={"/icons/close.png"} width={24} height={24} alt="close" />
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
      <div className="grid grid-cols-7 mb-7 rounded-lg border bg-custom-gradient border-[#003EA0]">
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
          "!py-2 font-semibold !align-middle hidden !border-[#7096D1]"
        }
        viewClassNames={"grid-calendar-view"}
        eventClassNames={(eventInfo) => {
          return [
            `bg-transparent border-0 ${
              calendarInfo &&
              eventInfo.event._instance?.instanceId ===
                calendarInfo.event._instance?.instanceId &&
              "!z-[10]"
            }`,
          ];
        }}
        eventTextColor={"#000054"}
        eventContent={(eventInfo) => {
          return (
            <>
              <p className="break-words overflow-hidden z-[4]">
                {eventInfo.event.title}
              </p>
              {calendarInfo &&
                eventInfo.event._instance?.instanceId ===
                  calendarInfo.event._instance?.instanceId && (
                  <Modal calendarInfo={calendarInfo} onClose={onClose} />
                )}
            </>
          );
        }}
        showNonCurrentDates={false}
        height={700}
        eventClick={(eventInfo) => {
          setCalendarInfo(eventInfo);
        }}
        events={MOCK_DATA_EVENTS}
      />
    </div>
  );
};

export default memo(GridCalendar);
