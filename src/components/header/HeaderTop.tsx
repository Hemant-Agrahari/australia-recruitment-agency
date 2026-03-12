import Link from "next/link";
import Image from "next/image";
import { memo } from "react";

const HeaderTop = memo(() => {
  return (
    <div className="header-top">
      <div className="header-top-inner">
        <ul className="job-seeker-wrapper">
          <li>
            <span>
              <Image
                width={100}
                height={100}
                src="/assets/images/header/uk.png"
                loading="eager"
                alt="United Kingdom Flag"
              />
            </span>
            <Link
              prefetch={false}
              href="tel:+44 20 3838 0743"
              className="com-pera"
            >
              <span className="phone-icon">
                <Image
                  width={100}
                  height={100}
                  src="/assets/images/header/phone-icon.svg"
                  alt="Call Now"
                  loading="lazy"
                />
              </span>
              +44 20 3838 0743
            </Link>
          </li>
          <li>
            <span>
              <Image
                width={100}
                height={100}
                src="/assets/images/header/united-states-flag.svg"
                loading="lazy"
                alt="United State Flag"
              />
            </span>
            <Link
              prefetch={false}
              href="tel:+19179009072"
              className="com-pera"
            >
              <span className="phone-icon">
                <Image
                  width={100}
                  height={100}
                  src="/assets/images/header/phone-icon.svg"
                  alt="Call Now"
                  loading="lazy"
                />
              </span>
              +1 (917) 900 9072
            </Link>
          </li>
          <li>
            <span>
              <Image
                width={100}
                height={100}
                src="/assets/images/header/canada-flag.svg"
                alt="Canada Flag"
                loading="lazy"
              />
            </span>
            <Link
              prefetch={false}
              href="tel:+17809004752"
              className="com-pera"
            >
              {" "}
              <span className="phone-icon">
                <Image
                  width={100}
                  height={100}
                  src="/assets/images/header/phone-icon.svg"
                  loading="lazy"
                  alt="Call Now"
                />
              </span>{" "}
              +1 (780) 900 4752
            </Link>
          </li>
          <li>
            <span>
              <Image
                width={100}
                height={100}
                src="/assets/images/header/india-flag.svg"
                alt="India Flag"
                loading="lazy"
              />
            </span>
            <Link
              prefetch={false}
              href="tel:+918980018741"
              className="com-pera"
            >
              {" "}
              <span className="phone-icon">
                <Image
                  width={100}
                  height={100}
                  src="/assets/images/header/phone-icon.svg"
                  loading="lazy"
                  alt="Call Now"
                />
              </span>{" "}
              +91 89800 18741
            </Link>
          </li>
        </ul>

        <div className="header-social-link">
          <ul className="job-seeker-wrapper">
            <li>
              <Link

                href="https://wa.me/918980018741?text=Hi"
                target="_blank"
                title="Share on WhatsApp"
                aria-label="Share on WhatsApp"
              >
                <span className="f-icon">
                  <i className="fab fa-whatsapp"></i>
                </span>
              </Link>

              <Link

                href="skype:Aistechnolabs?chat"
                target="_blank"
                aria-label="Chat on Skype"
              >
                <span className="f-icon">
                  <i className="fab fa-skype"></i>
                </span>
              </Link>

              <Link

                href="https://www.facebook.com/Alliancerecruitmentagency/"
                target="_blank"
                aria-label="Visit our Facebook page"
              >
                <span className="f-icon">
                  <i className="fab fa-facebook-f"></i>
                </span>
              </Link>

              <Link

                href="mailto:sales@alliancerecruitmentagency.com"
                target="_blank"
                className="com-pera"
                aria-label="Send an email"
              >
                <span className="f-icon me-0">
                  <i className="fa fa-envelope"></i>
                </span>
              </Link>

              <Link

                aria-label="Visit our Telegram channel"
                href="https://t.me/officialARA"
                target="_blank"
              >
                <Image
                  src="/assets/images/telegram-fa.svg"
                  width={30}
                  height={26}
                  alt="Telegram icon"
                  title="Telegram icon"
                  loading="eager"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

HeaderTop.displayName = "HeaderTop";

export default HeaderTop;

