import { NextApiRequest, NextApiResponse } from "next";

// Define your static pages here
const STATIC_PAGES = [
  { url: "/", priority: "1.0", changefreq: "daily" },
  {
    url: "/philippine-recruitment-agency-in-dubai",
    priority: "1.0",
    changefreq: "daily",
  },
  { url: "/manpower-agency-dubai", priority: "1.0", changefreq: "daily" },
  {
    url: "/recruitment-agencies-abu-dhabi",
    priority: "1.0",
    changefreq: "daily",
  },
  { url: "/recruitment-agencies-qatar", priority: "1.0", changefreq: "daily" },
  {
    url: "/recruitment-agencies-bahrain",
    priority: "1.0",
    changefreq: "daily",
  },
  { url: "/recruitment-agencies-jeddah", priority: "1.0", changefreq: "daily" },
  { url: "/recruitment-agencies-kuwait", priority: "1.0", changefreq: "daily" },
  { url: "/recruitment-agencies-oman", priority: "1.0", changefreq: "daily" },
  { url: "/recruitment-agencies-riyadh", priority: "1.0", changefreq: "daily" },
  {
    url: "/recruitment-agencies-sharjah",
    priority: "1.0",
    changefreq: "daily",
  },
  { url: "/recruitment-agencies-dubai", priority: "1.0", changefreq: "daily" },
  { url: "/recruitment-dubai", priority: "1.0", changefreq: "daily" },
  {
    url: "/recruitment-consultants-in-dubai",
    priority: "1.0",
    changefreq: "daily",
  },
  { url: "/recruitment-agency-in-dubai", priority: "1.0", changefreq: "daily" },
  {
    url: "/employment-agencies-in-dubai",
    priority: "1.0",
    changefreq: "daily",
  },
  { url: "/manpower-company-in-dubai", priority: "1.0", changefreq: "daily" },
  { url: "/recruitment-firms-in-dubai", priority: "1.0", changefreq: "daily" },
  { url: "/placement-agency-in-dubai", priority: "1.0", changefreq: "daily" },
  {
    url: "/maid-recruitment-agency-in-dubai",
    priority: "1.0",
    changefreq: "daily",
  },
  {
    url: "/retail-recruitment-agencies-in-dubai",
    priority: "1.0",
    changefreq: "daily",
  },
  {
    url: "/hospitality-recruitment-agency-dubai",
    priority: "1.0",
    changefreq: "daily",
  },
  {
    url: "/marketing-recruitment-agency-dubai",
    priority: "1.0",
    changefreq: "daily",
  },
  {
    url: "/canada-recruitment-agency-in-dubai",
    priority: "1.0",
    changefreq: "daily",
  },
  {
    url: "/engineering-recruitment-agencies-in-dubai",
    priority: "1.0",
    changefreq: "daily",
  },
  {
    url: "/banking-recruitment-agencies-in-dubai",
    priority: "1.0",
    changefreq: "daily",
  },
  {
    url: "/indian-maids-recruitment-agencies-dubai",
    priority: "1.0",
    changefreq: "daily",
  },
  { url: "/c-level-recruitment-agency", priority: "1.0", changefreq: "daily" },
  { url: "/cto-recruitment-agency", priority: "1.0", changefreq: "daily" },
  {
    url: "/teacher-recruitment-agencies-in-dubai",
    priority: "1.0",
    changefreq: "daily",
  },
  {
    url: "/hotel-recruitment-agency-dubai",
    priority: "1.0",
    changefreq: "daily",
  },
  { url: "/hr-consultants-in-dubai", priority: "1.0", changefreq: "daily" },
  {
    url: "/legal-recruitment-agencies-dubai",
    priority: "1.0",
    changefreq: "daily",
  },
  {
    url: "/medical-recruitment-agency-dubai",
    priority: "1.0",
    changefreq: "daily",
  },
  {
    url: "/construction-recruitment-agencies-in-dubai",
    priority: "1.0",
    changefreq: "daily",
  },
  { url: "/doctor-recruitment-dubai", priority: "1.0", changefreq: "daily" },
  { url: "/executive-recruitment-dubai", priority: "1.0", changefreq: "daily" },
  {
    url: "/hr-recruitment-agencies-dubai",
    priority: "1.0",
    changefreq: "daily",
  },
  { url: "/it-recruitment-agency-dubai", priority: "1.0", changefreq: "daily" },
  {
    url: "/recruitment-agency-franchise",
    priority: "1.0",
    changefreq: "daily",
  },
  {
    url: "/chief-executive-officer-recruitment-agency",
    priority: "1.0",
    changefreq: "daily",
  },
  {
    url: "/dentist-recruitment-agencies-in-dubai",
    priority: "1.0",
    changefreq: "daily",
  },
  {
    url: "/dubai-oil-and-gas-recruitment-agencies",
    priority: "1.0",
    changefreq: "daily",
  },
  {
    url: "/executive-chef-employment-agency",
    priority: "1.0",
    changefreq: "daily",
  },
  {
    url: "/nursing-recruitment-agency-dubai",
    priority: "1.0",
    changefreq: "daily",
  },
  {
    url: "/recruitment-agencies-in-dubai-for-foreigners",
    priority: "1.0",
    changefreq: "daily",
  },
  {
    url: "/ship-crew-recruitment-agencies-in-dubai",
    priority: "1.0",
    changefreq: "daily",
  },
  { url: "/headhunters-dubai", priority: "1.0", changefreq: "daily" },
  {
    url: "/executive-headhunters-in-dubai",
    priority: "1.0",
    changefreq: "daily",
  },
  { url: "/cfo-headhunters", priority: "1.0", changefreq: "daily" },
  { url: "/staffing-agency-dubai", priority: "1.0", changefreq: "daily" },
  {
    url: "/temporary-staffing-agencies-in-dubai",
    priority: "1.0",
    changefreq: "daily",
  },
  { url: "/cxo-staffing-agency", priority: "1.0", changefreq: "daily" },
  {
    url: "/it-staffing-companies-in-dubai",
    priority: "1.0",
    changefreq: "daily",
  },
  { url: "/life-at-alliance-international", priority: "0.8", changefreq: "weekly" },

  { url: "/hr-consultancy-franchise-opportunities", priority: "0.8", changefreq: "weekly" },

  { url: "/life-at-alliance-international/payjama-party-event-2022", priority: "0.7", changefreq: "monthly" },

  { url: "/life-at-alliance-international/movie-celebration", priority: "0.7", changefreq: "monthly" },

  { url: "/life-at-alliance-international/diwali-2019", priority: "0.7", changefreq: "monthly" },

  { url: "/life-at-alliance-international/western-day-2021", priority: "0.7", changefreq: "monthly" },

  { url: "/life-at-alliance-international/dinner-party", priority: "0.7", changefreq: "monthly" },

  { url: "/life-at-alliance-international/15th-aug-2021-celebration", priority: "0.7", changefreq: "monthly" },

  { url: "/life-at-alliance-international/ganesh-chaturthi-2019", priority: "0.7", changefreq: "monthly" },

  { url: "/life-at-alliance-international/client-visits", priority: "0.7", changefreq: "monthly" },

  { url: "/life-at-alliance-international/ganesh-chaturthi-2021", priority: "0.7", changefreq: "monthly" },

  { url: "/life-at-alliance-international/diwali-celebration-2022", priority: "0.7", changefreq: "monthly" },

  { url: "/life-at-alliance-international/school", priority: "0.7", changefreq: "monthly" },

  { url: "/life-at-alliance-international/halloween-event-2022", priority: "0.7", changefreq: "monthly" },

  { url: "/life-at-alliance-international/christmas-celebration-2021", priority: "0.7", changefreq: "monthly" },

  { url: "/life-at-alliance-international/garba-celebration-2019", priority: "0.7", changefreq: "monthly" },

  { url: "/life-at-alliance-international/appreciation-rewards-2021", priority: "0.7", changefreq: "monthly" },

  { url: "/life-at-alliance-international/polo-forest-trip", priority: "0.7", changefreq: "monthly" },
  { url: "/manpower-dubai", priority: "1.0", changefreq: "daily" },
  { url: "/asian-manpower-dubai", priority: "1.0", changefreq: "daily" },
  { url: "/ceo-manpower-agency", priority: "1.0", changefreq: "daily" },
  { url: "/manpower-middle-east-dubai", priority: "1.0", changefreq: "daily" },
  { url: "/cto-executive-search", priority: "1.0", changefreq: "daily" },
  { url: "/cfo-executive-search", priority: "1.0", changefreq: "daily" },
  { url: "/hotel-hiring-in-dubai", priority: "1.0", changefreq: "daily" },
  { url: "/ceo-hiring", priority: "1.0", changefreq: "daily" },
  { url: "/sous-chef-hiring-agency", priority: "1.0", changefreq: "daily" },
  { url: "/sushi-chef-hiring-agency", priority: "1.0", changefreq: "daily" },
  { url: "/cxo-level-hiring", priority: "1.0", changefreq: "daily" },
  {
    url: "/indian-companies-hiring-in-dubai",
    priority: "1.0",
    changefreq: "daily",
  },
  { url: "/accountant-hiring-in-dubai", priority: "1.0", changefreq: "daily" },
  { url: "/driver-hiring-in-dubai", priority: "1.0", changefreq: "daily" },
  { url: "/dubai-hiring-agencies", priority: "1.0", changefreq: "daily" },
  { url: "/dubai-nurse-hiring", priority: "1.0", changefreq: "daily" },
  { url: "/hire-photographer-dubai", priority: "1.0", changefreq: "daily" },
  { url: "/hiring-in-dubai", priority: "1.0", changefreq: "daily" },
  { url: "/cto-for-hire", priority: "1.0", changefreq: "daily" },
  { url: "/contact-us", priority: "0.9", changefreq: "weekly" },
  { url: "/privacy-policy", priority: "0.5", changefreq: "monthly" },
  { url: "/notice", priority: "0.5", changefreq: "monthly" },
  { url: "/franchise-enquiry", priority: "0.8", changefreq: "weekly" },
  { url: "/thank-you-franchise", priority: "0.3", changefreq: "monthly" },
  { url: "/thank-you", priority: "0.3", changefreq: "monthly" },
  { url: "/thank-you-it-outsource", priority: "0.3", changefreq: "monthly" },
  { url: "/webblog", priority: "0.9", changefreq: "daily" },
  { url: "/locations", priority: "0.9", changefreq: "weekly" },
  { url: "/services", priority: "0.9", changefreq: "weekly" },
  { url: "/job-seekers", priority: "0.9", changefreq: "weekly" },
  { url: "/author/anish-malek", priority: "0.9", changefreq: "weekly" },
  {
    url: "/employment-agency-franchise-opportunities",
    priority: "0.9",
    changefreq: "weekly",
  },
  {
    url: "/executive-search-franchise-opportunities",
    priority: "0.9",
    changefreq: "weekly",
  },
  {
    url: "/manpower-consultancy-franchise-opportunities",
    priority: "0.9",
    changefreq: "weekly",
  },
  {
    url: "/medical-healthcare-staffing-franchise-opportunities",
    priority: "0.9",
    changefreq: "weekly",
  },
  {
    url: "/staffing-agency-franchise-opportunities",
    priority: "0.9",
    changefreq: "weekly",
  },
  { url: "/manpower-supply-company", priority: "0.9", changefreq: "weekly" },
];

