import Image from "next/image";

const HeroBanner = () => {
  return (
    <div
      className="wrapper flex items-center justify-center relative container mx-auto mb-5"
      id="hero-banner"
    >
      <Image
        src={"/hero.png"}
        width={0}
        height={0}
        sizes="100vw"
        className="hero-image z-10"
        alt="hero-banner"
      />
      <h1 className="artist-name center-abs">Tăng</h1>
      <h1 className="artist-name center-abs">Phúc</h1>
      <div className="artist-information">
        <h2 className="artist-information--description">
          Tăng Phúc, là một ca sĩ dòng nhạc trữ tình được biết đến rộng rãi với
          giọng hát da diết, giàu cảm xúc qua những bản bản ballad sâu lắng,
          truyền cảm. Cá tính âm nhạc của anh được thể hiện rõ nét qua từng bản
          cover chỉn chu, hay những dự án cá nhân ấn tượng và nhiều màu sắc.{" "}
          <br /> Với sự xuất hiện tại chương trình Anh Trai Vượt Ngàn Chông Gai
          2024, Tăng Phúc đã để lại trong lòng khán giả hình ảnh một nghệ sĩ mới
          mẻ và gần gũi, vượt qua giới hạn âm nhạc quen thuộc. Sau mỗi công diễn
          với những sân khấu đầy màu sắc khác nhau, anh có cơ hội được tiếp xúc
          với nhiều thể loại âm nhạc, được thể hiện tài năng đa dạng và đam mê
          bền bỉ trên hành trình nghệ thuật.
        </h2>
      </div>
    </div>
  );
};

export default HeroBanner;
