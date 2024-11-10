"use client";
import Container from "@/themes/Container";
import Image from "next/image";
import NavbarModal from "./components/NavbarModal";
import { useCallback, useEffect, useState } from "react";

const Navbar = () => {
  const [isShowModal, setShowModal] = useState<boolean>(false);

  const toggleShowModal = useCallback(
    () => setShowModal(!isShowModal),
    [isShowModal]
  );

  const openModal = () => {
    document.body.classList.add("modal-open");
    const navbarModal = document.querySelector(".navbar-modal") as HTMLElement;
    if (navbarModal) {
      navbarModal.style.display = "block";
    }
  };

  const closeModal = () => {
    document.body.classList.remove("modal-open");
    const navbarModal = document.querySelector(".navbar-modal") as HTMLElement;
    if (navbarModal) {
      navbarModal.style.display = "none";
    }
  };

  useEffect(() => {
    if (isShowModal) {
      openModal();
    } else {
      closeModal();
    }
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
      {isShowModal && <NavbarModal toggleShowModal={toggleShowModal} />}
    </Container>
  );
};

export default Navbar;