const BASE_URL = "https://www.alliancerecruitmentagency.ae";
const CMS_API_URL = "https://allianceaeapi.alliancerecruitmentagency.ae";
const SITEMAP_DATA_ENDPOINT = "/getDataForSitemap?collectionName";

// Fetch dynamic blog posts
async function fetchBlogs() {
  try {
    const response = await fetch(
      `${CMS_API_URL}${SITEMAP_DATA_ENDPOINT}=Blog`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.status}`);
    }

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

// Fetch dynamic jobs
async function fetchJobs() {
  try {
    const response = await fetch(
      `${CMS_API_URL}${SITEMAP_DATA_ENDPOINT}=Jobs`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch jobs: ${response.status}`);
    }

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
}

// Fetch service pages
async function fetchServicePages() {
  try {
    const response = await fetch(
      `${CMS_API_URL}${SITEMAP_DATA_ENDPOINT}=ServicePage`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch service pages: ${response.status}`);
    }

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching service pages:", error);
    return [];
  }
}
//fetch service five
async function fetchServiceFivePages() {
  try {
    const response = await fetch(
      `${CMS_API_URL}${SITEMAP_DATA_ENDPOINT}=ServiceFiveForm`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch service pages: ${response.status}`);
    }

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching service pages:", error);
    return [];
  }
}

