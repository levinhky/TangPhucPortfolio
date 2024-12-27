import exp from "constants";
import Papa from "papaparse";

/**
 * Fetch and parse CSV data from a given URL.
 * @param {string} url - The path or URL to the CSV file.
 * @returns {Promise<any[]>} - Parsed data as an array of objects.
 */
export const fetchCSVData = async (url: string): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    fetch(url) // Use the provided URL
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch CSV file: ${response.statusText}`);
        }
        return response.text();
      })
      .then((text) => {
        Papa.parse(text, {
          header: true, // Treat the first row as headers
          skipEmptyLines: true, // Ignore empty lines
          complete: (results) => resolve(results.data), // Return parsed data
          error: (err: any) => reject(err), // Handle parsing errors
        });
      })
      .catch((error) => reject(error)); // Handle network errors
  });
};

const fetchCSVData_ = async (url: string): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    fetch(url) // Use the provided URL
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch CSV file: ${response.statusText}`);
        }
        return response.text();
      })
      .then((text) => {
        Papa.parse(text, {
          header: true, // Treat the first row as headers
          skipEmptyLines: true, // Ignore empty lines
          complete: (results) => resolve(results.data), // Return parsed data
          error: (err: any) => reject(err), // Handle parsing errors
        });
      })
      .catch((error) => reject(error)); // Handle network errors
  });
};

export const EVENTS_DATA = fetchCSVData_("/data/TP_events.csv");

export const SOCIAL_LINKS = [
  {
    title: "Bạn có thể tìm Tăng Phúc ở:",
    links: [
      {
        title: "Facebook",
        icon: "/icons/facebook.png",
        link: "https://www.facebook.com/tangphucofficial/",
      },
      {
        title: "Instagram",
        icon: "/icons/instagram.png",
        link: "https://www.instagram.com/tang.phuc2205/",
      },

      {
        title: "Threads",
        icon: "/icons/threads.png",
        link: "https://www.threads.net/@tang.phuc2205",
      },
    ],
  },
  {
    title: "Nghe nhạc của Tăng Phúc ở:",
    links: [
      {
        title: "Spotify",
        icon: "/icons/spotify.png",
        link: "https://open.spotify.com/artist/5TSjLaWHQ69GaALubAM7gR",
      },
      {
        title: "Youtube",
        icon: "/icons/youtube.png",
        link: "https://www.youtube.com/channel/UCqosN4QGo-pmyWVoaiVAIEA",
      },

      {
        title: "Apple Music",
        icon: "/icons/apple-music.png",
        link: "https://music.apple.com/us/artist/t%C4%83ng-ph%C3%BAc/1493760964",
      },
    ],
  },
];

export const DEVICE = {
  MOBILE: "mobile",
  TABLET: "tablet",
  DESKTOP: "desktop",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/schedule", label: "Schedule" },
  { href: "/merchandise", label: "Coming Soon" },
  { href: "/contact", label: "Contact" },
];

export const HERO_SWIPERS = [
  {
    src: "https://res.cloudinary.com/dahnkbdxi/image/upload/v1734787627/header-banner_p98qv0.png",
  },
  {
    src: "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733255909/FullSizeRender_6_puqwiv.jpg",
  },
  {
    src: "https://res.cloudinary.com/dwmpmry2n/image/upload/v1733256055/z5877654697071_40516958389f1c322d44e5f3523db66d_yb9mlm.jpg",
  },
];

export const MOCK_DATA_GAMESHOWS = [
  {
    title: "Ở đây có ai? Tập 3 Official - Kay Trần nắm giữ bí mật \"động trời\" khiến Tăng Phúc phải cầu cứu",
    date: "2024-08-18",
    extendedProps: {
      category: "PV",
      showDescript:
        "Kay vs Phúc hỏi đáp trong Ở Đây Có Ai?",
      showLink:
        "https://youtu.be/E-jFsGWb06E?si=sHbOrPFaL-rzjVLY",
    },
  },
] 

