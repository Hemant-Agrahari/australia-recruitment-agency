import React from "react";
import Image from "next/image";
import Link from "next/link";
// duplicate phone input CSS removed; globally loaded in _app
import CustomHead from "@/components/Head";
import { Properties } from "csstype";
import meta from "../meta/meta.json";
import Banner from "@/components/Banner";
import HireTalent from "@/components/HireTalent";
import Head from "next/head";
interface ServicesProps { }
const Services: React.FC<ServicesProps> = () => {
  const hiddenStyle: Properties = {
    display: "none",
    visibility: "hidden",
  };

  const script1 = `{
        "@context": "https://schema.org",
        "@graph": [{
                "@type": "Organization",
                "@id": "https://www.alliancerecruitmentagency.ae/#organization",
                "name": "Alliance Recruitment Agency",
                "logo": {
                    "@type": "ImageObject",
                    "@id": "https://www.alliancerecruitmentagency.ae/#logo",
                    "url": "https://allianceae-10072.kxcdn.com/wp-content/uploads/2023/02/Alliance.ae_.png",
                    "caption": "Alliance Recruitment Agency",
                    "inLanguage": "en-US"
                }
            },
            {
                "@type": "WebSite",
                "@id": "https://www.alliancerecruitmentagency.ae/#website",
                "url": "https://www.alliancerecruitmentagency.ae/",
                "name": "Alliance Recruitment Agency",
                "publisher": {
                    "@id": "https://www.alliancerecruitmentagency.ae/#organization"
                },
                "inLanguage": "en-US"
            },
            {
                "@type": "ImageObject",
                "@id": "https://allianceae-10072.kxcdn.com/wp-content/uploads/2023/02/Alliance.ae_.png",
                "url": "https://allianceae-10072.kxcdn.com/wp-content/uploads/2023/02/Alliance.ae_.png",
                "width": "225",
                "height": "60",
                "inLanguage": "en-US"
            }, {
                "@type": "Person",
                "@id": "https://www.alliancerecruitmentagency.ae/author/allianceadmin/",
                "name": "Pallavi Chawla",
                "image":

                {
                    "@type": "ImageObject",
                    "@id": "https://allianceae-10072.kxcdn.com/wp-content/uploads/2021/05/aut-avtar.jpg",
                    "url": "https://allianceae-10072.kxcdn.com/wp-content/uploads/2021/05/aut-avtar.jpg",
                    "caption": "Pallavi Chawla",
                    "inLanguage": "en-US"
                },
                "sameAs": ["https://www.alliancerecruitmentagency.ae/"],
                "worksFor": {
                    "@id": "https://www.alliancerecruitmentagency.ae/#organization"
                }
            },
            {
                "@type": "WebPage",
                "@id": "https://www.alliancerecruitmentagency.ae/services/#webpage",
                "url": "https://www.alliancerecruitmentagency.ae/services/",
                "name": "Our Services - List Of Service Provided By Alliance Recruitment Agency",
                "datePublished": "2017-03-29 8:35",
                "dateModified": "2022-03-08 5:36",
                "author": {
                    "@id": "https://www.alliancerecruitmentagency.ae/author/allianceadmin/"
                },
                "isPartOf":

                {
                    "@id": "https://www.alliancerecruitmentagency.ae/#website"
                },
                "primaryImageOfPage":

                {
                    "@id": "https://allianceae-10072.kxcdn.com/wp-content/uploads/2023/02/Alliance.ae_.png"
                },
                "inLanguage": "en-US"
            }, {
                "@type": "Article",
                "headline": "Our Services - List Of Service Provided By Alliance Recruitment Agency",
                "datePublished": "2017-03-29 8:35",
                "dateModified": "2022-03-08 5:36",
                "author":

                {
                    "url": "https://www.alliancerecruitmentagency.ae/author/allianceadmin/",
                    "@type": "Person",
                    "name": "Pallavi Chawla"
                },
                "description": "Alliance Recruitment Agency deals in many sectors like IT Recruitment, RPO, CV Outsourcing, Contract Staffing and many more.",
                "name": "Our Services - List Of Service Provided By Alliance Recruitment Agency",
                "@id": "https://www.alliancerecruitmentagency.ae/services/#schema-1831",
                "isPartOf":

                {
                    "@id": "https://www.alliancerecruitmentagency.ae/services/#webpage"
                },
                "publisher":

                {
                    "@id": "https://www.alliancerecruitmentagency.ae/#organization"
                },
                "image":

                {
                    "@id": "https://allianceae-10072.kxcdn.com/wp-content/uploads/2023/02/Alliance.ae_.png"
                },
                "inLanguage": "en-US",
                "mainEntityOfPage": {
                    "@id": "https://www.alliancerecruitmentagency.ae/services/#webpage"
                }
            }
        ]
    }`;
  const script2 = `{
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Alliance Recruitment Agency",
        "image": "https://allianceae-10072.kxcdn.com/wp-content/uploads/2023/02/Alliance.ae_.png",
        "@id": "",
        "url": "https://www.alliancerecruitmentagency.ae/",
        "telephone": "+918980018741",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "B-707 MONDEAL SQUARE Sarkhej - Gandhinagar Hwy, Prahlad Nagar",
            "addressLocality": "Ahmedabad",
            "addressRegion": "Gujarat",
            "postalCode": "380015",
            "addressCountry": "India"
        },
        "sameAs": [
            "https://www.facebook.com/Alliancerecruitmentagency/",
            "https://www.youtube.com/channel/UCTWg4i7ZXx1NTJ59SP8Nxrw",
            "https://www.linkedin.com/company/alliance-recruitment-agency/",
            "https://twitter.com/career_alliance"
        ]
    }`;
  const script3 = `{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.alliancerecruitmentagency.ae/"
        }, {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.alliancerecruitmentagency.ae/services/"
        }]
    }`;
  return (
    <div>
      <CustomHead {...meta["services"]} />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: script1 }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: script2 }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: script3 }}
        />
      </Head>
      <>
        {/* <!-- main-banner start --> */}
        <Banner
          backgroundImage="/assets/images/location-banner.webp"
          title="Services"
          alt="Professional Recruitment Services in the UAE - Alliance Recruitment Agency"
        />
        {/* <!-- main-banner End --> */}
        {/* <!-- Hire talent start --> */}
        {/* <section className="hire-talent services-section">
          <div className="container">
            <div className="row g-4">
              <h2 className="com-title text-align-left">Services</h2>
              <div className="col-lg-6 col-md-6">
                <div className="hire-card">
                  <h3 className="hire-title mb-1">Manpower Recruitment</h3>
                  <p className="com-text">
                    <ul className="induster-ul">

                      <li className="com-text">
                        <Link href="/manpower-dubai/">Manpower Recruitment</Link>
                      </li>
                      <li className="com-text">
                        <Link href="/recruitment-dubai/">
                          Recruitment Services
                        </Link>
                      </li>
                      <li className="com-text">
                        <Link href="/recruitment-consultants-in-dubai/">
                          Recruitment Consultants
                        </Link>
                      </li>
                      <li className="com-text">
                        <Link href="/recruitment-agency-in-dubai/">
                          Recruitment Agency
                        </Link>
                      </li>

                    </ul>
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="hire-card">
                  <h3 className="hire-title mb-1">RPO Services</h3>
                  <p className="com-text">
                    <ul className="induster-ul">



                      <li className="com-text">
                        <Link href="/hr-consultants-in-dubai/">
                          HR Consultants
                        </Link>
                      </li>

                    </ul>
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="hire-card">
                  <h3 className="hire-title mb-1">Staffing Services</h3>
                  <p className="com-text">
                    <ul className="induster-ul">




                    </ul>
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="hire-card">
                  <h3 className="hire-title mb-1">
                    Immigration & Visa Services
                  </h3>
                  <p className="com-text">
                    <ul className="induster-ul">
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <!-- Hire talent End --> */}
        {/* <!-- Accountant Hiring start --> */}
        <section className=" ">
          <div className="new-section">
            <div className="container">
              <div className="main-content">
                <h2 className="mb-4">
                  Interested in finding out how Alliance can support you?
                </h2>
                <ul className="mb-3">
                  <li className="mb-3 fontEpilogue">
                    Utilize the extensive network of the finest 3.5% talent
                  </li>
                  <li className="mb-3 fontEpilogue">
                    Achieve hiring speeds multiplied by 10 and enjoy cost
                    benefits of up to 40%
                  </li>
                  <li className="mb-3 fontEpilogue">
                    Achieving a remarkable 70% success rate from initial
                    candidate interview to final selection
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
        {/* <noscript dangerouslySetInnerHTML={{ __html: tagmanager }} /> */}
      </>
    </div >
  );
};
export default Services;
