import Image from "next/image";

import Container from "@/themes/Container";

import Calendar from "./components/Calendar";

const SchedulePage = () => {
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

      <Calendar />
    </Container>
  );
};

export default SchedulePage;
