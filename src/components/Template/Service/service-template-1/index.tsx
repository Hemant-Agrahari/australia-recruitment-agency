import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import Link from "next/link";
// duplicate phone input CSS removed; globally loaded in _app
import HeadingHunting from "@/components/headhunting/HeadingHunting";
import CallToAction from "@/components/callToAction/CallToAction";
const HireTalent = dynamic(() => import("@/components/HireTalent"));
import Banner from "@/components/Banner";
const LatestUpdates = dynamic(() => import("@/components/LatestUpdates"));
const HireACandidate = dynamic(
  () => import("@/components/forms/hireACandidate")
);

interface ServiceTemplate1Props {
  data?: any;
}
const ServiceTemplate1: React.FC<ServiceTemplate1Props> = ({ data }) => {
  const BE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const slug = data.slug

  return (
    <div>
      <>
        {data?.bannerImage && (
          <Banner
            backgroundImage={`${BE_URL}${data?.bannerImage}`}
            title={data?.bannerTitle}
            alt="Banner Recruitment Dubai"
          />
        )}

        <HireTalent />

        {data.section1[0].title && (
          <section className="accountant-hiring">
            <div className="container-fluid c-pad-x">
              <div className="row">
                <div className="col-lg-10">
                  <h2
                    className="com-title text-align-left text-align-left "
                    dangerouslySetInnerHTML={{
                      __html: data.section1[0].title,
                    }}
                  />
                  {data.section1[0].description.text && (
                    <p
                      className="com-text"
                      // style={{ fontWeight: "400" }}
                      dangerouslySetInnerHTML={{
                        __html: data.section1[0].description.text,
                      }}
                    />
                  )}
                </div>
                <div className="col-lg-2 align-self-center text-end">
                  <Link
                    prefetch={false}
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

        {data.section2 && (
          <section className="mid-text-section" id="ContactForm">
            <div className="container-fluid c-pad-x">
              <div className="text-wrapper row gx-lg-5">
                <div className="left-side col-lg-12 ContactForm align-self-center">
                  <h2
                    className="com-title text-align-left text-align-left "
                    dangerouslySetInnerHTML={{
                      __html: data.section2[0].title,
                    }}
                  />

                  <p
                    className="com-text color-gray"
                    dangerouslySetInnerHTML={{
                      __html: data.section2[0].description.text,
                    }}
                  />
                </div>
                <div className="right-side col-lg-12 align-self-center">
                  <div className="hire-a-candidate-form">
                    <div className="hire-cad-bg">
                      <Image
                        width={100}
                        height={100}
                        src="/assets/images/form-bg.svg"
                        alt="cadidate image"
                        title="cadidate image"
                        priority
                        className="w-100 h-100"
                      />
                    </div>
                    <HireACandidate data-form-type="servicepage-form" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {data.section3 && (
          <section className="accounting-section bg-gray">
            <div className="container-fluid c-pad-x">
              <div className="row gy-4">
                <div className="col-lg-6 c-order-992-2 d-none_image">
                  {data.section3[0].image && (
                    <Image
                      priority
                      src={
                        data.section3[0].image
                          ? `${BE_URL}${data.section3[0].image}`
                          : ""
                      }
                      alt={`${data.section3[0].imageAlt}`}
                      title={`${data.section3[0].imageAlt}`}
                      width="563"
                      height="297"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="img-fluid"
                    />
                  )}
                </div>
                <div className="col-lg-6">
                  <h2
                    className="com-title text-align-left"
                    dangerouslySetInnerHTML={{
                      __html: data.section3[0].title,
                    }}
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

        {data.section4 && (
          <section className="looking-for-ac text-center">
            <div className="looking-bg-img">
              <Image
                width={100}
                height={100}
                priority
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
              <Link
                prefetch={false}
                href={data.section4[0].buttonLink}
                className="com-btn"
              >
                {data.section4[0].buttonText}
              </Link>
            </div>
          </section>
        )}

        {data.section5 && (
          <section className="accounting-section pt-100 bg-gray">
            <div className="container-fluid c-pad-x">
              <div className="">
                <div className="row g-5">
                  <div className="col-lg-7">
                    <h2
                      className="text-align-left com-title"
                      dangerouslySetInnerHTML={{
                        __html: data.section5[0].title,
                      }}
                    />
                    <p
                      className="text-align-left com-text"
                      dangerouslySetInnerHTML={{
                        __html: data.section5[0].description.text,
                      }}
                    />
                  </div>
                  <div className="col-lg-5 c-order-992-2 d-none_image">
                    {data.section5[0].image && (
                      <Image
                        loading="eager"
                        src={
                          data.section5[0].image
                            ? `${BE_URL}${data.section5[0].image}`
                            : ""
                        }
                        alt={`${data.section5[0].imageAlt}`}
                        title={`${data.section5[0].imageAlt}`}
                        width="563"
                        height="297"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="img-fluid"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {data.section6 && (
          <section className="industry-section c-pad-y">
            <div className="container-fluid c-pad-x ">
              <div className="">
                <div className="row g-5">
                  <div className="col-lg-6  text-start">
                    <Link prefetch={false} href={data.section6[0].imageLink}>
                      {data.section6[0].image && (
                        <Image
                          loading="eager"
                          src={
                            data.section6[0].image
                              ? `${BE_URL}${data.section6[0].image}`
                              : ""
                          }
                          alt={`${data.section6[0].imageAlt}`}
                          title={`${data.section6[0].imageAlt}`}
                          width="536"
                          height="354"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="img-fluid"
                        />
                      )}
                    </Link>
                  </div>

                  <div className="col-lg-6">
                    <h2
                      className="com-title text-align-left text-align-left"
                      dangerouslySetInnerHTML={{
                        __html: data.section6[0].title,
                      }}
                    />
                    <div
                      className="induster-ul c-un-bold text-align-left"
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
        {/* <!-- Headhunting in start --> */}
        <HeadingHunting />
        {/* <!-- Headhunting in End --> */}
        <CallToAction />
        {/* Blog start here */}
        <LatestUpdates className="container-fluid c-pad-x" />
      </>
    </div>
  );
};

export default ServiceTemplate1;
