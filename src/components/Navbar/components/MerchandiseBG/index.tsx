import Image from "next/image";

const MerchandiseBG = () => {
  return (
    <div
      className="wrapper flex items-center justify-center relative container mx-auto mb-5"
      id="hero-banner"
    >
      <Image
        src={"/merchandise-bg.png"}
        width={0}
        height={0}
        sizes="100vw"
        className="hero-image !w-[470px]"
        alt="hero-banner"
      />
      <h1 className="artist-name center-abs !left-1/2 !top-[80%]">Merchandise</h1>
    </div>
  );
};

export default MerchandiseBG;
