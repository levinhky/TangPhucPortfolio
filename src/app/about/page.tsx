"use client";
import '../globals.css';
import Image from "next/image";
import React, { useEffect, useState } from "react";

import Container from "@/themes/Container";
import {fetchCSVData} from "@/utils/constants";

const AboutPage = () => {
  // State to store fetched data
  const [gameShows, setGameShows] = useState<any[]>([]);
  const [isClient, setIsClient] = useState(false);
  // const [gameShows, setGameShows] = useState(typeof window !== 'undefined' ? 'Peter' : 'Rick');

  
  // Fetch data when the component loads
  useEffect(() => {
    setIsClient(true); // Marks the component as rendered on the client
    const loadGameShows = async () => {
      try {
        const data = await fetchCSVData("/data/gameShow.csv");
        setGameShows(data); // Set fetched data
        // console.log("Fetched Data:", data);
      } catch (error) {
        console.error("Failed to fetch game shows:", error);
      }
    };
    loadGameShows();
  }, []);

  // Avoid rendering on the server side to fix hydration mismatch
  if (!isClient) return null;

  return (
    <Container style="my-12 esm:my-0 esm:mt-0">
      <div className="flex esm:flex-wrap esm:justify-center items-center my-[75px] esm:mt-5">
        <div className="basis-2/4 esm:basis-full flex items-center justify-center">
          <Image
            src={"/pages/about/tudaytunay.png"}
            width={440}
            height={588}
            className="rounded-[20px] aspect-438/588"
            alt="image"
          />
        </div>
        <div className="basis-2/4 esm:basis-full">
          <h6 className="sub-title--semi text-2xl mb-3">
            Giới thiệu ngắn về Tăng Phúc
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
                <strong className="ml-10 esm:ml-0 font-medium text-textPrimary">
                  Tăng Vũ Minh Phúc
                </strong>
              </td>
            </tr>
            <tr>
              <td className="text-textSecondaryTwo">Sinh Nhật</td>
              <td>
                <strong className="ml-10 esm:ml-0 font-medium text-textPrimary">
                  22/05/1990
                </strong>
              </td>
            </tr>
            <tr>
              <td className="text-textSecondaryTwo">Lĩnh vực hoạt động</td>
              <td>
                <strong className="ml-10 esm:ml-0 font-medium text-textPrimary">
                  Ca Sĩ
                </strong>
              </td>
            </tr>
            <tr>
              <td className="text-textSecondaryTwo">Số năm hoạt động</td>
              <td>
                <strong className="ml-10 esm:ml-0 font-medium text-textPrimary">
                  7 năm
                </strong>
              </td>
            </tr>
          </table>
          <div className="px-6 py-10 rounded-lg shadow-lg mr-14 esm:mr-0 relative bg-custom-gradient">
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
                "https://res.cloudinary.com/dwmpmry2n/image/upload/v1734852737/2017_c9yhga.png"
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
                "https://res.cloudinary.com/dwmpmry2n/image/upload/v1734852737/Screenshot_2024-12-22_at_8.27.48_AM_xvbhik.png"
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
                "https://res.cloudinary.com/dwmpmry2n/image/upload/v1734852737/Screenshot_2024-12-22_at_8.28.21_AM_nsqy8b.png"
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
                "https://res.cloudinary.com/dwmpmry2n/image/upload/v1734852737/Screenshot_2024-12-22_at_8.28.42_AM_pgwyxo.png"
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
                "https://res.cloudinary.com/dwmpmry2n/image/upload/v1734852737/Screenshot_2024-12-22_at_8.29.47_AM_wks9jb.png"
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

      {/* <div className="py-10 px-5 bg-[#b9dee6] flex justify-center"> */}
      <div className="px-6 py-10 rounded-lg shadow-lg mr-14 esm:mr-0 relative bg-custom-gradient flex justify-center">
      {/* <div className="py-10 rounded-lg px-5 flex justify-center"> */}
      <div className="w-[80%]"> {/* Shrinks width to 70% */}
        <h2 className="text-center text-xl text-textSecondaryTwo mb-2">Tìm hiểu thêm về Tăng Phúc tại đây!</h2>
        <h1 className="text-center text-4xl text-textSecondaryTwo font-semibold mb-10"> Hải Ly </h1>

        {/* Scrollable Container */}
        {/* <div className="bg-white rounded-lg shadow-lg rounded-md h-[500px] overflow-y-auto"> */}
        <div className="rounded-lg shadow-lg rounded-md h-[500px] overflow-y-auto">

          {gameShows.map((show, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b last:border-none p-6"
            >
              {/* Left Section - Date, Role, Title, Description */}
              <div className="flex items-center space-x-6 w-[75%]"> {/* Adjusted width */}
                {/* Date Section */}
                <div className="w-[15%] text-sm font-light text-textSecondaryTwo whitespace-nowrap">
                  {show.date}
                </div>

                {/* Role Section */}
                <div className="w-[15%] text-sm font-medium text-textSecondaryTwo whitespace-nowrap">
                  {show.role}
                </div>

                {/* Title and Description - Displayed Vertically */}
                <div className="w-[70%] flex flex-col">
                  <h3 className="text-textSecondaryTwo font-bold mb-1">{show.title}</h3>
                  <p className="text-textSecondaryTwo">{show.descipt}</p>
                </div>
              </div>

              {/* Right Section - Button */}
              <div className="ml-3"> {/* Reduced margin-left for button spacing */}
                <a
                  href={show.showLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  // className="px-6 py-2 bg-black text-white uppercase text-sm font-semibold rounded-md hover:bg-gray-800 whitespace-nowrap"
                  className="px-6 py-2 bg-blue-900 text-white uppercase text-sm font-semibold rounded-md hover:bg-blue-800 whitespace-nowrap"
                >
                  Xem Ngay
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


    </Container>

    
  );
};

export default AboutPage;
