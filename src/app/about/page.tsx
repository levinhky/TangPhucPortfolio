import Container from "@/themes/Container";
import Image from "next/image";

const AboutPage = () => {
  return (
    <Container style="my-12 esm:my-0 esm:mt-10">
      <div className="flex esm:flex-wrap items-center my-[75px]">
        <div className="basis-2/4 flex items-center justify-center">
          <Image
            src={"/pages/about/tudaytunay.png"}
            width={440}
            height={588}
            className="rounded-[20px]"
            alt="image"
          />
        </div>
        <div className="basis-2/4">
          <h6 className="sub-title--semi text-2xl mb-3">
            Giới thiệu ngắn về anh
          </h6>
          <p className="font-light text-textSecondaryTwo">
            Là một ca sĩ trẻ nổi bật trong làng nhạc Việt Nam, Tăng Phúc được
            biết đến qua các ca khúc ballad nhẹ nhàng và sâu lắng. Anh nổi lên
            với giọng hát ấm áp, giàu cảm xúc và phong cách âm nhạc gần gũi, phù
            hợp với khán giả yêu thích các bản nhạc trữ tình. Bên cạnh khả năng
            ca hát, Tăng Phúc còn gây ấn tượng với những màn trình diễn live mộc
            mạc, thu hút và truyền cảm, góp phần giúp anh xây dựng một lượng fan
            hâm mộ trung thành.
          </p>
          <table className="my-5 border-separate border-spacing-4">
            <tr>
              <td className="text-textSecondaryTwo">Họ Tên</td>
              <td>
                <strong className="ml-10 font-medium text-textPrimary">
                  Tăng Vũ Minh Phúc
                </strong>
              </td>
            </tr>
            <tr>
              <td className="text-textSecondaryTwo">Sinh Nhật</td>
              <td>
                <strong className="ml-10 font-medium text-textPrimary">
                  22/05/1990
                </strong>
              </td>
            </tr>
            <tr>
              <td className="text-textSecondaryTwo">Lĩnh vực hoạt động</td>
              <td>
                <strong className="ml-10 font-medium text-textPrimary">
                  Ca Sĩ
                </strong>
              </td>
            </tr>
            <tr>
              <td className="text-textSecondaryTwo">Số năm hoạt động</td>
              <td>
                <strong className="ml-10 font-medium text-textPrimary">
                  7 năm
                </strong>
              </td>
            </tr>
          </table>
          <div
            className="px-6 py-10 rounded-lg shadow-lg mr-14 relative"
            style={{
              background:
                "linear-gradient(162.68deg, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0.2) 100%)",
            }}
          >
            <strong className="font-semibold text-textPrimary">
              [Quote/Slogan]
            </strong>{" "}
            <br />
            <p className="font-normal text-textSecondaryTwo">
              Cố gắng vì nhau và vui vẻ mỗi ngày nha !
            </p>
            <Image
              src={"/icons/quote.png"}
              width={30}
              height={30}
              className="absolute -top-2 right-[5%]"
              alt="quote-icon"
            />
          </div>
        </div>
      </div>

      <ul className="timeline timeline-centered">
        <li className="timeline-item">
          <div className="timeline-info !flex justify-end">
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
              Ca khúc Debut, chính thức tham gia hoạt động nghệ thuật, trở thành
              ca sĩ chuyên nghiệp.
            </p>
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-info">
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
              Ca khúc: Chỉ là không cùng nhau hát cùng Trương Thảo Nhi (Bát hát
              chuyển thể lời Việt từ ca khúc nhạc Hoa “Thời không sai lệch”)
              Bùng nổ với bản hit hơn 100 triệu view, và đạt thành tích “khủng”
              ở mảng nhạc số: top 1 Zing Chart sau 48 giờ phát hành, video live
              performance đạt top 1 YouTube trending, 30 triệu lượt sử dụng trên
              nền tảng TikTok.
            </p>
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-info">
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
              Hit thứ 3 trong sự nghiệp cùng ca sĩ Nguyễn Đình Vũ, đạt top 1
              trên iTunes chỉ sau 2 giờ phát hành
            </p>
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-info !flex justify-end">
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
