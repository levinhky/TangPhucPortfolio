import Container from "@/themes/Container";
import { NAV_LINKS, SOCIAL_LINKS } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { memo } from "react";

const NavbarModal = ({
  toggleShowModal,
  isShowModal,
}: {
  toggleShowModal: () => void;
  isShowModal: boolean;
}) => {
  const pathname = usePathname();

  return (
    <div
      className={`navbar-modal -translate-x-full ${
        !isShowModal ? "fadeInRight" : "fadeInLeft"
      } transition delay-300 ease-in-out`}
    >
      <Container>
        <div className="relative">
          <div className="rotate-text-wrapper">
            <div
              id="navbar-modal-artist"
            >
              <Image
                src={"/modal-background2.png"}
                width={0}
                height={0}
                sizes="100vw"
                className="z-10"
                id="modal-background-artist"
                alt="modal-background"
              />
              <h1 className="name center-abs">Tăng</h1>
              <h1 className="name center-abs">Phúc</h1>
            </div>
            <div className="navbar-modal-wrapper">
              <ul>
                {NAV_LINKS.map((link, index) => (
                  <li
                    key={index}
                    onClick={toggleShowModal}
                    className="navbar-modal-link"
                  >
                    <Link
                      className={pathname === link.href ? "active" : ""}
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {SOCIAL_LINKS.map((item, index) => {
                return (
                  <React.Fragment key={`keyNoteCham${index}`}>
                    <div className="social-links flex esm:flex-wrap gap-4 mt-4">
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
            <button
              onClick={toggleShowModal}
              className="bg-white w-10 h-10 flex items-center justify-center rounded-lg"
            >
              <Image
                src={"/icons/close.png"}
                width={20}
                height={20}
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
