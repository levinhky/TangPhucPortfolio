import Container from "@/themes/Container";
import Image from "next/image";

const AboutPage = () => {
  return (
    <Container style="my-12 esm:my-0 esm:mt-10">
      <Image
        src={"https://res.cloudinary.com/dahnkbdxi/image/upload/v1731914850/FullSizeRender_5_dwwwt4.jpg"}
        width={1200}
        height={700}
        className="w-full"
        alt="hero-background"
      />

      <div className="flex esm:flex-wrap gap-9 items-center my-[75px]">
        <Image
          src={"/pages/about/tudaytunay.png"}
          width={467}
          height={700}
          className="w-full"
          alt="image"
        />
        <div>
          <p className="font-light">
          Là một ca sĩ trẻ nổi bật trong làng nhạc Việt Nam, 
          Tăng Phúc được biết đến qua các ca khúc ballad nhẹ nhàng và sâu lắng. 
          Anh nổi lên với giọng hát ấm áp, giàu cảm xúc và phong cách âm nhạc gần gũi, 
          phù hợp với khán giả yêu thích các bản nhạc trữ tình. Bên cạnh khả năng ca hát, 
          Tăng Phúc còn gây ấn tượng với những màn trình diễn live mộc mạc, thu hút và truyền cảm, 
          góp phần giúp anh xây dựng một lượng fan hâm mộ trung thành.
          </p>
          <table className="my-5">
            <tr className="block mb-3">
              <td>
                <strong>Họ tên</strong>
              </td>
              <td>
                <p className="ml-2 font-light">Tăng Vũ Minh Phúc</p>
              </td>
            </tr>
            <tr className="block mb-3">
              <td>
                <strong>Sinh nhật</strong>
              </td>
              <td>
                <p className="ml-2 font-light">22/05/1990</p>
              </td>
            </tr>
            <tr className="block mb-3">
              <td>
                <strong>Lĩnh vực hoạt động</strong>
              </td>
              <td>
                <p className="ml-2 font-light">Ca sĩ</p>
              </td>
            </tr>
            <tr className="block mb-3">
              <td>
                <strong>Số năm hoạt động</strong>
              </td>
              <td>
                <p className="ml-2 font-light">07 năm</p>
              </td>
            </tr>
          </table>
          <div
            className="px-6 py-10 rounded-lg shadow-lg mr-14"
            style={{
              background:
                "linear-gradient(117.54deg, rgba(255, 255, 255, 0.8) 14.14%, rgba(255, 255, 255, 0.05) 94.3%)",
            }}
          >
            <p className="font-light">
              <strong className="font-bold">[Quote/Slogan]</strong>. Cố gắng vì nhau và vui vẻ mỗi ngày nha !
            </p>
          </div>
        </div>
      </div>

      <ul className="timeline timeline-centered">
      <li className="timeline-item">
          <div className="timeline-info">
            <Image
              src={
                "https://res.cloudinary.com/dwmpmry2n/image/upload/v1731956171/dcan_cup2v1.png"
              }
              width={300}
              height={300}
              alt="placeholder"
            />
          </div>
          <div className="timeline-marker esm:hidden"></div>
          <div className="timeline-content">
            <h3 className="timeline-title sub-title--bold !text-[#000A26]">
              2017
            </h3>
            <h3 className="timeline-title sub-title--bold !text-[#000A26]">
              Ca khúc: Đừng Chờ Anh Nữa
            </h3>
            <p className="sub-title--small !text-[#000A26]">
              Ca khúc Debut, chính thức tham gia hoạt động nghệ thuật, trở thành ca sĩ chuyên nghiệp.
            </p>
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-info !flex justify-end">
            <Image
              src={
                "https://res.cloudinary.com/dahnkbdxi/image/upload/v1731829160/485e62dfdc68f22a44fdd320cd8f4364-Copy_eon1by.jpg"
              }
              width={300}
              height={300}
              alt="placeholder"
            />
          </div>
          <div className="timeline-marker esm:hidden"></div>
          <div className="timeline-content">
            <h3 className="timeline-title sub-title--bold !text-[#000A26]">
              2019
            </h3>
            <h3 className="timeline-title sub-title--bold !text-[#000A26]">
              Quán quân Ẩn Số Hoàn Hảo mùa 1
            </h3>
            <p className="sub-title--small !text-[#000A26]">
              Năm 2019, Tăng Phúc tham gia chương trình Ẩn Số Hoàn Hảo (mùa 1)
              kết hợp với ca sĩ Hà Nhi. Trong đêm chung kết, cặp đôi đã có màn
              trình diễn xuât sắc gây ấn tượng với ban giám khảo để giành được
              giải Quán quân của chương trình.
            </p>
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-info !flex justify-end">
            <Image
              src={
                "https://res.cloudinary.com/dwmpmry2n/image/upload/v1731956801/clkcn_bkvz26.png"
              }
              width={300}
              height={300}
              alt="placeholder"
            />
          </div>
          <div className="timeline-marker esm:hidden"></div>
          <div className="timeline-content">
            <h3 className="timeline-title sub-title--bold !text-[#000A26]">
              2020
            </h3>
            <h3 className="timeline-title sub-title--bold !text-[#000A26]">
              Ca khúc: Chỉ là không cùng nhau
            </h3>
            <p className="sub-title--small !text-[#000A26]">
            Ca khúc: Chỉ là không cùng nhau hát cùng Trương Thảo Nhi (Bát hát chuyển thể lời Việt từ ca khúc nhạc Hoa “Thời không sai lệch”)
            Bùng nổ với bản hit hơn 100 triệu view, và đạt thành tích “khủng” ở mảng nhạc số: top 1 Zing Chart sau 48 giờ phát hành,
            video live performance đạt top 1 YouTube trending, 30 triệu lượt sử dụng trên nền tảng TikTok.
            </p>
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-info !flex justify-end">
            <Image
              src={
                "https://res.cloudinary.com/dwmpmry2n/image/upload/v1731956965/kvsl_luzsnp.png"
              }
              width={300}
              height={300}
              alt="placeholder"
            />
          </div>
          <div className="timeline-marker esm:hidden"></div>
          <div className="timeline-content">
            <h3 className="timeline-title sub-title--bold !text-[#000A26]">
              2022
            </h3>
            <h3 className="timeline-title sub-title--bold !text-[#000A26]">
            Ca khúc: Kỳ vọng sai lầm
            </h3>
            <p className="sub-title--small !text-[#000A26]">
            Hit thứ 3 trong sự nghiệp cùng ca sĩ Nguyễn Đình Vũ, đạt top 1 trên iTunes chỉ sau 2 giờ phát hành
            </p>
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-info">
            <Image
              src={
                "https://res.cloudinary.com/dahnkbdxi/image/upload/v1731828968/437713403_122139125180199321_5545351752770108522_n.jpg_bzypju.jpg"
              }
              width={300}
              height={300}
              alt="placeholder"
            />
          </div>
          <div className="timeline-marker esm:hidden"></div>
          <div className="timeline-content">
            <h3 className="timeline-title sub-title--bold !text-[#000A26]">
              2024
            </h3>
            <h3 className="timeline-title sub-title--bold !text-[#000A26]">
              Giải thưởng Anh tài truyền cảm hứng - Anh Trai Vượt Ngàn Chông Gai
              2024
            </h3>
            <p className="sub-title--small !text-[#000A26]">
              Năm 2024, Tăng Phúc tham gia chương trình Anh Trai Vượt Ngàn Chông
              Gai 2024 (mùa 1) với tư cách là một trong 33 anh tài. Tại đây, anh
              đã hể hiện nhiều kỹ năng như rap, nhảy tango, đánh đàn, múa chén,
              v.v... Kết thúc chương trình, anh đạt giải thưởng Anh tài truyền
              cảm hứng do khán giả bình chọn.
            </p>
          </div>
        </li>
      </ul>
    </Container>
  );
};

export default AboutPage;
