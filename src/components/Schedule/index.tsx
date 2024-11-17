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
            <p className="schedule-list--time">21/11</p>
            <div className="schedule-list--info max-w-[600px]">
              <h4>
                Lầu 3 Nhà hát Bến Thành - 6 Mạc Đĩnh Chi, Q.1, T.P Hồ Chí Minh
              </h4>
              <h3 className="sub-title--bold">
                ĐÊM NHẠC TĂNG PHÚC - LƯƠNG BÍCH HỮU ✨ <br />
                🎶 ‘Anh trai’ Tăng Phúc trở lại Bến Thành với rất nhiều sự bất
                ngờ dành riêng cho bạn. Không chỉ sở hữu ‘gia tài’ những bản
                ballad cực tình, chàng ‘hải ly’ còn rất duyên dáng, hài hước
                trên sân khấu.
              </h3>
            </div>
          </div>
          <div className="schedule-list--item flex gap-10 justify-center">
            <p className="schedule-list--time">23/11</p>
            <div className="schedule-list--info max-w-[600px]">
              <h4>
                Mây in the Nest, X9JW+46R, Măng Lin, Phường 7, Đà Lạt, Lâm Đồng
              </h4>
              <h3 className="sub-title--bold">
                Hãy cùng đắm chìm trong những bản tình ca lãng mạn da diết với
                giọng hát của Tăng Phúc cùng khách mời Phương Anh Idol giữa xứ
                sở Đà Lạt mộng mơ.
              </h3>
            </div>
          </div>
          <div className="schedule-list--item flex gap-10 justify-center">
            <p className="schedule-list--time">24/11</p>
            <div className="schedule-list--info max-w-[600px]">
              <h4>
                SOL8, Số 8 Phố Nguyễn Công Hoan, P. Giảng Võ, Ba Đình, Hà Nội
              </h4>
              <h3 className="sub-title--bold">
                Show diễn quay trở lại Hà Nội với 1 diện mạo mới và những người
                bạn mới. Màn kết hợp của Tăng Phúc cùng dàn khách mời: ST, BB
                Trần, Duy Khánh hứa hẹn sẽ làm hài lòng khán giả.
              </h3>
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
        <div className="schedule-promotions__list grid grid-cols-3 gap-4">
          <MerchandiseItem
            image={
              "https://res.cloudinary.com/dahnkbdxi/image/upload/v1731831577/463620900_946517870830211_4163009015280798425_n.jpg_yabvmy.jpg"
            }
            category={"Túi"}
            productName={"Túi tote"}
            price={225000}
            stockStatus={"out-stock"}
            id={1}
          />
          <MerchandiseItem
            category={"Áo"}
            productName={"Áo 9M"}
            price={349000}
            id={2}
          />
        </div>
      </div>
    </Container>
  );
};

export default Schedule;
