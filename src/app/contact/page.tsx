import Container from "@/themes/Container";
import Image from "next/image";

const ContactPage = () => {
  return (
    <Container style="my-12 px-12 esm:px-0 mt-[5%]">
      <div className="flex esm:flex-wrap">
        <div className="basis-2/5 esm:basis-full">
          <h6 className="text-4xl font-semibold text-primary">
            Liên hệ với chúng tôi
          </h6>
          <div className="company-info flex flex-col gap-4 max-w-96 mt-7">
            <h6 className="text-xl font-semibold text-primary">
              Công ty GSN Production
            </h6>
            <div className="flex gap-2">
              <Image
                src={"/icons/location.png"}
                width={25}
                height={25}
                alt="location-icon"
              />
              <p className="font-normal text-primary">N/A</p>
            </div>
            <div className="flex gap-2">
              <Image
                src={"/icons/phone.png"}
                width={25}
                height={25}
                alt="phone-icon"
              />
              <p className="font-normal text-primary">+84 963 334 400</p>
            </div>
            <div className="flex gap-2">
              <Image
                src={"/icons/mail.png"}
                width={25}
                height={25}
                alt="mail-icon"
              />
              <p className="font-normal text-primary">gsnmedia.pro@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="bg-custom-gradient p-8 rounded-lg shadow-md basis-3/5 esm:mt-12 esm:basis-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[#003EA0] mb-1">
                Họ Tên<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Nhập họ tên"
                className="w-full p-2 pl-4 border border-[#2271D3] rounded"
              />
            </div>
            <div>
              <label className="block text-[#003EA0] mb-1">
                Số Điện Thoại<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Nhập số điện thoại"
                className="w-full p-2 pl-4 border border-[#2271D3] rounded"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-[#003EA0] mb-1">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Nhập địa chỉ email"
              className="w-full p-2 pl-4 border border-[#2271D3] rounded"
            />
          </div>

          <div className="mb-6">
            <label className="block text-[#003EA0] mb-1">
              Nội dung liên hệ<span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Nhập nội dung liên hệ"
              className="w-full p-2 pl-4 border border-[#2271D3] rounded h-32"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button className="w-[120px] h-10 bg-primary text-white rounded-lg font-semibold">
              Gửi
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;
