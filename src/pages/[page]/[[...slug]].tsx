import FranchisePreview from "@/components/Template/Franchise/Franchise1";
import LifeAtAllianceDetailsTemplate from "@/components/Template/LifeAtAlliance/life-at-alliance-details";
import LifeAtAllianceTemplate from "@/components/Template/LifeAtAlliance/life-at-alliance-international";
import ServiceTemplate1 from "@/components/Template/Service/service-template-1";
import ServiceTemplate2 from "@/components/Template/Service/service-template-2";
import ServiceTemplate3 from "@/components/Template/Service/service-template-3";
import ServiceTemplate4 from "@/components/Template/Service/service-template-4";
import AboutUsTemplate from "@/components/Template/AboutUs/about-us";
import React, { memo } from "react";
import CustomHead from "@/components/Head";
import { generateDynamicMeta } from "@/meta/DynamicMeta";
import ServiceTemplate5 from "@/components/Template/Service/service-template-5";
import { useRouter } from "next/router";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";

interface HelloProps {
  result: any;
}

const Hello: React.FC<HelloProps> = ({ result }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div style={{ height: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!result) {
    return (
      <div style={{ height: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1>404 - Page Not Found</h1>
      </div>
    );
  }

  const templateMap: any = {
    franchise_1: FranchisePreview,
    services_1: ServiceTemplate1,
    services_2: ServiceTemplate2,
    services_3: ServiceTemplate3,
    services_4: ServiceTemplate4,
    life_at_alliance_international: LifeAtAllianceTemplate,
    life_at_alliance_international_Details: LifeAtAllianceDetailsTemplate,
    about_us: AboutUsTemplate,
    services_5: ServiceTemplate5,
  };

  const blogData = result ? result?.blogData : null;
  const authorData = result ? result?.author : null;
  const relatedBlogData = result ? result?.relatedBlog : null;

  const TemplateComponent = templateMap[blogData?.template] || null;
  let slug = blogData?.slug;
  let metadata = generateDynamicMeta({
    meta: {
      title:
        blogData?.template == "life_at_alliance_international_Details"
          ? blogData?.content?.[0].contentTitle
          : blogData?.seoTitle || "",
      description:
        blogData?.template == "life_at_alliance_international_Details"
          ? blogData?.content?.[0].contentTitle
          : blogData?.seoDescription || "",
      slug:
        blogData?.template == "life_at_alliance_international_Details"
          ? blogData?.content?.[0].contentSlug
          : slug || "",
      metaFaq: blogData?.faq,
      articlePublishedTime: blogData?.createdAt,
      articleModifiedTime: blogData?.updatedAt,
      robotindex: `${blogData?.allowIndexing === false ? "noindex" : "index"
        }, ${blogData?.allowSearchEngines === false ? "nofollow" : "follow"
        }`,

      ogImage: {
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}${blogData?.bannerImage || blogData?.content?.[0].contentImage
          }`,
        height: 1568,
        width: 395,
        type: "image/webp",
      },
    },
  });

  // Get first image from content or banner
  const firstImage = blogData?.bannerImage
    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${blogData?.bannerImage}`
    : blogData?.content?.[0]?.contentImage
      ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${blogData?.content?.[0]?.contentImage}`
      : "";

  const generateDynamicSchema = {
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
        "@id": `https://www.alliancerecruitmentagency.ae/${slug}/#service`,
        "serviceType": blogData?.bannerTitle || "",
        "name": blogData?.bannerTitle || "",
        "provider": {
          "@id": "https://www.alliancerecruitmentagency.ae/#employmentagency"
        },
        "description": metadata.description || ""
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
        "name": metadata.title || "",
        "isPartOf": {
          "@id": "https://www.alliancerecruitmentagency.ae/#website"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": firstImage
        },
        "inLanguage": "en-US",
        "datePublished": blogData?.createdAt || "",
        "dateModified": blogData?.updatedAt || "",
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
            "name": blogData?.bannerTitle || "",
            "item": `https://www.alliancerecruitmentagency.ae/${slug}`
          }
        ]
      }
    ]
  };

  return (
    <>
      {TemplateComponent ? (
        <>
          <CustomHead {...metadata} />
          {(blogData?.type == "Service" || blogData?.template?.startsWith("services_")) && (
            <Head>
              {/* Preload hero banner image for faster LCP */}
              {firstImage && (() => {
                const imgBase = `/_next/image?url=${encodeURIComponent(firstImage)}`;
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
                  __html: JSON.stringify(generateDynamicSchema),
                }}
              />
            </Head>
          )}
          <TemplateComponent
            params={router.query}
            data={blogData}
            relatedBlogData={relatedBlogData}
            authorData={authorData}
          />
        </>
      ) : (
        null
      )}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const CMS_API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
        const SITEMAP_DATA_ENDPOINT = "/getDataForSitemap?collectionName";

        const endpoints = ["ServicePage", "franchisePage", "Marketing", "ServiceFiveForm"];
        
        const results = await Promise.all(
            endpoints.map(endpoint => 
                fetch(`${CMS_API_URL}${SITEMAP_DATA_ENDPOINT}=${endpoint}`)
                    .then(res => res.json())
                    .then(data => data.data || [])
            )
        );

        const allSlugs = results.flat();
        const seenPaths = new Set();
        const paths: any[] = [];

        // Pages that should be ignored because they are defined as static files
        const ignoredPages = new Set([
            '', 'index', '_app', '_document', 'api', 'blog', 'author', 'category', 
            'thank-you', 'thank-you-franchise', 'thank-you-it-outsource',
            'contact-us', 'about-us', 'locations', 'services', 'job-seekers', 'job',
            'franchise-apply', 'franchise-enquiry', 'privacy-policy', 'notice',
            'employment-agency-franchise-opportunities',
            'executive-search-franchise-opportunities',
            'medical-healthcare-staffing-franchise-opportunities',
            'manpower-consultancy-franchise-opportunities',
            'staffing-agency-franchise-opportunities',
            'manpower-supply-company', 'sitemap', 'webblog', '404'
        ]);

        allSlugs.forEach((item: any) => {
            if (!item.slug) return;
            
            // Normalize slug: remove leading/trailing slashes
            const normalizedSlug = item.slug.replace(/^\/+|\/+$/g, '');
            if (!normalizedSlug) return;

            const slugParts = normalizedSlug.split('/');
            const page = slugParts[0];
            
            // Skip if the base page is in ignored list
            if (ignoredPages.has(page)) return;

            const slug = slugParts.slice(1);
            
            // Create a unique key for the path to deduplicate
            const pathKey = normalizedSlug;
            if (!seenPaths.has(pathKey)) {
                seenPaths.add(pathKey);
                paths.push({
                    params: {
                        page: page,
                        slug: slug.length > 0 ? slug : []
                    }
                });
            }
        });

        return {
            paths,
            fallback: 'blocking',
        };
    } catch (error) {
        console.error("Error in getStaticPaths:", error);
        return {
            paths: [],
            fallback: 'blocking',
        };
    }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const { page, slug: routerSlug } = params as any;
        
        let newSlug =
          !routerSlug || routerSlug.length < 1
            ? page
            : `${page}/${Array.isArray(routerSlug) ? routerSlug.join('/') : routerSlug}`;

        // Filter out common bot scan patterns
        const botPatterns = /\.(php|js|sql|env|txt|xml|config|bak|phtml|asp|aspx|jsp|cgi|py|pl|sh|yml|yaml|old|swp)$/i;
        if (typeof newSlug === 'string' && botPatterns.test(newSlug)) {
            return { notFound: true };
        }

        let endpoint =
          page === "life-at-alliance-international"
            ? "lifeAtService"
            : "getService";

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/${endpoint}?slug=${newSlug}`
        );
        const data = await response.json();

        if (data.status === 200 && data.data) {
          return {
            props: {
              result: data.data,
            },
            revalidate: 600, // 10 minutes
          };
        } else {
            return { notFound: true };
        }
    } catch (error) {
        console.error("Error in getStaticProps:", error);
        return { notFound: true };
    }
};

export default memo(Hello);
