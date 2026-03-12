import Link from "next/link";
import Image from "next/image";
import { memo } from "react";
import { HeaderLanguage } from "./types";

interface CTAButtonsProps {
  selectedLanguage: HeaderLanguage;
  handleButtonClick: () => void;
}

const CTAButtons = memo(({ selectedLanguage, handleButtonClick }: CTAButtonsProps) => {
  return (
    <ul>
      <li className="bottom-nav-li cta-btn-list">
        <div>
          <Link id="" href="/contact-us">
            <div className="btn-box">
              <Image
                src="/assets/images/header/post-vacancy-bg.png"
                alt="post-vacancy"
                width="116"
                height="40"
                loading="lazy"
                className="btn-bg"
              />
              <Image
                src="/assets/images/header/post-vacancy-icon.png"
                alt="post-vacancy-icon"
                loading="lazy"
                width="43"
                height="40"
                className="btn-icon"
              />
              <Image
                src="/assets/images/header/post-vacancy-text.png"
                width="60"
                height="28"
                alt="vacancy"
                loading="lazy"
                className="btn-text"
              />
            </div>
            {/* tablet button  start here*/}
            <div className="btn-box tablet-btn">
              <Image
                loading="lazy"
                src="/assets/images/header/tab-post-vacancy-bg.png"
                alt="post-vacancy"
                width="70"
                height="26"
                className="btn-bg"
              />
              <Image
                loading="lazy"
                src="/assets/images/header/tab-post-vacancy-icon.png"
                alt="post-vacancy-icon"
                width="26"
                height="26"
                className="btn-icon"
              />
              <Image
                loading="lazy"
                src="/assets/images/header/tab-post-vacancy-text.png"
                width="39"
                height="19"
                alt=""
                className="btn-text"
              />
            </div>
            {/* tablet button  start here*/}
          </Link>
        </div>
        <div onClick={handleButtonClick}>
          <div className="btn-box">
            <Image
              loading="lazy"
              src="/assets/images/header/hire-talent-bg.png"
              alt="post-vacancy"
              width="98"
              height="40"
              className="btn-bg"
            />
            <Image
              loading="lazy"
              src="/assets/images/header/hire-talent-icon.png"
              alt="post-vacancy-icon"
              width="43"
              height="40"
              className="btn-icon"
            />
            <Image
              loading="lazy"
              src="/assets/images/header/hire-talent-text.png"
              width="40"
              height="26"
              alt="hire-talent-text"
              className="btn-text"
            />
          </div>
          {/* tablet button  start here*/}
          <div className="btn-box tablet-btn">
            <Image
              loading="lazy"
              src="/assets/images/header/tab-hire-talent-bg.png"
              alt="post-vacancy"
              width="70"
              height="26"
              className="btn-bg"
            />
            <Image
              loading="lazy"
              src="/assets/images/header/tab-hire-talent-icon.png"
              alt="post-vacancy-icon"
              width="26"
              height="26"
              className="btn-icon"
            />
            <Image
              loading="lazy"
              src="/assets/images/header/tab-hire-talent-text.png"
              width="39"
              height="19"
              alt="tab-hire-talent-text"
              className="btn-text"
            />
          </div>
          {/* tablet button  start here*/}
        </div>
        <div>
          <Link id="" href="/franchise-apply">
            <div className="btn-box">
              <Image
                loading="lazy"
                src="/assets/images/header/franchise-inq-bg.png"
                alt="post-vacancy"
                width="114"
                height="40"
                className="btn-bg"
              />
              <Image
                loading="lazy"
                src="/assets/images/header/franchise-inquiry-icon.png"
                alt="post-vacancy-icon"
                width="43"
                height="40"
                className="btn-icon"
              />
              <Image
                loading="lazy"
                src="/assets/images/header/franchise-apply-text.webp"
                width="62"
                height="29"
                alt="franchise-apply-text"
                className="btn-text"
              />
            </div>
            {/* tablet button  start here*/}
            <div className="btn-box tablet-btn">
              <Image
                loading="lazy"
                src="/assets/images/header/tab-franchise-inq-bg.png"
                alt="post-vacancy"
                width="70"
                height="26"
                className="btn-bg"
              />
              <Image
                loading="lazy"
                src="/assets/images/header/tab-franchise-inq-icon.png"
                alt="post-vacancy-icon"
                width="26"
                height="26"
                className="btn-icon"
              />
              <Image
                loading="lazy"
                src="/assets/images/header/tab-franchise-inq-text.png"
                width="39"
                height="19"
                alt="tab-franchise-inq-text"
                className="btn-text"
              />
            </div>
            {/* tablet button  End here*/}
          </Link>
        </div>
        <div>
          <Link

            id=""
            href="/job-seekers"
          >
            <div className="btn-box">
              <Image
                loading="lazy"
                src="/assets/images/header/job-seekers-bg.png"
                alt="post-vacancy"
                width="107"
                height="40"
                className="btn-bg"
              />
              <Image
                loading="lazy"
                src="/assets/images/header/job-seekers-icon.png"
                alt="post-vacancy-icon"
                width="43"
                height="40"
                className="btn-icon"
              />
              <Image
                loading="lazy"
                src="/assets/images/header/job-seekers-text.png"
                width="50"
                height="27"
                alt="job-seekers-text"
                className="btn-text"
              />
            </div>
            {/* tablet button  start here*/}
            <div className="btn-box tablet-btn">
              <Image
                loading="lazy"
                src="/assets/images/header/tab-job-seekers-bg.png"
                alt="post-vacancy"
                width="70"
                height="26"
                className="btn-bg"
              />
              <Image
                loading="lazy"
                src="/assets/images/header/tab-job-seekers-icon.png"
                alt="post-vacancy-icon"
                width="26"
                height="26"
                className="btn-icon"
              />
              <Image
                loading="lazy"
                src="/assets/images/header/tab-job-seekers-text.png"
                width="39"
                height="19"
                alt="tab-job-seekers-text"
                className="btn-text"
              />
            </div>
            {/* tablet button  End here*/}
          </Link>
        </div>
      </li>
    </ul>
  );
});

CTAButtons.displayName = "CTAButtons";

export default CTAButtons;

