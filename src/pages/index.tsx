import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import CustomHead from "@/components/Head";
import meta from "@/meta/meta.json";
import Head from "next/head";
const LatestUpdates = dynamic(() => import("../components/LatestUpdates"));

const OurExpertise = dynamic(() => import("@/components/ourExpertise"));

const SuccessStories = dynamic(() => import("@/components/successStories"));
const MilestoneSlider = dynamic(
  () => import("@/utils/milestoneSlider/MilestoneSlider")
);

const CertificateSlider = dynamic(() =>
  import("@/utils/certificateSlider/CertificateSlider").then(m => m.CertificateSlider)
);
export default function Home() {
  const homePageSchema = `{
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
      "@id": "https://www.alliancerecruitmentagency.ae/#webpage",
      "url": "https://www.alliancerecruitmentagency.ae",
      "name": "Manpower Services – International Manpower Consultants In Dubai",
      "isPartOf": {
        "@id": "https://www.alliancerecruitmentagency.ae/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://www.alliancerecruitmentagency.ae/_next/image?url=%2Fassets%2Fimages%2Fheader%2Falliance-new-logo.png&w=384&q=75"
      },
      "inLanguage": "en-US",
      "datePublished": "2025-01-06T00:00:00+00:00",
      "dateModified": "2025-02-06T00:00:00+00:00",
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
        }
      ]
    }
  ]
}`;

  return (
    <div>
      <CustomHead {...meta["homepage"]} />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: homePageSchema }}
        />
      </Head>
      <>
        {/* <section className="HomePagebanner homepage-banner">
          <div className="banner-img">
            <Image
              width={1000}
              height={1000}
              src="/assets/images/homepage/banner-main.webp"
              alt="homepage banner"
              title="homepage banner"
              className="w-100 h-100"
              loading="eager"
            />
          </div>
          <div className="container-fluid c-pad-x">
            <div className="home-inner">
              <div className="row g-md-5">
                <div className="col-lg-6">
                  <div className="left-side">
                    <h1>
                      <span className="first-para">Most Trusted</span>
                      Recruitment Agency
                    </h1>
                    <p className="second-text d-none-mo color-gray">
                      Find the right talent for your UAE business.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-side">
                    <div className="box-wrapper bg-blue">
                      <h2 className="box-head">
                        Hire Top Global IT Remote Talent
                      </h2>
                      <p className="box-desc">
                        Get the most efficient IT project outsourcing service!
                      </p>
                      <Link
                        prefetch={false}
                        href="/contact-us/"
                        className="box-btn"
                      >
                        IT Outsource{" "}
                      </Link>
                    </div>
                    <div className="box-wrapper bg-prp">
                      <h2 className="box-head">
                        Find World-Class Top-Level Talent
                      </h2>
                      <p className="box-desc">
                        Find leaders with proven abilities to lead your
                        business!
                      </p>
                      <Link
                        prefetch={false}
                        href="/contact-us/"
                        className="box-btn"
                      >
                        Hire Top Talent
                      </Link>
                    </div>
                    <div className="box-wrapper bg-gray">
                      <h2 className="box-head">
                        Register and let your dream job
                        <br />
                        find you!
                      </h2>
                      <p className="box-desc">
                        Share your CV, career goals; find jobs coming your way!
                      </p>
                      <Link
                        prefetch={false}
                        href="https://www.alliancerecruitmentagency.com/job-seekers/"
                        className="box-btn"
                      >
                        Job Seekers
                      </Link>
                    </div>
                  </div>

                  <p className="second-text d-none-block my-3 text-center">
                    Find the right talent for your UAE business.
                  </p>
                </div>
              </div>
            </div>
            <div className="mobile-image d-none-block">
              <Image
                width={338}
                height={112}
                src="/assets/images/homepage/mobile-image.svg"
                alt="homepage banner"
                title="homepage banner"
                className="img-fluid "
                loading="eager"
              />
            </div>
          </div>
        </section> */}

        <section className="HomePagebanner homepage-banner">
          <div className="container-fluid c-pad-x">
            <div className="home-inner">
              <div className="row g-md-5">
                <div className="col-lg-6">
                  <div className="left-side">
                    <h1>
                      <span className="first-para">Most Trusted</span>
                      Recruitment Agency
                    </h1>
                    <p className="second-text d-none-mo color-gray">
                      Find the right talent for your UAE business.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-side">
                    <div className="box-wrapper bg-blue">
                      <h2 className="box-head">
                        Hire Top Global IT Remote Talent
                      </h2>
                      <p className="box-desc">
                        Get the most efficient IT project outsourcing service!
                      </p>
                      <Link
                        prefetch={false}
                        href="/contact-us/"
                        className="box-btn"
                      >
                        IT Outsource
                      </Link>
                    </div>
                    <div className="box-wrapper bg-prp">
                      <h2 className="box-head">
                        Find World-Class Top-Level Talent
                      </h2>
                      <p className="box-desc">
                        Find leaders with proven abilities to lead your
                        business!
                      </p>
                      <Link
                        prefetch={false}
                        href="/contact-us/"
                        className="box-btn"
                      >
                        Hire Top Talent
                      </Link>
                    </div>
                    <div className="box-wrapper bg-gray">
                      <h2 className="box-head">
                        Register and let your dream job find you!
                      </h2>
                      <p className="box-desc">
                        Share your CV, career goals; find jobs coming your way!
                      </p>
                      <Link
                        prefetch={false}
                        href="/job-seekers"
                        className="box-btn"
                      >
                        Job Seekers
                      </Link>
                    </div>
                  </div>

                  <p className="second-text d-none-block my-3 text-center">
                    Find the right talent for your UAE business.
                  </p>
                </div>
              </div>
            </div>

            {/* Add image with priority and optimized loading */}
            {/* <div className="banner-img">
              <Image
                width={1000}
                height={1000}
                src="/assets/images/homepage/banner-main.webp"
                alt="homepage banner"
                title="homepage banner"
                className="w-100 h-100"
                loading="eager" // This helps with faster loading
                priority // This helps with LCP by loading the image first
              />
            </div> */}
          </div>
        </section>

        <section className="trust-section">
          <div className="container-fluid c-pad-x">
            <div className="trust-wrapper">
              <div className="left-side">
                <div className="title-trust">
                  Trusted By Leading <br />
                  Brands And Startups
                </div>
              </div>
              <div className="right-side">
                <ul>
                  <li>
                    <Image
                      width={173}
                      height={74}
                      src="/assets/images/homepage/Wipro.svg"
                      alt="Wipro"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </li>
                  <li>
                    <Image
                      width={249}
                      height={106}
                      src="/assets/images/homepage/fujin.svg"
                      alt="Fujin"
                      className="img-fluid"
                      loading="eager"
                    />
                  </li>
                  <li>
                    <Image
                      width={248}
                      height={106}
                      src="/assets/images/homepage/benetton.svg"
                      alt="Benetton"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </li>
                  <li>
                    <Image
                      width={216}
                      height={92}
                      src="/assets/images/homepage/chanel.svg"
                      alt="Chanel"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </li>
                  <li>
                    <Image
                      width={205}
                      height={84}
                      src="/assets/images/homepage/parle.svg"
                      alt="Parle"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="hiraing-made">
          <div className="container-fluid c-pad-x">
            <h2 className="com-title heading-index">
              <strong>Hiring Made Easy</strong>
            </h2>

            <div className="hire-arrow-img">
              <Image
                width={1722}
                height={90}
                src="/assets/images/homepage/arrow-bg.svg"
                alt="Arrow"
                className="w-100 h-100"
                loading="lazy"
              />
            </div>

            <div className="row g-md-5 gy-4">
              <div className="col-md-4">
                <div className="hire-card">
                  <h3 className="hire-title">
                    {" "}
                    <span className="hire-count-mobile"> 1</span> Talk To An
                    Industry Expert
                  </h3>
                  <p className="hire-desc com-pera">
                    A strategic consultation leading to best-fit candidate
                    identification for specified roles
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="hire-card">
                  <h3 className="hire-title">
                    {" "}
                    <span className="hire-count-mobile"> 2</span> Find
                    Hand-Picked Applicants
                  </h3>
                  <p className="hire-desc com-pera">
                    Tech-enabled process comprising tests, screening, and
                    analysis leading to the selection of only the right talent
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="hire-card">
                  <h3 className="hire-title">
                    {" "}
                    <span className="hire-count-mobile"> 3</span> The Right-Fit
                    - Guaranteed
                  </h3>
                  <p className="hire-desc com-pera">
                    Get a shortlist of best-fit candidates within the shortest
                    possible time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <OurExpertise />

        <SuccessStories />

        <section className="container-fluid c-pad-x how-start py-50 desktop-section">
          <h2 className="com-title text-align-center">How to get started?</h2>
          <div className="">
            <p className="com-pera text-center" style={{ marginBottom: "0px" }}>
              The fastest way to get fully-vetted, assessed, right-fit
              candidates for any role, in any numbers.
            </p>
            <div className="d-flex justify-content-center">
              <div className="our-succestab mx-auto">
                <div
                  className="nav nav-pills"
                  id="started-v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link active"
                    id="started-v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#started-v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="started-v-pills-home"
                    aria-selected="true"
                  >
                    Recruitment
                  </button>
                  <button
                    className="nav-link"
                    id="started-v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#started-v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="started-v-pills-profile"
                    aria-selected="false"
                  >
                    Franchise
                  </button>
                  <button
                    className="nav-link"
                    id="started-v-pills-messages-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#started-v-pills-messages"
                    type="button"
                    role="tab"
                    aria-controls="started-v-pills-messages"
                    aria-selected="false"
                  >
                    RPO
                  </button>
                  <button
                    className="nav-link"
                    id="started-v-pills-settings-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#started-v-pills-settings"
                    type="button"
                    role="tab"
                    aria-controls="started-v-pills-settings"
                    aria-selected="false"
                  >
                    Staff Augmentation
                  </button>
                </div>
              </div>
            </div>
            <div className="tab-content-wrapper">
              <div className="tab-content" id="started-v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="started-v-pills-home"
                  role="tabpanel"
                  aria-labelledby="started-v-pills-home-tab"
                >
                  <div className="row g-md-5">
                    <div className="col-lg-6">
                      <div className="left-ac">
                        <div
                          className="accordion accordion-flush"
                          id="Recruitment"
                        >
                          <div className="accordion-item">
                            <div
                              className="accordion-header"
                              id="flush-headingOne"
                            >
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne"
                                aria-expanded="false"
                                aria-controls="flush-collapseOne"
                              >
                                <span className="blue-count"> 1 </span>
                                <span className="tab-16">
                                  {" "}
                                  Share Job Descriptions
                                </span>
                              </button>
                            </div>
                            <div
                              id="flush-collapseOne"
                              className="accordion-collapse collapse show"
                              aria-labelledby="flush-headingOne"
                              data-bs-parent="#Recruitment"
                            >
                              <div className="accordion-body">
                                <p className="com-pera mb-0 mb-0">
                                  {" "}
                                  Specify core competencies, best-match traits,
                                  culture-fit aspects, duties, and business
                                  needs.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <div
                              className="accordion-header"
                              id="flush-headingTwo"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo"
                                aria-expanded="false"
                                aria-controls="flush-collapseTwo"
                              >
                                <span className="blue-count"> 2 </span>
                                <span className="tab-16">
                                  Review And Shortlist
                                </span>
                              </button>
                            </div>
                            <div
                              id="flush-collapseTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="flush-headingTwo"
                              data-bs-parent="#Recruitment"
                            >
                              <div className="accordion-body">
                                <p className="com-pera mb-0">
                                  {" "}
                                  Find the desired number of vetted candidates
                                  meeting all requirements.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <div
                              className="accordion-header"
                              id="flush-headingThree"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree"
                                aria-expanded="false"
                                aria-controls="flush-collapseThree"
                              >
                                <span className="blue-count"> 3 </span>
                                <span className="tab-16">
                                  {" "}
                                  Interview And Hire
                                </span>
                              </button>
                            </div>
                            <div
                              id="flush-collapseThree"
                              className="accordion-collapse collapse"
                              aria-labelledby="flush-headingThree"
                              data-bs-parent="#Recruitment"
                            >
                              <div className="accordion-body">
                                <p className="com-pera mb-0">
                                  {" "}
                                  Leverage virtual screening and interviewing to
                                  speed up the selection process.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <div
                              className="accordion-header"
                              id="flush-heading4"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapse4"
                                aria-expanded="false"
                                aria-controls="flush-collapse4"
                              >
                                <span className="blue-count border-none">
                                  {" "}
                                  4{" "}
                                </span>
                                <span className="tab-16">
                                  {" "}
                                  Onboard and Manage
                                </span>
                              </button>
                            </div>
                            <div
                              id="flush-collapse4"
                              className="accordion-collapse collapse"
                              aria-labelledby="flush-heading4"
                              data-bs-parent="#Recruitment"
                            >
                              <div className="accordion-body">
                                <p className="com-pera mb-0">
                                  {" "}
                                  Get optimum support with onboarding new hires!
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="right-content">
                        <ul>
                          <li>
                            <Image
                              width={24}
                              height={24}
                              src="/assets/images/homepage/check-icon.svg"
                              alt="Check Icon"
                              priority={false}
                            />
                            <span>Top 3.5% Talent Network</span>
                          </li>
                          <li>
                            <Image
                              width={24}
                              height={24}
                              src="/assets/images/homepage/check-icon.svg"
                              alt="Check Icon"
                              priority={false}
                            />
                            <span>100+ High-in-demand Tech Skills</span>
                          </li>
                          <li>
                            <Image
                              width={24}
                              height={24}
                              src="/assets/images/homepage/check-icon.svg"
                              alt="Check Icon"
                              priority={false}
                            />
                            <span>70% First Interview Selection Ratio</span>
                          </li>
                          <li>
                            <Image
                              width={24}
                              height={24}
                              src="/assets/images/homepage/check-icon.svg"
                              alt="Check Icon"
                              priority={false}
                            />
                            <span>98% Job Acceptance Ratio</span>
                          </li>
                          <li>
                            <Image
                              width={24}
                              height={24}
                              src="/assets/images/homepage/check-icon.svg"
                              alt="Check Icon"
                              priority={false}
                            />
                            <span>2X Employee Retention Rate</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <Link
                      prefetch={false}
                      href=" /contact-us/"
                      className="blue-btn"
                    >
                      Hire Talent
                    </Link>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="started-v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="started-v-pills-profile-tab"
                >
                  <div className="row g-md-5">
                    <div className="col-lg-6">
                      <div className="left-ac">
                        <div
                          className="accordion accordion-flush"
                          id="Franchise"
                        >
                          <div className="accordion-item">
                            <div
                              className="accordion-header"
                              id="Franchise-flush-headingOne"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#Franchise-flush-collapseOne"
                                aria-expanded="false"
                                aria-controls="Franchise-flush-collapseOne"
                              >
                                <span className="blue-count"> 1 </span>
                                <span className="tab-16">
                                  {" "}
                                  Connect and Discover
                                </span>
                              </button>
                            </div>
                            <div
                              id="Franchise-flush-collapseOne"
                              className="accordion-collapse collapse"
                              aria-labelledby="Franchise-flush-headingOne"
                              data-bs-parent="#Recruitment"
                            >
                              <div className="accordion-body">
                                <p className="com-pera mb-0">
                                  {" "}
                                  Contact us and discover what it takes to
                                  launch your own recruitment franchise.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <div
                              className="accordion-header"
                              id="Franchise-flush-headingTwo"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#Franchise-flush-collapseTwo"
                                aria-expanded="false"
                                aria-controls="Franchise-flush-collapseTwo"
                              >
                                <span className="blue-count"> 2 </span>
                                <span className="tab-16"> Fast Assessment</span>
                              </button>
                            </div>
                            <div
                              id="Franchise-flush-collapseTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="Franchise-flush-headingTwo"
                              data-bs-parent="#Recruitment"
                            >
                              <div className="accordion-body">
                                <p className="com-pera mb-0">
                                  {" "}
                                  Follow the steps for a systematic, transparent
                                  assessment of your capacities.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <div
                              className="accordion-header"
                              id="Franchise-flush-headingThree"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#Franchise-flush-collapseThree"
                                aria-expanded="false"
                                aria-controls="Franchise-flush-collapseThree"
                              >
                                <span className="blue-count"> 3 </span>
                                <span className="tab-16"> Proposal Review</span>
                              </button>
                            </div>
                            <div
                              id="Franchise-flush-collapseThree"
                              className="accordion-collapse collapse"
                              aria-labelledby="Franchise-flush-headingThree"
                              data-bs-parent="#Recruitment"
                            >
                              <div className="accordion-body">
                                <p className="com-pera mb-0">
                                  {" "}
                                  Send your proposal and required documents;
                                  give us a few days.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <div
                              className="accordion-header"
                              id="Franchise-flush-heading4"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#Franchise-flush-collapse4"
                                aria-expanded="false"
                                aria-controls="Franchise-flush-collapse4"
                              >
                                <span className="blue-count border-none">
                                  {" "}
                                  4{" "}
                                </span>
                                <span className="tab-16">
                                  {" "}
                                  Join and Launch Business
                                </span>
                              </button>
                            </div>
                            <div
                              id="Franchise-flush-collapse4"
                              className="accordion-collapse collapse"
                              aria-labelledby="Franchise-flush-heading4"
                              data-bs-parent="#Recruitment"
                            >
                              <div className="accordion-body">
                                <p className="com-pera mb-0">
                                  {" "}
                                  Post approval, get full-fledged support to run
                                  the business and earn a great ROI.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="right-content">
                        <ul>
                          <li>
                            <Image
                              width={24}
                              height={24}
                              src="/assets/images/homepage/check-icon.svg"
                              alt="Check Icon"
                              priority={false}
                            />
                            <span>Full-Fledged Training</span>
                          </li>
                          <li>
                            <Image
                              width={24}
                              height={24}
                              src="/assets/images/homepage/check-icon.svg"
                              alt="Check Icon"
                              priority={false}
                            />
                            <span>Marketing, Sales Support</span>
                          </li>
                          <li>
                            <Image
                              width={24}
                              height={24}
                              src="/assets/images/homepage/check-icon.svg"
                              alt="Check Icon"
                              priority={false}
                            />
                            <span>Excellent ROI</span>
                          </li>
                          <li>
                            <Image
                              width={24}
                              height={24}
                              src="/assets/images/homepage/check-icon.svg"
                              alt="Check Icon"
                              priority={false}
                            />
                            <span>Fast Growth</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <Link
                      prefetch={false}
                      href=" /franchise-enquiry/"
                      className="blue-btn"
                    >
                      Start Franchise
                    </Link>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="started-v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="started-v-pills-messages-tab"
                >
                  <div className="row g-md-5">
                    <div className="col-lg-6">
                      <div className="left-ac">
                        <div className="accordion accordion-flush" id="rpo">
                          <div className="accordion-item">
                            <div
                              className="accordion-header"
                              id="rpo-flush-headingOne"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#rpo-flush-collapseOne"
                                aria-expanded="false"
                                aria-controls="rpo-flush-collapseOne"
                              >
                                <span className="blue-count"> 1 </span>
                                <span className="tab-16"> Consult</span>
                              </button>
                            </div>
                            <div
                              id="rpo-flush-collapseOne"
                              className="accordion-collapse collapse"
                              aria-labelledby="rpo-flush-headingOne"
                              data-bs-parent="#rpo"
                            >
                              <div className="accordion-body">
                                <p className="com-pera mb-0">
                                  {" "}
                                  Discover flexible service models and huge
                                  business benefits!
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <div
                              className="accordion-header"
                              id="rpo-flush-headingTwo"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#rpo-flush-collapseTwo"
                                aria-expanded="false"
                                aria-controls="rpo-flush-collapseTwo"
                              >
                                <span className="blue-count"> 2 </span>
                                <span className="tab-16"> Assess</span>
                              </button>
                            </div>
                            <div
                              id="rpo-flush-collapseTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="rpo-flush-headingTwo"
                              data-bs-parent="#rpo"
                            >
                              <div className="accordion-body">
                                <p className="com-pera mb-0">
                                  {" "}
                                  Know the facts - savings, operational methods,
                                  everything there needs to be.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <div
                              className="accordion-header"
                              id="rpo-flush-headingThree"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#rpo-flush-collapseThree"
                                aria-expanded="false"
                                aria-controls="rpo-flush-collapseThree"
                              >
                                <span className="blue-count"> 3 </span>
                                <span className="tab-16"> Implement</span>
                              </button>
                            </div>
                            <div
                              id="rpo-flush-collapseThree"
                              className="accordion-collapse collapse"
                              aria-labelledby="rpo-flush-headingThree"
                              data-bs-parent="#rpo"
                            >
                              <div className="accordion-body">
                                <p className="com-pera mb-0">
                                  {" "}
                                  Select your recruiter team and implement the
                                  RPO model.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <div
                              className="accordion-header"
                              id="rpo-flush-heading4"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#rpo-flush-collapse4"
                                aria-expanded="false"
                                aria-controls="rpo-flush-collapse4"
                              >
                                <span className="blue-count border-none">
                                  {" "}
                                  4{" "}
                                </span>
                                <span className="tab-16"> Measure</span>
                              </button>
                            </div>
                            <div
                              id="rpo-flush-collapse4"
                              className="accordion-collapse collapse"
                              aria-labelledby="rpo-flush-heading4"
                              data-bs-parent="#rpo"
                            >
                              <div className="accordion-body">
                                <p className="com-pera mb-0">
                                  {" "}
                                  Measure your ROI and benefits through
                                  real-time metrics and insights.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="right-content">
                        <ul>
                          <li>
                            <Image
                              width={100}
                              height={100}
                              src="/assets/images/homepage/check-icon.svg"
                              alt="Check Icon"
                              priority={false}
                            />
                            <span>40%-60% Savings (HR Costs)</span>
                          </li>
                          <li>
                            <Image
                              width={24}
                              height={24}
                              src="/assets/images/homepage/check-icon.svg"
                              alt="Check Icon"
                              priority={false}
                            />
                            <span>Flexible, Affordable Pricing</span>
                          </li>
                          <li>
                            <Image
                              width={24}
                              height={24}
                              src="/assets/images/homepage/check-icon.svg"
                              alt="Check Icon"
                              priority={false}
                            />
                            <span>40%-65% Less Time To Hire</span>
                          </li>
                          <li>
                            <Image
                              width={24}
                              height={24}
                              src="/assets/images/homepage/check-icon.svg"
                              alt="Check Icon"
                              priority={false}
                            />
                            <span>100% Compliant</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <Link
                      prefetch={false}
                      href=" /contact-us/"
                      className="blue-btn"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="started-v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="started-v-pills-settings-tab"
                >
                  <div className="row g-md-5">
                    <div className="col-lg-6">
                      <div className="left-ac">
                        <div
                          className="accordion accordion-flush"
                          id="staff-augmentation"
                        >
                          <div className="accordion-item">
                            <div
                              className="accordion-header"
                              id="staff-augmentation-flush-headingOne"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#staff-augmentation-flush-collapseOne"
                                aria-expanded="false"
                                aria-controls="staff-augmentation-flush-collapseOne"
                              >
                                <span className="blue-count"> 1 </span>
                                <span className="tab-16">
                                  {" "}
                                  Share Talent Needs
                                </span>
                              </button>
                            </div>
                            <div
                              id="staff-augmentation-flush-collapseOne"
                              className="accordion-collapse collapse"
                              aria-labelledby="staff-augmentation-flush-headingOne"
                              data-bs-parent="#staff-augmentation"
                            >
                              <div className="accordion-body">
                                <p className="com-pera mb-0">
                                  {" "}
                                  Share details about the roles, number of
                                  people, project length, and hiring process.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <div
                              className="accordion-header"
                              id="staff-augmentation-flush-headingTwo"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#staff-augmentation-flush-collapseTwo"
                                aria-expanded="false"
                                aria-controls="staff-augmentation-flush-collapseTwo"
                              >
                                <span className="blue-count"> 2 </span>
                                <span className="tab-16">
                                  {" "}
                                  Find A Shortlist
                                </span>{" "}
                              </button>
                            </div>
                            <div
                              id="staff-augmentation-flush-collapseTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="staff-augmentation-flush-headingTwo"
                              data-bs-parent="#staff-augmentation"
                            >
                              <div className="accordion-body">
                                <p className="com-pera mb-0">
                                  Get a shortlist of best-fit candidates to
                                  fulfill staffing needs.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <div
                              className="accordion-header"
                              id="staff-augmentation-flush-headingThree"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#staff-augmentation-flush-collapseThree"
                                aria-expanded="false"
                                aria-controls="staff-augmentation-flush-collapseThree"
                              >
                                <span className="blue-count"> 3 </span>
                                <span className="tab-16">
                                  {" "}
                                  Screen and Finalize
                                </span>
                              </button>
                            </div>
                            <div
                              id="staff-augmentation-flush-collapseThree"
                              className="accordion-collapse collapse"
                              aria-labelledby="staff-augmentation-flush-headingThree"
                              data-bs-parent="#staff-augmentation"
                            >
                              <div className="accordion-body">
                                <p className="com-pera mb-0">
                                  {" "}
                                  Find a systematic process to screen,
                                  interview, and finalize new hires
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <div
                              className="accordion-header"
                              id="staff-augmentation-flush-heading4"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#staff-augmentation-flush-collapse4"
                                aria-expanded="false"
                                aria-controls="staff-augmentation-flush-collapse4"
                              >
                                <span className="blue-count border-none">
                                  {" "}
                                  4{" "}
                                </span>
                                <span className="tab-16">
                                  Agree and Implement
                                </span>{" "}
                              </button>
                            </div>
                            <div
                              id="staff-augmentation-flush-collapse4"
                              className="accordion-collapse collapse"
                              aria-labelledby="staff-augmentation-flush-heading4"
                              data-bs-parent="#staff-augmentation"
                            >
                              <div className="accordion-body">
                                <p className="com-pera mb-0">
                                  {" "}
                                  Upon selection, review and sign contracts;
                                  your staff is ready to go Live.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="right-content">
                        <ul>
                          <li>
                            <Image
                              width={24}
                              height={24}
                              src="/assets/images/homepage/check-icon.svg"
                              alt="Check Icon"
                              priority={false}
                            />
                            <span>97% Interview To Hire Rates</span>{" "}
                          </li>
                          <li>
                            <Image
                              width={24}
                              height={24}
                              src="/assets/images/homepage/check-icon.svg"
                              alt="Check Icon"
                              priority={false}
                            />
                            <span>Short Time To Fill</span>
                          </li>
                          <li>
                            <Image
                              width={24}
                              height={24}
                              src="/assets/images/homepage/check-icon.svg"
                              alt="Check Icon"
                              priority={false}
                            />
                            <span>40%-60% Cost Savings</span>
                          </li>
                          <li>
                            <Image
                              width={24}
                              height={24}
                              src="/assets/images/homepage/check-icon.svg"
                              alt="Check Icon"
                              priority={false}
                            />
                            <span>99% Retention Rates</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <Link
                      prefetch={false}
                      href=" /contact-us/"
                      className="blue-btn"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* new */}
        <section className="best-talent py-50">
          <div className="container-fluid c-pad-x">
            <h2 className="com-title heading-index">
              Recruiting Insights for companies passionate about{" "}
              <br className="d-none-mo" /> hiring the best talent
            </h2>
            <div className="boxes-wrapper mt-4 ">
              <div
                className="row g-4 for-mobile boxes-wrapper-slider"
                id="Myslide"
              >
                <div className="col-lg-6">
                  <div className="box-inner-card">
                    <div className="best-img-wrapper">
                      <Link
                        aria-label="Skills To Look For"
                        prefetch={false}
                        href="/blog/key-skills-look-for-hiring-a-ceo/"
                      >
                        <Image
                          src="/assets/images/homepage/skills-to-look-when-hiring-ceo.svg"
                          alt="Key Skills To Look For When Hiring A CEO"
                          className="w-100 h-100"
                          width={858}
                          height={310}
                          priority={false}
                        />
                        <Image
                          width={100}
                          height={100}
                          src="/assets/images/homepage/best-logo.svg"
                          alt="Logo"
                          className="small-logo"
                          priority={false}
                        />
                      </Link>
                    </div>

                    <div className="best-body">
                      <span className="blue-text">
                        Blog &lt; Recruitment Process outsourcing (RPO)
                      </span>
                      <h3 className="best-head">
                        Key Skills To Look For When Hiring A CEO
                      </h3>
                      <h4>
                        <span className="com-pera my-3">
                          <span>By </span>Pallavi Chawla
                        </span>
                      </h4>
                      <p className="com-pera di-none-mo">
                        If you are considering hiring a CEO for the first time,
                        your business might definitely be at a point of high
                        growth potential – UAE-wide or global market expansion,
                        operations launch plans in new territories, business
                        plans for 60%-200% revenue surges in the coming years,
                        or inorganic expansion plans like mergers and takeovers.
                      </p>
                      <p className="com-pera mt-5 di-none-mo">8 Minute read</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 small-blog" id="addSlides">
                  <div className="row g-4">
                    <div className="col-md-6 childSlide">
                      <div className="box-inner-card">
                        <div className="best-img-wrapper">
                          <Link
                            aria-label="Latest 10 CFO Hiring "
                            prefetch={false}
                            href="/blog/latest-10-cfo-hiring-staffing-trends-2023/"
                          >
                            <Image
                              src="/assets/images/homepage/10-cfo-hiring-staffing-trend-2023.svg"
                              alt="Latest 10 CFO Hiring and Staffing Trends in 2023"
                              className="w-100 h-100"
                              width={397}
                              height={141}
                              priority={false}
                            />
                            <Image
                              width={100}
                              height={100}
                              src="/assets/images/homepage/best-logo.svg"
                              alt="Logo"
                              className="small-logo"
                              priority={false}
                            />
                          </Link>
                        </div>

                        <div className="best-body">
                          <span className="blue-text">
                            Blog &lt; Recruitment Trends
                          </span>
                          <h3 className="best-head">
                            Latest 10 CFO Hiring and Staffing Trends in 2023
                          </h3>
                          <h4>
                            <span className="com-pera my-3">
                              <span>By </span>Pallavi Chawla
                            </span>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 childSlide">
                      <div className="box-inner-card">
                        <div className="best-img-wrapper">
                          <Link
                            aria-label="Why Choose Logistics"
                            prefetch={false}
                            href="/blog/5-trends-cmo-role-cmo-recruiting-2023/"
                          >
                            <Image
                              src="/assets/images/homepage/why-choose-logistics-staffing-agency-for-business.svg"
                              alt="Why Choose Logistics Staffing Agency For Your Business"
                              className="w-100 h-100"
                              width={397}
                              height={141}
                              priority={false}
                            />
                            <Image
                              width={100}
                              height={100}
                              src="/assets/images/homepage/best-logo.svg"
                              alt="Logo"
                              className="small-logo"
                              priority={false}
                            />
                          </Link>
                        </div>

                        <div className="best-body">
                          <span className="blue-text">
                            Blog &lt; Recruitment Process ...
                          </span>
                          <h3 className="best-head">
                            5 Trends Shaping The CMO Role and CMO Recruiting in
                            2023
                          </h3>
                          <h4>
                            <span className="com-pera my-3">
                              <span>By </span>Pallavi Chawla
                            </span>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 childSlide">
                      <div className="box-inner-card">
                        <div className="best-img-wrapper">
                          <Link
                            aria-label="5 Trends Shaping"
                            prefetch={false}
                            href="/staffing-agency-dubai/"
                          >
                            <Image
                              src="/assets/images/homepage/trends-cmo-role-cmo-recruiting-2023.svg"
                              alt="5 Trends Shaping The CMO Role and CMO Recruiting in 2023"
                              className="w-100 h-100"
                              width={397}
                              height={141}
                              priority={false}
                            />
                            <Image
                              width={100}
                              height={100}
                              src="/assets/images/homepage/best-logo.svg"
                              alt="Logo"
                              className="small-logo"
                              priority={false}
                            />
                          </Link>
                        </div>

                        <div className="best-body">
                          <span className="blue-text">
                            Blog &lt; Hiring Tips, Recruitment
                          </span>
                          <h3 className="best-head">
                            Why Choose Logistics Staffing Agency For Your
                            Business
                          </h3>
                          <h4>
                            <span className="com-pera my-3">
                              <span>By </span>Pallavi Chawla
                            </span>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 childSlide">
                      <div className="box-inner-card">
                        <div className="best-img-wrapper">
                          <Link
                            aria-label="Fact VS Fiction"
                            prefetch={false}
                            href="/blog/facts-fiction-recruitment-process-outsoucrcing/"
                          >
                            <Image
                              src="/assets/images/homepage/fact-vs-fiction-rpo.svg"
                              alt="Fact VS Fiction: Recruitment Process Outsourcing – RPO"
                              className="w-100 h-100"
                              width={397}
                              height={141}
                              priority={false}
                            />
                            <Image
                              width={100}
                              height={100}
                              src="/assets/images/homepage/best-logo.svg"
                              alt="Logo"
                              className="small-logo"
                              priority={false}
                            />
                          </Link>
                        </div>

                        <div className="best-body">
                          <span className="blue-text">
                            Blog &lt; Hiring Tips, Recruitment
                          </span>
                          <h3 className="best-head">
                            Fact VS Fiction: Recruitment Process Outsourcing –
                            RPO
                          </h3>
                          <h4>
                            <span className="com-pera my-3">
                              <span>By </span>Pallavi Chawla
                            </span>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MilestoneSlider />
        {/* <!-- Our Milestone End --> */}
        <section>
          <div className="new-section">
            <div className="container">
              <div className="main-content">
                <h2 className="mb-4">
                  Interested in finding out how Alliance can support you?
                </h2>
                <ul className="mb-3">
                  <li>
                    Utilize the extensive network of the finest 3.5% talent
                  </li>
                  <li>
                    Achieve hiring speeds multiplied by 10 and enjoy cost
                    benefits of up to 40%
                  </li>
                  <li>
                    Achieving a remarkable 70% success rate from initial
                    candidate interview to final selection
                  </li>
                </ul>

                <h3 className="mb-4">Let’s talk!</h3>
                <Link
                  aria-label="cta"
                  prefetch={false}
                  href="https://calendly.com/allianceinternationalservices/30-mins-meeting-alliance-international-servic-gcc"
                  target="_blank"
                  className="cta-btn"
                >
                  Book Your Free Discovery Call
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ur Milestone and Achievements start --> */}

        <section className="certifications bg-gray py-50">
          <div className="container ">
            <h2 className="com-title heading-index">
              Certifications And Achievements
            </h2>
            <p className="com-pera text-center">
              Our global company has won several awards and recognitions in
              different countries.
              <strong>
                <Link prefetch={false} href="/contact-us/">
                  {" "}
                  Reach out to us{" "}
                </Link>
              </strong>
              for more information!
            </p>

            <CertificateSlider />
          </div>
        </section>

        <LatestUpdates className="container-fluid c-pad-x" />
      </>
    </div>
  );
}
