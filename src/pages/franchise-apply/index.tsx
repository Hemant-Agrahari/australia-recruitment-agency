"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import FranchiseWhatsappCta from "../../components/FranchiseWhatsappCta/franchise-whatsapp-cta";
import FranchiseForm from "../../components/FranchiseApplyForm/index";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import FranchiseContactForm from "@/components/FranchiseApplyContactForm";
import Head from "next/head";

const AllianceFranchisePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>
          Own a Recruitment Business in UAE with Alliance Recruitment Agency
        </title>
        <meta
          name="description"
          content="Launch your own recruitment business with Alliance Staffing Franchise in the UAE. Increase your earnings with global resources, expertise, & dedicated support."
        />
        <meta name="publisher" content="Alliance International Services" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.alliancerecruitmentagency.ae/franchise-apply" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Own a Recruitment Business in UAE with Alliance Recruitment Agency"
        />
        <meta
          property="og:description"
          content="Launch your own recruitment business with Alliance Staffing Franchise in the UAE. Increase your earnings with global resources, expertise, & dedicated support."
        />
        <meta
          property="og:url"
          content="https://www.alliancerecruitmentagency.ae/franchise-apply/"
        />

        <meta
          property="og:site_name"
          content="Alliance Recruitment Agency"
        />
        <meta
          property="og:image"
          content="https://allianceaeapi.alliancerecruitmentagency.ae/anniversary-logo-16-years.webp"
        />

        <meta property="og:image:type" content="image/jpeg/png" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Own a Recruitment Business in UAE with Alliance Recruitment Agency"
        />
        <meta
          name="twitter:description"
          content="Launch your own recruitment business with Alliance Staffing Franchise in the UAE. Increase your earnings with global resources, expertise, & dedicated support."
        />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                  "@type": "Service",
                  "@id": "https://www.alliancerecruitmentagency.ae/franchise-apply/#service",
                  "serviceType": "Boost your Earnings: Own a Recruitment Franchise!",
                  "name": "Boost your Earnings: Own a Recruitment Franchise!",
                  "provider": {
                    "@id": "https://www.alliancerecruitmentagency.ae/#employmentagency"
                  },
                  "description": "Launch your own recruitment business with Alliance Staffing Franchise in the UAE. Increase your earnings with global resources, expertise, & dedicated support."
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
                  "@id": "https://www.alliancerecruitmentagency.ae/franchise-apply/#webpage",
                  "url": "https://www.alliancerecruitmentagency.ae/franchise-apply",
                  "name": "Own a Recruitment Business in UAE with Alliance Recruitment Agency",
                  "isPartOf": {
                    "@id": "https://www.alliancerecruitmentagency.ae/#website"
                  },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://allianceaeapi.alliancerecruitmentagency.ae/anniversary-logo-16-years.webp"
                  },
                  "inLanguage": "en-US",
                  "datePublished": "2025-06-05T09:32:18.453Z",
                  "dateModified": "2025-06-05T09:41:13.333Z",
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
                      "name": "Boost your Earnings: Own a Recruitment Franchise!",
                      "item": "https://www.alliancerecruitmentagency.ae/franchise-apply"
                    }
                  ]
                }
              ]
            })
          }}
        />
      </Head>
      <main className="new-inner-pages-main">
        {/* Banner Section */}
        <section className="main-banner py-5">
          <div className="container">
            <div className="row align-items-center">
              {/* Text Content */}
              <div className="col-xl-12 col-lg-12">
                <div className="franchise-content-new">
                  <h1 className="mt-0">
                    Boost your Earnings: Own a Recruitment Franchise!
                  </h1>
                  <h2
                    className="fs-3 fw-semibold mt-3 mb-3"
                    style={{ color: "#1d1a33" }}
                  >
                    Begin Your Journey with Alliance – Contact Us Now!
                  </h2>
                  <p className="com-para">
                    Our yearly revenue of a standard Alliance International Services franchisee is $2 million.
                    Make a smart choice with Alliance—enjoy the perks of its strong reputation in the recruitment
                    and staffing world.
                    Find excellent business opportunities with us.
                    Our proven business model helps you achieve your business goals effectively.
                    If you're exploring ownership, why staffing franchise is a great option, Alliance offers a complete support system with full assistance and seamless access
                    to a vast client network and essential resources—the core of our staffing franchise's value.
                  </p>
                  <h5>Take the first step today!</h5>
                </div>
              </div>

              {/* Franchise Apply Contact Form */}
              <FranchiseContactForm type="F.A" formId="franchise-apply-header-form" />
            </div>
          </div>
        </section>
        {/* {Benifits of our staffing franchise section} */}
        <section className="comprehensive-support py-5 nitro-offscreen">
          <div className="container lazyloaded">
            <h2 className="fs-2 text-black fw-semibold text-center mt-0 mb-2 pb-2 pb-lg-3 mb-lg-4">
              Joining Our Staffing Franchise: Discover Exclusive Benefits
            </h2>
            <div className="row g-4">
              <div className="col-xl-4 col-lg-6">
                <div className="comprehensive-support-card text-center">
                  <img
                    alt="increased efficiency"
                    title="increased Efficiency"
                    height="54"
                    width="100%"
                    decoding="async"
                    src="/assets/images/new-page-images/increased-efficiency.svg"
                    style={{ width: "100%", objectFit: "contain" }}
                  />
                  <h3 className="small-title fs-24 text-black fw-semibold my-2 my-lg-3">
                    Accelerated Business Growth
                  </h3>
                  <p className="com-para">
                    Our strong client portfolio and ongoing support help attract more clients for the optimum growth of
                    your staffing and recruiting business.
                  </p>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6">
                <div className="comprehensive-support-card text-center">
                  <img
                    alt="cost effective"
                    title="Cost Effective"
                    height="54"
                    width="54"
                    decoding="async"
                    src="/assets/images/new-page-images/cost-effective.svg"
                  />
                  <h3 className="small-title fs-24 text-black fw-semibold my-2 my-lg-3">
                    Elevate Your Earnings
                  </h3>
                  <p className="com-para">
                    Use of advanced automation in talent acquisition helps in enabling Alliance Recruitment agency franchise
                    owners to earn between USD 7,000 and USD 12,000 per month per resource.
                    Thus, it is a lucrative franchise opportunity.
                  </p>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6">
                <div className="comprehensive-support-card text-center">
                  <img
                    alt="global reach"
                    title="Global Reach"
                    height="54"
                    width="54"
                    decoding="async"
                    src="/assets/images/new-page-images/global-reach.svg"
                  />
                  <h3 className="small-title fs-24 text-black fw-semibold my-2 my-lg-3">
                    Serving 60+ Countries
                  </h3>
                  <p className="com-para">
                    We have expanded our reach to over 60 countries. With this, we have about 3,000 recruitment agencies.
                    This demonstrates fast and efficient talent delivery across the world.
                  </p>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6">
                <div className="comprehensive-support-card text-center">
                  <img
                    alt="increased efficiency"
                    title="increased Efficiency"
                    height="54"
                    width="54"
                    decoding="async"
                    src="/assets/images/new-page-images/increased-efficiency.svg"
                  />
                  <h3 className="small-title fs-24 text-black fw-semibold my-2 my-lg-3">
                    All-in-one Platform
                  </h3>
                  <p className="com-para">
                    Our platform has all the tools you need in one spot.
                    This includes a way to manage your business, your own email, and live chat, so everything is easy to handle.
                  </p>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6">
                <div className="comprehensive-support-card text-center">
                  <img
                    alt="cost effective"
                    title="Cost Effective"
                    height="54"
                    width="54"
                    decoding="async"
                    src="/assets/images/new-page-images/cost-effective.svg"
                  />
                  <h3 className="small-title fs-24 text-black fw-semibold my-2 my-lg-3">
                    Global Opportunities
                  </h3>
                  <p className="com-para">
                    Connect with our global network, and you can access different talents in various jobs and areas.
                  </p>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6">
                <div className="comprehensive-support-card text-center">
                  <img
                    alt="global reach"
                    title="Global Reach"
                    height="54"
                    width="54"
                    decoding="async"
                    src="/assets/images/new-page-images/global-reach.svg"
                  />
                  <h3 className="small-title fs-24 text-black fw-semibold my-2 my-lg-3">
                    Training and Development
                  </h3>
                  <p className="com-para">
                    If you're wondering why the Alliance Recruitment Agency,
                    it's because we provide great training in sales, marketing, and
                    computers to help you improve your skills and grow your career.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* {why choose alliance franchise section} */}
        <section className="card-img-text franchise-box py-5 nitro-offscreen">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-6 col-lg-6 align-self-start order-2 order-lg-1 mt-3 mt-lg-0">
                <h2 className="com-title mt-0 mb-2 pb-2 pb-lg-3 mb-lg-4">
                  Why Choose Alliance Franchise?
                </h2>
                <p className="com-para">
                  Alliance helps you increase your income and enjoy the freedom of running your own business.
                  Moreover, our partnership provides access to advanced systems and reliable corporate support.
                </p>
                <p className="com-para">
                  This helps you build a strong and enjoyable recruitment business that brings good results.
                </p>
                <p className="com-para">
                  The figures are impressive!  Out of 50 franchisees, 18 (36%)
                  have crossed the average annual sales, and another 18 (36%)
                  have also exceeded the average yearly gross profit mentioned in the franchise disclosure document.
                </p>
                <p className="com-para">
                  We have built a strong presence in major Indian cities and international locations, including the UAE, Dubai, Saudi Arabia, USA, Canada, UK, Australia, and Europe.
                  These available markets give you a truly global perspective for your career journey or talent sourcing needs.
                </p>
                <p className="com-para">
                  Take the lead in the human resource industry – become our partner today and
                  start your own Alliance Recruitment agency franchise!
                </p>

                <div className="text-start mt-3 mt-lg-4 pt-3 pt-lg-4">
                  <a
                    href="/contact-us/"
                    className="btns mx-auto text-center btn_primary"
                  >
                    Let's Talk
                  </a>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 order-1 order-lg-2">
                <div className="franchise-box-img">
                  <a
                    href="https://youtu.be/AVwi10fnUFI"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="increased efficiency"
                      title="Why Choose Alliance Franchise?"
                      height="406"
                      width="560"
                      decoding="async"
                      src="/assets/images/new-page-images/why-use-us-for-our-franchise.png"
                      style={{ width: "100%" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* {Business model section} */}
        <section className="service-col py-5 nitro-offscreen">
          <div className="container">
            <h2 className="fs-2 text-black fw-semibold mt-0 mb-2 pb-2 pb-lg-3 mb-lg-4 text-center">
              The Unique Alliance Staffing Formula
            </h2>
            <div className="row g-4">
              <div className="col-xl-4 col-lg-6">
                <div className="service-card">
                  <div className="service-img">
                    <img
                      alt="designed-for-you"
                      width="70"
                      height="70"
                      decoding="async"
                      src="/assets/images/new-page-images/designed-for-you.svg"
                    />
                  </div>
                  <h3 className="small-title fs-24 text-black fw-semibold my-2 my-lg-3 py-1">
                    Increased Transparency
                  </h3>
                  <p className="com-para my-0">
                    An efficient communication keeps all the process transparent,
                    which helps in keeping all franchises well-informed throughout the entire process.
                  </p>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6">
                <div className="service-card">
                  <div className="service-img">
                    <img
                      alt="real-customer-satisfaction"
                      width="70"
                      height="70"
                      decoding="async"
                      src="/assets/images/new-page-images/real-customer-satisfaction.svg"
                    />
                  </div>
                  <h3 className="small-title fs-24 text-black fw-semibold my-2 my-lg-3 py-1">
                    Adaptive Technology
                  </h3>
                  <p className="com-para my-0">
                    Our new tools and modern methods boost workflow efficiency and help manage future changes,
                    tailored to fit the industries we serve employers in for better results.
                  </p>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6">
                <div className="service-card">
                  <div className="service-img">
                    <img
                      alt="your-brand-in-print"
                      width="70"
                      height="70"
                      decoding="async"
                      src="/assets/images/new-page-images/your-brand-in-print.svg"
                    />
                  </div>
                  <h3 className="small-title fs-24 text-black fw-semibold my-2 my-lg-3 py-1">
                    Cost Reduction
                  </h3>
                  <p className="com-para my-0">
                    The general staffing model at Alliance saves cost and ensures
                    quality process.
                  </p>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6">
                <div className="service-card">
                  <div className="service-img">
                    <img
                      alt="professional-expertise"
                      width="70"
                      height="70"
                      decoding="async"
                      src="/assets/images/new-page-images/professional-expertise.svg"
                    />
                  </div>
                  <h3 className="small-title fs-24 text-black fw-semibold my-2 my-lg-3 py-1">
                    Client Control
                  </h3>
                  <p className="com-para my-0">
                    Transparency makes management of the hiring process easy and helps connect with top talent specialists.
                  </p>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6">
                <div className="service-card">
                  <div className="service-img">
                    <img
                      alt="creative-communication"
                      width="70"
                      height="70"
                      decoding="async"
                      src="/assets/images/new-page-images/creative-communication.svg"
                    />
                  </div>
                  <h3 className="small-title fs-24 text-black fw-semibold my-2 my-lg-3 py-1">
                    Quick Turnaround
                  </h3>
                  <p className="com-para my-0">
                    Alliance's general staffing process ensures fast placements and quick responses, helping prevent delays in your projects.
                  </p>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6">
                <div className="service-card">
                  <div className="service-img">
                    <img
                      alt="excellent-deals"
                      width="70"
                      height="70"
                      decoding="async"
                      src="/assets/images/new-page-images/excellent-deals.svg"
                    />
                  </div>
                  <h3 className="small-title fs-24 text-black fw-semibold my-2 my-lg-3 py-1">
                    Strategic Support
                  </h3>
                  <p className="com-para my-0">
                    We give you complete plans, and our team of experts helps you guide throughout for your long-term growth goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <FranchiseWhatsappCta />

        {/* {Investment section} */}
        <section className="investment-col bg-white py-5 nitro-offscreen">
          <div className="container">
            <div className="investment-bg">
              <div className="row">
                <div className="col-xl-6 col-lg-6 align-self-start order-2 order-lg-1">
                  <div className="investment-box-inner">
                    <h2 className="com-title mt-0 mb-2 pb-2 pb-lg-3 mb-lg-4">
                      Alliance Franchise Earning Potential and Investment Opportunities
                    </h2>
                    <p className="com-para">
                      Prepare to establish a successful and respected business franchise:
                    </p>

                    <div className="franchise-support mt-3">
                      <ul className="Common-Challenges join-us-ul">
                        <li className="join-us-li d-flex gap-3">
                          <div className="number">
                            <img
                              alt="right-icon"
                              decoding="async"
                              src="/assets/images/new-page-images/right-icons.svg"
                            />
                          </div>
                          <div className="text-start">
                            <p className="com-para mt-0">
                              Alliance Staffing franchisees with one or more locations open for at least a year earn an average
                              of $2 million in annual revenue and $1 million in gross profit.
                            </p>
                          </div>
                        </li>

                        <li className="join-us-li d-flex gap-3">
                          <div className="number">
                            <img
                              alt="right-icon"
                              decoding="async"
                              src="/assets/images/new-page-images/right-icons.svg"
                            />
                          </div>
                          <div className="text-start">
                            <p className="com-para mt-0">
                              Our franchise fees are absolutely value for money.
                              So, investing into a steadily growing recruitment industry is a smart and accessible investment.
                              Choosing Alliance Staffing & Recruiting provides the benefit of a reliable business formula,
                              solid support framework, and helpful resales franchise resources—even for resales.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <p className="com-para mb-0">
                      Achieve all your entrepreneurial dreams with our general staffing model.
                    </p>
                    <p className="com-para mb-0">
                      Start with your own recruitment franchise.
                      Know all about the investment in an Alliance franchise and
                      start earning soon while providing valuable talent solutions everywhere.
                    </p>
                    <p className="com-para mb-0">
                      Partner with Alliance Staffing and reach your business goals in a supportive and expanding environment.
                    </p>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 mt-0 order-1 order-lg-2">
                  <div className="investment-img-col">
                    <img
                      alt="investment-earning-potential"
                      title="Story From Staffing Franchise Owner"
                      height="646"
                      width="818"
                      decoding="async"
                      src="/assets/images/new-page-images/investment-earning-potential.webp"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* {Global presence section } */}
        <section className="global-presence py-60 nitro-offscreen">
          <div className="container px-4">
            <h2 className="fs-2 text-black fw-semibold mt-0 mb-2 pb-2 pb-lg-3 mb-lg-4 text-center">
              Global Presence
            </h2>
            <div className="global-presence-img">
              <img
                alt="global-presence"
                height="550"
                width="1122"
                decoding="async"
                src="/assets/images/new-page-images/global-presence-ind.png"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </section>
        {/* {Client Review Section} */}
        <section className="client-reviews-col py-60">
          <div className="container">
            <div className="row align-items-center">
              {/* Left Column – Testimonials */}
              <div className="col-xl-6 col-lg-6 mt-3 mt-lg-0 order-2 order-lg-1">
                <div className="client-reviews-box-inner">
                  <h2 className="com-title mt-0 mb-2 pb-2 pb-lg-3 mb-lg-3">
                    Client Reviews
                  </h2>

                  <div
                    className="client-reviews-content"
                    style={{ cursor: "pointer" }}
                  >
                    <Swiper
                      modules={[Pagination, Autoplay]}
                      spaceBetween={20}
                      slidesPerView={1}
                      loop={true}
                      autoplay={{
                        delay: 3000, // milliseconds between slides
                        disableOnInteraction: false, // keep autoplay after user swipes
                      }}
                      pagination={{ clickable: true }}
                    >
                      <style jsx global>{`
                      .swiper-slide {
                        padding: 40px 0;
                      }
                    `}</style>
                      <style jsx>{`
                      :global(.swiper-pagination) {
                        position: absolute;
                        top: 20px;
                        left: 10px;
                        text-align: left;
                      }
                    `}</style>
                      <style jsx global>{`
                      .swiper-pagination-bullet {
                        width: 10px;
                        height: 10px;
                        background: #008dd2;
                        opacity: 1;
                      }
                      .swiper-pagination-bullet-active {
                        background: #000;
                        transform: scale(1.1);
                      }
                    `}</style>
                      <SwiperSlide>
                        <p className="com-para my-0">
                          Partnering with Alliance completely changed my career path.
                          Their support has been outstanding, and the training in sales and marketing was far better
                          than I expected. With their tools, resales franchise resources, and strong network,
                          I was able to attract clients quickly and start earning early.
                          The automated, easy-to-use platform helped me save time and focus on expanding my business,
                          all thanks to the guidance and encouragement of team Alliance!
                        </p>
                      </SwiperSlide>
                      <SwiperSlide>
                        <p className="com-para my-0">
                          Alliance holds a great reputation for being a credible staffing agency franchise from the day I heard about them.
                          The initial process was smooth, and they also provided access to all tools and resales franchise resources to run the business.
                          Within a few months, we became profitable, and now I earn a stable monthly income.
                          It is great to get the benefits of such flexibility.
                          Anyone who wants to get into a franchise business, Alliance Recruitment agency franchise should be the top choice,
                          for their strong ongoing support and real opportunities to grow.
                          This is a profitable business and thus also a smart decision for my future.
                        </p>
                      </SwiperSlide>
                      <SwiperSlide>
                        <p className="com-para my-0">
                          A game-changing partnership- Alliance staffing! From earning quickly to attracting clients,
                          every stage of training was provided by them.
                          They are well-versed with powerful tools and a global network,
                          which helped us generate over $8,000 per resource each month within the first few months.
                          They provided us with a user-friendly platform that saves time and lets us focus on business growth.
                          This is a clear example of ownership,
                          why staffing franchise works—giving you the support and resources to confidently run your own recruitment firm.
                        </p>
                      </SwiperSlide>
                      <SwiperSlide>
                        <p className="com-para my-0">
                          Alliance general staffing has occupied a global presence, which impressed me the most.
                          Their operations are spread across 60+ countries with thousands of partner agencies, allowing me to offer talent solutions across borders.
                          Clients appreciate the speed and quality we consistently deliver.
                          The business model is simple to follow, and the ongoing support makes a huge difference—I have never felt alone in this journey.
                          Owning a franchise with such international reach and strong earning potential is truly rewarding.
                          If you’re wondering why staffing franchises are a great choice, Alliance connects you to real opportunities worldwide.
                          I couldn’t have built this successful business without their expert guidance and continuous support.
                        </p>
                      </SwiperSlide>
                      <SwiperSlide>
                        <p className="com-para my-0">
                          Starting in the recruitment world was overwhelming at first,
                          but Alliance Recruitment Agency in the UAE made the journey smooth.
                          Their all-in-one platform simplified business management across available markets, and the training boosted my skills and confidence.
                          The real-time support was invaluable, helping me tackle challenges swiftly.
                          With their professional and responsive team, I felt fully supported.
                          Alliance provided everything I needed to succeed, making owning and managing my recruitment business
                          a rewarding experience from the very beginning.
                          Their deep understanding of the industries we serve employers in also helped me connect with the right clients and grow faster.
                        </p>
                      </SwiperSlide>
                      <SwiperSlide>
                        <p className="com-para my-0">
                          Getting into franchise collaboration felt overwhelming
                          at first. However, everything was so much smoother than
                          expected. The professionalism and optimization of the
                          team's process made business management so easy. Their
                          all-in-one platform made managing the business easy, and
                          the training gave me the skills and confidence I needed.
                          Alliance guided me through the steps of ownership why
                          staffing is a smart path, making owning and running my
                          recruitment business a rewarding experience from day
                          one.
                        </p>
                      </SwiperSlide>
                      <SwiperSlide>
                        <p className="com-para my-0">
                          After 8 years in HR, I wanted more freedom and growth.
                          Partnering with Alliance was the best decision I made.
                          Their step-by-step guidance, strong training in sales
                          and marketing, and powerful tools helped me smoothly
                          shift from a job to owning my own business. I was able
                          to use my HR skills in a bigger way and tap into the
                          available market effectively. Within a few months, I saw
                          real results. The support from the Alliance team has
                          been constant and reliable. Today, I run a successful
                          recruitment agency, and I'm proud of how far I've come.
                          Alliance general staffing truly made my entrepreneurial
                          dream a reality.
                        </p>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>

              {/* Right Column – Image */}
              <div className="col-xl-6 col-lg-6 order-1 order-lg-2">
                <img
                  style={{ width: "100%" }}
                  className="w-100 object-fit-contain"
                  alt="clients-logos"
                  height="541"
                  width="734"
                  decoding="async"
                  src="/assets/images/new-page-images/clients-logos.png"
                />
              </div>
            </div>
          </div>
        </section>

        {/* {Story From Staffing Franchise Owner} */}

        <section className="card-img-text staffing-franchise-box py-5 nitro-offscreen">
          <div className="container">
            <div className="row justify-content-between">
              {/* Left Column – Text Content */}
              <div className="col-xl-8 col-lg-8 align-self-start mt-3 mt-lg-0 order-2 order-lg-1">
                <div className="staffing-franchise-box-inner">
                  <h2 className="fs-2 text-black fw-semibold mt-0 mb-2 pb-2 pb-lg-3 mb-lg-3">
                    Story From Staffing Franchise Owner
                  </h2>

                  <p className="com-para">
                    A Successful Journey with Alliance Staffing Franchise in India
                  </p>
                  <p className="com-para">
                    After six months of my partnership with Alliance, I realized the benefits I got through them.
                    As a Franchisee/Business Partner in general staffing, I’ve had a great experience.
                    The new concept required continuous support in the initial months.
                    However, the Alliance team was so efficient in training that we got on the track quickly.
                    First, the agency made me more visible. Then, they guided me.
                    Whenever I was confused or stuck, their team, including leaders, helped things run without problems.
                    Special thanks to Kristina, Alex, Harry, Kyra, and Rahul.
                  </p>

                  <p className="com-para">
                    For building a business yourself, choosing Alliance is a favorable decision every time.
                    They were extremely helpful in supporting us, coordinating everything smoothly,
                    and completing tasks very quickly.
                  </p>

                  <p className="com-para">
                    Alliance has truly helped me believe in myself as a business owner.
                    Before partnering with them, I wasn’t sure if I could run a business on my own.
                    But with their guidance, training, and support, everything became easier and more manageable.
                    Their team is always ready to help, answer questions, and provide the tools I need to succeed.
                  </p>
                  <p className="com-para">
                    Thanks to Alliance general staffing, I’ve grown my business with confidence.
                    I plan to continue this journey with them, knowing they will always be there to support me
                    every step of the way.
                  </p>
                  <p className="com-para">
                    Choosing Alliance has proven to be a favorable decision for
                    building and scaling a business in the staffing industry.
                  </p>
                </div>
              </div>

              {/* Right Column – Image */}
              <div className="col-xl-4 col-lg-4 order-1 order-lg-2">
                <img
                  alt="story from staffing franchise owner"
                  title="Story From Staffing Franchise Owner"
                  height="528"
                  width="359"
                  decoding="async"
                  className="img-fluid"
                  src="/assets/images/new-page-images/partners-sitting-table-working-cafe.webp"
                />
              </div>
            </div>
          </div>
        </section>
        {/* {Statistics, Awards & Achievements Section} */}
        <section className="achievements-col py-60 nitro-offscreen">
          <div className="container">
            <h2 className="fs-2 text-black fw-semibold text-center mt-0 mb-2 pb-2 pb-lg-3 mb-lg-3">
              Statistics, Awards &amp; Achievements
            </h2>
            <p className="com-para text-center">
              We have served across 36+ countries across the world and our 50 years of combined experience have fulfilled more than 550,000 promises.
            </p>
            <p className="com-para text-center">
              We have a big network of more than 350 teams that are really good at their jobs. They have successfully filled over 5,000 high-level positions.
            </p>
            <p className="com-para text-center">
              This strong track record highlights the impressive earning potential Alliance recruitment offers to its franchisees.
            </p>
            <p className="com-para text-center">
              They also show why owning a staffing franchise is a great chance for new business owners.
            </p>

            {/* Brand Logos Carousel */}
            <div className="brand-logo-main owl-carousel top-rating my-3 my-lg-4 pb-3 pb-lg-4 d-flex gap-3 justify-content-center flex-wrap">
              <div className="brand-logo">
                <img
                  src="/assets/images/new-page-images/new-logo-brand-1.webp"
                  width="157"
                  height="158"
                  alt="Brand 1"
                  decoding="async"
                />
              </div>
              <div className="brand-logo">
                <img
                  src="/assets/images/new-page-images/new-logo-brand-2.webp"
                  width="156"
                  height="158"
                  alt="Brand 2"
                  decoding="async"
                />
              </div>
              <div className="brand-logo">
                <img
                  src="/assets/images/new-page-images/new-logo-brand-3.webp"
                  width="157"
                  height="158"
                  alt="Brand 3"
                  decoding="async"
                />
              </div>
              <div className="brand-logo">
                <img
                  src="/assets/images/new-page-images/new-logo-brand-4.webp"
                  width="157"
                  height="158"
                  alt="Brand 4"
                  decoding="async"
                />
              </div>
              <div className="brand-logo">
                <img
                  src="/assets/images/new-page-images/new-logo-brand-5.webp"
                  width="156"
                  height="158"
                  alt="Brand 5"
                  decoding="async"
                />
              </div>
              <div className="brand-logo">
                <img
                  src="/assets/images/new-page-images/new-logo-brand-6.webp"
                  width="156"
                  height="158"
                  alt="Brand 6"
                  decoding="async"
                />
              </div>
            </div>

            {/* Top Ratings Carousel */}
            <div className="top-rating-logo owl-carousel d-flex gap-2 justify-content-center flex-wrap">
              <div className="top-ratings">
                <div className="top-ratings-img text-center text-center">
                  <img
                    src="/assets/images/new-page-images/top-ratings-1.png"
                    width="268"
                    height="156"
                    alt="Top Rating 1"
                    decoding="async"
                  />
                  <img
                    src="/assets/images/new-page-images/top-ratings-5.png"
                    width="268"
                    height="156"
                    alt="Top Rating 5"
                    decoding="async"
                  />
                </div>
              </div>

              <div className="top-ratings">
                <div className="top-ratings-img text-center">
                  <img
                    src="/assets/images/new-page-images/top-ratings-2.png"
                    width="268"
                    height="156"
                    alt="Top Rating 2"
                    decoding="async"
                  />
                  <img
                    src="/assets/images/new-page-images/top-ratings-6.png"
                    width="268"
                    height="156"
                    alt="Top Rating 6"
                    decoding="async"
                  />
                </div>
              </div>

              <div className="top-ratings">
                <div className="top-ratings-img text-center">
                  <img
                    src="/assets/images/new-page-images/top-ratings-3.png"
                    width="268"
                    height="156"
                    alt="Top Rating 3"
                    decoding="async"
                  />
                  <img
                    src="/assets/images/new-page-images/top-ratings-7.png"
                    width="268"
                    height="156"
                    alt="Top Rating 7"
                    decoding="async"
                  />
                </div>
              </div>

              <div className="top-ratings">
                <div className="top-ratings-img text-center">
                  <img
                    src="/assets/images/new-page-images/top-ratings-4.png"
                    width="268"
                    height="156"
                    alt="Top Rating 4"
                    decoding="async"
                  />
                  <img
                    src="/assets/images/new-page-images/top-ratings-8.png"
                    width="268"
                    height="156"
                    alt="Top Rating 8"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* {Faq Section} */}
        <section className="faqs-steps-col my-5 py-5">
          <div className="container">
            <div className="row gy-3 py-60">
              <div className="col-lg-3">
                <h2 className="com-title mt-0 mb-2 pb-2 pb-lg-3 mb-lg-3 text-white">
                  FAQ / Steps{" "}
                  <span className="d-inline-block d-lg-block"> to apply</span>
                </h2>
              </div>
              <div className="col-lg-9 align-self-start mt-0">
                <div
                  className="accordion accordion-flush"
                  id="agencyFlushExample"
                >
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="agency-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#agency-collapseOne"
                        aria-expanded="false"
                        aria-controls="agency-collapseOne"
                      >
                        What kind of business model does Alliance use for its
                        franchise?
                      </button>
                    </h3>
                    <div
                      id="agency-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="agency-headingOne"
                      data-bs-parent="#agencyFlushExample"
                    >
                      <div className="accordion-body">
                        Alliance offers a general staffing model and recruitment franchise model. It focuses on providing talent solutions across multiple industries. The model is designed for entrepreneurs looking to build a scalable business. It offers opportunities to serve local, national, and international clients through a flexible and proven operational structure.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header" id="agency-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#agency-collapseTwo"
                        aria-expanded="false"
                        aria-controls="agency-collapseTwo"
                      >
                        Can you tell me more about Alliance as a franchisor?
                      </button>
                    </h3>
                    <div
                      id="agency-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="agency-headingTwo"
                      data-bs-parent="#agencyFlushExample"
                    >
                      <div className="accordion-body">
                        Alliance is a global leader in staffing & recruiting services, operating in over 60 countries. With years of industry experience, Alliance supports franchisees with innovative systems, ongoing guidance, and a trusted brand name in the recruitment and talent acquisition industry.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header" id="agency-headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#agency-collapseThree"
                        aria-expanded="false"
                        aria-controls="agency-headingThree"
                      >
                        Do franchisees receive exclusive territories with Alliance
                        staffing?
                      </button>
                    </h3>
                    <div
                      id="agency-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="agency-headingThree"
                      data-bs-parent="#agencyFlushExample"
                    >
                      <div className="accordion-body">
                        Yes, an Alliance Recruitment agency franchise grants its franchisees protected territories. This means you'll have exclusive rights to operate within a specific area, reducing competition from other franchisees and allowing you to focus on building strong client and candidate relationships in your designated available market.

                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header" id="agency-headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#agency-collapseFour"
                        aria-expanded="false"
                        aria-controls="agency-collapseFour"
                      >
                        How much will I need to invest in an Alliance Recruitment agency franchise?
                      </button>
                    </h3>
                    <div
                      id="agency-collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="agency-headingFour"
                      data-bs-parent="#agencyFlushExample"
                    >
                      <div className="accordion-body">
                        Investing in an Alliance franchise involves several types
                        of costs. These include:
                        <ul>
                          <li>1. Franchise Fee</li>
                          <li>2. Office Setup Costs</li>
                          <li>3. Initial Working Capital</li>
                          <li>4. Licensing and Legal Fees</li>
                          <li>5. Training and Onboarding</li>
                        </ul>
                        The cost includes a competitive franchise fee, setup expenses, and initial working capital. Exact investment varies by location and setup needs, but if you’re looking to become an Alliance business owner, you will find it offers high value at a reasonable entry cost, making it accessible for many entrepreneurs.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header" id="agency-headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#agency-collapseFive"
                        aria-expanded="false"
                        aria-controls="agency-collapseFive"
                      >
                        What kind of growth support does Alliance offer to
                        franchisees?
                      </button>
                    </h3>
                    <div
                      id="agency-collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="agency-headingFive"
                      data-bs-parent="#agencyFlushExample"
                    >
                      <div className="accordion-body">
                        Alliance provides ongoing business development support, including sales strategies, client acquisition tools, and access to a vast talent network. Regular coaching and system updates ensure you're equipped to grow your business confidently and meet available market demands.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header" id="agency-headingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#agency-collapseSix"
                        aria-expanded="false"
                        aria-controls="agency-collapseSix"
                      >
                        Am I allowed to expand and open additional Alliance
                        locations?
                      </button>
                    </h3>
                    <div
                      id="agency-collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="agency-headingSix"
                      data-bs-parent="#agencyFlushExample"
                    >
                      <div className="accordion-body">
                        Yes, franchisees who meet performance benchmarks can expand by opening additional offices. Alliance encourages multi-unit ownership for those looking to scale and offers support to ensure each location operates efficiently and aligns with brand standards and business goals. This growth opportunity also helps fill career resources more effectively across different regions, meeting client and candidate needs with greater reach.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header" id="agency-headingSeven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#agency-collapseSeven"
                        aria-expanded="false"
                        aria-controls="agency-collapseSeven"
                      >
                        What training will I receive when starting as a
                        franchisee?
                      </button>
                    </h3>
                    <div
                      id="agency-collapseSeven"
                      className="accordion-collapse collapse"
                      aria-labelledby="agency-headingSeven"
                      data-bs-parent="#agencyFlushExample"
                    >
                      <div className="accordion-body">
                        Alliance offers comprehensive initial training covering recruitment processes, sales techniques, tech tools, and operations. New franchisees also receive ongoing learning resources and mentorship to ensure they have the skills and knowledge to launch and grow their franchise successfully. If you're wondering why work Alliance Recruitment Agency, this strong training and support system is one of the key reasons.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header" id="agency-heading8">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#agency-collapse8"
                        aria-expanded="false"
                        aria-controls="agency-collapse8"
                      >
                        What’s the average yearly income for an Alliance franchise
                        owner?
                      </button>
                    </h3>
                    <div
                      id="agency-collapse8"
                      className="accordion-collapse collapse"
                      aria-labelledby="agency-heading8"
                      data-bs-parent="#agencyFlushExample"
                    >
                      <div className="accordion-body">
                        Franchisees with at least one year of operations average $2 million in annual revenue and $1 million in gross profit. Earnings vary depending on location, effort, and client base, but the potential for high returns is strong with Alliance.

                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header" id="agency-heading9">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#agency-collapse9"
                        aria-expanded="false"
                        aria-controls="agency-collapse9"
                      >
                        What makes staffing franchises a good industry to invest
                        in?
                      </button>
                    </h3>
                    <div
                      id="agency-collapse9"
                      className="accordion-collapse collapse"
                      aria-labelledby="agency-heading8"
                      data-bs-parent="#agencyFlushExample"
                    >
                      <div className="accordion-body">
                        The staffing industry continues to grow with rising demand for flexible, skilled talent. It offers recurring income, low overhead, and high margins. As businesses seek efficient hiring solutions, recruitment franchises remain a valuable and future-proof investment opportunity.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header" id="agency-heading10">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#agency-collapse10"
                        aria-expanded="false"
                        aria-controls="agency-collapse10"
                      >
                        What are the responsibilities of an Alliance franchise
                        owner?
                      </button>
                    </h3>
                    <div
                      id="agency-collapse10"
                      className="accordion-collapse collapse"
                      aria-labelledby="agency-heading10"
                      data-bs-parent="#agencyFlushExample"
                    >
                      <div className="accordion-body">
                        Franchise owners are expected to actively manage daily operations, build client relationships, and lead a small team. A commitment to customer service, sales, and team development is key. Alliance supports you, but your leadership drives your franchise’s success.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header" id="agency-heading11">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#agency-collapse11"
                        aria-expanded="false"
                        aria-controls="agency-collapse11"
                      >
                        What kind of continued operational support does Alliance
                        provide?
                      </button>
                    </h3>
                    <div
                      id="agency-collapse11"
                      className="accordion-collapse collapse"
                      aria-labelledby="agency-heading11"
                      data-bs-parent="#agencyFlushExample"
                    >
                      <div className="accordion-body">
                        Operational support includes:
                        <br />
                        Business reviews
                        <br />
                        Performance coaching
                        <br />
                        System updates <br />
                      </div>
                      <div className="accordion-body">
                        Alliance provides continuous operational support, including business reviews, performance coaching, and system updates. You’ll receive regular check-ins and guidance to help you manage day-to-day tasks, improve efficiency, and stay aligned with industry standards and best practices as per the Franchise Disclosure Document.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header" id="agency-heading12">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#agency-collapse12"
                        aria-expanded="false"
                        aria-controls="agency-collapse12"
                      >
                        What is a typical day like for an Alliance franchisee?
                      </button>
                    </h3>
                    <div
                      id="agency-collapse12"
                      className="accordion-collapse collapse"
                      aria-labelledby="agency-heading12"
                      data-bs-parent="#agencyFlushExample"
                    >
                      <div className="accordion-body">
                        As an Alliance franchisee, you handle many tasks each day. You recruit and place candidates, make sales calls, and visit clients. With such a staffing model, you can manage daily operations while focusing on building strong relationships with clients and employees. With the help of resales franchise tools, you improve your business performance and drive steady growth.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header" id="agency-heading13">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#agency-collapse13"
                        aria-expanded="false"
                        aria-controls="agency-collapse13"
                      >
                        What kind of help will I get with marketing and sales?
                      </button>
                    </h3>
                    <div
                      id="agency-collapse13"
                      className="accordion-collapse collapse"
                      aria-labelledby="agency-heading13"
                      data-bs-parent="#agencyFlushExample"
                    >
                      <div className="accordion-body">
                        Alliance provides the following support for marketing-
                        <br />
                        Marketing templates <br />
                        Digital campaigns <br />
                        Lead generation tools <br />
                        Sales training <br />
                      </div>
                      <div className="accordion-body">
                        Alliance offers marketing templates, digital campaigns, lead generation tools, and sales training. You’ll get support in building your brand, reaching clients, and closing deals. Our expert team ensures you’re equipped with everything needed to grow your business.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header" id="agency-heading14">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#agency-collapse14"
                        aria-expanded="false"
                        aria-controls="agency-collapse14"
                      >
                        Is it possible to speak with current Alliance franchisees?
                      </button>
                    </h3>
                    <div
                      id="agency-collapse14"
                      className="accordion-collapse collapse"
                      aria-labelledby="agency-heading13"
                      data-bs-parent="#agencyFlushExample"
                    >
                      <div className="accordion-body">
                        Yes, Alliance encourages prospective franchisees to connect with current owners. Speaking with them helps you understand real experiences, challenges, and the support they receive. It’s a great way to get an honest view before you invest.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header" id="agency-heading15">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#agency-collapse15"
                        aria-expanded="false"
                        aria-controls="agency-collapse15"
                      >
                        How does Alliance stand out from other recruitment
                        franchises?
                      </button>
                    </h3>
                    <div
                      id="agency-collapse15"
                      className="accordion-collapse collapse"
                      aria-labelledby="agency-heading13"
                      data-bs-parent="#agencyFlushExample"
                    >
                      <div className="accordion-body">
                        Alliance stands out with its global reach, advanced systems, proven business model, and strong support network. Our franchisees benefit from a trusted brand, competitive earnings potential, and scalable operations—making us a preferred choice in the staffing industry.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* {Apply Franchise form } */}
        <FranchiseContactForm type="F.A" formId="franchise-apply-footer-form" />
      </main>
    </>

  );
};

export default AllianceFranchisePage;