import Container from "@/themes/Container";
import Image from "next/image";
import Link from "next/link";
import MerchandiseItem from "../MerchandiseItem";

const Schedule = () => {
  return (
    <Container style="mt-10 esm:mt-5 flex items-center flex-col mb-16">
      <div className="schedule-news relative">
        <h6 className="main-title text-center">Lịch hoạt động</h6>
        <div className="schedule-list">
          <div className="schedule-list--item flex gap-10 justify-center">
            <p className="schedule-list--time">21/11</p>
            <div className="schedule-list--info max-w-[600px]">
              <h4>MINISHOW</h4>
              <Link href={"/schedule/1"} className="sub-title--bold">
                Ừ em xin lỗi kỳ vọng sai lầm <br />
                Tăng Phúc - Lương Bích Hữu
              </Link>
            </div>
          </div>
          <div className="schedule-list--item flex gap-10 justify-center">
            <p className="schedule-list--time">23/11</p>
            <div className="schedule-list--info max-w-[600px]">
              <h4>MINISHOW</h4>
              <Link href={'/schedule/2'} className="sub-title--bold">
                Mây Lang Thang <br />
                Tăng Phúc - khách mời Phương Anh Idol
              </Link>
            </div>
          </div>
          <div className="schedule-list--item flex gap-10 justify-center">
            <p className="schedule-list--time">24/11</p>
            <div className="schedule-list--info max-w-[600px]">
              <h4>MINISHOW</h4>
              <Link href={'/schedule/3'} className="sub-title--bold">
                "Từ Đây... Từ Nay..." Slay Hà Nội (đêm 1) <br />
                Tăng Phúc - khách mời ST, BB Trần, Duy Khánh
              </Link>
            </div>
          </div>
        </div>
        <div className="shedule-button--view-more flex items-center justify-center">
          <Link href="/schedule">Xem thêm →</Link>
        </div>
        <div className="schedule--float-text">
          <p>Next</p>
          <p>Chapter</p>
        </div>
      </div>

      <div className="schedule-promotions">
        <h6 className="main-title text-center">Merchandise</h6>
        <div className="schedule-promotions__list grid grid-cols-3 esm:grid-cols-1 gap-4">
          <MerchandiseItem
            category={"Chín Muồi"}
            productName={"Chín Vừa Tee"}
            price={349000}
            id={2}
          />
          <MerchandiseItem
            image={
              "https://res.cloudinary.com/dahnkbdxi/image/upload/v1731831577/463620900_946517870830211_4163009015280798425_n.jpg_yabvmy.jpg"
            }
            category={"Từ Đây… Từ Nay…"}
            productName={"Túi Tote"}
            price={225000}
            stockStatus={"out-stock"}
            id={1}
          />
        </div>
      </div>
    </Container>
  );
};

export default Schedule;
