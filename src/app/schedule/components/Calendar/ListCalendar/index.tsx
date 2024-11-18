import { LegacyRef, memo } from "react";
import Link from "next/link";

import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";

import { formatDate } from "@/utils/functions";

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
        <div className="event-date">{formatDate(start)}</div>
        <button className="event-type w-[100px]">{category}</button>
        <div className="event-details">
          <Link href={`/schedule/${id}`} className="event-name">
            {title}
          </Link>
          <div className="event-address">{address}</div>
        </div>
        <Link href={`/schedule/${id}`} className="event-info">
          Xem thông tin
        </Link>
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
      viewClassNames={"list-calendar-view"}
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
      ]}
    />
  );
};

export default memo(ListCalendar);
