import React from "react";
import Image from "next/image";
import Container from "@/themes/Container";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/utils/constants";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <Container style="flex esm:flex-col justify-between py-12 esm:py-8">
        <div className="company-info flex flex-col gap-4 max-w-96">
          <h6 className="sub-title">Công ty GSN Production</h6>
          <div className="flex gap-2">
            <Image
              src={"/icons/location.png"}
              width={25}
              height={25}
              alt="location-icon"
            />
            <p className="sub-title--small">
              N/A
            </p>
          </div>
          <div className="flex gap-2">
            <Image
              src={"/icons/phone.png"}
              width={25}
              height={25}
              alt="phone-icon"
            />
            <p className="sub-title--small">+84 963 334 400</p>
          </div>
          <div className="flex gap-2">
            <Image
              src={"/icons/mail.png"}
              width={25}
              height={25}
              alt="mail-icon"
            />
            <p className="sub-title--small">gsnmedia.pro@gmail.com</p>
          </div>
        </div>

        <ul className="footer-links flex flex-col gap-4">
          <li className="esm:mt-5">
            <Link className="sub-title" href="/about">
              Giới thiệu
            </Link>
          </li>
          <li>
            <Link className="sub-title" href="/schedule">
              Lịch hoạt động
            </Link>
          </li>
          <li>
            <Link className="sub-title" href="/merchandise">
              Merchandise
            </Link>
          </li>
          <li className="esm:mb-2">
            <Link className="sub-title" href="/contact">
              Liên hệ
            </Link>
          </li>
        </ul>

        <div className="socials flex flex-col gap-2">
          {SOCIAL_LINKS.map((item, index) => {
            return (
              <React.Fragment key={`keyNoteCham${index}`}>
                <h6 className="sub-title">{item.title}</h6>
                <div className="social-links flex flex-wrap gap-4">
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
      </Container>
      <div className="footer-bottom">
        <p>© Tang Phuc, ALL RIGHT RESERVED.</p>
      </div>
    </div>
  );
};

export default Footer;
