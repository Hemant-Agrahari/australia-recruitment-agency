import React from "react";
import Link from "next/link";
import Image from "next/image";
function OurExpertise() {
  return (
    <>
      <section className="our-expert py-50" id="top-up">
        <div className="container-fluid c-pad-x">
          <h2 className="com-title">Our Expertise</h2>
          <div className="row">
            <div className="col-lg-11 mx-auto">
              <div className="inner-card">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div
                      className="nav flex-column nav-pills"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <button
                        className="nav-link active"
                        id="v-pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-home"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-home"
                        aria-selected="true"
                      >
                        <h3>
                          <Link

                            aria-label="C-Suite-Executive-Search"
                            href="#top-up"
                          >
                            <Image
                              width={100}
                              height={100}
                              src="/assets/images/homepage/c-suite-executive-search-gray.svg"
                              alt="c-suite-executive-search"
                              title=""
                              className="gray-img"
                              loading="eager"
                            />
                            <Image
                              width={100}
                              height={100}
                              src="/assets/images/homepage/c-suite-executive-search-white.svg"
                              alt="c-suite-executive-search"
                              className="white-img"
                              loading="eager"
                            />
                            C-Suite Executive Search
                          </Link>
                        </h3>
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-profile"
                        aria-selected="false"
                      >
                        <h3>
                          <Link
                            aria-label="Senior-Leadership-Recruitment"
                            prefetch={false}
                            href="#top-up"
                          >
                            <Image
                              width={100}
                              height={100}
                              src="/assets/images/homepage/senior-leadership-recruitment-gray.svg"
                              alt="senior-leadership-recruitments"
                              className="gray-img"
                              loading="eager"
                            />
                            <Image
                              width={100}
                              height={100}
                              src="/assets/images/homepage/senior-leadership-recruitment-white.svg"
                              alt="senior-leadership-recruitment"
                              className="white-img"
                              loading="eager"
                            />
                            Senior Leadership Recruitment
                          </Link>
                        </h3>
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-messages-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-messages"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-messages"
                        aria-selected="false"
                      >
                        <h3>
                          <Link
                            prefetch={false}
                            aria-label="Director-Level-Recruitment"
                            href="#top-up"
                          >
                            {" "}
                            <Image
                              width={100}
                              height={100}
                              src="/assets/images/homepage/director-level-recruitment-gray.svg"
                              alt="director-level-recruitment"
                              className="gray-img"
                              loading="eager"
                            />
                            <Image
                              width={100}
                              height={100}
                              src="/assets/images/homepage/director-level-recruitment-white.svg"
                              loading="eager"
                              alt="director-level-recruitment"
                              className="white-img"
                            />
                            Director-Level Recruitment
                          </Link>
                        </h3>
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-settings-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings"
                        aria-selected="false"
                      >
                        <h3>
                          {" "}
                          <Link
                            prefetch={false}
                            aria-label="Industry-Specific-Talent-Sourcing"
                            href="#top-up"
                          >
                            {" "}
                            <Image
                              width={100}
                              height={100}
                              src="/assets/images/homepage/industry-specific-talent-sourcing-gray.svg"
                              loading="eager"
                              alt="industry-specific-talent-sourcing"
                              className="gray-img"
                            />
                            <Image
                              width={100}
                              height={100}
                              src="/assets/images/homepage/industry-specific-talent-sourcing-white.svg"
                              alt="industry-specific-talent-sourcing"
                              className="white-img"
                              loading="eager"
                            />
                            Industry-Specific Talent Sourcing{" "}
                          </Link>
                        </h3>
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-settings-tab-1"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings-1"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings-1"
                        aria-selected="false"
                      >
                        <h3>
                          {" "}
                          <Image
                            width={100}
                            height={100}
                            src="/assets/images/homepage/practice-area-based-staffing-gray.svg"
                            alt="practice-area-based-staffing"
                            className="gray-img"
                            loading="eager"
                          />
                          <Image
                            width={100}
                            height={100}
                            src="/assets/images/homepage/practice-area-based-staffing-white.svg"
                            alt="practice-area-based-staffing"
                            className="white-img"
                            loading="eager"
                          />
                          Practice Area-Based Staffing
                        </h3>
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-settings-tab-2"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings-2"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings-2"
                        aria-selected="false"
                      >
                        <h3>
                          <Link
                            prefetch={false}
                            aria-label="recruitment-process-outsourcing"
                            href="#top-up"
                          >
                            {" "}
                            <Image
                              width={100}
                              height={100}
                              src="/assets/images/homepage/recruitment-process-outsourcing-gray.svg"
                              loading="eager"
                              alt="recruitment process outsourcing - 1"
                              className="gray-img"
                            />
                            <Image
                              width={100}
                              height={100}
                              src="/assets/images/homepage/recruitment-process-outsourcing-white.svg"
                              alt="recruitment process outsourcing 2"
                              className="white-img"
                              loading="eager"
                            />
                            Recruitment Process Outsourcing
                          </Link>
                        </h3>
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-settings-tab-3"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings-3"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings-3"
                        aria-selected="false"
                      >
                        <h3>
                          <Link
                            aria-label="it-outsourcing-gray"
                            prefetch={false}
                            href="#top-up"
                          >
                            {" "}
                            <Image
                              width={100}
                              height={100}
                              src="/assets/images/homepage/it-outsourcing-gray.svg"
                              alt="it outsourcing 1"
                              className="gray-img"
                              loading="eager"
                            />
                            <Image
                              width={100}
                              height={100}
                              src="/assets/images/homepage/it-outsourcing-white.svg"
                              alt="it outsourcing 2"
                              className="white-img"
                              loading="eager"
                            />
                            IT Outsourcing{" "}
                          </Link>
                        </h3>
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-settings-tab-4"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings-4"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings-4"
                        aria-selected="false"
                      >
                        <h3>
                          <Link
                            prefetch={false}
                            aria-label="staff-augmentation-gray"
                            href="#top-up"
                          >
                            <Image
                              width={100}
                              height={100}
                              src="/assets/images/homepage/staff-augmentation-gray.svg"
                              alt="staff augmentation 1"
                              className="gray-img"
                              loading="eager"
                            />
                            <Image
                              width={100}
                              height={100}
                              src="/assets/images/homepage/staff-augmentation-white.svg"
                              alt="staff augmentation 2"
                              className="white-img"
                              loading="eager"
                            />
                            Staff Augmentation
                          </Link>
                        </h3>
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-settings-tab-5"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings-5"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings-5"
                        aria-selected="false"
                      >
                        <h3>
                          <Link
                            aria-label="hr-consultancy-gray"
                            prefetch={false}
                            href="#top-up"
                          >
                            <Image
                              width={100}
                              height={100}
                              src="/assets/images/homepage/hr-consultancy-gray.svg"
                              alt="hr consultancy 1"
                              className="gray-img"
                              loading="eager"
                            />
                            <Image
                              width={100}
                              height={100}
                              src="/assets/images/homepage/hr-consultancy-white.svg"
                              alt="hr consultancy 2"
                              className="white-img"
                              loading="eager"
                            />
                            HR Consultancy
                          </Link>
                        </h3>
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-settings-tab-6"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings-6"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings-6"
                        aria-selected="false"
                      >
                        <h3>
                          <Link
                            aria-label="cv-sourcing-gray"
                            prefetch={false}
                            href="#top-up"
                          >
                            {" "}
                            <Image
                              width={100}
                              height={100}
                              src="/assets/images/homepage/cv-sourcing-gray.svg"
                              alt="global local cv sourcing recruitment local 1"
                              className="gray-img"
                              loading="eager"
                            />
                            <Image
                              width={100}
                              height={100}
                              src="/assets/images/homepage/cv-sourcing-white.svg"
                              alt="global local cv sourcing recruitment local 2"
                              className="white-img"
                              loading="eager"
                            />
                            Global/Local CV Sourcing - Recruitment Local
                          </Link>
                        </h3>
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="tab-content-wrapper">
                      <div className="tab-content" id="v-pills-tabContent">
                        <div
                          className="tab-pane fade show active tab-mo-1"
                          id="v-pills-home"
                          role="tabpanel"
                          aria-labelledby="v-pills-home-tab"
                        >
                          <h4 className="content-head">
                            Connect with the most sought-after C-level leaders
                            in your industry!
                          </h4>
                          <p className="com-pera">
                            Our UAE C-Level executive recruitment team finds the
                            most difficult-to-locate top-tier talent for your
                            company from within the emirates and 25+ strategic
                            global locations. We help you hire a CEO, COO, CMO,
                            CISO, CXO, CDO, or CSO who outperform and inspire
                            innovation, growth, and higher business performance.
                          </p>

                          <Link
                            prefetch={false}
                            href="/c-level-recruitment-agency"
                            className="blue-btn"
                            style={{ marginTop: "0px" }}
                          >
                            Learn More
                          </Link>
                        </div>
                        <div
                          className="tab-pane fade tab-mo-2"
                          id="v-pills-profile"
                          role="tabpanel"
                          aria-labelledby="v-pills-profile-tab"
                        >
                          <h4 className="content-head">
                            Hire leaders to outpace the competition - consult
                            with our headhunters!
                          </h4>
                          <p className="com-pera">
                            Our UAE headhunters possess deep industry knowledge
                            and a track record of successful placements for
                            senior leadership positions such as President, Vice
                            President, Managing Directors, Global Heads, and
                            Departmental Heads. We connect you with the best
                            senior management talent.
                          </p>

                          <Link
                            prefetch={false}
                            href="/headhunters-dubai"
                            className="blue-btn"
                            style={{ marginTop: "0px" }}
                          >
                            Learn More
                          </Link>
                        </div>
                        <div
                          className="tab-pane fade tab-mo-3"
                          id="v-pills-messages"
                          role="tabpanel"
                          aria-labelledby="v-pills-messages-tab"
                        >
                          <h4 className="content-head">
                            Find director candidates who can outperform, lead
                            tough ventures!
                          </h4>
                          <p className="com-pera">
                            Find headhunters in the UAE who have engaged with
                            thousands of dynamic directors in Asia, North
                            America, and Europe with stellar track records in
                            your industry. You will be able to attract highly
                            qualified and experienced directors with the ability
                            to drive exceptional performance. Hire directors to
                            lead sales, marketing, finance, IT, software
                            projects, cybersecurity, business intelligence, and
                            any department.
                          </p>

                          <Link
                            prefetch={false}
                            href="/executive-headhunters-in-dubai/"
                            className="blue-btn"
                            style={{ marginTop: "0px" }}
                          >
                            Learn More
                          </Link>
                        </div>
                        <div
                          className="tab-pane fade tab-mo-4"
                          id="v-pills-settings"
                          role="tabpanel"
                          aria-labelledby="v-pills-settings-tab"
                        >
                          <h4 className="content-head">
                            We source exceptional talent for operations
                            excellence!
                          </h4>
                          <p className="com-pera">
                            Find recruiters with extensive experience and vast
                            talent outreach in your industry. We have teams
                            covering 50+ industry segments, offering candidate
                            sourcing and hiring support for enterprise-wide
                            positions - be it aviation, automotive, BFSI,
                            construction and real estate, healthcare,
                            hospitality and food business, IT and ITeS,
                            manufacturing, retail and FMCG, or logistics and
                            supply chain.
                          </p>

                          <Link
                            prefetch={false}
                            href="/recruitment-agency-in-dubai/"
                            className="blue-btn"
                            style={{ marginTop: "0px" }}
                          >
                            Learn More
                          </Link>
                        </div>
                        <div
                          className="tab-pane fade tab-mo-5"
                          id="v-pills-settings-1"
                          role="tabpanel"
                          aria-labelledby="v-pills-settings-tab-1"
                        >
                          <h4 className="content-head">
                            Hire people who ensure high performance, better
                            culture fit!
                          </h4>
                          <p className="com-pera">
                            You can quickly find skilled, certified, and dynamic
                            performers for your marketing, design, sales,
                            customer service, finance, software development, IT,
                            legal, and any domain. Our recruiters data-mine
                            talent pools comprising millions of professionals
                            and find the right talent that best fits the roles
                            you specify.
                          </p>

                          <Link
                            href="/staffing-agency-dubai/"
                            prefetch={false}
                            className="blue-btn"
                            style={{ marginTop: "0px" }}
                          >
                            Learn More
                          </Link>
                        </div>
                        <div
                          className="tab-pane fade tab-mo-6"
                          id="v-pills-settings-2"
                          role="tabpanel"
                          aria-labelledby="v-pills-settings-tab-2"
                        >
                          <h4 className="content-head">
                            Outsource recruitment to achieve bigger business
                            goals!
                          </h4>
                          <p className="com-pera">
                            Being one of the most trusted global recruitment
                            agencies in the UAE, we attract the best talent from
                            across 30 countries. Save time, money, and HR
                            resources, and accelerate the realization of
                            business opportunities through our RPO services in
                            the UAE. Get scalability and superior talent
                            selection for short- and long-term roles.
                          </p>

                          <Link
                            prefetch={false}
                            href="/headhunters-dubai/"
                            className="blue-btn"
                            style={{ marginTop: "0px" }}
                          >
                            Learn More
                          </Link>
                        </div>
                        <div
                          className="tab-pane fade tab-mo-7"
                          id="v-pills-settings-3"
                          role="tabpanel"
                          aria-labelledby="v-pills-settings-tab-3"
                        >
                          <h4 className="content-head">
                            Your best global IT team is a call away - contact
                            us!
                          </h4>
                          <p className="com-pera">
                            We are among the top global IT recruiters in the
                            UAE, offering on-site, outsourced, remote, and
                            cross-border IT staffing services. Hire programmers,
                            recruit software architects, or contract with the
                            best software vendors. Find the best staff for
                            software, app or web development projects! Complete
                            projects successfully, with higher revenues.
                          </p>

                          <Link
                            prefetch={false}
                            href="/it-staffing-companies-in-dubai/"
                            className="blue-btn"
                            style={{ marginTop: "0px" }}
                          >
                            Learn More
                          </Link>
                        </div>
                        <div
                          className="tab-pane fade tab-mo-8"
                          id="v-pills-settings-4"
                          role="tabpanel"
                          aria-labelledby="v-pills-settings-tab-4"
                        >
                          <h4 className="content-head">
                            Scale up quickly, cost-effectively to meet tough
                            project demands!
                          </h4>
                          <p className="com-pera">
                            Get the best staff augmentation services for your
                            UAE company for any project - blockchain, artificial
                            intelligence, augmented reality, gaming, business
                            intelligence, data science, app development, website
                            development, and enterprise software development.
                          </p>

                          <Link
                            prefetch={false}
                            href="/contact-us/"
                            className="blue-btn"
                            style={{ marginTop: "0px" }}
                          >
                            Learn More
                          </Link>
                        </div>
                        <div
                          className="tab-pane fade tab-mo-9"
                          id="v-pills-settings-5"
                          role="tabpanel"
                          aria-labelledby="v-pills-settings-tab-5"
                        >
                          <h4 className="content-head">
                            Get world-class HR consultancy services in the UAE!
                          </h4>
                          <p className="com-pera">
                            Outsource your difficult HR and recruitment
                            functions to experts with vast experience, vast
                            talent outreach, and superior talent mapping
                            expertise. Our HR consultancy and manpower services
                            support companies in achieving fast growth, global
                            expansion, new product development, new business
                            launch, and many business moves.
                          </p>

                          <Link
                            prefetch={false}
                            href="/hr-consultants-in-dubai/"
                            className="blue-btn"
                            style={{ marginTop: "0px" }}
                          >
                            Learn More
                          </Link>
                        </div>
                        <div
                          className="tab-pane fade tab-mo-10"
                          id="v-pills-settings-6"
                          role="tabpanel"
                          aria-labelledby="v-pills-settings-tab-6"
                        >
                          <h4 className="content-head">
                            Reduce hiring costs by 50% or more
                          </h4>
                          <p className="com-pera">
                            We offer resume sourcing services in the UAE,
                            empowering companies to get right candidates for any
                            position faster. Our services enable you to find
                            quality candidates at less costs for accounting,
                            sales, software and app development, SaaS, data
                            science, hotel management, real estate, e-commerce,
                            retail, and 100+ domains.
                          </p>

                          <Link
                            prefetch={false}
                            href="/contact-us/"
                            className="blue-btn"
                            style={{ marginTop: "0px" }}
                          >
                            Learn More
                          </Link>
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
    </>
  );
}
export default OurExpertise;
