import Container from "@/themes/Container";
import Image from "next/image";

const ScheduleDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params || {};

  const title =
    +id === 1
      ? "SHOW | Ừ em xin lỗi kỳ vọng sai lầm | HCM"
      : +id === 2
      ? "MINISHOW | Mây Lang Thang | Lâm Đồng"
      : `MINISHOW | "Từ Đây... Từ Nay..." Slay Hà Nội (đêm 1) | HCM`;
  const type = +id === 1 ? "SHOW" : +id === 2 ? "MINISHOW" : "MINISHOW";
  const date =
    +id === 1
      ? "11/21/2024 20:00:00"
      : +id === 2
      ? "11/23/2024 17:00:00"
      : "11/25/2024 21:00:00";
  const thumb =
    +id === 1
      ? "https://res.cloudinary.com/dahnkbdxi/image/upload/v1731846328/465799545_531423309759651_2979884570748036665_n.jpg_gxwiop.jpg"
      : +id === 2
      ? "https://res.cloudinary.com/dahnkbdxi/image/upload/v1731846426/DA-LAT-THE-NEST-2311-Tang-Phuc-2_exvqt7.jpg"
      : "/schedule-detail.png";
  const address =
    +id === 1
      ? "Lầu 3 Nhà hát Bến Thành - 6 Mạc Đĩnh Chi, Q.1, Sài Gòn"
      : +id === 2
      ? `Mây in the Nest,
X9JW+46R, Măng Lin, Phường 7, Đà Lạt, Lâm Đồng`
      : `SOL8, 
Số 8 Phố Nguyễn Công Hoan, 
P. Giảng Võ, Ba Đình, Hà Nội`;
  const desc =
    +id === 1
      ? `🪩 21/11 🪩 ĐÊM NHẠC TĂNG PHÚC - LƯƠNG BÍCH HỮU ✨
🎶 ‘Anh trai’ Tăng Phúc trở lại Bến Thành với rất nhiều sự bất ngờ dành riêng cho bạn. Không chỉ sở hữu ‘gia tài’ những bản ballad cực tình, chàng ‘hải ly’ còn rất duyên dáng, hài hước trên sân khấu. 
💥 Lương Bích Hữu khiến khán giả bất ngờ lẫn thích thú với diện mạo mới trẻ trung và đầy cá tính. Mỗi lần cất giọng, nữ ca sĩ đều mang đến cảm xúc bồi hồi về những hồi ức thanh xuân tươi đẹp 💖
Bạn mong chờ màn song ca nào? 😉`
      : +id === 2
      ? `Hãy cùng đắm chìm trong những bản tình ca lãng mạn da diết với giọng hát của Tăng Phúc cùng khách mời Phương Anh Idol giữa xứ sở Đà Lạt mộng mơ.`
      : `Đêm diễn thứ 2 tại sân khấu Sol8. Đến để thưởng thức sự kết hợp bùng nổ giữa Tăng Phúc với các anh tài: Neko Lê, BB Trần, Duy Khánh`;
  return (
    <Container id="schedule-detail" style="mt-[5%] esm:mt-5">
      <header className="flex gap-10 esm:gap-5 esm:flex-wrap">
        <div className="info basis-2/4 esm:basis-full">
          <h1 className="main-title">{title}</h1>
          <div className="category">{type}</div>
          <div className="flex gap-4 mt-3">
            <Image
              src={"/icons/calendar.png"}
              width={24}
              height={24}
              alt="placeholder"
            />
            <p>{date}</p>
          </div>
          <div className="flex gap-4 mt-3">
            <Image
              src={"/icons/address.png"}
              width={20}
              height={20}
              alt="placeholder"
            />
            <div className="flex flex-col">
              <p>{address}</p>
            </div>
          </div>
          <button className="text-white bg-primary px-6 py-2 h-11 rounded-xl mt-3 w-56">
            Đặt vé
          </button>
        </div>
        <div className="image basis-2/4 esm:basis-full">
          <Image src={thumb} width={717} height={300} alt="placeholder" />
        </div>
      </header>

      <div className="flex gap-10 my-12 esm:my-7 esm:flex-wrap">
        <div className="content basis-2/3 esm:basis-full">
          <h1 className="main-title">Giới thiệu</h1>
          <p className="mb-5">{desc}</p>
          <Image
            src={"/placeholder.png"}
            width={1000}
            height={1000}
            alt="placeholder"
          />
        </div>

        <div className="ticket-info basis-1/3 esm:basis-full">
          <h1 className="main-title">Thông tin vé</h1>
          <div className="flex pb-5 border-b-[1px] border-b-secondary items-center justify-between">
            <p className="font-semibold">Vé loại A</p>
            <p className="font-semibold">000.000đ</p>
          </div>
          <div className="flex py-5 border-b-[1px] border-b-secondary items-center justify-between">
            <p className="font-semibold">Vé loại A</p>
            <p className="font-semibold">000.000đ</p>
          </div>
          <div className="flex py-5 border-b-[1px] border-b-secondary items-center justify-between">
            <p className="font-semibold">Vé loại A</p>
            <p className="font-semibold">000.000đ</p>
          </div>
          <div className="text-center mt-3">
            <button className="text-white bg-primary px-6 py-2 h-11 rounded-xl mt-3 w-56">
              Đặt vé
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ScheduleDetailPage;
