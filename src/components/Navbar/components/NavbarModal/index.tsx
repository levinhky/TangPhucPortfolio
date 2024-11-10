import Container from "@/themes/Container";
import { SOCIAL_LINKS } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";

const NavbarModal = ({ toggleShowModal }: { toggleShowModal: () => void }) => {
  return (
    <div className="navbar-modal">
      <Container>
        <div className="relative">
          <div className="rotate-text-wrapper">
            <h1 className="rotate-text">Tăng Phúc</h1>
            <div className="navbar-modal-wrapper">
              <ul>
                <li onClick={toggleShowModal} className="navbar-modal-link">
                  <Link href="/">Home</Link>
                </li>
                <li onClick={toggleShowModal} className="navbar-modal-link">
                  <Link href="/about">About</Link>
                </li>
                <li onClick={toggleShowModal} className="navbar-modal-link">
                  <Link href="/schedule">Schedule</Link>
                </li>
                <li onClick={toggleShowModal} className="navbar-modal-link">
                  <Link href="/merchandise">Merchandise</Link>
                </li>
                <li onClick={toggleShowModal} className="navbar-modal-link">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
              {SOCIAL_LINKS.map((item, index) => {
                return (
                  <React.Fragment key={`keyNoteCham${index}`}>
                    <div className="social-links flex gap-4 mt-4">
                      {item.links.map((item, index) => {
                        return (
                          <a
                            key={`keySocialItem${index}`}
                            className="social-button flex gap-2"
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src={item.icon}
                              width={23}
                              height={23}
                              alt={item.title}
                            />
                            <p>{item.title}</p>
                          </a>
                        );
                      })}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          <div className="h-32 flex justify-end items-start pt-4">
            <button onClick={toggleShowModal}>
              <Image
                src={"/icons/close.png"}
                width={32}
                height={32}
                alt="hamburger-icon"
              />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default memo(NavbarModal);
