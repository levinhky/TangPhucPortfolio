import Container from "@/themes/Container";
import Image from "next/image";

const ContactPage = () => {
  return (
    <Container style="my-12 px-12">
      <div className="flex">
        <div className="basis-2/5">
          <h6 className="main-title">Liên hệ với chúng tôi</h6>
          <div className="company-info flex flex-col gap-4 max-w-96">
            <h6 className="sub-title">Tên công ty</h6>
            <div className="flex gap-2">
              <Image
                src={"/icons/location.png"}
                width={25}
                height={25}
                alt="location-icon"
              />
              <p className="sub-title--small">
                Text text text text text text text text text text text text Text
                text text text text text text text text text text text Text text
                text text text text text text text text text text
              </p>
            </div>
            <div className="flex gap-2">
              <Image
                src={"/icons/phone.png"}
                width={25}
                height={25}
                alt="phone-icon"
              />
              <p className="sub-title--small">000-000-0000</p>
            </div>
            <div className="flex gap-2">
              <Image
                src={"/icons/mail.png"}
                width={25}
                height={25}
                alt="mail-icon"
              />
              <p className="sub-title--small">example@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md basis-3/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Họ Tên<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Nhập họ tên"
                className="w-full p-2 border border-[#081F5C] rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Số Điện Thoại<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Nhập số điện thoại"
                className="w-full p-2 border border-[#081F5C] rounded"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Nhập địa chỉ email"
              className="w-full p-2 border border-[#081F5C] rounded"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-1">
              Nội dung liên hệ<span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Nhập nội dung liên hệ"
              className="w-full p-2 border border-[#081F5C] rounded h-32"
            ></textarea>
          </div>

          <button className=" w-1/4 bg-[#081F5C] text-white py-3 rounded font-semibold">
            Gửi
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;
