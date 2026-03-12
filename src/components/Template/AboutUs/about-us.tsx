import Banner from "@/components/Banner";
import HireTalent from "@/components/HireTalent";
import LatestUpdates from "@/components/LatestUpdates";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import HireACandidate from "@/components/forms/hireACandidate";

interface AboutUsTemplateProps {
  data: any;
}

const AboutUsTemplate = ({ data }: AboutUsTemplateProps) => {
  const BE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;


  return (
    <>
      {/* BANNER */}

      <Banner
        backgroundImage={`${BE_URL}${data.bannerImage}`}
        title={data.bannerTitle}
        alt=""
      />
      <HireTalent />
      {/* SECTION 1 */}
      {data.section1 && (
        <section className="accountant-hiring">
          <div className="container-fluid c-pad-x">
            <div className="row">
              <div className="col-lg-10">
                <h2
                  className="com-title text-align-left text-align-left "
                  dangerouslySetInnerHTML={{ __html: data.section1[0].title }}
                />
                <p
                  className="com-text"
                  style={{ fontWeight: "400" }}
                  dangerouslySetInnerHTML={{
                    __html: data.section1[0].description.text,
                  }}
                />
              </div>
              <div className="col-lg-2 align-self-center text-end">
                <Link
                  href={`${data.section1[0].buttonLink}`}
                  className="a-h-btn text-decoration-none"
                >
                  {data.section1[0].buttonText}
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* SECTION 1 */}

      {/* SECTION 2 */}
      {data.section2 && (
        <section className="mid-text-section" id="ContactForm">
          <div className="container-fluid c-pad-x">
            <div className="text-wrapper row gx-lg-5">
              <div className="left-side col-lg-6 ContactForm align-self-center">
                <h2
                  className="com-title text-align-left text-align-left "
                  dangerouslySetInnerHTML={{ __html: data.section2[0].title }}
                />

                <p
                  className="com-text color-gray"
                  dangerouslySetInnerHTML={{
                    __html: data.section2[0].description.text,
                  }}
                />
              </div>
              <div className="right-side col-lg-6 align-self-center">
                <div className="hire-a-candidate-form">
                  <div className="hire-cad-bg">
                    <Image
                      width={100}
                      height={100}
                      src="/assets/images/form-bg.svg"
                      alt="cadidate image"
                      title="cadidate image"
                      loading="lazy"
                      className="w-100 h-100"
                    />
                  </div>
                  <HireACandidate data-form-type="about-us-form" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* SECTION 2 */}

      {/* SECTION 3 */}
      {data.section3 && (
        <section className="accounting-section bg-gray">
          <div className="container-fluid c-pad-x">
            <div className="row gy-4">
              <div className="col-lg-12 c-order-992-2 d-none_image">
                {data.section3[0].image && <Image
                  loading="lazy"
                  src={
                    data.section3[0].image
                      ? `${BE_URL}${data.section3[0].image}`
                      : ""
                  }
                  alt={`${data.section3[0].imageAlt}`}
                  title={`${data.section3[0].imageAlt}`}
                  width="563"
                  height="297"
                  className="img-fluid"
                />}
              </div>
              <div className="col-lg-6">
                <h2
                  className="com-title text-align-left"
                  dangerouslySetInnerHTML={{ __html: data.section3[0].title }}
                />
                <p
                  className="com-text color-gray"
                  dangerouslySetInnerHTML={{
                    __html: data.section3[0].description.text,
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      )}
      {/* SECTION 3 */}

      {/* SECTION 4 */}
      {data.section4 && (
        <section className="looking-for-ac text-center">
          <div className="looking-bg-img">
            <Image
              width={100}
              height={100}
              loading="lazy"
              style={{ backgroundSize: "contain" }}
              src="/assets/images/looking-bg.svg"
              alt="Looking for Accounting Staff"
              className="w-100 h-100"
            />
          </div>
          <div className="container-fluid c-pad-x">
            <h2
              className="com-title"
              dangerouslySetInnerHTML={{ __html: data.section4[0].title }}
            ></h2>
            <p
              className="com-text "
              dangerouslySetInnerHTML={{
                __html: data.section4[0].description.text,
              }}
            ></p>
            <Link href={data.section4[0].buttonLink} className="com-btn">
              {data.section4[0].buttonText}
            </Link>
          </div>
        </section>
      )}
      {/* SECTION 4 */}
      {/* SECTION 5 */}
      {data.section5 && (
        <section className="accounting-section pt-100 bg-gray">
          <div className="container-fluid c-pad-x">
            <div className="">
              <div className="row g-5">
                <div className="col-lg-7">
                  <h2
                    className="text-align-left com-title"
                    dangerouslySetInnerHTML={{ __html: data.section5[0].title }}
                  />
                  <p
                    className="text-align-left com-text"
                    dangerouslySetInnerHTML={{
                      __html: data.section5[0].description.text,
                    }}
                  />
                </div>
                <div className="col-lg-5 c-order-992-2 d-none_image">
                  {data.section5[0].image && <Image
                    loading="lazy"
                    src={
                      data.section5[0].image
                        ? `${BE_URL}${data.section5[0].image}`
                        : ""
                    }
                    alt={`${data.section5[0].imageAlt}`}
                    title={`${data.section5[0].imageAlt}`}
                    width="563"
                    height="297"
                    className="img-fluid"
                  />}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* SECTION 5 */}

      {/* SECTION 6 */}
      {data.section6 && (
        <section className="industry-section c-pad-y">
          <div className="container-fluid c-pad-x ">
            <div className="">
              <div className="row g-5">
                <div className="col-lg-6  text-start">
                  <Link href={data.section6[0].imageLink}>
                    {data.section6[0].image && <Image
                      loading="lazy"
                      src={
                        data.section6[0].image
                          ? `${BE_URL}${data.section6[0].image}`
                          : ""
                      }
                      alt={`${data.section6[0].imageAlt}`}
                      title={`${data.section6[0].imageAlt}`}
                      width="536"
                      height="354"
                      className="img-fluid"
                    />}
                  </Link>
                </div>

                <div className="col-lg-6">
                  <h2
                    className="com-title text-align-left text-align-left"
                    dangerouslySetInnerHTML={{ __html: data.section6[0].title }}
                  />
                  <div
                    className="induster-ul c-un-bold text-align-left com-text"
                    dangerouslySetInnerHTML={{
                      __html: data.section6[0].description.text,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* SECTION 6 */}

      {/* SECTION 7 */}
      {data.section7 && (
        <section className="industry-section c-pad-y bg-light-blue">
          <div className="container-fluid c-pad-x">
            <div className="inner-con bg-no no-box-shadow p-0">
              <div className="row gy-4">
                <div className="col-lg-6">
                  <h2
                    className="com-title text-align-left"
                    dangerouslySetInnerHTML={{ __html: data.section7[0].title }}
                  />
                  <p
                    className="com-text color-gray"
                    dangerouslySetInnerHTML={{
                      __html: data.section7[0].description.text,
                    }}
                  />
                </div>
                <div className="col-lg-6 align-self-start ms-auto text-end d-none_image">
                  <Link href={data.section7[0].imageLink}>
                    {data.section7[0].image && <Image
                      loading="lazy"
                      src={
                        data.section7[0].image
                          ? `${BE_URL}${data.section7[0].image}`
                          : ""
                      }
                      alt={data.section7[0].imageAlt}
                      title={data.section7[0].imageAlt}
                      width="563"
                      height="596"
                      className="img-fluid"
                    />}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* SECTION 7 */}

      {data.faq && data.faq.length > 0 && data.faq[0].question && (
        <section className="faq-section">
          <div className="container-fluid c-pad-x">
            <div className="inner-con">
              <div className="row">
                <div className="col-lg-2">
                  <h2 className="com-title text-align-left">FAQ</h2>
                </div>
                <div className="col-lg-10">
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    {data.faq.map(
                      (
                        faq: { question: string; answer: string },
                        index: number
                      ) => (
                        <div className="accordion-item" key={index}>
                          <h3
                            className="accordion-header"
                            id={`flush-heading${index}`}
                          >
                            <button
                              style={{ borderRadius: "5px" }}
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#flush-collapse${index}`}
                              aria-expanded="false"
                              aria-controls={`flush-collapse${index}`}
                            >
                              {faq.question}
                            </button>
                          </h3>
                          <div
                            id={`flush-collapse${index}`}
                            className="accordion-collapse collapse"
                            aria-labelledby={`flush-heading${index}`}
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              <p className="com-text color-gray">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}


      {/* <!-- Headhunting in End --> */}
      {/* Blog start here */}

      <section className="py-50">
        <div className="new-section">
          <div className="container">
            <div className="main-content">
              <h2 className="mb-4">
                Interested in finding out how Alliance can support you?
              </h2>
              <ul className="mb-3">
                <li>Utilize the extensive network of the finest 3.5% talent</li>
                <li>
                  Achieve hiring speeds multiplied by 10 and enjoy cost benefits
                  of up to 40%
                </li>
                <li>
                  Achieving a remarkable 70% success rate from initial candidate
                  interview to final selection
                </li>
              </ul>

              <h3 className="mb-4">Let’s talk!</h3>
              <Link
                href="https://calendly.com/allianceinternationalservices/30-mins-meeting-alliance-international-servic-gcc"
                target="_blank"
                className="cta-btn"
                id=""
              >
                Book Your Free Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </section>
      <LatestUpdates className="container-fluid c-pad-x" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EmploymentAgency",
      "@id": "https://www.alliancerecruitmentagency.ae/#employmentagency",
      "name": "Alliance Recruitment Agency UAE",
      "url": "https://www.alliancerecruitmentagency.ae",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://www.alliancerecruitmentagency.com.au/#logo",
        "url": "https://www.alliancerecruitmentagency.ae/_next/image?url=%2Fassets%2Fimages%2Fheader%2Falliance-new-logo.png&w=384&q=75",
        "caption": "Alliance Recruitment Agency UAE"
      },
      "telephone": "+918980018741",
      "email": "sales@alliancerecruitmentagency.com",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+17809004752",
          "contactType": "customer service",
          "email": "sales@alliancerecruitmentagency.com",
          "areaServed": "CA",
          "availableLanguage": ["en"]
        },
         {
          "@type": "ContactPoint",
          "telephone": "+918980018741",
          "contactType": "customer service",
          "email": "sales@alliancerecruitmentagency.com",
          "areaServed": "IN",
          "availableLanguage": ["en"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+19179009072",
          "contactType": "customer service",
          "email": "sales@alliancerecruitmentagency.com",
          "areaServed": "US",
          "availableLanguage": ["en"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+442038380743",
          "contactType": "customer service",
          "email": "sales@alliancerecruitmentagency.com",
          "areaServed": "GB",
          "availableLanguage": ["en"]
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Silicon Oasis, Dubai",
        "addressLocality": "Dubai",
        "addressRegion": "UAE",
        "postalCode": "00000",
        "addressCountry": "AE"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "09:00",
          "closes": "20:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/Alliancerecruitmentagency/",
        "https://youtube.com/channel/UCTWg4i7ZXx1NTJ59SP8Nxrw",
        "https://www.linkedin.com/company/alliance-recruitment-agency/",
        "https://twitter.com/career_alliance"
      ],
      "foundingDate": "2010",
      "description": "We provide manpower services in Dubai, UAE. Our manpower consultants in Dubai will help you get the best International manpower recruitment services."
    },
     {
      "@type": "WebSite",
      "@id": "https://www.alliancerecruitmentagency.ae/#website",
      "url": "https://www.alliancerecruitmentagency.ae",
      "name": "Alliance Recruitment Agency UAE",
      "publisher": {
        "@id": "https://www.alliancerecruitmentagency.ae/#employmentagency"
      },
      "inLanguage": "en-US",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.alliancerecruitmentagency.ae/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.alliancerecruitmentagency.ae/${data?.slug}/#webpage",
      "url": "https://www.alliancerecruitmentagency.ae/${data?.slug}",
      "name": "${data?.bannerTitle || 'Best Manpower Agency in Dubai, UAE'}",
      "isPartOf": {
        "@id": "https://www.alliancerecruitmentagency.ae/#website"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url":"https://www.alliancerecruitmentagency.ae/_next/image?url=%2Fassets%2Fimages%2Fheader%2Falliance-new-logo.png&w=384&q=75"
      },
      "inLanguage": "en-US",
      "datePublished": "${data?.createdAt || '2025-01-02T09:32:18.453Z'}",
      "dateModified": "${data?.updatedAt || '2025-01-02T09:41:13.333Z'}",
      "author": {
        "@id": "https://www.alliancerecruitmentagency.ae/manpower-agency-dubai"
      }
    },
    {
      "@type": "Person",
      "@id": "https://www.alliancerecruitmentagency.ae/manpower-agency-dubai",
      "name": "Kelly Johnson",
      "worksFor": {
        "@id": "https://www.alliancerecruitmentagency.ae/#employmentagency"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.alliancerecruitmentagency.ae"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "${data?.bannerTitle || 'Best Manpower Agency in Dubai, UAE'}",
          "item": "https://www.alliancerecruitmentagency.ae/${data?.slug}"
        }
      ]
    }
  ]
}`,
        }}
      />
    </>
  );
};

export default AboutUsTemplate;
