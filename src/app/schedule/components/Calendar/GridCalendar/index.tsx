"use client";

import { LegacyRef, memo, useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Modal = ({ date, events, onClose, tram }: any) => {
  console.log("🚀 ~ Modal ~ tram:", tram);
  const x = tram.jsEvent.x / 4;
  const y = tram.jsEvent.y / 3;
  return (
    <div
      className="relative w-full z-10"
      style={{
        top: y + "px",
        right: -x + "px",
      }}
    >
      {/* Popup Modal */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-2xl bg-white rounded-lg shadow-lg border border-gray-200">
        {/* Header */}
        <div className="p-4 flex justify-between items-center border-b border-gray-200">
          <h3 className="text-lg flex gap-2 items-center justify-center font-semibold text-gray-800">
            <Image
              src={"/icons/calendar-blank.png"}
              width={24}
              height={24}
              alt="calendar-blank"
            />
            {date}
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
          {events.map((event: any, idx: any) => (
            <div key={idx} className="p-4 pt-0">
              <h4 className="text-base font-semibold text-gray-800 mb-2">
                {event.title}
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
                    {event.time}
                  </p>
                  <p className="text-sm text-gray-600 flex items-center  gap-2 mt-1">
                    <Image
                      src={"/icons/marker.png"}
                      width={24}
                      height={24}
                      alt="marker"
                    />
                    {event.location}
                  </p>
                  <p className="text-sm text-gray-500 mt-1 ml-7">
                    {event.address}
                  </p>
                </div>
                <Link
                  href={`/schedule/${tram.event.extendedProps.id}`}
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
          ))}
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
  const router = useRouter();
  const [tram, setTram] = useState<any>(null);

  const onClose = () => setTram(false);

  const date = "Thứ 3, 28 tháng 10";
  const events = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur 1",
      time: "17:00 - 18:30",
      location: "SOL8",
      address: "8 P. Nguyễn Công Hoan, Giảng Võ, Ba Đình, Hà Nội",
    },
  ];
  return (
    <div className="w-4/5 esm:w-full esm:mt-5 mx-auto">
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locale={"vi"}
        firstDay={1}
        dayHeaderFormat={{ weekday: "long" }}
        headerToolbar={false}
        dayHeaderClassNames={
          "!py-2 font-semibold bg-custom-gradient !align-middle !border-[#7096D1]"
        }
        dayCellClassNames={"bg-custom-gradient"}
        viewClassNames={"grid-calendar-view"}
        eventClassNames={"bg-transparent border-0"}
        eventTextColor={"#000054"}
        showNonCurrentDates={false}
        height={700}
        eventClick={(eventInfo) => {
          setTram(eventInfo);
          // router.push(`/schedule/${eventInfo.event.extendedProps.id}`)
        }}
        events={[
          {
            title: "Ừ em xin lỗi kỳ vọng sai lầm",
            start: "2024-11-21",
            extendedProps: {
              address: "TP. HCM",
              category: "MINISHOW",
              id: 1,
            },
          },
          {
            title: "Mây Lang Thang",
            start: "2024-11-23",
            extendedProps: {
              address: "Đà Lạt",
              category: "MINISHOW",
              id: 2,
            },
          },
          {
            title: '"Từ Đây... Từ Nay..." Slay Hà Nội (đêm 1)',
            start: "2024-11-24",
            extendedProps: {
              address: "Hà Nội",
              category: "MINISHOW",
              id: 3,
            },
          },
          {
            title: '"Từ Đây... Từ Nay..." Slay Hà Nội (đêm 1)',
            start: "2024-12-24",
            extendedProps: {
              address: "Hà Nội",
              category: "MINISHOW",
              id: 4,
            },
          },
        ]}
      />

      {tram && (
        <Modal date={date} events={events} tram={tram} onClose={onClose} />
      )}
    </div>
  );
};

export default memo(GridCalendar);
