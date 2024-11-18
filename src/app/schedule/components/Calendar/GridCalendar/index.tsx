import { LegacyRef, memo } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useRouter } from "next/navigation";

const GridCalendar = ({
  calendarRef,
}: {
  calendarRef: LegacyRef<FullCalendar>;
}) => {
  const router = useRouter();
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
          "!py-2 uppercase font-semibold bg-white !align-middle !border-[#7096D1]"
        }
        dayCellClassNames={"bg-white"}
        viewClassNames={"grid-calendar-view"}
        showNonCurrentDates={false}
        height={400}
        eventClick={(eventInfo) =>
          router.push(`/schedule/${eventInfo.event.extendedProps.id}`)
        }
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
    </div>
  );
};

export default memo(GridCalendar);
