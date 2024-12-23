import { memo } from "react";
import Image from "next/image";
import Link from "next/link";

import { formatVietnameseDate } from "@/utils/functions";

interface CalendarDetailModalProps {
  calendarInfo: any;
  onClose: () => void;
}

const CalendarDetailModal = ({
  calendarInfo,
  onClose,
}: CalendarDetailModalProps) => {
  const { title, start, extendedProps } = calendarInfo?.event || {};
  const { address, id, time } = extendedProps || {};

  if (!calendarInfo) {
    return null;
  }

  const eventDetail = (
    <div className="p-4 space-y-4">
      <div className="p-4 pt-0">
        <h4 className="text-base font-semibold text-gray-800 mb-2">{title}</h4>
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
  );

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
      {eventDetail}
    </div>
  );
};

export default memo(CalendarDetailModal);
