import Container from "@/themes/Container";
import Image from "next/image";
import Link from "next/link";
import MerchandiseItem from "../MerchandiseItem";
import { MOCK_DATA_EVENTS } from "@/utils/constants";
import { formatDateWithSlash, getScheduleHomeList } from "@/utils/functions";

const Schedule = () => {
  return (
    <Container style="mt-10 esm:mt-5 flex items-center flex-col">
      <div className="schedule-news">
        <h6 className="main-title text-center">Sự kiện sắp tới</h6>
        <div className="schedule-list">
          {getScheduleHomeList(MOCK_DATA_EVENTS)
            .slice(-3)
            .map((event: any, index: number) => {
              return (
                <div key={index} className="schedule-list--item flex gap-10">
                  <p className="schedule-list--time">
                    {formatDateWithSlash(event.start)}
                  </p>
                  <div className="schedule-list--info max-w-[600px]">
                    <h4>{event.extendedProps.category}</h4>
                    <Link href={"/schedule/1"} className="sub-title--bold">
                      {event.title}
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="shedule-button--view-more flex items-center justify-center">
          <Link href="/schedule">
            Xem thêm{" "}
            <Image
              src={"/icons/arrow-right.png"}
              width={24}
              height={24}
              alt="arrow-right"
              className="ml-2"
            />
          </Link>
        </div>
      </div>

      <div className="video-container w-[70%] esm:w-full esm:h-80 esm:mb-10 h-[500px] mb-12">
        <iframe
          src={`https://www.youtube.com/embed/MfvuNYlLaM8`}
          className="w-full h-full"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Container>
  );
};

export default Schedule;
