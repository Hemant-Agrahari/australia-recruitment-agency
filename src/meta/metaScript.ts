export const localBusinessScript = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Alliance Recruitment Agency",
  "image": "https://allianceae-10072.kxcdn.com/wp-content/uploads/2023/02/Alliance.ae_.png",
  "@id": "https://www.alliancerecruitmentagency.ae",
  "url": "https://www.alliancerecruitmentagency.ae",
  "telephone": "+91 8980018741",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "B-707 MONDEAL SQUARE Sarkhej - Gandhinagar Hwy, Prahlad Nagar",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "380015",
    "addressCountry": "India"
  }
};

export const employmentAgencyScript = {
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

export function getRandomRatingValue(): number {
  return Number((Math.random() * (5 - 4.6) + 4.6).toFixed(2));
}

export function getRandomReviewCount(): number {
  return Math.floor(Math.random() * (450 - 150 + 1)) + 150;
}
