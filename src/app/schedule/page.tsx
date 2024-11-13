"use client";
import Container from "@/themes/Container";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SchedulePage = () => {
  const [gridType, setGridType] = useState(false);

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
            <strong className="month">10</strong>
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
            <div className="days grid grid-cols-7">
              <div className="px-12 flex items-center justify-center uppercase font-semibold py-2 border-r-[#7096D1] border-r-[1px]">
                Thứ hai
              </div>
              <div className="px-12 flex items-center justify-center uppercase font-semibold py-2 border-r-[#7096D1] border-r-[1px]">
                Thứ ba
              </div>
              <div className="px-12 flex items-center justify-center uppercase font-semibold py-2 border-r-[#7096D1] border-r-[1px]">
                Thứ tư
              </div>
              <div className="px-12 flex items-center justify-center uppercase font-semibold py-2 border-r-[#7096D1] border-r-[1px]">
                Thứ năm
              </div>
              <div className="px-12 flex items-center justify-center uppercase font-semibold py-2 border-r-[#7096D1] border-r-[1px]">
                Thứ sáu
              </div>
              <div className="px-12 flex items-center justify-center uppercase font-semibold py-2 border-r-[#7096D1] border-r-[1px]">
                Thứ bảy
              </div>
              <div className="px-12 flex items-center justify-center uppercase font-semibold py-2">
                Chủ nhật
              </div>
            </div>
            <div className="calendar grid grid-cols-7 mt-5">
              <div className="px-12 py-2 border-r-[#7096D1] border-b-[1px] border-b-[#7096d1] border-r-[1px]"></div>
              <div className="px-12 py-2 border-r-[#7096D1] border-b-[1px] border-b-[#7096d1] border-r-[1px]"></div>
              <div className="px-12 py-2 border-r-[#7096D1] border-b-[1px] border-b-[#7096d1] border-r-[1px]">
                <p className="day">1</p>
                <div className="flex">
                  <p>- Text text</p>
                  <p>- Text text</p>
                </div>
              </div>
              <div className="px-12 py-2 border-r-[#7096D1] border-b-[1px] border-b-[#7096d1] border-r-[1px]">
                <p className="day">2</p>
                <div className="flex">
                  <p>- Text text</p>
                  <p>- Text text</p>
                </div>
              </div>
              <div className="px-12 py-2 border-r-[#7096D1] border-b-[1px] border-b-[#7096d1] border-r-[1px]">
                <p className="day">3</p>
                <div className="flex">
                  <p>- Text text</p>
                  <p>- Text text</p>
                </div>
              </div>
              <div className="px-12 py-2 border-r-[#7096D1] border-b-[1px] border-b-[#7096d1] border-r-[1px]">
                <p className="day">4</p>
                <div className="flex">
                  <p>- Text text</p>
                  <p>- Text text</p>
                </div>
              </div>
              <div className="px-12 py-2 border-r-[#7096D1] border-b-[1px] border-b-[#7096d1]">
                <p className="day">5</p>
                <div className="flex">
                  <p>- Text text</p>
                  <p>- Text text</p>
                </div>
              </div>

              <div className="px-12 py-2 border-r-[#7096D1] border-b-[#7096d1] border-b-[1px] border-r-[1px]">
                <p className="day">6</p>
                <div className="flex">
                  <p>- Text text</p>
                  <p>- Text text</p>
                </div>
              </div>
              <div className="px-12 py-2 border-r-[#7096D1] border-b-[#7096d1] border-b-[1px] border-r-[1px]">
                <p className="day">7</p>
                <div className="flex">
                  <p>- Text text</p>
                  <p>- Text text</p>
                </div>
              </div>
              <div className="px-12 py-2 border-r-[#7096D1] border-b-[#7096d1] border-b-[1px] border-r-[1px]">
                <p className="day">8</p>
                <div className="flex">
                  <p>- Text text</p>
                  <p>- Text text</p>
                </div>
              </div>
              <div className="px-12 py-2 border-r-[#7096D1] border-b-[#7096d1] border-b-[1px] border-r-[1px]">
                <p className="day">9</p>
                <div className="flex">
                  <p>- Text text</p>
                  <p>- Text text</p>
                </div>
              </div>
              <div className="px-12 py-2 border-r-[#7096D1] border-b-[#7096d1] border-b-[1px] border-r-[1px]">
                <p className="day">10</p>
                <div className="flex">
                  <p>- Text text</p>
                  <p>- Text text</p>
                </div>
              </div>
              <div className="px-12 py-2 border-r-[#7096D1] border-b-[#7096d1] border-b-[1px] border-r-[1px]">
                <p className="day">11</p>
                <div className="flex">
                  <p>- Text text</p>
                  <p>- Text text</p>
                </div>
              </div>
              <div className="px-12 py-2 border-r-[#7096D1] border-b-[#7096d1] border-b-[1px]">
                <p className="day">12</p>
                <div className="flex">
                  <p>- Text text</p>
                  <p>- Text text</p>
                </div>
              </div>

              <div className="px-12 py-2 border-r-[#7096D1] border-b-[#7096d1] border-b-[1px] border-r-[1px]">
                <p className="day">13</p>
                <div className="flex">
                  <p>- Text text</p>
                  <p>- Text text</p>
                </div>
              </div>
              <div className="px-12 py-2 border-r-[#7096D1] border-b-[#7096d1] border-b-[1px] border-r-[1px]">
                <p className="day">14</p>
                <div className="flex">
                  <p>- Text text</p>
                  <p>- Text text</p>
                </div>
              </div>
              <div className="px-12 py-2 border-r-[#7096D1] border-b-[#7096d1] border-b-[1px] border-r-[1px]">
                <p className="day">15</p>
                <div className="flex">
                  <p>- Text text</p>
                  <p>- Text text</p>
                </div>
              </div>
              <div className="px-12 py-2 border-r-[#7096D1] border-b-[#7096d1] border-b-[1px] border-r-[1px]">
                <p className="day">16</p>
                <div className="flex">
                  <p>- Text text</p>
                  <p>- Text text</p>
                </div>
              </div>
              <div className="px-12 py-2 border-r-[#7096D1] border-b-[#7096d1] border-b-[1px] border-r-[1px]">
                <p className="day">17</p>
                <div className="flex">
                  <p>- Text text</p>
                  <p>- Text text</p>
                </div>
              </div>
              <div className="px-12 py-2 border-r-[#7096D1] border-b-[#7096d1] border-b-[1px] border-r-[1px]">
                <p className="day">18</p>
                <div className="flex">
                  <p>- Text text</p>
                  <p>- Text text</p>
                </div>
              </div>
              <div className="px-12 py-2 border-r-[#7096D1] border-b-[#7096d1] border-b-[1px]">
                <p className="day">19</p>
                <div className="flex">
                  <p>- Text text</p>
                  <p>- Text text</p>
                </div>
              </div>

              <div className="px-12 py-2 border-r-[#7096D1] border-b-[#7096d1] border-b-[1px] border-r-[1px]">
                <p className="day">20</p>
                <div className="flex">
                  <p>- Text text</p>
                  <p>- Text text</p>
                </div>
              </div>
              <div className="px-12 py-2 border-r-[#7096D1] border-b-[#7096d1] border-b-[1px] border-r-[1px]">
                <p className="day">21</p>
                <div className="flex">
                  <p>- Text text</p>
                  <p>- Text text</p>
                </div>
              </div>
              <div className="px-12 py-2 border-r-[#7096D1] border-b-[#7096d1] border-b-[1px] border-r-[1px]">
                <p className="day">22</p>
                <div className="flex">
                  <p>- Text text</p>
                  <p>- Text text</p>
                </div>
              </div>
              <div className="px-12 py-2 border-r-[#7096D1] border-b-[#7096d1] border-b-[1px] border-r-[1px]">
                <p className="day">23</p>
                <div className="flex">
                  <p>- Text text</p>
                  <p>- Text text</p>
                </div>
              </div>
              <div className="px-12 py-2 border-r-[#7096D1] border-b-[#7096d1] border-b-[1px] border-r-[1px]">
                <p className="day">24</p>
                <div className="flex">
                  <p>- Text text</p>
                  <p>- Text text</p>
                </div>
              </div>
              <div className="px-12 py-2 border-r-[#7096D1] border-b-[#7096d1] border-b-[1px] border-r-[1px]">
                <p className="day">25</p>
                <div className="flex">
                  <p>- Text text</p>
                  <p>- Text text</p>
                </div>
              </div>
              <div className="px-12 py-2 border-r-[#7096D1] border-b-[#7096d1] border-b-[1px]">
                <p className="day">26</p>
                <div className="flex">
                  <p>- Text text</p>
                  <p>- Text text</p>
                </div>
              </div>

              <div className="px-12 py-2 border-r-[#7096D1] border-r-[1px]">
                <p className="day">27</p>
                <div className="flex">
                  <p>- Text text</p>
                  <p>- Text text</p>
                </div>
              </div>
              <div className="px-12 py-2 border-r-[#7096D1] border-r-[1px]">
                <p className="day">28</p>
                <div className="flex">
                  <p>- Text text</p>
                  <p>- Text text</p>
                </div>
              </div>
              <div className="px-12 py-2 border-r-[#7096D1] border-r-[1px]">
                <p className="day">29</p>
                <div className="flex">
                  <p>- Text text</p>
                  <p>- Text text</p>
                </div>
              </div>
              <div className="px-12 py-2 border-r-[#7096D1] border-r-[1px]">
                <p className="day">30</p>
                <div className="flex">
                  <p>- Text text</p>
                  <p>- Text text</p>
                </div>
              </div>
              <div className="px-12 py-2 border-r-[#7096D1] border-r-[1px]">
                <p className="day">31</p>
                <div className="flex">
                  <p>- Text text</p>
                  <p>- Text text</p>
                </div>
              </div>
              <div className="px-12 py-2 border-r-[#7096D1] border-r-[1px]"></div>
              <div className="px-12 py-2 border-r-[#7096D1]"></div>
            </div>
          </div>
        )}

        {gridType && (
          <div>
            <div className="event-card">
              <div className="event-date">10.01</div>
              <button className="event-type">Loại sự kiện</button>
              <div className="event-details">
                <Link href={"/schedule/1"} className="event-name">
                  Tên show Tên show Tên show Tên show
                </Link>
                <div className="event-address">Địa chỉ địa chỉ địa chỉ</div>
              </div>
              <Link href={"/schedule/1"} className="event-info">
                Xem thông tin
              </Link>
            </div>
            <div className="event-card">
              <div className="event-date">10.01</div>
              <button className="event-type">Loại sự kiện</button>
              <div className="event-details">
                <Link href={"/schedule/1"} className="event-name">
                  Tên show Tên show Tên show Tên show
                </Link>
                <div className="event-address">Địa chỉ địa chỉ địa chỉ</div>
              </div>
              <Link href={"/schedule/1"} className="event-info">
                Xem thông tin
              </Link>
            </div>
            <div className="event-card">
              <div className="event-date">10.01</div>
              <button className="event-type">Loại sự kiện</button>
              <div className="event-details">
                <Link href={"schedule/1"} className="event-name">
                  Tên show Tên show Tên show Tên show
                </Link>
                <div className="event-address">Địa chỉ địa chỉ địa chỉ</div>
              </div>
              <Link href={"/schedule/1"} className="event-info">
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
