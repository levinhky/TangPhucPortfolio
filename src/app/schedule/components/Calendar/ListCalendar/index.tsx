"use client";

import { LegacyRef, memo, useState, useEffect } from "react";

import PosterModal from "./components/PosterModal";

import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";

import { formatDateWithDot } from "@/utils/functions";
import { fetchCSVData } from "@/utils/constants"; // Import fetchCSVData
import ListCalendarItem from "./components/ListCalendarItem";

// Helper Function: Parse and Convert Date to ISO Format
const parseDateToISO = (dateStr: string) => {
  const parts = dateStr.trim().split("/"); // Split by '/'
  if (parts.length === 3) {
    const [month, day, year] = parts; // Extract parts
    // Check for valid numbers and pad zeros if needed
    if (!isNaN(Number(month)) && !isNaN(Number(day)) && !isNaN(Number(year))) {
      const isoDate = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
      return isoDate; // Return ISO date
    }
  }
  return null; // Return null for invalid formats
};


const ListCalendar = ({
  calendarRef,
}: {
  calendarRef: LegacyRef<FullCalendar>;
}) => {
  // State to store dynamic events
  const [events, setEvents] = useState<any[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);

  useEffect(() => {
    console.log("useEffect");
    const loadEvents = async () => {
      try {
        const data = await fetchCSVData("/data/TP_events.csv");
        // Transform and Format Events for FullCalendar
        const formattedEvents = data.map((event: any) => {
          const isoDate = parseDateToISO(event.date); // Parse date to ISO
          // if (!isoDate) return null; 
          return {
            title: event.title,
            start: `${isoDate}T${event.time || "00:00"}`, // Combine date and time
            extendedProps: {
              address: event.address || "",
              category: event.category || "",
              posterUrl: event.posterUrl || "",
              posterLink: event.posterLink || "",
            },
          };
        });
        setEvents(formattedEvents); // Update state
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setLoading(false); // End loading state
      }
    };

    loadEvents(); // Load events on mount
  }, []);


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

  // Show loading message while fetching events
  if (loading) {
    return <p>Loading events...</p>;
  }

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
        events={events} // Use dynamic events from state
      />
      {popupVisible && selectedPoster && (
        <PosterModal posterSrc={selectedPoster} onCloseModal={onCloseModal} />
      )}
    </>
  );
};

export default memo(ListCalendar);
