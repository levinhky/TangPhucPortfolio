"use client";
import Container from "@/themes/Container";
import { currentYear, daysOfWeek } from "@/utils/constants";
import { getDaysInMonth } from "@/utils/functions";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SchedulePage = () => {
  const [gridType, setGridType] = useState(false);
  const daysInMonth = getDaysInMonth(currentYear, 10, (day: number) => {
    switch (day) {
      case 15:
        return `"Từ Đây... Từ Nay..." Chapter Tapei`;
      case 17:
        return `"Từ Đây... Từ Nay..." Chapter KaoSiung`;
      case 21:
        return "Phòng Trà Bến Thành";
      case 23:
        return "Mây Lang Thang";
      case 24:
        return `"Từ Đây... Từ Nay..." Slay Hà Nội (đêm 1)`;
      case 25:
        return `"Từ Đây... Từ Nay..." Slay Hà Nội (đêm 2)`;

      default:
        return "Trống";
    }
  });
  console.log("🚀 ~ SchedulePage ~ daysInMonth:", daysInMonth);
  return (
    <Container id="schedule-page" style="my-10">
      <div className="relative">
        <Image
          src={"/schedule-banner.png"}
          width={900}
          height={400}
          alt="placeholder"
          className="mx-auto"
        />
        <h6 className="floating-text">Next</h6>
        <h6 className="floating-text-2">Chapter</h6>
      </div>

      <div id="schedule-list" className="mt-[50px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex flex-col">
              <p className="font-semibold text-[#081f5c] text-4xl">
                Lịch hoạt động
              </p>
              <p className="font-semibold text-[#081f5c] text-4xl uppercase">
                Tháng
              </p>
            </div>
            <strong className="month">11</strong>
          </div>
          <div className="flex gap-4">
            <p className="text-[#081f5c] font-semibold">Xem dạng</p>
            <div className="flex gap-2">
              <button
                onClick={() => setGridType(false)}
                style={{ background: !gridType ? "#fff" : "" }}
                className="border border-black flex items-center justify-center px-2"
              >
                <Image
                  src={"/icons/round-menu.png"}
                  width={14}
                  height={14}
                  alt="round-menu"
                />
              </button>
              <button
                onClick={() => setGridType(true)}
                style={{ background: gridType ? "#fff" : "" }}
                className="border border-black flex items-center justify-center px-2"
              >
                <Image
                  src={"/icons/grid-menu.png"}
                  width={14}
                  height={14}
                  alt="grid-menu"
                />
              </button>
            </div>
          </div>
        </div>
        {!gridType && (
          <div className="calendar-view flex flex-col justify-center">
            {
              <div className="days grid grid-cols-7">
                {daysOfWeek.map((day, index) => (
                  <div
                    key={index}
                    className={`px-12 flex items-center justify-center uppercase font-semibold py-2 border-r-[1px] border-b-[#7096D1] border-b-[1px] border-r-[#7096D1] `}
                  >
                    {day}
                  </div>
                ))}
              </div>
            }
            <div className="calendar grid grid-cols-7 mt-5">
              {daysInMonth.map((item, index) => {
                return (
                  <div
                    id="day"
                    className="px-12 py-2 border-r-[#7096D1] border-b-[1px] border-b-[#7096d1] border-r-[1px]"
                  >
                    <p className="day">{item.day}</p>
                    <div className="flex">
                      <p>{item.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {gridType && (
          <div>
            <div className="event-card">
              <div className="event-date">21.11</div>
              <button className="event-type w-[100px]">SHOW</button>
              <div className="event-details">
                <Link href={"/schedule/1"} className="event-name">
                  Phòng Trà Bến Thành
                </Link>
                <div className="event-address">
                  🌇 Lầu 3 Nhà hát Bến Thành - 6 Mạc Đĩnh Chi, Q.1, T.P Hồ Chí
                  Minh
                </div>
              </div>
              <Link href={"/schedule/1"} className="event-info">
                Xem thông tin
              </Link>
            </div>
            <div className="event-card">
              <div className="event-date">23.11</div>
              <button className="event-type w-[100px]">MINISHOW</button>
              <div className="event-details">
                <Link href={"/schedule/1"} className="event-name">
                  Mây Lang Thang
                </Link>
                <div className="event-address">
                  Mây in the Nest, X9JW+46R, Măng Lin, Phường 7, Đà Lạt, Lâm
                  Đồng
                </div>
              </div>
              <Link href={"/schedule/2"} className="event-info">
                Xem thông tin
              </Link>
            </div>
            <div className="event-card">
              <div className="event-date">24.11</div>
              <button className="event-type w-[100px]">MINISHOW</button>
              <div className="event-details">
                <Link href={"schedule/3"} className="event-name">
                  "Từ Đây... Từ Nay..." Slay Hà Nội (đêm 1)
                </Link>
                <div className="event-address">
                  SOL8, Số 8 Phố Nguyễn Công Hoan, P. Giảng Võ, Ba Đình, Hà Nội
                </div>
              </div>
              <Link href={"/schedule/3"} className="event-info">
                Xem thông tin
              </Link>
            </div>
          </div>
        )}

        <div className="nav-container">
          <a href="#" className="nav-link prev">
            Trang trước
          </a>
          <a href="#" className="nav-link next">
            Trang sau
          </a>
        </div>
      </div>
    </Container>
  );
};

export default SchedulePage;
