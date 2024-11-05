import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="wrapper flex items-center justify-center relative container mx-auto">
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
          Lorem ipsum dolor sit amet consectetur. Egestas augue urna quisque a
          duis nec lorem faucibus at. Non sed mi quisque adipiscing nisl. Orci
          fermentum iaculis quam aliquet sit molestie adipiscing in congue. Amet
          morbi massa amet neque felis nibh blandit integer purus.
        </h2>
        <h2 className="artist-information--description">
          Lorem ipsum dolor sit amet consectetur. Egestas augue urna quisque a
          duis nec lorem faucibus at. Non sed mi quisque adipiscing nisl. Orci
          fermentum iaculis quam aliquet sit molestie adipiscing in congue. Amet
          morbi massa amet neque felis nibh blandit integer purus.
        </h2>
      </div>
    </div>
  );
};

export default HeroBanner;
