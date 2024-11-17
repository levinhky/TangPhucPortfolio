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
        <p className="artist-information--title">Giới thiệu</p>
        <h2 className="artist-information--description">
          Tăng Vũ Minh Phúc, thường được biết đến với nghệ danh Tăng Phúc, là
          một nam ca sĩ được biết đến với nhiều ca khúc ballad sâu lắng với chất
          giọng ấm áp và tình cảm.
        </h2>
      </div>
    </div>
  );
};

export default HeroBanner;
