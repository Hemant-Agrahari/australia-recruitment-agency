import { useEffect, useState } from "react";
import Link from "next/link";
// duplicate phone input CSS removed; globally loaded in _app
import CustomHead from "@/components/Head";
import meta from "../meta/meta.json";
import Banner from "@/components/Banner";
interface ThankYouProps { }
const ThankYou: React.FC<ThankYouProps> = () => {
  const sitemapSchema = {
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
      }
    ]
  };
  interface BlogData {
    _id: string;
    bannerTitle: string;
    slug: string;
  }

  const [siteMap, setSiteMap] = useState<null | BlogData[]>(null);

  const fetchSiteMap = async (type: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/getSiteMap?type=${type}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const res = await response.json();
      setSiteMap(res.data);

      console.log("Fetched Data:", res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div>
      <CustomHead {...meta["sitemap"]} />
      <>
        <Banner
          backgroundImage="/assets/images/banner.webp"
          title="Sitemap"
          alt="Banner: Sitemap"
        />
        <section className="mid-text-section contact-us-page">
          <div className="container">
            <div className="text-center">
              <ul
                className="nav nav-pills mb-5 contact-us-links"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item text-align-left" role="presentation">
                  <button
                    className="nav-link active text-align-left"
                    id="Recruitment-Services-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Recruitment Services
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="Locations-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Locations"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Locations
                  </button>
                </li>
                {/* <!-- <li className="nav-item" role="presentation">
                        <button className="nav-link" id="Virtual-Assistants-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-Virtual-Assistants" type="button" role="tab"
                            aria-controls="pills-contact" aria-selected="false">Virtual Assistants</button>
                    </li> --> */}
                {/* <!-- <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-Outsourcing-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-Outsourcing" type="button" role="tab" aria-controls="pills-contact"
                            aria-selected="false">IT Outsourcing</button>
                    </li> --> */}
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-Resources-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Resources"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    Resources
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-Blogs-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Blogs"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                    onClick={() => fetchSiteMap("blog")}
                  >
                    Blogs
                  </button>
                </li>
                {/* <!-- <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-Jobs-tab" data-bs-toggle="pill" data-bs-target="#pills-Jobs"
                            type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Jobs</button>
                    </li> --> */}
              </ul>
            </div>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="Recruitment-Services-tab"
              >
                <div className="container-fluid">
                  <div className="text-wrapper row gx-lg-5">
                    <div className="right-side col-lg-12 align-self-center">
                      <div className="hire-a-candidate-form">
                        <div className="row">
                          <div className="col-lg-6 p-0">
                            <h3 className="com-title text-align-left s-title mb-1">
                              Recruitment Services
                            </h3>
                            <ul className="custm-ul">
                              <li>
                                {" "}
                                <Link href="/recruitment-dubai/">
                                  Recruitment Dubai{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/recruitment-agency-in-dubai/">
                                  Recruitment Agency Dubai{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/recruitment-firms-in-dubai/">
                                  Recruitment Firms Dubai{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/recruitment-consultants-in-dubai/">
                                  Recruitment Consultants Dubai{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/retail-recruitment-agencies-in-dubai/">
                                  Retail Recruitment Agencies Dubai{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/hospitality-recruitment-agency-dubai/">
                                  Hospitality Recruitment Agency Dubai
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/marketing-recruitment-agency-dubai/">
                                  Marketing Recruitment Agency Dubai{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/canada-recruitment-agency-in-dubai/">
                                  Canada Recruitment Agency Dubai{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/engineering-recruitment-agencies-in-dubai/">
                                  Engineering Recruitment Agencies Dubai{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/banking-recruitment-agencies-in-dubai/">
                                  Banking Recruitment Agencies Dubai
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/indian-maids-recruitment-agencies-dubai/">
                                  Indian Maids Recruitment Agencies Dubai{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/c-level-recruitment-agency/">
                                  C-level Recruitment Agency{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/cto-recruitment-agency/">
                                  CTO Recruitment Agency{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/placement-agency-in-dubai/">
                                  Placement Agency Dubai
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/maid-recruitment-agency-in-dubai/">
                                  Maid Recruitment Agency Dubai{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/teacher-recruitment-agencies-in-dubai/">
                                  Teacher Recruitment Agencies Dubai
                                </Link>
                              </li>
                              {/* <li> <Link
                                                                href="/healthcare-recruitment-agencies-in-dubai/">
                                                                Healthcare Recruitment Agencies Dubai</Link></li> */}
                              <li>
                                {" "}
                                <Link href="/hotel-recruitment-agency-dubai/">
                                  Hotel Recruitment Agency Dubai
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/hr-consultants-in-dubai/">
                                  HR consultants Dubai{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/legal-recruitment-agencies-dubai/">
                                  Legal Recruitment Agencies Dubai{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/medical-recruitment-agency-dubai/">
                                  Medical Recruitment Agency Dubai{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/construction-recruitment-agencies-in-dubai/">
                                  Construction Recruitment Agencies Dubai{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/doctor-recruitment-dubai/">
                                  Doctor Recruitment Agency Dubai
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/employment-agencies-in-dubai/">
                                  Employment Agencies Dubai
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/executive-recruitment-dubai/">
                                  Executive Recruitment Dubai{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/hr-recruitment-agencies-dubai/">
                                  HR Recruitment Agencies Dubai
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/it-recruitment-agency-dubai/">
                                  IT Recruitment Agency Dubai
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/recruitment-agency-franchise/">
                                  Recruitment Agency Franchise{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/chief-executive-officer-recruitment-agency/">
                                  Chief Executive Office Recruiment Agency
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/dentist-recruitment-agencies-in-dubai/">
                                  Dentist Recruitment Agencies Dubai
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/dubai-oil-and-gas-recruitment-agencies/">
                                  Dubai Oil And Gas Recruitment Agencies
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/executive-chef-employment-agency/">
                                  Executive Chief Employment Agency{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/nursing-recruitment-agency-dubai/">
                                  Nursing Recruitment Agency Dubai{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/recruitment-agencies-in-dubai-for-foreigners/">
                                  Recruitment Agencies Dubai for Foreignersy{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/ship-crew-recruitment-agencies-in-dubai/">
                                  Ship Crew Recruitment Agencies Dubai
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-6 p-0">
                            <h3 className="com-title text-align-left s-title mb-1">
                              Head Hunters Services
                            </h3>
                            <ul className="custm-ul">
                              <li>
                                {" "}
                                <Link href="/headhunters-dubai/">
                                  Headhunters Dubai{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                              </li>
                              <li>
                                {" "}
                                <Link href="/executive-headhunters-in-dubai/">
                                  Executive Headhunters Dubai{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/cfo-headhunters/">
                                  CFO Headhunters{" "}
                                </Link>
                              </li>
                            </ul>

                            <h3 className="com-title text-align-left s-title mb-1">
                              Staffing Services
                            </h3>
                            <ul className="custm-ul">
                              <li>
                                {" "}
                                <Link href="/staffing-agency-dubai/">
                                  Staffing Agency Dubai{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/temporary-staffing-agencies-in-dubai/">
                                  Temporary Staffing Agencies Dubai{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/cxo-staffing-agency/">
                                  CXO Staffing Agency{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/it-staffing-companies-in-dubai/">
                                  IT Staffing Companies Dubai
                                </Link>
                              </li>
                            </ul>
                            <h3 className="com-title text-align-left s-title mb-1">
                              Manpower Services
                            </h3>
                            <ul className="custm-ul">
                              <li>
                                {" "}
                                <Link href="/manpower-agency-dubai/">
                                  Manpower Agency Dubai
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/manpower-dubai/">
                                  Manpower Dubai{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/manpower-company-in-dubai/">
                                  Manpower Company Dubai{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/asian-manpower-dubai/">
                                  Asian Manpower Dubai{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/ceo-manpower-agency/">
                                  CEO Manpower Agency
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/manpower-middle-east-dubai/">
                                  Manpower Middle East Dubai{" "}
                                </Link>
                              </li>
                            </ul>
                            <h3 className="com-title text-align-left s-title mb-1">
                              Executive Services
                            </h3>
                            <ul className="custm-ul">
                              <li>
                                {" "}
                                <Link href="/cto-executive-search/">
                                  CTO Executive Search{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/cfo-executive-search/">
                                  CFO Executive Search
                                </Link>
                              </li>
                            </ul>

                            <h3 className="com-title text-align-left s-title mb-1">
                              Hiring Services
                            </h3>
                            <ul className="custm-ul">
                              <li>
                                {" "}
                                <Link href="/hotel-hiring-in-dubai/">
                                  Hotel Hiring Dubai
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/ceo-hiring/">CEO Hiring </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/sous-chef-hiring-agency/">
                                  Sous Chef Hiring Agency
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/sushi-chef-hiring-agency/">
                                  Sushi Chef Hiring Agency
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/cxo-level-hiring/">
                                  CXO Level Hiring
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/indian-companies-hiring-in-dubai/">
                                  Indian Companies Hiring Dubai
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/accountant-hiring-in-dubai/">
                                  Accountant Hiring Dubai
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/driver-hiring-in-dubai/">
                                  Driver Hiring Dubai
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/dubai-hiring-agencies/">
                                  Dubai Hiring Agencies
                                </Link>
                              </li>{" "}
                              <li>
                                {" "}
                                <Link href="/dubai-nurse-hiring/">
                                  Dubai Nurse Hiring
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/hire-photographer-dubai/">
                                  Hire Photographer Dubai
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/hiring-in-dubai/ ">
                                  Hiring Dubai
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/cto-for-hire/">CTO for Hire</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade "
                id="pills-Locations"
                role="tabpanel"
                aria-labelledby="Locations-tab"
              >
                <div className="container-fluid">
                  <div className="text-wrapper row gx-lg-5">
                    <div className="right-side col-lg-12 align-self-center">
                      <div className="hire-a-candidate-form">
                        <div className="row">
                          <div className="col-lg-4 p-0">
                            <p> Locations</p>
                            <ul className="custm-ul">
                              <li>
                                {" "}
                                <Link href="/recruitment-agencies-jeddah/">
                                  Recruitment Agencies Jeddah{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/recruitment-agencies-oman/">
                                  Recruitment Agencies Oman{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/recruitment-agencies-bahrain/">
                                  Recruitment Agencies Bahrain{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/recruitment-agencies-kuwait/">
                                  Recruitment Agencies Kuwait
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/recruitment-agencies-qatar/">
                                  Recruitment Agencies Qatar
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/recruitment-agencies-abu-dhabi/">
                                  Recruitment Agencies Abu Dhabi
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/recruitment-agencies-riyadh/">
                                  Recruitment Agencies Riyadh{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/recruitment-agencies-sharjah/">
                                  Recruitment Agencies Sharjah
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade "
                id="pills-Resources"
                role="tabpanel"
                aria-labelledby="pills-Resources-tab"
              >
                <div className="container-fluid">
                  <div className="text-wrapper row gx-lg-5">
                    <div className="right-side col-lg-12 align-self-center">
                      <div className="hire-a-candidate-form">
                        <div className="row">
                          <p> Resources</p>
                          <div className="col-lg-6 p-0">
                            <ul className="custm-ul">
                              <li>
                                {" "}
                                <Link href="/privacy-policy">
                                  Privacy Policy{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/notice/">Notice </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/franchise-enquiry/">
                                  Franchise Enquiry{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/thank-you-franchise/">
                                  Franchise Thank You{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/thank-you/">
                                  Thank You For Contact{" "}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/thank-you-it-outsource/">
                                  {" "}
                                  Thank You It Outsource
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link href="/contact-us/">Contact Us </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade "
                id="pills-Blogs"
                role="tabpanel"
                aria-labelledby="pills-Blogs-tab"
              >
                <div className="container-fluid">
                  <div className="text-wrapper row gx-lg-5">
                    <div className="right-side col-lg-12 align-self-center">
                      <div className="hire-a-candidate-form">
                        <div className="row">
                          <div className="col-lg-12 p-0">
                            <p>
                              <Link href="/webblog/">Blogs</Link>
                            </p>

                            <ul className="custm-ul">
                              {siteMap && siteMap.length > 0 ? (
                                siteMap.map((item) => (
                                  <li key={item._id}>
                                    <Link href={`blog/${item.slug}`}>
                                      {item.bannerTitle || "Default Title"}
                                    </Link>
                                  </li>
                                ))
                              ) : (
                                <p
                                  className="text-white  w-100 "
                                  style={{
                                    color: "#008DD2",
                                    textAlign: "center",
                                  }}
                                >
                                  Loading...
                                </p>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(sitemapSchema) }}
        />
      </>
    </div>
  );
};
export default ThankYou;
