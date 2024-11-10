import Container from "@/themes/Container";
import Image from "next/image";

const AboutPage = () => {
  return (
    <Container style="my-12">
      <Image
        src={"/pages/about/hero.png"}
        width={1200}
        height={700}
        className="w-full"
        alt="hero-background"
      />

      <div className="flex gap-9 items-center my-[75px]">
        <Image
          src={"/pages/about/tudaytunay.png"}
          width={467}
          height={700}
          className="w-full"
          alt="image"
        />
        <div>
          <p className="font-light">
            <strong className="font-bold">[Giới thiệu ngắn về anh]</strong>.
            Lorem ipsum dolor sit amet consectetur. Egestas augue urna quisque a
            duis nec lorem faucibus at. Non sed mi quisque adipiscing nisl. Orci
            fermentum iaculis quam aliquet sit molestie adipiscing in congue.
            Amet morbi massa amet neque felis nibh blandit integer purus.
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
              <strong className="font-bold">[Quote/Slogan]</strong>. Lorem ipsum
              dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur.
            </p>
          </div>
        </div>
      </div>

      <ul className="timeline timeline-centered">
        <li className="timeline-item">
          <div className="timeline-info !flex justify-end">
            <Image
              src={"/placeholder.png"}
              width={300}
              height={300}
              alt="placeholder"
            />
          </div>
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h3 className="timeline-title sub-title--bold !text-[#000A26]">
              20XX
            </h3>
            <h3 className="timeline-title sub-title--bold !text-[#000A26]">
              Thành tựu / Giải thưởng
            </h3>
            <p className="sub-title--small !text-[#000A26]">
              Lorem ipsum dolor sit amet consectetur. Egestas augue urna quisque
              a duis nec lorem faucibus at. Non sed mi quisque adipiscing nisl.
              Orci fermentum iaculis quam aliquet sit molestie adipiscing in
              congue.
            </p>
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-info">
            <Image
              src={"/placeholder.png"}
              width={300}
              height={300}
              alt="placeholder"
            />
          </div>
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h3 className="timeline-title sub-title--bold !text-[#000A26]">
              20xx
            </h3>
            <h3 className="timeline-title sub-title--bold !text-[#000A26]">
              Thành tựu / Giải thưởng
            </h3>
            <p className="sub-title--small !text-[#000A26]">
              Lorem ipsum dolor sit amet consectetur. Egestas augue urna quisque
              a duis nec lorem faucibus at. Non sed mi quisque adipiscing nisl.
              Orci fermentum iaculis quam aliquet sit molestie adipiscing in
              congue.
            </p>
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-info !flex justify-end">
            <Image
              src={"/placeholder.png"}
              width={300}
              height={300}
              alt="placeholder"
            />
          </div>
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h3 className="timeline-title sub-title--bold !text-[#000A26]">
              20XX
            </h3>
            <h3 className="timeline-title sub-title--bold !text-[#000A26]">
              Thành tựu / Giải thưởng
            </h3>
            <p className="sub-title--small !text-[#000A26]">
              Lorem ipsum dolor sit amet consectetur. Egestas augue urna quisque
              a duis nec lorem faucibus at. Non sed mi quisque adipiscing nisl.
              Orci fermentum iaculis quam aliquet sit molestie adipiscing in
              congue.
            </p>
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-info">
            <Image
              src={"/placeholder.png"}
              width={300}
              height={300}
              alt="placeholder"
            />
          </div>
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h3 className="timeline-title sub-title--bold !text-[#000A26]">
              20xx
            </h3>
            <h3 className="timeline-title sub-title--bold !text-[#000A26]">
              Thành tựu / Giải thưởng
            </h3>
            <p className="sub-title--small !text-[#000A26]">
              Lorem ipsum dolor sit amet consectetur. Egestas augue urna quisque
              a duis nec lorem faucibus at. Non sed mi quisque adipiscing nisl.
              Orci fermentum iaculis quam aliquet sit molestie adipiscing in
              congue.
            </p>
          </div>
        </li>
      </ul>
    </Container>
  );
};

export default AboutPage;
