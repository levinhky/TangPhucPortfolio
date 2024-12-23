import { memo } from "react";

import { formatDateWithDot } from "@/utils/functions";

interface ListCalendarItemProps {
  start: string;
  category: string;
  title: string;
  address: string;
  posterLink: string;
  isPosterUrlValid: boolean;
  isPosterLinkValid: boolean;
  onClick: () => void;
}

const ListCalendarItem = ({
  start,
  category,
  title,
  address,
  posterLink,
  isPosterUrlValid,
  isPosterLinkValid,
  onClick,
}: ListCalendarItemProps) => {
  return (
    <div className="event-card">
      <div className="flex items-center w-[20%] esm:w-full esm:mt-2 gap-10 justify-between">
        <div className="event-date w-2/12">{formatDateWithDot(start)}</div>
        <button className="event-type w-[100px]">{category}</button>
      </div>
      <div className="flex esm:mt-3 esm:flex-wrap justify-between flex-1">
        <div className="event-details esm:w-full">
          <div className="event-name">{title}</div>
          <div className="event-address !text-textSecondaryTwo">{address}</div>
        </div>
        <div className="flex gap-4 esm:mt-3 esm:mb-2 esm:justify-between esm:w-full">
          <button
            onClick={onClick}
            disabled={!isPosterUrlValid}
            className={`event-info flex items-center justify-center p-2 border rounded-lg ${
              isPosterUrlValid
                ? "text-textSecondaryTwo"
                : "!text-gray-400 !cursor-not-allowed"
            }`}
          >
            Xem thông tin
          </button>

          <a
            href={isPosterLinkValid ? posterLink : "#t"}
            target={isPosterLinkValid ? "_blank" : ""}
            rel="noopener noreferrer"
            className={`event-button ${
              isPosterLinkValid ? "buy-ticket-enabled" : "buy-ticket-disabled"
            }`}
          >
            Mua Vé
          </a>
        </div>
      </div>
    </div>
  );
};

export default memo(ListCalendarItem);
