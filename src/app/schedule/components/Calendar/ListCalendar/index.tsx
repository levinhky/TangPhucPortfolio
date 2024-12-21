import { LegacyRef, memo, useState } from "react";
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
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);
  const renderEventContent = (eventInfo: any) => {
    const { title, start, extendedProps } = eventInfo?.event || {};
    const { address, category, posterUrl, posterLink } = extendedProps || {};
    const isPosterUrlValid = posterUrl && posterUrl.trim() !== "";
    const isPosterLinkValid = posterLink && posterLink.trim() !== "";
    const openPopup = () => {
      setSelectedPoster(posterUrl);
      setPopupVisible(true);
    };

    return (
      <div className="event-card">
        <div className="flex items-center w-[20%] esm:w-full gap-10 justify-between">
          <div className="event-date w-2/12">{formatDateWithDot(start)}</div>
          <button className="event-type w-[100px]">{category}</button>
        </div>
        <div className="flex esm:mt-3 esm:flex-wrap justify-between flex-1">
          <div className="event-details esm:w-full">
            <div className="event-name">
              {title}
            </div>
            <div className="event-address !text-textSecondaryTwo">
              {address}
            </div>
          </div>
          {/* Buttons Section */}
          <div className="flex gap-4">
            {/* Xem Thông Tin Button */}
            <button
              onClick={openPopup}
              disabled={!isPosterUrlValid} // Disable button if posterUrl is invalid
              className={`event-info flex items-center justify-center p-2 border rounded-lg ${
                isPosterUrlValid
                  ? "text-blue-600 hover:bg-gray-100"
                  : "text-gray-400 bg-gray-200 cursor-not-allowed"
              }`}
            >
              Xem thông tin
            </button>

            {/* Mua Vé Button */}
            <a
              href={isPosterLinkValid ? posterLink : "#"}
              target={isPosterLinkValid ? "_blank" : ""}
              rel="noopener noreferrer"
              className={`event-button ${
                isPosterLinkValid ? "buy-ticket-enabled" : "disabled-button"
              }`}
            >
              Mua Vé
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
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
      {popupVisible && selectedPoster && (
        <div className="popup-overlay" onClick={() => setPopupVisible(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedPoster}
              alt="Event Poster"
              width={800}
              height={600}
              className="popup-poster"
            />
            <button
              className="popup-close-button"
              onClick={() => setPopupVisible(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(ListCalendar);
