import { employmentAgencyScript } from "@/meta/metaScript";
import { useLazyTawk } from "@/utils/useLazyTawk";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import React from "react";
interface metaFaq {
  question: string;
  answer: string;
}
interface CustomHeadProps {
  title?: string;
  robotindex?: string;
  description?: string;
  keywords?: string;
  canonicalURL?: string;
  ogImage?: {
    url: string;
    width: number;
    height: number;
    type: string;
  } | null;
  author?: string;
  twitterCard?: string;
  twitterdescription?: string;
  twittertitle?: string;
  sitename?: string;
  Ogdescription?: string;
  Ogtitle?: string;
  ogLocale?: string;
  OgUrl?: string;
  ogType?: string;
  ogModifiedTime?: string;
  metaFaq?: metaFaq[];
  articlePublisher?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  twitterLable1?: string;
  twitterLable2?: string;
  twitterData1?: string;
  twitterData2?: string;
}
const CustomHead: React.FC<CustomHeadProps> = ({
  title,
  description,
  canonicalURL,
  author,
  twitterCard,
  twittertitle,
  twitterdescription,
  sitename,
  Ogdescription,
  Ogtitle,
  OgUrl,
  metaFaq,
  ogModifiedTime,
  ogType,
  ogLocale,
  keywords,
  ogImage,
  robotindex,
  articlePublisher,
  articlePublishedTime,
  articleModifiedTime,
  twitterData1,
  twitterData2,
  twitterLable1,
  twitterLable2,
}) => {
  const faqScriptSchema =
    metaFaq &&
    metaFaq.every((x) => x.answer != "" && x.question != "") &&
    JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: metaFaq.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    });

  const router = useRouter();
  const isArabic =
    router.asPath.includes("/ar") ||
    router.asPath.includes("/hospitality-recruitment-agency-dubai") ||
    router.asPath.includes("/nursing-recruitment-agency-dubai") ||
    router.asPath.includes("/cruise-ship-recruitment-agency-in-dubai") ||
    router.asPath.includes("/teacher-recruitment-agencies-in-dubai") ||
    router.asPath.includes("/philippine-recruitment-agency-in-dubai") ||
    router.asPath.includes("/manpower-agency-dubai");

  const path = router.asPath;
  const headLinks = [
    {
      pathId: "/ar/hospitality-recruitment-agency-dubai",
      href: "/hospitality-recruitment-agency-dubai",
    },
    {
      pathId: "/ar/nursing-recruitment-agency-dubai",
      href: "/nursing-recruitment-agency-dubai",
    },
    {
      pathId: "/ar/cruise-ship-recruitment-agency-in-dubai",
      href: "/cruise-ship-recruitment-agency-in-dubai",
    },
    {
      pathId: "/ar/teacher-recruitment-agencies-in-dubai",
      href: "/teacher-recruitment-agencies-in-dubai",
    },
    {
      pathId: "/ar/philippine-recruitment-agency-in-dubai",
      href: "/philippine-recruitment-agency-in-dubai",
    },
    {
      pathId: "/ar/manpower-agency-dubai",
      href: "/manpower-agency-dubai",
    },
  ];
  const filteredPath = headLinks.filter((item) => {
    if (isArabic) {
      return item.pathId === path;
    } else {
      return item.pathId.replace("/ar", "") === path;
    }
  });

  const validHref = filteredPath.length > 0 ? filteredPath[0].href : path;
  // useLazyTawk();
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="profile" href="https://gmpg.org/xfn/11" />
      <link rel="preconnect" href="https://allianceae-10072.kxcdn.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="icon" href="/favicon.png" type="image/x-icon" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="robots" content={robotindex} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalURL} />
      {ogType && <meta property="og:type" content={ogType} />}
      {ogModifiedTime && (
        <meta property="article:modified_time" content={ogModifiedTime} />
      )}
      {ogImage?.url && <meta property="og:image" content={ogImage?.url} />}
      {ogImage?.width && (
        <meta property="og:image:width" content={ogImage?.width.toString()} />
      )}
      {ogImage?.height && (
        <meta property="og:image:height" content={ogImage?.height.toString()} />
      )}
      {ogImage?.type && (
        <meta property="og:image:type" content={ogImage?.type} />
      )}
      <meta property="og:url" content={OgUrl} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:title" content={Ogtitle} />
      <meta property="og:description" content={Ogdescription} />
      <meta property="og:site_name" content={sitename} />
      <meta name="twitter:title" content={twittertitle} />
      <meta name="twitter:description" content={twitterdescription}></meta>
      <meta name="author" content={author} />
      <meta name="twitter:card" content="summary_large_image" />
      {twitterLable1 && <meta name="twitter:label1" content={twitterLable1} />}
      {twitterData1 && <meta name="twitter:data1" content={twitterData1} />}
      {twitterLable2 && <meta name="twitter:label2" content={twitterLable2} />}
      {twitterData2 && <meta name="twitter:data2" content={twitterData2} />}
      {articlePublisher && (
        <meta property="article:publisher" content={articlePublisher} />
      )}
      {articlePublishedTime && (
        <meta
          property="article:published_time"
          content={articlePublishedTime}
        />
      )}
      {articleModifiedTime && (
        <meta property="article:modified_time" content={articleModifiedTime} />
      )}

      {isArabic && (
        <>
          <link
            rel="alternate"
            hrefLang="x-default"
            href={`https://www.alliancerecruitmentagency.ae${validHref}`}
          />
          <link
            rel="alternate"
            hrefLang="en"
            href={`https://www.alliancerecruitmentagency.ae${validHref.replace(
              "/ar",
              ""
            )}`}
          />
          {/* <link
            rel="alternate"
            hrefLang="ar-AE"
            href={`https://www.alliancerecruitmentagency.ae/ar${validHref}`} 
          /> */}
        </>
      )}

      <Script
        strategy="lazyOnload"
        type="text/javascript"
        src="https://cdn.callrail.com/companies/796523789/224d94edc35e55312468/12/swap.js"
        async
      />
      {faqScriptSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: faqScriptSchema }}
          async
        />
      )}
    </Head>
  );
};

export default CustomHead;
