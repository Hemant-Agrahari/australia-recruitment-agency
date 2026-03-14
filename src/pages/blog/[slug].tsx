import React, { memo, useMemo, useEffect, useState, useRef } from "react";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { formatDate } from "@/utils/dateFormat";
import ErrorLoading from "../404";
import CustomHead from "@/components/Head";
import { generateDynamicMeta } from "@/meta/DynamicMeta";
import Image from "next/image";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const ExploreWithAI = dynamic(() => import("@/components/explorewithai/ExploreWithAi"), { ssr: false });
const SharePost = dynamic(() => import("@/components/sharepost/SharePost"), { ssr: false });
const AuthorProfile = dynamic(() => import("@/components/author-profile"), { ssr: false });
const TableOfContents = dynamic(() => import("@/components/TableOfContent/TableOfContent"), { ssr: false });
const BlogContactForm = dynamic(() => import("@/components/forms/BlogContactForm/BlogContactForm"), { ssr: false });
const Author = dynamic(() => import("@/components/author/Author"), { ssr: false });
const LatestUpdates = dynamic(() => import("@/components/LatestUpdates"), { ssr: false });

interface PostData {
  data: {
    author: any;
    relatedBlog: any[];
    blogData: any;
    prevBlog: any;
    nextBlog: any;
  };
  status: number;
}

interface BlogPageProps {
  post: PostData;
}