// Fetch franchise pages
async function fetchFranchisePages() {
  try {
    const response = await fetch(
      `${CMS_API_URL}${SITEMAP_DATA_ENDPOINT}=franchisePage`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch franchise pages: ${response.status}`);
    }

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching franchise pages:", error);
    return [];
  }
}

// Fetch marketing pages
async function fetchMarketingPages() {
  try {
    const response = await fetch(
      `${CMS_API_URL}${SITEMAP_DATA_ENDPOINT}=Marketing`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch marketing pages: ${response.status}`);
    }

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching marketing pages:", error);
    return [];
  }
}

// Escape special XML characters to prevent parsing errors
function escapeXml(unsafe: string): string {
  if (!unsafe) return unsafe;
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Generate XML sitemap
function generateSiteMap(
  pages: any[],
  blogs: any[],
  jobs: any[],
  servicePages: any[],
  serviceFivePages: any[],
  franchisePages: any[],
  marketingPages: any[]
) {
  const currentDate = new Date().toISOString().split("T")[0];

  const staticUrls = pages
    .map((page) => {
      return `
  <url>
    <loc>${escapeXml(BASE_URL + page.url)}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    })
    .join("");

  const blogUrls = blogs
    .map((blog: any) => {
      const lastmod = blog.updatedAt
        ? new Date(blog.updatedAt).toISOString().split("T")[0]
        : blog.createdAt
          ? new Date(blog.createdAt).toISOString().split("T")[0]
          : currentDate;
      return `
  <url>
    <loc>${escapeXml(BASE_URL + "/blog/" + blog.slug)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    })
    .join("");

  const jobUrls = jobs
    .map((job: any) => {
      const lastmod = job.updatedAt
        ? new Date(job.updatedAt).toISOString().split("T")[0]
        : job.createdAt
          ? new Date(job.createdAt).toISOString().split("T")[0]
          : currentDate;

      // Construct URL from job fields: /job/{job_id}/{location}/{slug}
      const location = job.location_of_posting?.toLowerCase().replace(/[\s/]+/g, '-') || '';
      const slug = job.slug || job.job_title?.toLowerCase().replace(/\s+/g, '-') || '';
      const jobUrl = `/job/${job.job_id}/${location}/${slug}`;

      return `
  <url>
    <loc>${escapeXml(BASE_URL + jobUrl)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>`;
    })
    .join("");

  const servicePageUrls = servicePages
    .map((service: any) => {
      const lastmod = service.updatedAt
        ? new Date(service.updatedAt).toISOString().split("T")[0]
        : service.createdAt
          ? new Date(service.createdAt).toISOString().split("T")[0]
          : currentDate;
      return `
  <url>
    <loc>${escapeXml(BASE_URL + "/" + service.slug)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;
    })
    .join("");

  const serviceFivePageUrls = serviceFivePages
    .map((service: any) => {
      const lastmod = service.updatedAt
        ? new Date(service.updatedAt).toISOString().split("T")[0]
        : service.createdAt
          ? new Date(service.createdAt).toISOString().split("T")[0]
          : currentDate;
      return `
  <url>
    <loc>${escapeXml(BASE_URL + "/" + service.slug)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;
    })
    .join("");


  const franchisePageUrls = franchisePages
    .map((franchise: any) => {
      const lastmod = franchise.updatedAt
        ? new Date(franchise.updatedAt).toISOString().split("T")[0]
        : franchise.createdAt
          ? new Date(franchise.createdAt).toISOString().split("T")[0]
          : currentDate;
      return `
  <url>
    <loc>${escapeXml(BASE_URL + "/" + franchise.slug)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;
    })
    .join("");

  const marketingPageUrls = marketingPages
    .map((marketing: any) => {
      const lastmod = marketing.updatedAt
        ? new Date(marketing.updatedAt).toISOString().split("T")[0]
        : marketing.createdAt
          ? new Date(marketing.createdAt).toISOString().split("T")[0]
          : currentDate;
      return `
  <url>
    <loc>${escapeXml(BASE_URL + "/" + marketing.slug)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}${blogUrls}${jobUrls}${servicePageUrls}${franchisePageUrls}${marketingPageUrls}
</urlset>`;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Fetch dynamic content
    const [blogs, jobs, servicePages, serviceFivePages, franchisePages, marketingPages] =
      await Promise.all([
        fetchBlogs(),
        fetchJobs(),
        fetchServicePages(),
        fetchFranchisePages(),
        fetchMarketingPages(),
        fetchServiceFivePages()
      ]);

    // Generate the XML sitemap
    const sitemap = generateSiteMap(
      STATIC_PAGES,
      blogs,
      jobs,
      servicePages,
      serviceFivePages,
      franchisePages,
      marketingPages
    );

    // Set cache headers - cache for 1 hour
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=7200"
    );
    res.setHeader("Content-Type", "application/xml");
    res.status(200).send(sitemap);
  } catch (error) {
    console.error("Error generating sitemap:", error);
    res.status(500).json({ error: "Error generating sitemap" });
  }
}