export const MOCK_DATA_EVENTS = [
  {
    title: "Ừ em xin lỗi kỳ vọng sai lầm",
    start: "2024-11-21",
    extendedProps: {
      address: "TP. HCM",
      category: "MINISHOW",
      time: "20:00 - 22:00",
      posterUrl:
        "https://res.cloudinary.com/dwmpmry2n/image/upload/v1732165089/2111_te0gc5.jpg",
      posterLink:
        "https://www.facebook.com/share/p/1DWUqANkiQ/?mibextid=WC7FNe",
    },
  },
  {
    title: "Mini Fan Meeting with Kay Tran",
    start: "2024-11-22",
    extendedProps: {
      address: "TP. Da Lat",
      category: "FMT",
      time: "18:00 - 20:00",
      posterUrl:
        "https://res.cloudinary.com/dwmpmry2n/image/upload/v1734723916/22112024_onikzz.jpg",
      posterLink:
        "https://www.facebook.com/story.php?story_fbid=875279604769217&id=100068615573817&mibextid=WC7FNe&rdid=N1iSA8Xv6ob3HQ3b#",
    },
  },
  {
    title: "Mây Lang Thang",
    start: "2024-11-23",
    extendedProps: {
      address: "Đà Lạt",
      category: "MINISHOW",
      time: "17:00 - 20:30",
      posterUrl:
        "https://res.cloudinary.com/dwmpmry2n/image/upload/v1732165253/mlt2311_jvwbqc.png",
      posterLink: "https://maylangthang.com.vn/mp_show/tp-2311/",
    },
  },
  {
    title: '"Từ Đây... Từ Nay..." Slay Hà Nội (đêm 1)',
    start: "2024-11-24",
    extendedProps: {
      address: "Hà Nội",
      category: "MINISHOW",
      time: "20:00 - 23:00",
      posterUrl:
        "https://res.cloudinary.com/dwmpmry2n/image/upload/v1732165485/slay1_ofhrte.jpg",
      posterLink: "https://www.facebook.com/profile.php?id=61562460471546",
    },
  },
  {
    title: '"Từ Đây... Từ Nay..." Slay Hà Nội (đêm 2)',
    start: "2024-11-25",
    extendedProps: {
      address: "Hà Nội",
      category: "MINISHOW",
      time: "21:00 - 23:30",
      posterUrl:
        "https://res.cloudinary.com/dwmpmry2n/image/upload/v1732165574/slay2_apg2pg.jpg",
      posterLink: "https://www.facebook.com/profile.php?id=61562460471546",
    },
  },
  {
    title: "Echoes of Love",
    start: "2024-11-30",
    extendedProps: {
      address: "Paris Garden, T.P Hồ Chí Minh ",
      category: "MINISHOW",
      time: "20:00",
      posterUrl:
        "https://res.cloudinary.com/dwmpmry2n/image/upload/v1732166616/3011_keaout.jpg",
      posterLink: "",
    },
  },
  {
    title: "LiveStream Shopee",
    start: "2024-12-06",
    extendedProps: {
      address: "T.P Hồ Chí Minh ",
      category: "OTHER",
      time: "20:00",
      posterUrl:
        "https://res.cloudinary.com/dwmpmry2n/image/upload/v1734723917/livewNkshopee_tc9e28.jpg",
      posterLink: "",
    },
  },
  {
    title: "Booth Special BIA SAIGON",
    start: "2024-12-06",
    extendedProps: {
      address: "T.P Hồ Chí Minh ",
      category: "EVENT",
      time: "18:00 - 19:00",
      posterUrl:
        "https://res.cloudinary.com/dwmpmry2n/image/upload/v1734723916/07122024_hus6za.jpg",
      posterLink: "",
    },
  },
  {
    title: "SHOPEE SHOW",
    start: "2024-12-11",
    extendedProps: {
      address: "T.P Hồ Chí Minh",
      category: "OTHER",
      time: "20:00",
      posterUrl:
        "https://res.cloudinary.com/dwmpmry2n/image/upload/v1734723917/11122024_py1ebq.jpg",
      posterLink: "",
    },
  },
  {
    title: "ATVNCG",
    start: "2024-12-14",
    extendedProps: {
      address: "Hà Nội",
      category: "CONCERT",
      time: "17:00 - 18:30",
      posterUrl: "",
      posterLink: "",
    },
  },
  {
    title: "Fan Meeting CHIN MUOI",
    start: "2024-12-17",
    extendedProps: {
      address: "Hà Nội",
      category: "FMT",
      time: "18:00 - 21:30",
      posterUrl:
        "https://res.cloudinary.com/dwmpmry2n/image/upload/v1734725553/17122024_ohkdz0.jpg",
      posterLink: "",
    },
  },
  {
    title: '"Từ Đây... Từ Nay..." Slay Sài Gòn (đêm 1)',
    start: "2024-12-20",
    extendedProps: {
      address: "T.P Hồ Chí Minh",
      category: "MINISHOW",
      time: "20:00 - 23:30",
      posterUrl:
        "https://res.cloudinary.com/dwmpmry2n/image/upload/v1732165674/slay3_l1c7hj.jpg",
      posterLink: "https://metaticket.com.vn/show/671d15f75a85647986197ca9",
    },
  },
  {
    title: '"Từ Đây... Từ Nay..." Slay Sài Gòn (đêm 2)',
    start: "2024-12-21",
    extendedProps: {
      address: "T.P Hồ Chí Minh",
      category: "MINISHOW",
      time: "19:00 - 22:30",
      posterUrl:
        "https://res.cloudinary.com/dwmpmry2n/image/upload/v1734725868/21122024_vxlqp6.jpg",
      posterLink: "https://metaticket.com.vn/show/6749d6ab2765ae76e3e76424",
    },
  },
  {
    title: "Private Party",
    start: "2024-12-22",
    extendedProps: {
      address: "T.P Hồ Chí Minh",
      category: "MINISHOW",
      time: "17:00 - 18:30",
      posterUrl:
        "https://res.cloudinary.com/dwmpmry2n/image/upload/v1732165814/2212_zhbupj.jpg",
      posterLink: "",
    },
  },
  {
    title: "Winter Fest",
    start: "2024-12-24",
    extendedProps: {
      address: "Hà Nội",
      category: "MINISHOW",
      time: "19:00 - 22:30",
      posterUrl:
        "https://res.cloudinary.com/dwmpmry2n/image/upload/v1734772571/24122024_dvbjuc.jpg",
      posterLink:
        "https://www.facebook.com/story.php?story_fbid=983927900440931&id=100064711897118&mibextid=qi2Omg&rdid=fKr1AgEq6Q096i6N#",
    },
  },
  {
    title: '"Từ Đây... Từ Nay..." Slay Đà Nẵng',
    start: "2024-12-26",
    extendedProps: {
      address: "Đà Nẵng",
      category: "MINISHOW",
      time: "17:00 - 18:30",
      posterUrl:
        "https://res.cloudinary.com/dwmpmry2n/image/upload/v1732166124/2612_iaeeh5.jpg",
      posterLink: "https://www.facebook.com/profile.php?id=61562460471546",
    },
  },
  {
    title: "Bốn Mùa Yêu",
    start: "2024-12-28",
    extendedProps: {
      address: "T.P Đà Lạt",
      category: "CONCERT",
      time: "18:00 - 22:00",
      posterUrl:
        "https://res.cloudinary.com/dwmpmry2n/image/upload/v1732166335/2812_smo4dj.jpg",
      posterLink: "https://cticket.vn/event/dalatchill-bomuayeu-1511-281231",
    },
  },
  {
    title: "VNPAY Super Sale",
    start: "2025-01-03",
    extendedProps: {
      address: "T.P Hà Nội",
      category: "Event",
      time: "10h30 - 22h00",
      posterUrl:
        "https://res.cloudinary.com/dwmpmry2n/image/upload/v1734772572/03012025_xd3nfz.jpg",
      posterLink:
        "https://www.facebook.com/story.php?story_fbid=895823836072763&id=100069354641643&mibextid=wwXIfr&rdid=rjEPWfZ1xYi9yfqM",
    },
  },
  {
    title: "LULULOLA Show  Tăng Phúc - Phan Đình Tùng | Kẻ Qua Đường",
    start: "2025-01-04",
    extendedProps: {
      address: "T.P Đà Lạt",
      category: "MINISHOW",
      time: "17h30 - 19h30",
      posterUrl: "",
      posterLink:
        "https://ticketbox.vn/lululola-show-tang-phuc-phan-dinh-tung-23505",
    },
  },
  {
    title: "Trixie & Tăng Phúc",
    start: "2025-01-05",
    extendedProps: {
      address: "Hà Nội",
      category: "MINISHOW",
      time: "21h00 : 23h30",
      posterUrl:
        "https://res.cloudinary.com/dwmpmry2n/image/upload/v1734724277/05012025_zr5cnv.png",
      posterLink:
        "https://trixie.com.vn/minishow-tang-phuc-05-01-2025-E79685310.html",
    },
  },
  {
    title: "River Flows In You - Gai Concert",
    start: "2025-01-11",
    extendedProps: {
      address: "TP. HCM",
      category: "MINISHOW",
      time: "20h00 : 23h30",
      posterUrl:
        "https://res.cloudinary.com/dwmpmry2n/image/upload/v1734723916/11012025_puopqm.jpg",
      posterLink: "http://gaiconcert-rfiy-bndmedia.1zone.vn",
    },
  },
];

export const DAYS_OF_WEEK = [
  { full: "Thứ hai", short: "Hai" },
  { full: "Thứ ba", short: "Ba" },
  { full: "Thứ tư", short: "Tư" },
  { full: "Thứ năm", short: "Năm" },
  { full: "Thứ sáu", short: "Sáu" },
  { full: "Thứ bảy", short: "Bảy" },
  { full: "Chủ nhật", short: "CN" },
];
