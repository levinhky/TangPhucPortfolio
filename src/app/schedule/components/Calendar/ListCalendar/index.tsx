import { LegacyRef, memo } from "react";
import Link from "next/link";

import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";

import { formatDate } from "@/utils/functions";
import Image from "next/image";

const ListCalendar = ({
  calendarRef,
}: {
  calendarRef: LegacyRef<FullCalendar>;
}) => {
  const renderEventContent = (eventInfo: any) => {
    const { title, start, extendedProps } = eventInfo?.event || {};
    const { address, category, id } = extendedProps || {};
    return (
      <div className="event-card">
        <div className="flex items-center">
          <div className="event-date">{formatDate(start)}</div>
          <button className="event-type w-[100px]">{category}</button>
        </div>
        <div className="flex esm:mt-3 esm:flex-wrap justify-between flex-1">
          <div className="event-details esm:w-full">
            <Link href={`/schedule/${id}`} className="event-name">
              {title}
            </Link>
            <div className="event-address !text-textSecondaryTwo">{address}</div>
          </div>
          <Link
            href={`/schedule/${id}`}
            className="event-info flex items-center justify-center esm:my-3"
          >
            Xem thông tin
            <Image
              src={"/icons/arrow-right-primary.png"}
              width={24}
              height={24}
              alt="arrow-right"
              className="ml-2"
            />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <FullCalendar
      ref={calendarRef}
      plugins={[listPlugin]}
      initialView="listMonth"
      headerToolbar={false}
      dayHeaderClassNames={"hidden"}
      height={"auto"}
      viewClassNames={"list-calendar-view esm:mt-5"}
      eventContent={renderEventContent}
      noEventsContent={"Lịch hiện đang trống"}
      displayEventTime={false}
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
  );
};

export default memo(ListCalendar);
