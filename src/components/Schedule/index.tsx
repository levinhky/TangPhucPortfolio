import Container from "@/themes/Container";
import Image from "next/image";
import Link from "next/link";
import MerchandiseItem from "../MerchandiseItem";

const Schedule = () => {
  return (
    <Container style="mt-10 esm:mt-5 flex items-center flex-col mb-16">
      <div className="schedule-news relative">
        <h6 className="main-title text-center">Sự kiện sắp tới</h6>
        <div className="schedule-list">
          <div className="schedule-list--item flex gap-10">
            <p className="schedule-list--time">21/11</p>
            <div className="schedule-list--info max-w-[600px]">
              <h4>MINISHOW</h4>
              <Link href={"/schedule/1"} className="sub-title--bold">
                Ừ em xin lỗi kỳ vọng sai lầm - Tăng Phúc - Lương Bích Hữu
              </Link>
            </div>
          </div>
          <div className="schedule-list--item flex gap-10">
            <p className="schedule-list--time">23/11</p>
            <div className="schedule-list--info max-w-[600px]">
              <h4>MINISHOW</h4>
              <Link href={"/schedule/2"} className="sub-title--bold">
                Mây Lang Thang - Tăng Phúc - khách mời Phương Anh Idol
              </Link>
            </div>
          </div>
          <div className="schedule-list--item flex gap-10">
            <p className="schedule-list--time">24/11</p>
            <div className="schedule-list--info max-w-[600px]">
              <h4>MINISHOW</h4>
              <Link href={"/schedule/3"} className="sub-title--bold">
                "Từ Đây... Từ Nay..." Slay Hà Nội (đêm 1) - Tăng Phúc - khách
                mời ST, BB Trần, Duy Khánh
              </Link>
            </div>
          </div>
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

      <div className="schedule-promotions">
        <h6 className="main-title text-center">Merchandise</h6>
        <div className="schedule-promotions__list grid grid-cols-3 esm:grid-cols-1 gap-7">
          <MerchandiseItem
          image={
            "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733256405/TDTNPre1_bkxn0p.jpg"
          }
            category={"TDTN"}
            productName={"PRE-Order EP TDTN"}
            price={349000}
            id={1}
          />
          <MerchandiseItem
            image={
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733284295/2_gno5mi.jpg"
            }
            category={"TDTN"}
            productName={"Sổ Tay TDTN"}
            price={99000}
            // stockStatus={"out-stock"}
            id={2}
          />
          <MerchandiseItem
            image={
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733284295/3_odtyvr.jpg"
            }
            category={"TDTN"}
            productName={"Dây Thẻ TDTN"}
            price={99000}
            // stockStatus={"out-stock"}
            id={3}
          />
           <MerchandiseItem
            image={
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733284295/4_xar3nt.jpg"
            }
            category={"TDTN"}
            productName={"Túi tote TDTN"}
            price={99000}
            // stockStatus={"out-stock"}
            id={4}
          />
           <MerchandiseItem
            image={
              "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733284295/z6095929752842_19a8cd219f714d974007bb5ed8691029_meszcf.jpg"
            }
            category={"TDTN"}
            productName={"Khăn Bandana TDTN"}
            price={99000}
            // stockStatus={"out-stock"}
            id={5}
          />
        </div>
      </div>
    </Container>
  );
};

export default Schedule;
