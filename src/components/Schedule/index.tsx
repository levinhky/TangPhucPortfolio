import Container from "@/themes/Container";
import Image from "next/image";
import Link from "next/link";
import MerchandiseItem from "../MerchandiseItem";

const Schedule = () => {
  return (
    <Container style="mt-10 flex items-center flex-col mb-16">
      <div className="schedule-news relative">
        <h6 className="main-title text-center">Lịch hoạt động</h6>
        <div className="schedule-list">
          <div className="schedule-list--item flex gap-10 justify-center">
            <p className="schedule-list--time">00/00</p>
            <div className="schedule-list--info max-w-[600px]">
              <h4>Category</h4>
              <h3 className="sub-title--bold">
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
                amet consectetur.
              </h3>
            </div>
          </div>
          <div className="schedule-list--item flex gap-10 justify-center">
            <p className="schedule-list--time">00/00</p>
            <div className="schedule-list--info max-w-[600px]">
              <h4>Category</h4>
              <h3 className="sub-title--bold">
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
                amet consectetur.
              </h3>
            </div>
          </div>
          <div className="schedule-list--item flex gap-10 justify-center">
            <p className="schedule-list--time">00/00</p>
            <div className="schedule-list--info max-w-[600px]">
              <h4>Category</h4>
              <h3 className="sub-title--bold">
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
                amet consectetur.
              </h3>
            </div>
          </div>
        </div>
        <div className="shedule-button--view-more flex items-center justify-center">
          <Link href="">Xem thêm →</Link>
        </div>
        <div className="schedule--float-text">
          <p>Next</p>
          <p>Chapter</p>
        </div>
      </div>

      <div className="schedule-promotions">
        <h6 className="main-title text-center">Merchandise</h6>
        <div className="schedule-promotions__list grid grid-cols-3 gap-4">
          <MerchandiseItem />
          <MerchandiseItem />
          <MerchandiseItem />
        </div>
      </div>
    </Container>
  );
};

export default Schedule;
