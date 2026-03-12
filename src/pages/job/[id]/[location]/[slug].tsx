// "use client";
// import JobUserTestimonial from "@/components/testimonial/JobUserTestimonial";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { CiBank } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";
import { CiMobile3 } from "react-icons/ci";
import axios from "axios";
import { useEffect, useState } from "react";
import Head from "next/head";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton, // Import WhatsappShareButton
} from "react-share";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'; // Import necessary icons

import ErrorLoading from "@/pages/404";

const index = () => {
  const router = useRouter();
  const { id, location, slug: urlSlug } = router.query;
  const [jobDetails, setJobDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!router.isReady || !id) return;

    const fetchJobDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/getJobDetailsById/${id}`
        );
        if (response.data) {
          setJobDetails(response.data);
        } else {
          setError('Failed to fetch job details');
        }
      } catch (err) {
        console.error("Error fetching job details: ", err);
        setError('Failed to fetch job details');
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [router.isReady, id]);

  const [newdata, setNewData] = useState<string | null>(null);
  const path = router.asPath.split('?')[0];
  if (loading) return null;

  if (error || !jobDetails) {
    return <ErrorLoading />;
  }
  function escapeHtml(html: any) {
    if (!html) return '';
    return html.replace(/<[^>]*>?/gm, '');
  }
  function formatDate(dateString: any) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  }
  function escapeJson(jsonString: any) {
    if (!jsonString) return '';
    return jsonString.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  }
  const formattedDate = jobDetails?.data?.publish_date ? jobDetails?.data?.publish_date.split('T')[0] : '';
  const formattedEndDate = jobDetails?.data?.last_apply_date ? jobDetails?.data?.last_apply_date.split('T')[0] : '';

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "datePosted": formatDate(jobDetails?.data?.publish_date),
    "description": escapeHtml(jobDetails?.data?.rms_description || jobDetails?.data?.requirement || jobDetails.data.roles_responsibility),
    "employmentType": "FULL_TIME",
    "educationRequirements": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": jobDetails?.data?.qualifications,
    },
    "experienceRequirements": {
      "@type": "OccupationalExperienceRequirements",
      "Experience": `${jobDetails?.data?.min_experience} - years`,
    },
    "industry": jobDetails?.data?.industry?.name,
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": jobDetails?.data?.master_country?.name,
        "addressRegion": jobDetails?.data?.location_of_posting,
        "postalCode": jobDetails?.data?.code,
        "streetAddress": jobDetails?.data?.street_address,
        "addressCountry": jobDetails?.data?.master_country?.name,
      },
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": {
        "@type": "QuantitativeValue",
        "value": jobDetails?.data?.min_salary,
        "unitText": "MONTH",
      },
    },
    "hiringOrganization": {
      "@type": "Organization",
      "name": jobDetails?.data?.company?.name,
      "sameAs": "https://www.alliancerecruitmentagency.ae/",
      "logo": "https://www.alliancerecruitmentagency.ae/assets/images/header/alliance-new-logo.png",
    },
    "title": jobDetails?.data?.job_title,
    "disambiguatingDescription": `<p>Apply for ${jobDetails?.data?.job_title} - Job at ${jobDetails?.data?.location_of_posting}. Qualification: ${jobDetails?.data?.qualifications}, Experience: ${jobDetails?.data?.min_experience} years.</p>`,
    "workHours": "Full time",
    "validThrough": formatDate(jobDetails?.data?.last_apply_date),
  };



  const schema2 = `{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "www.alliancerecruitmentagency.ae/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "${jobDetails?.data?.job_title}",
        "item": "https://www.alliancerecruitmentagency.ae/job/${jobDetails?.data?.slug}/"
      }
    ]
  }`


  const url = `https://www.alliancerecruitmentagency.ae/job/${jobDetails?.data?.job_id}/${jobDetails?.data?.location_of_posting}/${jobDetails?.data?.slug}`;

  const seoTitle = `${jobDetails?.data?.job_title} Job at ${jobDetails?.data?.location_of_posting} - Alliance Recruitment Agency UAE`;
  const seoDescription = `Apply for ${jobDetails?.data?.job_title} Job at ${jobDetails?.data?.location_of_posting} . Qualification: ${jobDetails?.data?.qualifications} , Experience: ${jobDetails?.data?.min_experience} -  years.`;
  const normalizeInjectedHtml = (html?: string) => {
    if (!html) return "";
    return html
      .replace(/<\s*h1(\s|>)/gi, "<h2$1")
      .replace(/<\s*\/\s*h1\s*>/gi, "</h2>");
  };


  return (
    <>

      <Head>
        <meta name="title" content={`${jobDetails?.data?.job_title} Job at ${jobDetails?.data?.location_of_posting} - ${jobDetails?.data?.company?.company_id}`} />
        <meta property="og:title" content={`${jobDetails?.data?.job_title} - Alliance Recruitment Agency UAE`} />
        <meta property="og:url" content={`https://www.alliancerecruitmentagency.ae${path}`} />
        <meta property="og:image" content="https://www.alliancerecruitmentagency.ae/assets/images/header/facebook-banner-new.webp" />
        <meta name="description" content={seoDescription} />
        <meta property="og:description" content={`Apply for the ${jobDetails?.data?.job_title} job at ${jobDetails?.data?.location_of_posting}. Qualification required: ${jobDetails?.data?.qualifications} - Alliance Recruitment Agency UAE, Experience: ${jobDetails?.data?.min_experience} years. - Alliance Recruitment Agency UAE`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content="https://www.alliancerecruitmentagency.ae/assets/images/header/facebook-banner-new.webp" />
        <title>{seoTitle}</title>
        <meta name="robots" content="Index, follow" />
        <link rel="canonical" href={`https://www.alliancerecruitmentagency.ae${path}`} />
      </Head>

      <div className="job-details-wrapper">
        <section className=" job-box-description py-50">
          <div className="container heading">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="text-dark mb-3 job-title">{jobDetails?.data?.job_title}</h1>
              </div>
            </div>

            <div className="row g-3">
              <div className="col-lg-8 col-md-7">
                <div className="job-detail border rounded p-md-4 p-3">
                  <div className="job-detail-content justify-content-between">
                    <div className="company-logo align-content-center">
                      <Image
                        width={150}
                        height={150}
                        src="/assets/images/header/alliance-new-logo.png"
                        alt="alliancerecruitmentagency"
                        title="alliancerecruitmentagency"
                        className="img-fluid"
                      />
                    </div>

                    <div className="job-title-section">
                      <h2 className="job-title"> {jobDetails?.data?.job_title}</h2>
                      <h5 className="text-muted mb-0">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 640 512"
                          className="me-2"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"></path>
                        </svg>
                        {jobDetails?.data?.company_id}
                      </h5>
                      <h5 className="text-muted mb-0">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="me-2"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        {jobDetails?.data?.location_of_posting}
                      </h5>
                      <h5 className="text-muted mb-0 d-flex align-items-center  mb-4   ">
                        <span style={{ marginRight: "5px" }}>Job Views: </span>
                        <span style={{ marginRight: "5px" }}>{jobDetails?.data?.job_views}</span>{" "}
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          className="me-2 ml-2"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="32"
                            d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z"
                          ></path>
                          <circle
                            cx="256"
                            cy="256"
                            r="80"
                            fill="none"
                            stroke-miterlimit="10"
                            stroke-width="32"
                          ></circle>
                        </svg>
                      </h5>
                    </div>
                  </div>
                  {jobDetails?.data?.additional_requirement && <div className="job-detail-desc mt-md-4 mt-3">
                    <p>
                      <b>Skills</b>:
                    </p>
                    <div className="col-lg-12">
                      <div className="job-detail border rounded mt-2 p-3">
                        <div className="job-detail-desc">
                          <div className="job-details-desc-item" dangerouslySetInnerHTML={{ __html: normalizeInjectedHtml(jobDetails?.data?.additional_requirement) }}>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>}


                  <div className="opening-details">
                    <p><span><strong>Created Date: </strong></span><span>{formattedDate}</span></p>
                    <p><span><strong>End Date: </strong></span><span>{formattedEndDate}</span></p>
                    {jobDetails?.data?.min_experience && <p><span><strong>Experience: </strong></span><span> {jobDetails?.data?.min_experience} -  {jobDetails?.data?.max_experience} years</span></p>}
                    <p><span><strong>Salary: </strong></span><span>{jobDetails?.data?.min_salary}</span></p>
                    <p><span><strong>Industry: </strong></span><span> {jobDetails?.data?.industry.name}</span></p>
                    <p><span><strong>Openings: </strong></span><span> {jobDetails?.data?.number_of_opening}</span></p>
                  </div>
                </div>


                <div className="row">
                  <div className="col-lg-12">
                    <h5 className="text-dark mt-4 mb-0">Primary Responsibilities :</h5>
                  </div>
                  <div className="col-lg-12">
                    <div className="job-detail border rounded mt-2 p-3">
                      <div className="job-detail-desc">
                        <div className="" dangerouslySetInnerHTML={{ __html: normalizeInjectedHtml(jobDetails?.data?.roles_responsibility) }}>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {jobDetails?.data?.additional_requirement &&
                  <div className="row">
                    <div className="col-lg-12">
                      <h5 className="text-dark mt-4 mb-0">Desired Skills:</h5>
                    </div>
                    <div className="col-lg-12">
                      <div className="job-detail border rounded mt-2 p-3">
                        <div className="job-detail-desc">
                          <div className="job-details-desc-item" dangerouslySetInnerHTML={{ __html: normalizeInjectedHtml(jobDetails?.data?.additional_requirement) }}>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                }
                <div className="row g-3">
                  <div className="col-lg-12">
                    <h5 className="text-dark mt-4 mb-0">Experience Requirements:</h5>
                  </div>
                  <div className="col-lg-12">
                    <div className="job-detail border rounded mt-2 p-3">
                      <div className="job-detail-desc">
                        <div className="job-details-desc-item" dangerouslySetInnerHTML={{ __html: normalizeInjectedHtml(jobDetails?.data?.requirement) }}>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-5 ">
                <div className="job-detail border rounded p-md-4 p-3 rightsec">
                  <h5 className="text-muted text-center pb-2">
                    <i className="mdi mdi-map-marker me-2"></i>Location
                  </h5>
                  <div className="job-detail-location pt-4 border-top">
                    <div className="job-details-desc-item">
                      <div className="float-start me-2">

                        < CiBank />
                      </div>
                      <p className="text-muted mb-2 ml-2" >
                        : Alliance Recruitment Agency UAE
                      </p>
                    </div>
                    <div className="job-details-desc-item">
                      <div className="float-start me-2">

                        < CiGlobe />
                      </div>
                      <p className="text-muted mb-2 ml-2" >
                        :
                        <Link className="ml-2 font-small" href="https://www.alliancerecruitmentagency.ae/">
                          www.alliancerecruitmentagency.ae
                        </Link>
                      </p>
                    </div>
                    <div className="job-details-desc-item" style={{ display: "flex" }}>
                      <div className="float-start me-2">

                        < CiMobile3 />
                      </div>

                      <div className="text-muted">: </div>

                      <p className="text-muted mb-2 ml-2" >
                        <Link className="ml-2" href="tel:+918980018741"> +91 8980018741</Link>
                      </p>
                    </div>



                    <h6 className="text-dark f-17 mt-3 mb-0">Share Job :</h6>

                    <ul className="social-icon list-inline mt-3 mb-0">
                      <li className="list-inline-item">
                        <FacebookShareButton url={url} title={newdata !== null ? newdata : undefined}>
                          <a href="#" className="rounded">
                            <FaFacebookF size={20} />
                          </a>
                        </FacebookShareButton>
                      </li>
                      <li className="list-inline-item">
                        <TwitterShareButton url={url} title={newdata !== null ? newdata : undefined}>
                          <a href="#" className="rounded">
                            <FaTwitter size={20} />
                          </a>
                        </TwitterShareButton>
                      </li>

                      <li className="list-inline-item">
                        <LinkedinShareButton url={url} title={newdata !== null ? newdata : undefined}>
                          <a href="#" className="rounded">
                            <FaLinkedinIn size={20} />
                          </a>
                        </LinkedinShareButton>
                      </li>
                    </ul>

                    <div className="mt-4">
                      <Link
                        href={`https://ats.allianceinternational.co.in/job-Seeker-Apply/${jobDetails?.data?.job_id}/${jobDetails?.data?.location_of_posting.replace(/[\s/]+/g, '-')}/${jobDetails?.data?.slug}`}
                        className="btn btn-block btn-primary"
                      >
                        Apply
                      </Link>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>
      </div>


      {jobDetails?.data?.job_title &&
        <>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema2 }} />
          <script
            className="rank-math-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
        </>
      }
    </>
  );
};
export default index;





