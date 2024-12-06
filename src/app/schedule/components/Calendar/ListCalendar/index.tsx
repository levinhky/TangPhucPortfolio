import { LegacyRef, memo } from "react";
import Link from "next/link";

import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";

import { formatDateWithDot } from "@/utils/functions";
import Image from "next/image";
import { MOCK_DATA_EVENTS } from "@/utils/constants";

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
        <div className="flex items-center w-[20%] gap-10 justify-between">
          <div className="event-date w-2/12">{formatDateWithDot(start)}</div>
          <button className="event-type w-[100px]">{category}</button>
        </div>
        <div className="flex esm:mt-3 esm:flex-wrap justify-between flex-1">
          <div className="event-details esm:w-full">
            <Link href={`/schedule/${id}`} className="event-name">
              {title}
            </Link>
            <div className="event-address !text-textSecondaryTwo">
              {address}
            </div>
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
      events={MOCK_DATA_EVENTS}
    />
  );
};

export default memo(ListCalendar);
