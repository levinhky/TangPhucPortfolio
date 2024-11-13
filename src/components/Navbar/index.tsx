"use client";
import Container from "@/themes/Container";
import Image from "next/image";
import NavbarModal from "./components/NavbarModal";
import { useCallback, useEffect, useState } from "react";

const Navbar = () => {
  const [isShowModal, setShowModal] = useState<boolean>(false);
  const [isClicked, setClicked] = useState<boolean>(false);

  const toggleShowModal = useCallback(() => {
    setShowModal(!isShowModal);
    setClicked(true);
  }, [isShowModal]);

  return (
    <Container style="mt-4">
      <div className="flex justify-end">
        <button onClick={toggleShowModal}>
          <Image
            src={"/icons/hamburger.png"}
            width={32}
            height={32}
            alt="hamburger-icon"
          />
        </button>
      </div>
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
