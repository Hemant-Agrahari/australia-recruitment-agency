import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

interface BannerProps {
  backgroundImage: string;
  title: string;
  alt: string;
}

interface BannerData {
  [key: string]: {
    postYourVacancy: string;
    jobSeekers: string;
    franchiseInquiry: string;
  };
}

const bannerData: BannerData = {
  en: {
    postYourVacancy: "Post Your Vacancy",
    jobSeekers: "Job Seekers",
    franchiseInquiry: "Franchise Inquiry",
  },
  ar: {
    postYourVacancy: "أعلن عن وظيفتك",
    jobSeekers: "الباحثون عن عمل",
    franchiseInquiry: "استفسار عن الامتياز",
  },
};

const phoneNumbers = [
  {
    number: "+44 20 3838 0743",
    label: "phone number united",
    alt: "Get In Touch With Alliance",
  },
  {
    number: "+19179009072",
    label: "phone number united",
    alt: "Get In Touch With Alliance",
  },
  {
    number: "+17809004752",
    label: "phone number canada",
    alt: "Call Alliance Recruitment Agency",
  },
  {
    number: "+918980018741",
    label: "phone number india",
    alt: "Call Alliance Recruitment Agency",
  },
];

const socialLinks = [
  {
    href: "https://wa.me/918980018741?text=Hi",
    icon: "/assets/images/whatup.svg",
    alt: "whatsapp icon",
    label: "whatsapp link",
  },
  {
    href: "skype:Ais.technolabs?chat",
    icon: "/assets/images/skype.svg",
    alt: "skype icon",
    label: "skype id",
  },
  {
    href: "https://m.me/Alliancerecruitmentagency/",
    icon: "/assets/images/facebook.svg",
    alt: "facebook icon",
    label: "facebook link",
  },
  {
    href: "mailto:sales@alliancerecruitmentagency.com",
    icon: "/assets/images/email.svg",
    alt: "email icon",
    label: "email id",
  },
  {
    href: "https://t.me/officialARA",
    icon: "/assets/images/telegram-svg.svg",
    alt: "telegram icon",
    label: "telegram icon",
  },
];

const Banner: React.FC<BannerProps> = memo(({ backgroundImage, title, alt }) => {
  const router = useRouter();
  const isArabic = router.asPath.includes("/ar");
  const selectedLanguage = isArabic ? bannerData.ar : bannerData.en;

  return (
    <section className="main-banner">

      {/* Background Banner Image */}
      <div className="background-image-container">
        <Image
          src={backgroundImage}
          alt={alt || "Banner Background"}
          fill
          priority
          fetchPriority="high"
          sizes="(max-width:768px) 100vw, 1920px"
          style={{ objectFit: "cover" }}
          quality={80}
        />
      </div>

      <div className="container-fluid c-pad-x">
        <div className="banner-content">

          {title && <h1>{title}</h1>}

          <div className="banner-bottom-content">

            {/* LEFT SIDE */}
            <div className="left-side">
              <ul className="number-ul">
                {phoneNumbers.map((phoneNumber, index) => (
                  <li key={phoneNumber.number} className="phone-item">
                    <Link
                      prefetch={false}
                      href={`tel:${phoneNumber.number}`}
                      aria-label={phoneNumber.label}
                    >
                      <span
                        className={`flag-img c-banner-icon${index + 1}`}
                        aria-label={phoneNumber.alt}
                      ></span>

                      <span className="phone-icon">
                        <Image
                          width={28}
                          height={28}
                          src="/assets/images/phone-icon.svg"
                          alt={phoneNumber.alt}
                          loading="lazy"
                        />
                      </span>

                      <h4 className="number">{phoneNumber.number}</h4>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* SOCIAL ICONS */}
              <div className="social-media">
                <ul>
                  {socialLinks.map((socialLink) => (
                    <li key={socialLink.href}>
                      <Link
                        href={socialLink.href}
                        target="_blank"
                        aria-label={socialLink.label}
                        prefetch={false}
                      >
                        <Image
                          width={28}
                          height={28}
                          src={socialLink.icon}
                          alt={socialLink.alt}
                          loading="lazy"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="right-side">
              <ul>
                <li>
                  <Link prefetch={false} href="/contact-us">
                    {selectedLanguage.postYourVacancy}
                  </Link>
                </li>

                <li>
                  <Link prefetch={false} href="/job-seekers" target="_blank">
                    {selectedLanguage.jobSeekers}
                  </Link>
                </li>

                <li>
                  <Link prefetch={false} href="/franchise-enquiry">
                    {selectedLanguage.franchiseInquiry}
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        .main-banner {
          position: relative;
          width: 100%;
          height: 600px;
          overflow: hidden;
        }

        .background-image-container {
          position: absolute;
          inset: 0;
          z-index: -1;
        }

        .banner-content {
          position: relative;
          z-index: 1;
          color: #fff;
          padding: 20px;
        }

        .banner-content h1 {
          font-size: 32px;
          margin-bottom: 10px;
        }

        .banner-bottom-content {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .number-ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .phone-item {
          margin-bottom: 8px;
        }

        .phone-icon {
          display: inline-flex;
          width: 28px;
          height: 28px;
          margin-right: 6px;
        }

        .phone-item h4 {
          font-size: 14px;
          margin: 0;
          display: inline-block;
        }

        .social-media ul {
          display: flex;
          gap: 10px;
          list-style: none;
          padding: 0;
        }

        .right-side ul {
          list-style: none;
          padding: 0;
        }

        .right-side li {
          margin-bottom: 6px;
        }

        @media (max-width: 768px) {
          .main-banner {
            height: 420px;
          }

          .banner-bottom-content {
            flex-direction: column;
          }

          .banner-content {
            padding-top: 20px;
          }
        }
      `}</style>
    </section>
  );
});

Banner.displayName = "Banner";

export default Banner;