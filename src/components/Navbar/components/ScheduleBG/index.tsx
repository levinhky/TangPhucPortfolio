import Image from "next/image";

const ScheduleBG = () => {
  return (
    <div
      className="wrapper flex items-center justify-center relative container mx-auto mb-5"
      id="hero-banner"
    >
      <Image
        src={"/schedule-bg.png"}
        width={0}
        height={0}
        sizes="100vw"
        className="hero-image !w-[470px] relative left-[20%]"
        alt="hero-banner"
      />
      <h1 className="artist-name center-abs !left-[40%]">Next</h1>
      <h1 className="artist-name center-abs">Chapter</h1>
    </div>
  );
};

export default ScheduleBG;
