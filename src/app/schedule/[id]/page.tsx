import Container from "@/themes/Container";
import Image from "next/image";

const ScheduleDetailPage = () => {
  return (
    <Container id="schedule-detail">
      <header className="flex gap-10">
        <div className="info">
          <h1 className="main-title">Minishow | Từ Đây Từ Nay | Hà Nội</h1>
          <div className="category">Loại sự kiện</div>
          <div className="flex gap-4 mt-3">
            <Image
              src={"/icons/calendar.png"}
              width={24}
              height={24}
              alt="placeholder"
            />
            <p>21:00 25/11/2024</p>
          </div>
          <div className="flex gap-4 mt-3">
            <Image
              src={"/icons/address.png"}
              width={20}
              height={20}
              alt="placeholder"
            />
            <div className="flex flex-col">
              <p>SOL8</p>
              <p>8 P. NGUYỄN CÔNG HOAN, GIẢNG VÕ, BA ĐÌNH, HÀ NỘI</p>
            </div>
          </div>
          <button className="text-white bg-[#081F5C] px-6 py-2 h-11 rounded-xl mt-3 w-56">
            Đặt vé
          </button>
        </div>
        <div className="image">
          <Image
            src={"/schedule-detail.png"}
            width={717}
            height={300}
            alt="placeholder"
          />
        </div>
      </header>

      <div className="flex gap-10 my-12">
        <div className="content basis-2/3">
          <h1 className="main-title">Giới thiệu</h1>
          <p className="mb-5">
            This is description text. This is description text. This is
            description text. This is description text. This is description
            text. This is description text. This is description text. This is
            description text. This is description text. This is description
            text. This is description text. This is description text. This is
            description text. This is description text. This is description
            text. This is description text. This is description text.{" "}
          </p>
          <Image
            src={"/placeholder.png"}
            width={1000}
            height={1000}
            alt="placeholder"
          />
        </div>

        <div className="ticket-info basis-1/3">
          <h1 className="main-title">Thông tin vé</h1>
          <div className="flex pb-5 border-b-[1px] border-b-[#BAD6EB] items-center justify-between">
            <p className="font-semibold">Vé loại A</p>
            <p className="font-semibold">000.000đ</p>
          </div>
          <div className="flex py-5 border-b-[1px] border-b-[#BAD6EB] items-center justify-between">
            <p className="font-semibold">Vé loại A</p>
            <p className="font-semibold">000.000đ</p>
          </div>
          <div className="flex py-5 border-b-[1px] border-b-[#BAD6EB] items-center justify-between">
            <p className="font-semibold">Vé loại A</p>
            <p className="font-semibold">000.000đ</p>
          </div>
          <div className="text-center mt-3">
            <button className="text-white bg-[#081F5C] px-6 py-2 h-11 rounded-xl mt-3 w-56">
              Đặt vé
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ScheduleDetailPage;
