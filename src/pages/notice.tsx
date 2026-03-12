import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
// duplicate phone input CSS removed; globally loaded in _app
import Banner from "@/components/Banner";
import CustomHead from "@/components/Head";
import meta from "../meta/meta.json";
interface NoticeProps { }
const Notice: React.FC<NoticeProps> = () => {
  const noticeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EmploymentAgency",
        "@id": "https://www.alliancerecruitmentagency.ae/#employmentagency",
        name: "Alliance Recruitment Agency UAE",
        url: "https://www.alliancerecruitmentagency.ae",
        logo: {
          "@type": "ImageObject",
          "@id": "https://www.alliancerecruitmentagency.com.au/#logo",
          url: "https://www.alliancerecruitmentagency.ae/_next/image?url=%2Fassets%2Fimages%2Fheader%2Falliance-new-logo.png&w=384&q=75",
          caption: "Alliance Recruitment Agency UAE",
        },
        telephone: "+918980018741",
        email: "sales@alliancerecruitmentagency.com",
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+17809004752",
            contactType: "customer service",
            email: "sales@alliancerecruitmentagency.com",
            areaServed: "CA",
            availableLanguage: ["en"],
          },
          {
            "@type": "ContactPoint",
            telephone: "+918980018741",
            contactType: "customer service",
            email: "sales@alliancerecruitmentagency.com",
            areaServed: "IN",
            availableLanguage: ["en"],
          },
          {
            "@type": "ContactPoint",
            telephone: "+19179009072",
            contactType: "customer service",
            email: "sales@alliancerecruitmentagency.com",
            areaServed: "US",
            availableLanguage: ["en"],
          },
          {
            "@type": "ContactPoint",
            telephone: "+442038380743",
            contactType: "customer service",
            email: "sales@alliancerecruitmentagency.com",
            areaServed: "GB",
            availableLanguage: ["en"],
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Silicon Oasis, Dubai",
          addressLocality: "Dubai",
          addressRegion: "UAE",
          postalCode: "00000",
          addressCountry: "AE",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "09:00",
            closes: "20:00",
          },
        ],
        sameAs: [
          "https://www.facebook.com/Alliancerecruitmentagency/",
          "https://youtube.com/channel/UCTWg4i7ZXx1NTJ59SP8Nxrw",
          "https://www.linkedin.com/company/alliance-recruitment-agency/",
          "https://twitter.com/career_alliance",
        ],
        foundingDate: "2010",
        description:
          "We provide manpower services in Dubai, UAE. Our manpower consultants in Dubai will help you get the best International manpower recruitment services.",
      },
      {
        "@type": "WebSite",
        "@id": "https://www.alliancerecruitmentagency.ae/#website",
        url: "https://www.alliancerecruitmentagency.ae",
        name: "Alliance Recruitment Agency UAE",
        publisher: {
          "@id": "https://www.alliancerecruitmentagency.ae/#employmentagency",
        },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target:
            "https://www.alliancerecruitmentagency.ae/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
  return (
    <div>
      <CustomHead {...meta["notice"]} />
      <>
        {/* <!-- main-banner start --> */}
        <Banner
          backgroundImage="/assets/images/fraud-notice.webp"
          title="NOTICE RECRUITMENT FRAUD ALERT"
          alt="Notice Recruitment Fraud Alert -Safeguard Your Career Against Fraudulent Practices"
        />
        {/* <!-- main-banner End --> */}

        <section className="accounting-section">
          <div className="container">
            <div className="row gy-4">
              <div className="notice-pg col-lg-6">
                <h2 className="com-title text-align-left text-align-left">
                  NOTICE RECRUITMENT FRAUD ALERT
                </h2>
                <p className="com-text ">Dear Job Seekers,</p>
                <p className="com-text ">
                  In the last few days, we are getting a lot of messages from
                  the candidates who received fake job letters, email, phone
                  calls and messages in which our company logo and name is
                  mentioned. And the word claims a lot of money from the
                  candidate for giving jobs. So, This informs you all that
                  Alliance Recruitment Agency comprehensive recruitment process
                  which includes a personal interview and we don’t make
                  employment offers on the basis of a candidates’ CV. Moreover,
                  recruitment to any post under the Alliance Recruitment Agency
                  is done through our own HR department, and we don’t outsource
                  to any external agency or individuals.
                </p>
              </div>
              <div className="col-lg-6 align-self-center">
                <picture>
                  <source
                    srcSet="/assets/images/indus-1.webp"
                    type="image/webp"
                  />
                  <source
                    srcSet="/assets/images/indus-1.png"
                    type="image/png"
                  />
                  <Image
                    width={100}
                    height={100}
                    data-src="/assets/images/indus-1.webp"
                    src="/assets/images/indus-1.webp"
                    alt="Notice Recruitment Fraud Alert - Alliance Recruitment Agency"
                    title="Notice Recruitment Fraud Alert - Alliance Recruitment Agency"
                    className="w-100 h-100"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>
          </div>
        </section>
        <section className="accounting-section py-0 ">
          <div className="container">
            <div className="inner-con">
              <div className="row gy-4">
                <div className="notice-pg col-lg-12">
                  <h3
                    className="com-title text-align-left s-title"
                    style={{ fontFamily: "Epilogue", fontSize: "18px" }}
                  >
                    MOST IMPORTANT ALLIANCE RECRUITMENT AGENCY DO NOT SOLICIT
                    ANY PAYMENT IN TERM OF SECURITY DEPOSIT OR VISA/ WORK PERMIT
                    PROCESSING FEE etc. FROM CANDIDATES AT ANY STAGE OF
                    RECRUITMENT PROCESS.
                  </h3>
                  <p className="com-text ">
                    Our all career opportunities are listed in the company’s job
                    seeker page –{" "}
                    <Link href="https://www.alliancerecruitmentagency.com/job-seekers/">
                      <strong>
                        https://www.alliancerecruitmentagency.com/job-seekers/
                      </strong>
                    </Link>{" "}
                    in addition to being advertised we publish our post on
                    social media portals and they are:
                  </p>
                  <ul className="induster-ul">
                    <li className="com-text d-flex flex-wrap mb-0">
                      <h3 className="com-title text-align-left s-title d-flex flex-wrap">
                        Facebook - &nbsp;
                      </h3>
                      <p className="com-text  ms-sm-0 ms-lg-2 d-flex flex-wrap">
                        <Link
                          style={{ color: "#787878" }}
                          className=""
                          href="https://www.facebook.com/Alliancerecruitmentagency/"
                        >
                          <strong>
                            https://www.facebook.com/Alliancerecruitmentagency/
                          </strong>
                        </Link>
                      </p>
                    </li>
                    <li className="com-text d-flex flex-wrap mb-0">
                      <h3 className="com-title text-align-left s-title d-flex flex-wrap">
                        Twitter – &nbsp;
                      </h3>
                      <p className="com-text  ms-sm-0 ms-lg-2 d-flex flex-wrap">
                        <Link
                          style={{ color: "#787878" }}
                          className=""
                          href="https://twitter.com/career_alliance/"
                        >
                          <strong>https://twitter.com/career_alliance/</strong>
                        </Link>
                      </p>
                    </li>
                    <li className="com-text d-flex flex-wrap mb-0">
                      <h3 className="com-title text-align-left s-title d-flex flex-wrap">
                        LinkedIn – &nbsp;
                      </h3>
                      <p className="com-text  ms-sm-0 ms-lg-2 d-flex flex-wrap">
                        <Link
                          style={{ color: "#787878" }}
                          className=""
                          href="https://www.linkedin.com/company/alliance-international-consulting-firm/"
                        >
                          <strong>
                            https://www.linkedin.com/company/alliance-international-consulting-firm/
                          </strong>
                        </Link>
                      </p>
                    </li>
                  </ul>
                  <p className="com-text ">Our official websites are –</p>
                  <ul className="induster-ul">
                    <li className="com-text d-flex flex-wrap">
                      <Link
                        className=""
                        href="https://www.alliancerecruitmentagency.com"
                      >
                        https://www.alliancerecruitmentagency.com
                      </Link>
                    </li>
                    <li className="com-text d-flex flex-wrap">
                      <Link href="/">
                        https://www.alliancerecruitmentagency.ae
                      </Link>
                    </li>
                    <li className="com-text d-flex flex-wrap">
                      <Link href="https://www.allianceinternational.co.in">
                        https://www.allianceinternational.co.in
                      </Link>
                    </li>
                  </ul>
                  <p className="com-text ">
                    All are hereby alert that potential job-seekers
                    corresponding with individuals and recruitment agencies will
                    be doing so at their own risk and consequences and that
                    Alliance recruitment company will not be liable for any loss
                    or damage that may be incurred directly or indirectly as a
                    result.
                  </p>
                  <p className="com-text ">
                    Check out the latest jobs in our Job seeker section{" "}
                    <Link href="https://www.alliancerecruitmentagency.com/job-seekers/">
                      <strong>here</strong>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <noscript dangerouslySetInnerHTML={{ __html: tagmanager }} /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(noticeSchema) }}
        />
      </>
    </div>
  );
};
export default Notice;
