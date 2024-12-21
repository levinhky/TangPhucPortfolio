import { LegacyRef, memo, useState } from "react";

import PosterModal from "../../PosterModal";

import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";

import { formatDateWithDot } from "@/utils/functions";
import { MOCK_DATA_EVENTS } from "@/utils/constants";

const ListCalendar = ({
  calendarRef,
}: {
  calendarRef: LegacyRef<FullCalendar>;
}) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);

  const onOpenModal = (posterUrl: string) => () => {
    setSelectedPoster(posterUrl);
    setPopupVisible(true);
  };
  const onCloseModal = () => setPopupVisible(false);

  const renderEventContent = (eventInfo: any) => {
    const { title, start, extendedProps } = eventInfo?.event || {};
    const { address, category, posterUrl, posterLink } = extendedProps || {};
    const isPosterUrlValid = posterUrl && posterUrl.trim() !== "";
    const isPosterLinkValid = posterLink && posterLink.trim() !== "";

    return (
      <div className="event-card">
        <div className="flex items-center w-[20%] esm:w-full esm:mt-2 gap-10 justify-between">
          <div className="event-date w-2/12">{formatDateWithDot(start)}</div>
          <button className="event-type w-[100px]">{category}</button>
        </div>
        <div className="flex esm:mt-3 esm:flex-wrap justify-between flex-1">
          <div className="event-details esm:w-full">
            <div className="event-name">{title}</div>
            <div className="event-address !text-textSecondaryTwo">
              {address}
            </div>
          </div>
          <div className="flex gap-4 esm:mt-3 esm:mb-2 esm:justify-between esm:w-full">
            <button
              onClick={onOpenModal(posterUrl)}
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
        <PosterModal posterSrc={selectedPoster} onCloseModal={onCloseModal} />
      )}
    </>
  );
};

export default memo(ListCalendar);
