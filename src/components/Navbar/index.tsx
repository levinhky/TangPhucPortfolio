"use client";
import Container from "@/themes/Container";
import Image from "next/image";
import NavbarModal from "./components/NavbarModal";
import { useCallback, useEffect, useState } from "react";
import Background from "../Background";
import { usePathname } from "next/navigation";
import ScheduleBG from "./components/ScheduleBG";
import MerchandiseBG from "./components/MerchandiseBG";

const Navbar = () => {
  const [isShowModal, setShowModal] = useState<boolean>(false);
  const [isClicked, setClicked] = useState<boolean>(false);
  const [haveBackground, setHaveBackground] = useState<boolean>(true);
  const pathname = usePathname();

  const toggleShowModal = useCallback(() => {
    setShowModal(!isShowModal);
    setClicked(true);
  }, [isShowModal]);

  const onOpenModal = () => {
    document.body.classList.add("modal-open");
  };
  const onCloseModal = () => {
    document.body.classList.remove("modal-open");
  };
  useEffect(() => {
    if (isShowModal) {
      onOpenModal();
    } else {
      onCloseModal();
    }
  }, [isShowModal]);

  const renderBackground = () => {
    if (
      pathname.includes("/merchandise/") ||
      pathname === "/contact" ||
      pathname.includes("/schedule/") ||
      pathname.includes("/about")
    ) {
      return null;
    }

    const isHomeType = pathname === "/" ? true : false;

    switch (pathname) {
      case "/schedule":
        return <ScheduleBG />;
      case "/merchandise":
        return <MerchandiseBG />;

      default:
        return <Background isHomeType={isHomeType} />;
    }
  };

  useEffect(() => {
    if (
      pathname.includes("/merchandise/") ||
      pathname === "/contact" ||
      pathname.includes("/schedule/") ||
      pathname.includes("/about")
    ) {
      setHaveBackground(false);
    } else {
      setHaveBackground(true);
    }
  }, [pathname]);

  return (
    <Container style={`mt-4 relative ${!haveBackground ? "h-1" : "h-auto"}`}>
      <div className="menu bg-white w-10 h-10 esm:w-[20px] esm:h-[20px] rounded-lg esm:rounded-md esm:!-top-[10px] esm:!-right-[10px]">
        <button onClick={toggleShowModal}>
          <Image
            src={"/icons/hamburger.png"}
            width={20}
            height={20}
            className="esm:w-[10px] esm:h-[10px]"
            alt="hamburger-icon"
          />
        </button>
      </div>
      {renderBackground()}
      {isClicked && (
        <NavbarModal
          toggleShowModal={toggleShowModal}
          isShowModal={isShowModal}
        />
      )}
    </Container>
  );
};

export default Navbar;
