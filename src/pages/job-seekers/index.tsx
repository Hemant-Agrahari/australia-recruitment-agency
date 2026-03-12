// @ts-ignore
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import axios from "axios";
// import useDebounce from "@/components/hooks/useDebounce";
// const CustomHead = dynamic(() => import("@/components/Head"), { ssr: false });
// import { Country, State, City } from "country-state-city";
import Head from "next/head";
// import Appnew from "@/components/MaindropDown/Appnew"

type PaginationType = {
  currentPage: number; // Optional property with number type
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
};

const index = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  /* unused states
  const [blogList, setBlogList] = useState<any>(null);
  const [jobData, setJobData] = useState<any>(null);
  const [meta, setMeta] = useState<any>(null);
  const [options, setOptions] = useState<any[]>([]);
  const [isFilter, setFilter] = useState<string>("all");
  const [count, setCount] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [selectedDateFilter, setSelectedDateFilter] = useState("");
  const [selectedExperienceFilter, setSelectedExperienceFilter] = useState("");
  const [data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
*/
  // JOB Filter Integration
  const [jobKey, setJobKey] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobCategories, setJobCategories] = useState("");
  const [jobDatePosted, setJobDatePosted] = useState("");
  const jobDatePostedRef = useRef("");
  const [jobExperience, setJobExperience] = useState("");
  const jobExperienceRef = useRef("");
  const [jobNumberOfItem, setJobNumberOfItem] = useState("10");
  const [jobDetails, setJobDetails] = useState("");
  const pageNumberRef = useRef(1);
  const [paginationNumber, setPaginationNumber] = useState<PaginationType>({
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 2320,
    totalPages: 232,
  });

  const listRef = useRef<HTMLDivElement>(null);

  const [error, setError] = useState("");

  useEffect(() => {
    getAllJobsAction(true);
  }, []);

  const getItemRange = useCallback((
    currentPage = 1,
    itemsPerPage = 10,
    totalItems = 10
  ) => {
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);
    return `${startItem}-${endItem}`;
  }, []);

  const getAllJobsAction = async (
    apiCallFirst = false,
    itemPagePagesNumber = ""
  ) => {
    // let data = JSON.stringify({
    //   "job_keyword": jobKey,
    //   "location": jobLocation,
    //   "date_posted": jobDatePosted,
    //   "itemsPerPage": jobDatePosted,
    //   "page": Number(jobDetails?.pagination?.currentPage) + 1 || 1,
    // });

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var pageNumber;
    if (apiCallFirst) {
      pageNumber = 1;
      pageNumberRef.current = 1;
    } else {
      pageNumber = pageNumberRef.current;
    }

    const raw = JSON.stringify({
      job_keyword: jobKey,
      location: jobLocation,
      date_posted: jobDatePostedRef.current,
      itemsPerPage: itemPagePagesNumber || jobNumberOfItem,
      page: pageNumber,
      experience: jobExperienceRef.current,
    });

    setIsLoading(true);
    setJobDetails("");
    scrollToTop();

    fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/getAllJobs`,
      {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setIsLoading(false);
        console.log(result, "result");
        setJobDetails(result?.data);
        setPaginationNumber(result?.pagination);
        pageNumberRef.current = Number(result.pagination.currentPage) + 1;
        if (result?.data?.length == 0) {
          setError("No Data Found!");
        } else {
          setError("");
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error?.message || "Server response failed!");

        console.error(error);
      });
  };


  const handleDateFilterChange = (event: any) => {
    setJobDatePosted(event.target.value);
    jobDatePostedRef.current = event.target.value;
    getAllJobsAction(true);
  };

  const handleExperienceFilterChange = (event: any) => {
    setJobExperience(event.target.value);
    jobExperienceRef.current = event.target.value;
    getAllJobsAction(true);
  };

  const scrollToTop = useCallback(() => {
    try {
      listRef?.current?.scrollIntoView({ behavior: "smooth" });
    } catch (error) { }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          Search Jobs Online | Hire Qualified Candidates | Post a Job
        </title>
        <meta
          name="description"
          content="Alliance Recruitment Agency connects job seekers with top employers worldwide. Search and apply for jobs online for free, or post job vacancies to hire quality candidates easily. Your global gateway to professional networking and career growth."
        />
        <meta name="keywords" content="" />
        <link rel="canonical" href="https://www.alliancerecruitmentagency.ae/job-seekers" />
        <meta name="robots" content="Index, follow" />
        <meta property="og:image" content="https://allianceaeapi.alliancerecruitmentagency.ae/anniversary-logo-16-years.webp" />
        <meta name="author" content="Themesdesign" />
        <meta property="og:title" content="Search Jobs Online | Hire Qualified Candidates | Post a Job" />
        <meta property="og:description" content="Alliance Recruitment Agency connects job seekers with top employers worldwide. Search and apply for jobs online for free, or post job vacancies to hire quality candidates easily. Your global gateway to professional networking and career growth." />
        <meta property="og:url" content="https://www.alliancerecruitmentagency.ae/job-seekers" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Alliance Recruitment Agency" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Search Jobs Online | Hire Qualified Candidates | Post a Job" />
        <meta name="twitter:description" content="Alliance Recruitment Agency connects job seekers with top employers worldwide. Search and apply for jobs online for free, or post job vacancies to hire quality candidates easily. Your global gateway to professional networking and career growth." />
        <meta name="twitter:image" content="https://www.alliancerecruitmentagency.ae/_next/image?url=%2Fassets%2Fimages%2Fheader%2Falliance-new-logo.png&w=384&q=75" />
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
            })
          }}
        />
      </Head>
      <link rel="shortcut icon" href="images/favicon.ico" />
      <div id="preloader">
        <div id="status">
          <div className="spinner">
            <div className="double-bounce1" />
            <div className="double-bounce2" />
          </div>
        </div>
      </div>

      <section className="bg-half page-next-level">
        <div className="bg-overlay" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="text-center text-white">
                <h4 className="text-uppercase title mb-4">Job List view</h4>
                <ul className="page-next d-inline-block mb-0 banner-text">
                  <li>
                    <a
                      href="#"
                      className="text-uppercase font-weight-bold"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <i className="fa-solid fa-angle-right" />
                  </li>
                  <li>
                    <a href="#" className="text-uppercase font-weight-bold">
                      Jobs
                    </a>
                  </li>
                  <li>
                    <i className="fa-solid fa-angle-right" />
                  </li>
                  <li>
                    <span className="text-uppercase text-white font-weight-bold">
                      Job Listing
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end home */}
      <div className="container">
        <div className="home-form-position">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="home-registration-form job-list-reg-form bg-light shadow p-4 mb-3">
                <form className="registration-form">
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className="registration-form-box">
                        <i className="fa fa-briefcase" />
                        <input
                          type="text"
                          id="exampleInputName1"
                          className="form-control rounded registration-input-box"
                          placeholder="Job keybords..."
                          value={jobKey}
                          onChange={(e) => {
                            setJobKey(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="registration-form-box">
                        <i className="fa fa-location-arrow" />
                        <input
                          type="text"
                          id="exampleInputName1"
                          className="form-control rounded registration-input-box"
                          placeholder="Location"
                          value={jobLocation}
                          onChange={(e) => {
                            setJobLocation(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="registration-form-box">
                        <i className="fa fa-list-alt" />
                        <input
                          type="text"
                          id="exampleInputName1"
                          className="form-control rounded registration-input-box"
                          placeholder="Categories..."
                          value={jobCategories}
                          onChange={(e) => {
                            setJobCategories(e.target.value);
                          }}
                        />
                      </div>
                    </div>



                    <div className="col-lg-3 col-md-6">
                      <div className="registration-form-box">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            // getFilterdatabyLocation();
                            getAllJobsAction(true);
                          }}
                          // type="submit"
                          // id="submit"
                          // name="send"
                          className="submitBnt btn btn-primary btn-block"
                          defaultValue="Submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* JOB LIST START */}
      <section ref={listRef} className="section py-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h1 className="title title-line pb-5">Available jobs for you</h1>
                <p className="text-muted para-desc mx-auto mb-1">
                  Post a job to tell us about your project. We'll quickly match
                  you with the right freelancers.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="left-sidebar">
                <div className="accordion" id="accordionExample">
                  <div className="card rounded mt-4">
                    <a
                      data-toggle="collapse"
                      href="#collapseOne"
                      className="job-list"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <div className="card-header" id="headingOne">
                        <h6 className="mb-0 text-dark f-18">Date Posted</h6>
                      </div>
                    </a>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                    >
                      <div className="card-body p-0">
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customDateRadio5"
                            name="customDateRadio"
                            className="custom-control-input"
                            value=""
                            checked={
                              jobDatePosted === "all" || jobDatePosted === ""
                            }
                            onChange={handleDateFilterChange}
                          />
                          <label
                            className="custom-control-label ms-1 text-muted"
                            htmlFor="customDateRadio5"
                          >
                            All
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customDateRadio1"
                            name="customDateRadio"
                            className="custom-control-input"
                            value="last_hour"
                            checked={jobDatePosted === "last_hour"}
                            onChange={handleDateFilterChange}
                          />
                          <label
                            className="custom-control-label ms-1 text-muted"
                            htmlFor="customDateRadio1"
                          >
                            Last Hour
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customDateRadio2"
                            name="customDateRadio"
                            className="custom-control-input"
                            value="last_24_hours"
                            checked={jobDatePosted === "last_24_hours"}
                            onChange={handleDateFilterChange}
                          />
                          <label
                            className="custom-control-label ms-1 text-muted"
                            htmlFor="customDateRadio2"
                          >
                            Last 24 hours
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customDateRadio3"
                            name="customDateRadio"
                            className="custom-control-input"
                            value="last_7_days"
                            checked={jobDatePosted === "last_7_days"}
                            onChange={handleDateFilterChange}
                          />
                          <label
                            className="custom-control-label ms-1 text-muted"
                            htmlFor="customDateRadio3"
                          >
                            Last 7 days
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customDateRadio4"
                            name="customDateRadio"
                            className="custom-control-input"
                            value="last_14_days"
                            checked={jobDatePosted === "last_14_days"}
                            onChange={handleDateFilterChange}
                          />
                          <label
                            className="custom-control-label ms-1 text-muted"
                            htmlFor="customDateRadio4"
                          >
                            Last 14 days
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customDateRadio5"
                            name="customDateRadio"
                            className="custom-control-input"
                            value="last_30_days"
                            checked={jobDatePosted === "last_30_days"}
                            onChange={handleDateFilterChange}
                          />
                          <label
                            className="custom-control-label ms-1 text-muted"
                            htmlFor="customDateRadio5"
                          >
                            Last 30 days
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card rounded mt-4">
                    <a
                      data-toggle="collapse"
                      href="#collapseExperienceFilter"
                      className="job-list"
                      aria-expanded="true"
                      aria-controls="collapseExperienceFilter"
                    >
                      <div className="card-header" id="headingExperienceFilter">
                        <h6 className="mb-0 text-dark f-18">Experience</h6>
                      </div>
                    </a>
                    <div
                      id="collapseExperienceFilter"
                      className="collapse show"
                      aria-labelledby="headingExperienceFilter"
                    >
                      <div className="card-body p-0">
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customExperienceRadio5"
                            name="customExperienceRadio"
                            className="custom-control-input"
                            value=""
                            checked={jobExperience === ""}
                            onChange={handleExperienceFilterChange}
                          />
                          <label
                            className="custom-control-label ms-1 text-muted f-15"
                            htmlFor="customExperienceRadio5"
                          >
                            All
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customExperienceRadio1"
                            name="customExperienceRadio"
                            className="custom-control-input"
                            value="1_2_year"
                            checked={jobExperience === "1_2_year"}
                            onChange={handleExperienceFilterChange}
                          />
                          <label
                            className="custom-control-label ms-1 text-muted f-15"
                            htmlFor="customExperienceRadio1"
                          >
                            1 Year to 2 Years
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customExperienceRadio2"
                            name="customExperienceRadio"
                            className="custom-control-input"
                            value="2_3_year"
                            checked={jobExperience === "2_3_year"}
                            onChange={handleExperienceFilterChange}
                          />
                          <label
                            className="custom-control-label ms-1 text-muted f-15"
                            htmlFor="customExperienceRadio2"
                          >
                            2 Years to 3 Years
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customExperienceRadio3"
                            name="customExperienceRadio"
                            className="custom-control-input"
                            value="3_4_year"
                            checked={jobExperience === "3_4_year"}
                            onChange={handleExperienceFilterChange}
                          />
                          <label
                            className="custom-control-label ms-1 text-muted f-15"
                            htmlFor="customExperienceRadio3"
                          >
                            3 Years to 4 Years
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customExperienceRadio4"
                            name="customExperienceRadio"
                            className="custom-control-input"
                            value="4_+_year"
                            checked={jobExperience === "4_+_year"}
                            onChange={handleExperienceFilterChange}
                          />
                          <label
                            className="custom-control-label ms-1 text-muted f-15"
                            htmlFor="customExperienceRadio4"
                          >
                            4 Years + Years
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 mt-4 pt-2">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="show-results">
                    <div className="float-start">
                      <h5 className="text-dark mb-0 pt-2 f-18">
                        Showing results{" "}
                        {getItemRange(
                          paginationNumber?.currentPage,
                          paginationNumber?.itemsPerPage,
                          paginationNumber?.totalItems
                        )}
                      </h5>
                    </div>
                    <div className="sort-button float-end">
                      <h5>
                        <b> Jobs Per Page </b>
                      </h5>
                      <select
                        className="nice-select rounded"
                        value={jobNumberOfItem}
                        onChange={(event) => {
                          setJobNumberOfItem(event.target.value);
                          if (event.target.value != jobNumberOfItem) {
                            let numberValue = event.target.value;
                            getAllJobsAction(true, numberValue);
                          }
                        }}
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {isLoading ? (
                  <div className="text-center job-seekers-container">
                    Loading...
                  </div>
                ) : error ? (
                  <div className="text-center job-seekers-container">
                    {error}
                  </div>
                ) : null}

                <div>
                  {Array.isArray(jobDetails) && jobDetails?.map((list: any) => (
                    <div key={`${list?.job_id}-${list?.slug}`} className="col-lg-12 mt-4 pt-2">
                      <div className="job-list-box border rounded">
                        <div className="p-3">
                          <div className="row align-items-center">
                            <div className="col-lg-2">
                              <div className="company-logo-img">
                                <Image
                                  src="/assets/images/header/alliance-new-logo.png"
                                  width={120}
                                  height={55}
                                  alt="test"
                                  className="mx-auto d-block  img-fluid"
                                />
                              </div>
                            </div>
                            <div className="col-lg-7 col-md-9">
                              <div className="job-list-desc">
                                <h3 className="mb-2" style={{ fontSize: 18 }}>
                                  <Link
                                    target="_blank"
                                    href={`/job/${list?.job_id
                                      }/${list?.location_of_posting
                                        ?.toLowerCase()
                                        .replace(/[\s/]+/g, "-")}/${list?.slug}`}
                                    className="text-dark"
                                  >
                                    {list?.job_title || ""}
                                  </Link>
                                </h3>
                                <p>{list?.industry?.name}</p>
                                {/* <p className="text-muted mb-0">
                                  <i className="fa-solid fa-building-columns me-2" />
                                  {list.company_id}
                                </p> */}
                                <ul className="list-inline mb-0">
                                  <li className="list-inline-item me-3">
                                    <p className="text-muted mb-0">
                                      <i className="fa-solid fa-location-dot me-2" />
                                      {list?.location_of_posting}
                                    </p>
                                  </li>
                                  <li className="list-inline-item">
                                    <p className="text-muted mb-0">
                                      <i className="fa-regular fa-clock me-2" />
                                      {new Date(list?.publish_date).toLocaleDateString('en-GB').split('/').join('-')}
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                              <div className="job-list-button-sm text-right">
                                <div className="mt-3">
                                  <Link
                                    href={`/job/${list?.job_id
                                      }/${list?.location_of_posting
                                        ?.toLowerCase()
                                        .replace(/[\s/]+/g, "-")}/${list?.slug}`}
                                    className="btn btn-md btn-primary"
                                  >
                                    Job Details
                                  </Link>
                                </div>
                                <div className="mt-3 ">
                                  <Link
                                    href={`https://ats.allianceinternational.co.in/job-Seeker-Apply/${list?.job_id}/${list?.location_of_posting
                                      ?.toLowerCase()
                                      .replace(/[^a-z0-9]+/g, "-")
                                      .replace(/(^-|-$)/g, "")}/${list?.slug}`}

                                    className="btn btn-md btn-primary"
                                  >
                                    Apply
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="col-lg-12 mt-4 pt-2">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination job-pagination mb-0 justify-content-center">
                      {/* Previous Button */}
                      <li
                        className={`page-item ${paginationNumber?.currentPage == 1 ? "disabled" : ""
                          }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => {
                            pageNumberRef.current =
                              Number(paginationNumber?.currentPage) - 1;
                            getAllJobsAction();
                          }}
                          aria-disabled={paginationNumber?.currentPage == 1}
                        >
                          <i className="fa-solid fa-chevron-left" />
                        </button>
                      </li>

                      {/* Page Numbers */}

                      {paginationNumber?.currentPage && paginationNumber?.currentPage > 1 ? (
                        <li className={`page-item`}>
                          <button
                            className="page-link fix-color-pagination-button"
                            onClick={() => {
                              pageNumberRef.current = Number(
                                paginationNumber?.currentPage - 1
                              );
                              getAllJobsAction();
                            }}
                          >
                            {paginationNumber?.currentPage - 1 || "0"}
                          </button>
                        </li>
                      ) : null}

                      <li
                        className={`page-item ${paginationNumber?.currentPage > 1 ? "" : ""
                          } `}
                      >
                        <button
                          className="page-link active fix-color-pagination-button-action"
                        // onClick={() => setPage(pageNumber)}
                        >
                          {paginationNumber?.currentPage || "1"}
                        </button>
                      </li>

                      {paginationNumber?.currentPage && paginationNumber?.totalPages > 1 &&
                        paginationNumber?.totalPages >
                        paginationNumber?.currentPage ? (
                        <li className={`page-item`}>
                          <button
                            className="page-link fix-color-pagination-button"
                            onClick={() => {
                              pageNumberRef.current = Number(
                                paginationNumber?.currentPage + 1
                              );
                              getAllJobsAction();
                            }}
                          >
                            {paginationNumber?.currentPage + 1 || ""}
                          </button>
                        </li>
                      ) : null}

                      {/* Next Button */}
                      <li
                        className={`page-item ${paginationNumber?.currentPage >=
                          paginationNumber?.totalPages
                          ? "disabled"
                          : ""
                          }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => {
                            // page < meta?.totalPages && setPage(page + 1)
                            getAllJobsAction();
                          }}
                          aria-disabled={
                            paginationNumber?.currentPage >=
                            paginationNumber?.totalPages
                          }
                        >
                          <i className="fa-solid fa-chevron-right" />
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light py-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5">
              <div className="float-start position-relative notification-icon me-2">
                <i className="mdi mdi-bell-outline text-primary" />
                <span className="badge badge-pill badge-danger">1</span>
              </div>
              <h4 style={{ fontSize: 20 }} className="mt-2 mb-0 fw-500">Your Job Notification</h4>
            </div>
            <div className="col-lg-8 col-md-7 mt-4 mt-sm-0">
              <form>
                <div className="form-group mb-0">
                  <div className="input-group mb-0">
                    <input
                      name="email"
                      id="email"
                      type="email"
                      className="form-control"
                      placeholder="Your email :"
                      // required=""
                      aria-describedby="newssubscribebtn"
                    />
                    <div className="input-group-append ms-2">
                      <button
                        className="btn btn-primary submitBnt"
                        type="submit"
                        id="newssubscribebtn"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
};

// export async function getStaticProps() {
//   // Fetch data from API
//   const res = await fetch('YOUR_API_ENDPOINT');
//   const data = await res.json();

//   return {
//     props: {
//       jobs: data, // Assuming data is an array of job objects with a "category" field
//     },
//   };
// }
export default index;

// Old code

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import dynamic from "next/dynamic";
// import Link from "next/link";
// import { Placeholder } from "react-bootstrap";
// import axios from "axios";
// const CustomHead = dynamic(() => import("@/components/Head"));

// const index = () => {
//   // const script1 = ``;
//   // const script2 = ``;
//   // const script3 = ``;
//   // const script4 = ``;
//   // const srcipt5 = ``;
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [blogList, setBlogList] = useState<any>(null);
//   const [jobData, setJobData] = useState<any>(null);
//   const [meta, setMeta] = useState<any>(null);
//   const [options, setOptions] = useState<any[]>([]);
//   const [isFilter, setFilter] = useState<string>("all");
//   const [count, setCount] = useState<number>(32);
//   const [page, setPage] = useState<number>(1);

//   const fetchCompanyWiseJobs = async (pageNumber: number, countNumber: number) => {
//     try {
//       const response = await axios.get(
//         `https://allianceaeapi.alliancerecruitmentagency.ae/getAllJobs/${pageNumber}/${countNumber}`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.table("Company-wise Jobs: ", response.data.data);
//       setJobData(response.data.data);
//     } catch (error) {
//       console.error("Error fetching company-wise jobs:", error);
//     }
//   };

//   const Links = process.env.NEXT_PUBLIC_URL;

//   const handleResponse = async (pageNumber: number, countNumber: number) => {
//     const baseURL = "https://allianceaeapi.alliancerecruitmentagency.ae/";
//     const url = `${baseURL}getAllJobs/${pageNumber}/${countNumber}`;

//     try {
//       const response = await fetch(url, {
//         method: "GET",
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       setBlogList(data);
//       setIsLoading(false);
//       setMeta(data); // Adjust this if your meta data is not the same as response.data
//     } catch (error) {
//       console.error("Error fetching jobs:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCompanyWiseJobs(page, count);
//     handleResponse(page, count);
//   }, [page, count]);

//   // const handleCategoryChange = (
//   //   event: React.ChangeEvent<HTMLSelectElement>
//   // ) => {
//   //   // Reset currentPage to 1
//   //   setPage(1);
//   //   // Set the filter to the selected category
//   //   setFilter(event.target.value);
//   // };

//   // console.log("jhbvsdjhfbjhsbfjsd", blogList);

//   return (
//     <>
//       <div id="best-online-casino-game-software" className="carrer">
//         <section className="career-cta-banner main-banner">
//           <div className="new-section">
//             <div className="container">
//               <div className="main-content">
//                 <h2>Interested in finding out how Alliance can support you?</h2>
//                 <ul className="mb-3">
//                   <li>
//                     Utilize the extensive network of the finest 3.5% talent
//                   </li>
//                   <li>
//                     Achieve hiring speeds multiplied by 10 and enjoy cost
//                     benefits of up to 40%
//                   </li>
//                   <li>
//                     Achieving a remarkable 70% success rate from initial
//                     candidate interview to final selection
//                   </li>
//                 </ul>

//                 <h3 className="mb-4">Let’s talk!</h3>
//                 <Link
//                   href="https://calendly.com/allianceinternationalservices/30-mins-meeting-alliance-international-servic-india"
//                   target="_blank"
//                   className="cta-btn"
//                   id=""
//                   rel="noopener"
//                 >
//                   Book Your Free Discovery Call
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="career1-section">
//           <div className="container">
//             <div className="heading-career1section text-center">
//               <h2>Current Openings</h2>
//             </div>

//             {/* <div className="job_filter" id="job_filter_section">
//               <div className="job_filter_main">
//                 <select id="career_selected" onChange={handleCategoryChange}>
//                   <option value="all">Show All</option>
//                   {options.map((element: any) => (
//                     <option key={element?.id} value={element?.id}>
//                       {element?.categoryName}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div> */}

//             <div className="row justify-content-center">
//               <div className="row justify-content-center g-3 mb-2">
//                 <div
//                   className="job-table-container table-responsive"
//                 >
//                   <table className="job-table table table-striped ">
//                     <thead>
//                       <tr>
//                         {/* <th>Image</th> */}
//                         <th>Title</th>
//                         <th>Industry</th>
//                         <th>Openings</th>
//                         <th>City</th>
//                         <th>Details</th>
//                         <th>Apply</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {jobData?.map((list: any, index: any) => (
//                         <tr key={index}>
//                           <td>{list.job_title}</td>
//                           <td>{list.industry_id}</td>
//                           <td>{list.number_of_opening}</td>
//                           <td>{list.city}</td>
//                           <td>
//                             <a
//                               href={`/job/${list.slug}`}
//                               rel="noopener noreferrer"
//                               target="_blank"
//                               className="btn btn-info applybtn btn-primary"
//                             >
//                               Details
//                             </a>
//                           </td>
//                           <td>
//                             <a
//                               href={`https://ats.allianceinternational.co.in/job-Seeker-Apply/${jobData[0]?.id}/${jobData[0]?.location_of_posting}/${jobData[0]?.slug}`}
//                               rel="noopener noreferrer"
//                               target="_blank"
//                               className="btn btn-info applybtn btn-primary"
//                             >
//                               Apply
//                             </a>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//               <div className="mb-4">
//                 {meta?.hasNextPage && (
//                   <nav aria-label="Page navigation example">
//                     <ul className="respo-pagination pagination">
//                       {meta.currentPage > 1 ? (
//                         <li className="page-item">
//                           <button
//                             className="page-link"
//                             disabled={page === 1}
//                             onClick={() => setPage(page - 1)}
//                           >
//                             Previous
//                           </button>
//                         </li>
//                       ) : null}
//                       {Array.from({ length: 3 }, (_, index) => {
//                         const currentPage = page + index - 1; // Adjust to ensure the current page is in the middle
//                         const isCurrentPage = currentPage === page;
//                         // Ensure pages are within the valid range
//                         if (currentPage > 0 && currentPage <= meta.totalPages) {
//                           return (
//                             <li
//                               key={currentPage}
//                               className={`page-item ${isCurrentPage ? "active" : ""
//                                 }`}
//                             >
//                               <button
//                                 className="page-link"
//                                 onClick={() => setPage(currentPage)}
//                               >
//                                 {currentPage}
//                               </button>
//                             </li>
//                           );
//                         }
//                       })}
//                       {meta.currentPage < meta.totalPages ? (
//                         <li className="page-item">
//                           <button
//                             disabled={!meta.hasNextPage}
//                             onClick={() => setPage(page + 1)}
//                             className="page-link"
//                           >
//                             Next
//                           </button>
//                         </li>
//                       ) : null}
//                     </ul>
//                   </nav>
//                 )}
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//       {/* <script
//         type="application/ld+json"
//         className="rank-math-schema"
//         dangerouslySetInnerHTML={{ __html: script1 }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: script2 }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: script3 }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: script4 }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: srcipt5 }}
//       /> */}
//     </>
//   );
// };

// // export async function getStaticProps() {
// //   // Fetch data from API
// //   const res = await fetch('YOUR_API_ENDPOINT');
// //   const data = await res.json();

// //   return {
// //     props: {
// //       jobs: data, // Assuming data is an array of job objects with a "category" field
// //     },
// //   };
// // }
// export default index;