const HeadHunterExecutiveJobSearch: React.FC<BlogPageProps> = ({ post }) => {
  const router = useRouter();
  const formRef = useRef<HTMLElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isLatestUpdatesVisible, setIsLatestUpdatesVisible] = useState(false);
  const [isBlogFormVisible, setIsBlogFormVisible] = useState(false);

  const { author, blogData } = post?.data || {};

  const conclusion = useMemo(() => {
    try {
      return JSON.parse(blogData?.conclusion);
    } catch {
      return { title: "", description: "" } as any;
    }
  }, [blogData?.conclusion]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "latest-updates-section") setIsLatestUpdatesVisible(true);
            if (entry.target.id === "footer-contact-form-section") setIsBlogFormVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: "200px" }
    );

    const latestUpdatesSection = document.getElementById("latest-updates-section");
    const footerFormSection = document.getElementById("footer-contact-form-section");

    if (latestUpdatesSection) observer.observe(latestUpdatesSection);
    if (footerFormSection) observer.observe(footerFormSection);

    const handleScroll = () => {
      if (formRef.current) {
        const rect = formRef.current.getBoundingClientRect();
        const isReached = rect.top <= window.innerHeight;
        setIsFormVisible(isReached);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (latestUpdatesSection) observer.unobserve(latestUpdatesSection);
      if (footerFormSection) observer.unobserve(footerFormSection);
    };
  }, []);

  if (!post || post.status !== 200 || !post.data || !post.data.blogData) {
    return <ErrorLoading />;
  }

  const formattedDate = formatDate(blogData?.date);
  const faq = blogData?.faq;
  const categories = blogData?.categories;
  let bannerImagedetails: Record<string, any> = {};

  try {
    if (blogData?.bannerImagedetails) {
      bannerImagedetails = JSON.parse(blogData.bannerImagedetails);
    }
  } catch (e) {
    console.error("bannerImagedetails parse error", e);
  }
  let slug = `blog/${blogData?.slug}`;

  const generateSlug = (title: string): string => {
    if (!title) return "";
    const text = title.replace(/<[^>]*>/g, "");
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  let metadata = generateDynamicMeta({
    meta: {
      title: blogData?.seoTitle || "",
      description: blogData?.seoDescription || "",
      slug: slug || "",
      metaFaq: blogData?.faq,
      ogType: "article",
      ogLocale: "en_US",
      articlePublishedTime: blogData?.createdAt || "",
      articleModifiedTime: blogData?.updatedAt || "",
      twitterLable1: "Written by",
      twitterData1: "Alliance Recruitment Team",
      twitterLable2: "Est. reading time",
      twitterData2: "7 minutes",
      robotindex: `${blogData?.allowIndexing === false ? "noindex" : "index"}, ${blogData?.allowSearchEngines === false ? "nofollow" : "follow"}`,
      ogImage: {
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}${blogData?.bannerImage}`,
        height: 1200,
        width: 644,
        type: "image/webp",
      },
    },
  });
  return blogData ? (
    <>
      <CustomHead {...metadata} />
      <Head>
        {/* Preload hero image for faster LCP - responsive sizes */}
        {blogData?.bannerImage && (() => {
          const imgBase = `/_next/image?url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_BACKEND_URL}${blogData.bannerImage}`)}`;
          return (
            <link
              rel="preload"
              as="image"
              imageSrcSet={`${imgBase}&w=640&q=75 640w, ${imgBase}&w=828&q=75 828w, ${imgBase}&w=1200&q=75 1200w`}
              imageSizes="(max-width: 768px) 100vw, 1200px"
              fetchPriority="high"
            />
          );
        })()}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "EmploymentAgency",
                  "@id":
                    "https://www.alliancerecruitmentagency.ae/#employmentagency",
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
                    "@id":
                      "https://www.alliancerecruitmentagency.ae/#employmentagency",
                  },
                  inLanguage: "en-US",
                  potentialAction: {
                    "@type": "SearchAction",
                    target:
                      "https://www.alliancerecruitmentagency.ae/?s={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "WebPage",
                  "@id": `https://www.alliancerecruitmentagency.ae/${slug}/#webpage`,
                  url: `https://www.alliancerecruitmentagency.ae/${slug}`,
                  name: metadata.title || "",
                  isPartOf: {
                    "@id": "https://www.alliancerecruitmentagency.ae/#website",
                  },
                  primaryImageOfPage: {
                    "@type": "ImageObject",
                    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}${blogData?.bannerImage}`,
                  },
                  inLanguage: "en-US",
                  datePublished: blogData?.createdAt || "",
                  dateModified: blogData?.updatedAt || "",
                  author: {
                    "@id":
                      "https://www.alliancerecruitmentagency.ae/manpower-agency-dubai",
                  },
                },
                {
                  "@type": "Person",
                  "@id":
                    "https://www.alliancerecruitmentagency.ae/manpower-agency-dubai",
                  name: "Kelly Johnson",
                  worksFor: {
                    "@id":
                      "https://www.alliancerecruitmentagency.ae/#employmentagency",
                  },
                },
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: "https://www.alliancerecruitmentagency.ae",
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Blog",
                      item: "https://www.alliancerecruitmentagency.ae/blog",
                    },
                    {
                      "@type": "ListItem",
                      position: 3,
                      name: blogData?.bannerTitle || metadata.title,
                      item: `https://www.alliancerecruitmentagency.ae/${slug}`,
                    },
                  ],
                },
                {
                  "@type": "ImageObject",
                  "@id":
                    "https://www.alliancerecruitmentagency.ae/#primaryimage",
                  url: `${process.env.NEXT_PUBLIC_BACKEND_URL}${blogData?.bannerImage}`,
                  width: "1080",
                  height: "580",
                },
              ],
            }),
          }}
        />
      </Head>
      <div className="inner-wrapper">
        {/* Fixed CTA Button on Right Side */}
        {!isFormVisible && (
          <div className="fixed-cta-wrapper">
            <div className="fixed-cta-card">
              <p className="cta-card-text">Looking to Hire?</p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="fixed-cta-btn"
              >
                Hire Staff
              </button>
            </div>

            <div className="fixed-cta-card">
              <p className="cta-card-text">Looking for Work?</p>
              <button
                onClick={() => router.push("/job-seekers")}
                className="fixed-cta-btn"
              >
                Find a Job
              </button>
            </div>
          </div>
        )}
        <section className="breadcrumb p07">
          <div className="container">
            <ul className="br-crumb">
              <li>
                <Link href="/">
                  <span>Home</span>
                </Link>
                <meta content="1" />
              </li>
            </ul>
            <span className="delimiter" aria-hidden="true">›</span>
            <Link href="/webblog">
              <span>Webblog</span>
            </Link>
            <span className="delimiter" aria-hidden="true">›</span>
            {blogData?.breadcrumbTitle || ""}
          </div>
        </section>
        <section className="content blog-page color-blue fancy-borders-disabled">
          <div className="single blog-section">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-10 col-md-9 ">
                <article
                  className="
                  post"
                >
                  <h1
                    className="post-heading"
                    dangerouslySetInnerHTML={{
                      __html: blogData?.bannerTitle || "",
                    }}
                  ></h1>
                  <div className="tag-list d-flex align-items-center justify-content-between">
                    <div>
                      <p className="post-meta">
                        <span className="spvc_area">
                          <MdOutlineRemoveRedEye />
                          <span className="spvc_views">{blogData?.views}</span>
                        </span>
                        <span>|</span>
                        {formattedDate}
                        <Link href={`/author/anish-malek`}>
                          <span>|</span>by {author?.bannerTitle || ""}
                        </Link>
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="d-none d-md-block">
                        <p className="fw-semibold mb-2">Share this topic on</p>
                      </div>
                      <div>
                        <SharePost />
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image
                      className="layout-1-bnr rmv-lazy-load"
                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${blogData?.bannerImage}`}
                      width={1200}
                      height={434}
                      alt={bannerImagedetails?.alt || "Blog banner image"}
                      title={bannerImagedetails?.title}
                      priority={true}
                      fetchPriority="high"
                      sizes="(max-width: 768px) 100vw, 1200px"
                    />
                    <ExploreWithAI
                      postUrl={blogData?.slug}
                      postTitle={blogData?.bannerTitle}
                    />
                    {/* Table of Contents */}
                    <TableOfContents
                      content={blogData?.content || []}
                      conclusion={conclusion}
                      hasFaq={faq && faq[0]?.question?.length > 2}
                    />
                  </div>
                  {blogData?.bannerDesp && (
                    <p
                      dangerouslySetInnerHTML={{
                        __html: blogData?.bannerDesp || "",
                      }}
                    />
                  )}
                  {blogData?.content?.map((item: any, index: any) => (
                    <div key={`${index}-${item?.contentTitle || "sec"}`}>
                      <h2 className="heading_style" id={generateSlug(item?.contentTitle || "")}>{item?.contentTitle}</h2>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: item?.contentDescription,
                        }}
                      ></p>
                      {item?.contentCtaButton.state === true && (
                        <div className="cst-cta">
                          <h4>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: item?.contentCtaButton.btnText,
                              }}
                            />
                            <Link
                              href={item?.contentCtaButton.link}
                              dangerouslySetInnerHTML={{
                                __html: item?.contentCtaButton.boldtxt,
                              }}
                            ></Link>
                          </h4>
                        </div>
                      )}
                      {item?.subContent &&
                        item.subContent?.map((subItem: any, subIndex: any) => (
                          <div
                            key={`${subIndex}-${subItem?.subContentTitle || "sub"
                              }`}
                          >
                            <h3 className="h3-blog-heading">
                              {subItem?.subContentTitle}
                            </h3>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: subItem?.subContentDescription,
                              }}
                            ></p>
                            {subItem?.subContentCtaButton.state === true && (
                              <div className="cst-cta">
                                <h4>
                                  {subItem?.subContentCtaButton.btnText}
                                  <Link
                                    href={subItem?.subContentCtaButton.link}
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        subItem?.subContentCtaButton.boldtxt,
                                    }}
                                  />
                                </h4>
                              </div>
                            )}
                          </div>
                        ))}
                    </div>
                  ))}
                  <div>
                    <h2
                      id={generateSlug(conclusion?.title || "")}
                      className="heading_style"
                      dangerouslySetInnerHTML={{ __html: conclusion?.title }}
                    ></h2>
                    <div>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: conclusion?.description,
                        }}
                      ></p>
                    </div>
                  </div>
                  {faq && faq[0]?.question?.length > 2 && (
                    <section className="faq-blog-wrapper">
                      <div className="container">
                        <div className="row justify-content-center">
                          <div className="col-lg-12 col-md-12 p-0 m-0">
                            <h2 className="heading_style my-4" id='faqs'>FAQs</h2>
                            <div className="faq-contents">
                              <div className="accordion" id="accordionFaq">
                                {faq &&
                                  faq.map((item: any, index: any) => {
                                    return (
                                      <div
                                        className="accordion-item"
                                        key={index}
                                      >
                                        <h3 className="accordion-header">
                                          <button
                                            className={`accordion-button ${index === 0 ? "" : "collapsed"
                                              }`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#collapse${index}`}
                                            aria-expanded={
                                              index === 0 ? "true" : "false"
                                            }
                                            aria-controls={`collapse${index}`}
                                          >
                                            <b>
                                              Q {1 + index}.{` `}{" "}
                                              {item.question}
                                            </b>
                                          </button>
                                        </h3>
                                        <div
                                          id={`collapse${index}`}
                                          className={`accordion-collapse collapse ${index === 0 ? "show" : ""
                                            }`}
                                          data-bs-parent="#accordionFaq"
                                        >
                                          <div className="accordion-body">
                                            <b>Ans. </b>
                                            <span
                                              dangerouslySetInnerHTML={{
                                                __html: item.answer,
                                              }}
                                            ></span>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  )}
                </article>
                <Head>
                  <title>
                    {blogData?.seoTitle ||
                      ""}
                  </title>
                  <link
                    href="https://www.alliancerecruitmentagency.ae/author/anish-malek"
                  />
                  <meta
                    name="description"
                    content={blogData?.seoDescription || ""}
                  />
                  <meta name="robots" content="index, follow" />
                </Head>
                <section>
                  <Author
                    name="Anish Malek"
                    title="Recruitment Expert"
                    company="Alliance Recruitment Agency UAE"
                    bio="Anish Malek is a recruitment expert at Alliance Recruitment Agency UAE, specializing in connecting businesses with top-tier talent. With a deep understanding of the recruitment process and years of experience, Anish is dedicated to helping companies build dynamic teams that fuel innovation and growth. Focused on understanding both the needs of employers and the aspirations of job seekers, Anish ensures the perfect match for long-term success and career satisfaction."
                    imageUrl="/assets/author-image.png"
                    imageAlt="Anish Malek profile picture"
                    linkedinUrl="https://www.linkedin.com/in/anish-malek-19ba9721b/"
                    showTitle={false}
                    showIcon={true}
                    className="pt-1"
                  />
                </section>
                <section id="latest-updates-section">
                  {isLatestUpdatesVisible && <LatestUpdates />}
                </section>
                <section ref={formRef} id="footer-contact-form-section" className="footer-contact-form">
                  {isBlogFormVisible && (
                    <BlogContactForm apiEndpoint="blogSidebarFooterForm" type="footer" id="blogs-footer-form" />
                  )}
                </section>
                {/* <div className="col-md-12">
                  <nav className="project-nav">
                    {prevBlog && prevBlog.bannerTitle && (
                      <span className="prev">
                        <Link href={`/blog/${prevBlog.slug}`} rel="prev">
                          {prevBlog.bannerTitle}
                        </Link>
                      </span>
                    )}
                    {nextBlog && nextBlog.bannerTitle && (
                      <span className="next">
                        <Link href={`/blog/${nextBlog.slug}`} rel="next">
                          {nextBlog.bannerTitle}
                        </Link>
                      </span>
                    )}
                  </nav>
                </div> */}
              </div>
              {/* <!-- Categories --> */}
              <div className="col-md-12">
                <div className="row justify-content-center">
                  <div className="col-md-4  ">

                    {/* <div className="categories">
                      <p className="cat-title">Categories</p>
                      <ul className="list_val">
                        <li className="cat_list">
                          <Link href="/category/business-trip/">
                            Business Trip
                          </Link>
                        </li>
                        <li className="cat_list">
                          <Link href="/category/contract-staffing/">
                            Contract Staffing
                          </Link>
                        </li>
                        <li className="cat_list">
                          <Link href="/category/head-hunting/">
                            Headhunting
                          </Link>
                        </li>
                        <li className="cat_list">
                          <Link href="/category/hiring-tips/">Hiring Tips</Link>
                        </li>
                        <li className="cat_list">
                          <Link href="/category/human-resource/">
                            Human Resource
                          </Link>
                        </li>
                        <li className="cat_list">
                          <Link href="/category/job-seekers/">Job Seekers</Link>
                        </li>
                        <li className="cat_list">
                          <Link href="/category/launching-event/">
                            Launching Event
                          </Link>
                        </li>
                        <li className="cat_list">
                          <Link href="/category/recruitment/">Recruitment</Link>
                        </li>
                        <li className="cat_list">
                          <Link href="/category/recruitment-agencies/">
                            Recruitment Agencies
                          </Link>
                        </li>
                        <li className="cat_list">
                          <Link href="/category/recruitment-process-outsourcing-rpo/">
                            Recruitment Process outsourcing (RPO)
                          </Link>
                        </li>
                        <li className="cat_list">
                          <Link href="/category/recruitment-tips/">
                            Recruitment Tips
                          </Link>
                        </li>
                        <li className="cat_list">
                          <Link href="/category/recruitment-trends/">
                            Recruitment Trends
                          </Link>
                        </li>
                        <li className="cat_list">
                          <Link href="/category/remote-hiring/">
                            Remote Hiring
                          </Link>
                        </li>
                        <li className="cat_list">
                          <Link href="/category/startups/">Startups</Link>
                        </li>
                        <li className="cat_list">
                          <Link href="/category/tips/">Tips</Link>
                        </li>
                        <li className="cat_list">
                          <Link href="/category/virtual-assistants/">
                            Virtual Assistants
                          </Link>
                        </li>{" "}
                      </ul>
                    </div> */}
                  </div>
                  {/* <div className="col-md-4">
                     <div className="all-tags-block">
                      <p className="all-tags-title">All Tags</p>
                      <ul className="list_val all-tag-ul">
                        <li className="tag_list">
                          <Link href="/tag/outsourcing-recruitment-process/">
                            outsourcing recruitment process
                          </Link>
                        </li>
                        <li className="tag_list">
                          <Link href="/tag/recruiting-process-outsourcing-rpo/">
                            recruiting process outsourcing rpo
                          </Link>
                        </li>
                        <li className="tag_list">
                          <Link href="/tag/recruitment-process-outsourcing/">
                            recruitment process outsourcing
                          </Link>
                        </li>
                        <li className="tag_list">
                          <Link href="/tag/recruitment-process-outsourcing-companies/">
                            recruitment process outsourcing companies
                          </Link>
                        </li>
                        <li className="tag_list">
                          <Link href="/tag/recruitment-process-outsourcing-firms/">
                            recruitment process outsourcing firms
                          </Link>
                        </li>
                        <li className="tag_list">
                          <Link href="/tag/rpo-organization/">
                            rpo organization
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                  {/* <!-- recent posts --> */}
                  {/* <div className="col-md-4  ">
                    <div className="recent-post">
                      <p className="post-title">Recent Posts</p>
                      <div className="recent-post-inner">
                        <div className="post-detail">
                          <Link href="/blog/diversity-c-suite-guide-inclusive-cxo-staffing/">
                            <p>
                              Diversity in the C-Suite: A Guide to Inclusive CXO
                              Staffing
                            </p>
                          </Link>
                          <div className="date-post">December 22, 2023</div>
                        </div>
                        <div className="post-detail">
                          <Link href="/blog/recruitment-in-dubai-find-the-best-talent-for-your-business/">
                            <p>
                              Recruitment in Dubai: Find the Best Talent for
                              Your Business
                            </p>
                          </Link>
                          <div className="date-post">November 10, 2023</div>
                        </div>
                        <div className="post-detail">
                          <Link href="/blog/how-hr-consultants-in-dubai-are-navigating-remote-work-challenges/">
                            <p>
                              How HR Consultants in Dubai Are Navigating Remote
                              Work Challenges?
                            </p>
                          </Link>
                          <div className="date-post">November 3, 2023</div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-50">
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
        {/* Blog Contact Form Modal */}
        {
          isModalOpen && (
            <div
              className="modal-overlay blog-contact-form-modal"
              onClick={() => setIsModalOpen(false)}
            >
              <div
                className="modal-content"
                style={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  maxWidth: "800px",
                  width: "100%",
                  height: "initial",
                  overflow: "auto",
                  position: "relative",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
                  padding: "30px",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="blog-close-modal"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close modal"
                >
                  ×
                </button>

                <BlogContactForm
                  apiEndpoint="blogSidebarFooterForm"
                  onSuccess={() => setIsModalOpen(false)}
                  type="sidebar"
                  id="blogs-sidebar-form"
                />
              </div>
            </div>
          )
        }
      </div>
    </>
  ) : null;
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/getBlogList?pageIndex=1&pageSize=10`
    );

    if (!response.ok) {
      console.error("getAllBlog API failed:", response.status);
      return {
        paths: [],
        fallback: "blocking",
      };
    }

    const data = await response.json();

    if (data && data.status === 200 && Array.isArray(data.data)) {
      const paths = data.data.map((blog: any) => ({
        params: { slug: blog.slug },
      }));

      return {
        paths,
        fallback: "blocking",
      };
    }

    return {
      paths: [],
      fallback: "blocking",
    };
  } catch (error) {
    console.error("Error fetching blog paths:", error);

    return {
      paths: [],
      fallback: "blocking",
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const urlSlug = params?.slug;

  if (!urlSlug) {
    return {
      notFound: true,
    };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/getService?slug=${urlSlug}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      console.error(
        "getService API failed:",
        response.status,
        response.statusText
      );

      return {
        notFound: true,
      };
    }

    const post = await response.json();

    if (!post || post.status !== 200 || !post.data) {
      console.error("Invalid API response:", post);

      return {
        notFound: true,
      };
    }

    return {
      props: {
        post,
      },
      revalidate: 600, // regenerate every 10 minutes
    };
  } catch (error) {
    console.error("Error fetching blog post:", error);

    return {
      notFound: true,
    };
  }
};

export default HeadHunterExecutiveJobSearch;