import { LegacyRef, memo, useState } from "react";

import PosterModal from "./components/PosterModal";

import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";

import ListCalendarItem from "./components/ListCalendarItem";

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
      <ListCalendarItem
        title={title}
        start={start}
        address={address}
        category={category}
        posterLink={posterLink}
        isPosterLinkValid={isPosterLinkValid}
        isPosterUrlValid={isPosterUrlValid}
        onClick={onOpenModal(posterUrl)}
      />
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
