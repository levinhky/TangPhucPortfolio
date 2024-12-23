"use client";
import { LegacyRef, memo, useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import CalendarDetailModal from "./components/CalendarDetailModal";

import { DAYS_OF_WEEK, DEVICE, MOCK_DATA_EVENTS } from "@/utils/constants";

import useDetectDevice from "@/hooks/useDetectDevice";

const GridCalendar = ({
  calendarRef,
}: {
  calendarRef: LegacyRef<FullCalendar>;
}) => {
  const [calendarInfo, setCalendarInfo] = useState<any>(null);

  const onClose = () => setCalendarInfo(false);

  const { device } = useDetectDevice();

  const eventClassNames = (eventInfo: any) => {
    return [
      `bg-transparent border-0 ${
        calendarInfo &&
        eventInfo.event._instance?.instanceId ===
          calendarInfo.event._instance?.instanceId &&
        "!z-[10]"
      }`,
    ];
  };

  const eventContent = (eventInfo: any) => {
    return (
      <>
        <p className="break-words overflow-hidden z-[4]">
          {eventInfo.event.title}
        </p>
        {calendarInfo &&
          eventInfo.event._instance?.instanceId ===
            calendarInfo.event._instance?.instanceId && (
            <CalendarDetailModal
              calendarInfo={calendarInfo}
              onClose={onClose}
            />
          )}
      </>
    );
  };

  return (
    <div className="w-4/5 esm:w-full esm:mt-5 mx-auto">
      <div className="grid grid-cols-7 mb-7 rounded-lg border bg-custom-gradient border-[#003EA0]">
        {DAYS_OF_WEEK.map((day) => {
          return (
            <div className="text-center relative day-header py-2">
              {device === DEVICE.MOBILE ? day.short : day.full}
            </div>
          );
        })}
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
        eventClassNames={eventClassNames}
        eventTextColor={"#000054"}
        eventContent={eventContent}
        showNonCurrentDates={false}
        height={"auto"}
        eventClick={(eventInfo) => {
          setCalendarInfo(eventInfo);
        }}
        events={MOCK_DATA_EVENTS}
      />
    </div>
  );
};

export default memo(GridCalendar);
