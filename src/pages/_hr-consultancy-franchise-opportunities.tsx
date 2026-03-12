import FranchiseCommonForm from '@/components/forms/franchiseCommonForm'
import React from 'react'
import CustomHead from '@/components/Head'
import meta from "../meta/meta.json"
import Link from 'next/link'
import data from "@/utils/data.json"
import FranchiseWhatsappCta from '@/components/FranchiseWhatsappCta/franchise-whatsapp-cta'
import Head from "next/head";

const Hrconsultancyfranchiseopportunities = () => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL
    const metadata = meta["hr-consultancy-franchise-opportunities"];
    const slug = "hr-consultancy-franchise-opportunities";

    return (
        <>
            <CustomHead {...metadata} />
            <Head>
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
                                        "@id": "https://www.alliancerecruitmentagency.ae/#logo",
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
                                    "@id": `https://www.alliancerecruitmentagency.ae/${slug}/#service`,
                                    "serviceType": "HR Consultancy Franchise",
                                    "name": metadata.title,
                                    "provider": {
                                        "@id": "https://www.alliancerecruitmentagency.ae/#employmentagency"
                                    },
                                    "description": metadata.description,
                                    "areaServed": {
                                        "@type": "Country",
                                        "name": "United Arab Emirates"
                                    },
                                    "category": "HR Consultancy Franchise Opportunities"
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
                                    "@id": `https://www.alliancerecruitmentagency.ae/${slug}/#webpage`,
                                    "url": `https://www.alliancerecruitmentagency.ae/${slug}`,
                                    "name": metadata.title,
                                    "isPartOf": {
                                        "@id": "https://www.alliancerecruitmentagency.ae/#website"
                                    },
                                    "inLanguage": "en-US",
                                    "datePublished": metadata.ogPublishedTime || "",
                                    "dateModified": metadata.ogModifiedTime || ""
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
                                            "name": "Franchise",
                                            "item": "https://www.alliancerecruitmentagency.ae/franchise-enquiry"
                                        },
                                        {
                                            "@type": "ListItem",
                                            "position": 3,
                                            "name": "HR Consultancy Franchise",
                                            "item": `https://www.alliancerecruitmentagency.ae/${slug}`
                                        }
                                    ]
                                }
                            ]
                        })
                    }}
                />
            </Head>
            <div className="franchise-enquiry-wrapper   ">
                {data?.bannerContent && data?.bannerTitle &&
                    <section className="main-banner py-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 align-self-center">
                                    <h1>{data?.bannerTitle}</h1>
                                    <p className="com-para" dangerouslySetInnerHTML={{ __html: data?.bannerContent }}></p>
                                </div>
                                <div className="col-lg-6">

                                    {data?.bannerImage &&
                                        <img
                                            className="img-fluid w-100"
                                            loading="lazy"
                                            alt={`${data?.bannerImageDetails.alt}`}
                                            title={`${data?.bannerImageDetails.title}`}
                                            src={`${backendUrl}/${data?.bannerImage}`}
                                            width={567}
                                            height={719}
                                        />
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                }
                <FranchiseCommonForm />
                {data?.cta1?.ctaTitle &&
                    <section className="start-with-us py-60 my-60 mb-0">
                        <div className="container">
                            <h2 className="com-title text-center pb-3">
                                {data?.cta1?.ctaTitle}
                            </h2>
                            <div className="contact-us-btn text-center"  >
                                <Link
                                    href={`${data?.cta1.ctaBtnLink}`}
                                >
                                    {data?.cta1.ctaBtnTitle}
                                </Link>
                            </div>
                        </div>
                    </section>
                }
                {data?.content[0]?.contentImage &&
                    <section className="card-img-text py-60 pb-0">
                        <div className="container">
                            <div className="row gy-4 pb-3">
                                <div className="col-lg-6 align-self-center">
                                    {data?.content[0]?.contentImage &&
                                        <img
                                            className="img-fluid w-100"
                                            loading="lazy"
                                            title={`${data?.content[0]?.imageTitle}`}
                                            alt={`${data?.content[0]?.imageAlt}`}
                                            src={`${backendUrl}/${data?.content[0]?.contentImage}`}
                                            width={567}
                                            height={719}
                                        />
                                    }
                                </div>
                                <div className="col-lg-6 ">
                                    <h2 className="com-title text-start mt-0 mb-3">
                                        {data?.content[0]?.contentTitle}
                                    </h2>
                                    <p className="com-para" dangerouslySetInnerHTML={{ __html: data?.content[0]?.contentText }}>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                {data?.franchiseSupport[0]?.contentTitle &&
                    <section className="we-can-join-us franchise-support py-60">
                        <div className="container">
                            <ul className="join-us-ul">
                                {data?.franchiseSupport?.length > 0 ? (
                                    data?.franchiseSupport.map((support: any, index: any) => (
                                        <li className="join-us-li" key={index}>
                                            <div className="number">{index + 1}</div>
                                            <div className="text-start">
                                                <div className="small-title text-start">{support.contentTitle}</div>
                                                <p className="com-para" dangerouslySetInnerHTML={{ __html: support.contentDesp }}></p>
                                            </div>
                                        </li>
                                    ))
                                ) : (
                                    <li className="join-us-li">
                                        <div className="text-start">
                                            <p className="com-para">No franchise support information available.</p>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </section>
                }<FranchiseWhatsappCta />
                {data?.franchiseSupport2?.franchiseSupportTitle &&
                    <section className="we-can-join-us franchise-support Common-Challenges py-60">
                        <div className="container">
                            <h2 className="com-title text-center py-3 mt-0 pt-0">
                                {data?.franchiseSupport2?.franchiseSupportTitle}
                            </h2>
                            <ul className="join-us-ul">
                                {data?.franchiseSupport2?.ListItems?.length > 0 ? (
                                    data?.franchiseSupport2.ListItems.map((item: any, index: any) => (
                                        <li className="join-us-li" key={index}>
                                            <div className="number">
                                                <noscript>
                                                    <img src="/assets/images/right-icons.svg" />
                                                </noscript>
                                                <img
                                                    className="lazyload"
                                                    src="/assets/images/right-icons.svg"
                                                    data-src="/assets/images/right-icons.svg"
                                                    alt={`Challenge icon ${index + 1}`} // Optional: alt attribute for accessibility
                                                />
                                            </div>
                                            <div className="text-start">
                                                <div className="small-title text-start">{item.contentTitle}</div>
                                                <p className="com-para" dangerouslySetInnerHTML={{ __html: item.contentDesp }}></p>
                                            </div>
                                        </li>
                                    ))
                                ) : (
                                    <li className="join-us-li">
                                        <div className="text-start">
                                            <p className="com-para">No common challenges information available.</p>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </section>}
                {data?.cta2?.ctaTitle &&
                    <section className="start-with-us py-60 my-60 mb-0">
                        <div className="container">
                            <h2 className="com-title text-center pb-3">
                                {data?.cta2.ctaTitle}

                            </h2>
                            <div className="contact-us-btn text-center"  >
                                <Link
                                    href={`${data?.cta2.ctaBtnLink}`}
                                >
                                    {data?.cta2.ctaBtnTitle}
                                </Link>
                            </div>
                        </div>
                    </section>
                }
                {data?.franchiseSupport3 &&
                    <section className="we-can-join-us franchise-support Common-Challenges py-60">
                        <div className="container">
                            <h2 className="com-title text-center py-3">
                                {data?.franchiseSupport3.franchiseSupportTitle}
                            </h2>
                            <ul className="join-us-ul">
                                {data?.franchiseSupport3.ListItems.map((item: any, index: any) => (
                                    <li className="join-us-li" key={index}>
                                        <div className="number">
                                            <noscript>
                                                <img src="/assets/images/right-icons.svg" />
                                            </noscript>
                                            <img
                                                className="lazyload"
                                                src="/assets/images/right-icons.svg"
                                                data-src="/assets/images/right-icons.svg"
                                            />
                                        </div>
                                        <div className="text-start">
                                            <div className="small-title text-start">{item.contentTitle}</div>
                                            <p className="com-para" dangerouslySetInnerHTML={{ __html: item.contentDesp }}></p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                }
                {data?.content2[0]?.contentTitle &&
                    <section className="card-img-text py-60 pb-0">
                        <div className="container">
                            <div className="row gy-4 pb-3">
                                <div className="col-lg-6 align-self-center">
                                    <h2 className="com-title text-start mt-0 mb-3">
                                        {data?.content2[0]?.contentTitle}
                                    </h2>
                                    <p className="com-para" dangerouslySetInnerHTML={{ __html: data?.content2[0]?.contentText }}>

                                    </p>
                                </div>
                                <div className="col-lg-6 align-self-center">
                                    {data?.content2[0]?.contentImage &&
                                        <img
                                            className="img-fluid w-100"
                                            loading="lazy"
                                            title={`${data?.content2[0]?.imageTitle}`}
                                            alt={`${data?.content2[0]?.imageAlt}`}
                                            src={`${backendUrl}/${data?.content2[0]?.contentImage}`}
                                            width={567}
                                            height={719}
                                        />
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                }
                {data?.content3[0]?.contentTitle &&
                    <section className="card-img-text py-60 pb-0">
                        <div className="container">
                            <div className="row gy-4 pb-3">
                                <div className="col-lg-6 align-self-center">
                                    {data?.content3[0]?.contentImage &&
                                        <img
                                            className="img-fluid w-100"
                                            loading="lazy"
                                            title={`${data?.content3[0]?.imageTitle}`}
                                            alt={`${data?.content3[0]?.imageAlt}`}
                                            src={`${backendUrl}/${data?.content3[0]?.contentImage}`}
                                            width={567}
                                            height={719}
                                        />
                                    }
                                </div>
                                <div className="col-lg-6 align-self-center">
                                    <h2 className="com-title text-start mt-0 mb-3">
                                        {data?.content3[0]?.contentTitle}
                                    </h2>
                                    <p className="com-para" dangerouslySetInnerHTML={{ __html: data?.content3[0]?.contentText }}>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                <section className="count-number-sec py-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 col-lg-3">
                                <div className="count-nuber">12,000 +</div>
                                <p className="com-para text-center">
                                    Recruitment Assignments Completed
                                </p>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="count-nuber">8,000 +</div>
                                <p className="com-para text-center"> Satisfied Clients</p>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="count-nuber">25 +</div>
                                <p className="com-para text-center">
                                    Countries Recognized Presence in
                                </p>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="count-nuber">11 +</div>
                                <p className="com-para text-center"> years of experience</p>
                            </div>
                        </div>
                    </div>
                </section>
                {data?.cta3?.ctaTitle &&
                    <section className="start-with-us py-60 my-60 mb-0">
                        <div className="container">
                            <h2 className="com-title text-center pb-3">
                                {data?.cta3.ctaTitle}
                            </h2>
                            <div className="contact-us-btn text-center"  >
                                <Link
                                    href={`${data?.cta3.ctaBtnLink}`}
                                >
                                    {data?.cta3.ctaBtnTitle}
                                </Link>
                            </div>
                        </div>
                    </section>
                }
                {data?.content4?.contentTitle &&
                    <section className="comprehensive-support py-60 pt-0">
                        <div className="container">
                            <h2 className="com-title text-center pb-4">
                                {data?.content4.contentTitle}
                            </h2>
                            <p className="com-para" dangerouslySetInnerHTML={{ __html: data?.content4.contentDesp }}>

                            </p>
                            <div className="row g-3 mt-1">
                                {data?.content4.card.length > 0 ? (
                                    data?.content4.card.map((item: any, index: any) => (
                                        <div className="col-12 col-lg-4" key={index}>
                                            <div className="comprehensive-support-card text-center">
                                                {item.cardImg &&
                                                    <img
                                                        className="lazyload"
                                                        loading="lazy"
                                                        height="54"
                                                        width="54"
                                                        title={`${item.cardimgTitle}`}
                                                        alt={`${item.cardimgAlt}`}
                                                        src={`${backendUrl}/${item.cardImg}`}
                                                    />
                                                }
                                                <div className="small-title mt-2">{item.cardTitle}</div>
                                                <p className="com-para" dangerouslySetInnerHTML={{ __html: item.cardDesp }}></p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-12">
                                        <p className="com-para text-center">No cards available.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                }
                {data?.cta4?.ctaTitle &&
                    <section className="start-with-us py-60 my-60 mb-0">
                        <div className="container">
                            <h2 className="com-title text-center pb-3">
                                {data?.cta4.ctaTitle}
                            </h2>
                            <div className="contact-us-btn text-center"  >
                                <Link
                                    href={`${data?.cta4.ctaBtnLink}`}
                                >
                                    {data?.cta4.ctaBtnTitle}
                                </Link>
                            </div>
                        </div>
                    </section>
                }
            </div>
        </>
    )
}

export default Hrconsultancyfranchiseopportunities