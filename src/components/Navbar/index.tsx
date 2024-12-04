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
      {/* <div className="flex justify-end header"></div> */}
      <div className="menu bg-white w-10 h-10 rounded-lg">
        <button onClick={toggleShowModal}>
          <Image
            src={"/icons/hamburger.png"}
            width={20}
            height={20}
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
