import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const FooterSlider = dynamic(() => import("@/utils/FooterSlider/FooterSlider").then(m => m.FooterSlider), { ssr: false, loading: () => null });
import { useRouter } from "next/router";

const FloatingSidebar = dynamic(
  () => import("./FloatingSidebar/FloatingSidebar")
);
const HandbookButton = dynamic(() => import("./Handbook/HandbookButton"));
interface Link {
  text?: string;
  url?: string;
}
interface FooterData {
  [key: string]: {
    blueBox?: string;
    urlText?: string;
    formtitle?: string;
    employer?: string;
    project?: string;
    jobseeker?: string;
    applyjob?: string;
    employers?: string;
    forjob?: string;
    places?: string;
    links?: Link[];
    alliance?: string;
    reserved?: string;
    developedby?: string;
  };
}
const footerData: FooterData = {
  en: {
    blueBox:
      "Important Note for all candidates. Please note that we do not charge MONEY FROM CANDIDATES in return of job offers/interviews. For more information",
    urlText: "Click Here",
    formtitle: "Looking For Top Talent? Or Want To Start A Project?",
    employer: "Yes, I’m Employer",
    project: "I want to Outsource IT Project",
    jobseeker: "Job Seeker",
    applyjob: "Apply For Job",
    employers: "Employers Only",
    forjob: "For Jobs",
    places: "Top Places We Serve",
    alliance: "Alliance Recruitment Agency",
    reserved: "All rights Reserved | Design Developed By",
    developedby: "AIS TECHNOLABS PVT LTD.",
    links: [
      {
        text: "Privacy Policy",
        url: "/privacy-policy",
      },
      {
        text: "Our Blog",
        url: "/webblog",
      },
      {
        text: "Sitemap",
        url: "/sitemap",
      },
    ],
  },
  ar: {
    blueBox:
      "ملاحظة هامة لجميع المرشحين. يرجى ملاحظة أننا لا نفرض أي رسوم مالية على المرشحين مقابل عروض العمل أو المقابلات. لمزيد من المعلومات",
    urlText: "اضغط هنا",
    formtitle: "هل تبحث عن أفضل المواهب؟ أو تريد بدء مشروع؟",
    employer: "نعم، أنا صاحب عمل",
    project: "أرغب في الاستعانة بمصادر خارجية لمشروع تكنولوجيا المعلومات",
    jobseeker: "باحث عن عمل",
    applyjob: "التقديم على وظيفة",
    employers: "لأصحاب العمل فقط",
    forjob: "للوظائف",
    places: "أفضل الأماكن التي نخدمها",
    alliance: "وكالة تحالف التوظيف",
    reserved: "جميع الحقوق محفوظة | التصميم والتطوير بواسطة",
    developedby: "شركة إيه آي إس تيكنولابس الخاصة المحدودة.",
    links: [
      {
        text: "سياسة الخصوصية",
        url: "/privacy-policy",
      },
      {
        text: "مدونتنا",
        url: "/webblog",
      },
      {
        text: "خريطة الموقع",
        url: "/sitemap.xml",
      },
    ],
  },
};

const Footer = () => {
  const [delay, setDelay] = useState(false);
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>("Hire"); // Set the initial active tab
  const currentDate = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  const handleRadioClick = (tab: string) => {
    setActiveTab(tab);
    let redirectUrl = "/contact-us";
    if (tab === "Out") {
      redirectUrl = "/contact-us#start-project";
    }
    router.push(redirectUrl, undefined, { shallow: true });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelay(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const routers = useRouter();
  const isArabic = routers.asPath.includes("/ar");
  const selectedLanguage = isArabic ? footerData.ar : footerData.en;
  return (
    <>
      <footer>
        <section className="blue-box">
          <div>
            <p className="com-pera" style={{ fontSize: "14px" }}>
              {selectedLanguage?.blueBox}
              <Link
                prefetch={false}
                href="/notice"
                className="text-text-decoration-underline fw-bold"
                aria-label={selectedLanguage?.urlText || "Go to notice page"} // Make the link more descriptive for screen readers
              >
                {selectedLanguage?.urlText}
              </Link>
            </p>
          </div>
        </section>

        <div className="container-fluid c-pad-x">
          <div className="footer-inner mt-4">
            <div className="row">
              <div className="col-lg-6 mb-2 c-center-map">
                <Image
                  src="/assets/images/homepage/footer-map-left.webp"
                  width={583}
                  height={424}
                  alt="Map of our service locations"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6">
                <div className="footer-right-wrapper h-100">
                  <div className="img-right h-100">
                    <Image
                      src="/assets/images/homepage/footer-right.svg"
                      alt="Footer Right Image"
                      className="img-fluid h-100"
                      width={100}
                      height={100}
                      loading="lazy"
                    />
                  </div>
                  <div className="footer-right-content">
                    {selectedLanguage.formtitle && (
                      <h4>
                        <span className="footer-text com-pera text-decoration-none">
                          {selectedLanguage.formtitle}
                        </span>
                      </h4>
                    )}
                    <div className="footer-radio-group mt-4">
                      {selectedLanguage.employer && (
                        <Link prefetch={false} href="/contact-us">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="Employer"
                            id="Employer1"
                            checked={activeTab === "Employer1"}
                            onChange={() => handleRadioClick("Employer1")}
                            aria-label="Employer option"
                          />
                          <label
                            className="form-check-label com-pera text-decoration-none"
                            htmlFor="Employer1"
                          >
                            {selectedLanguage?.employer}
                          </label>
                        </Link>
                      )}
                      {selectedLanguage.project && (
                        <div className="form-check">
                          <Link
                            prefetch={false}
                            href="/contact-us#start-project"
                            aria-label="Start a new project"
                          >
                            <input
                              className="form-check-input"
                              type="radio"
                              name="Employer"
                              id="Out"
                              checked={activeTab === "Out"}
                              onChange={() => handleRadioClick("Out")}
                            />
                          </Link>
                          <label
                            className="form-check-label com-pera text-decoration-none"
                            htmlFor="Out"
                          >
                            {selectedLanguage?.project}
                          </label>
                        </div>
                      )}
                    </div>

                    <div className="my-4 job-seeker-wrapper">
                      {selectedLanguage.jobseeker && (
                        <h5 className="mb-0">
                          <span className="footer-text">
                            {selectedLanguage.jobseeker}
                          </span>
                        </h5>
                      )}
                      {selectedLanguage.applyjob && (
                        <Link
                          prefetch={false}
                          href="/job-seekers"
                          className="blue-out-line-btn text-decoration-none"
                          aria-label="Apply for jobs"
                        >
                          {selectedLanguage?.applyjob}
                        </Link>
                      )}
                    </div>

                    <h5>
                      <span className="footer-text">
                        {selectedLanguage.employers}
                      </span>
                    </h5>
                    <ul className="my-4 job-seeker-wrapper">
                      <li>
                        <span className="c-ftr-icon1 ftr-icons" aria-hidden="true"></span>
                        <Link
                          prefetch={false}
                          href="tel:+44 20 3838 0743"
                          className="com-pera text-decoration-none"
                          aria-label="Call UK office"
                        >
                          +44 20 3838 0743
                        </Link>
                      </li>
                      <li>
                        <span className="c-ftr-icon2 ftr-icons" aria-hidden="true"></span>
                        <Link
                          prefetch={false}
                          href="tel:+19179009072"
                          className="com-pera text-decoration-none"
                          aria-label="Call US office"
                        >
                          +1 (917)900 9072
                        </Link>
                      </li>
                      <li>
                        <span className="c-ftr-icon3 ftr-icons" aria-hidden="true"></span>
                        <Link
                          prefetch={false}
                          href="tel:+17809004752"
                          className="com-pera text-decoration-none"
                          aria-label="Call Canadian office"
                        >
                          +1 (780)900 4752
                        </Link>
                      </li>
                      <li>
                        <span className="c-ftr-icon4 ftr-icons" aria-hidden="true"></span>
                        <Link
                          prefetch={false}
                          href="tel:+918980018741"
                          className="com-pera text-decoration-none"
                          aria-label="Call Indian office"
                        >
                          +91 89800 18741
                        </Link>
                      </li>
                    </ul>

                    <div className="my-4">
                      <h5>
                        <span className="footer-text">
                          {selectedLanguage.forjob}
                        </span>
                      </h5>
                      <ul className="job-seeker-wrapper my-3 justify-content-between">
                        <li>
                          <span className="f-icon" aria-hidden="true">
                            <Image
                              src="/assets/images/email.svg"
                              alt="Email address"
                              title="Email address"
                              loading="lazy"
                              width={100}
                              height={100}
                              className="w-100 h-100"
                            />
                          </span>
                          <Link
                            prefetch={false}
                            href="mailto:jobs@alliancerecruitmentagency.com"
                            className="com-pera email-text"
                            aria-label="Email job applications"
                          >
                            jobs@alliancerecruitmentagency.com
                          </Link>
                        </li>
                        <li>
                          <Link
                            prefetch={false}
                            href="https://www.facebook.com/Alliancerecruitmentagency/"
                            target="_blank"
                            aria-label="Visit Facebook page"
                          >
                            <span className="f-icon" aria-hidden="true">
                              <Image
                                src="/assets/images/facebook.svg"
                                alt="Facebook icon"
                                title="Facebook Icon"
                                loading="lazy"
                                width={32}
                                height={32}
                                className="w-100 h-100"
                              />
                            </span>
                          </Link>
                          <Link
                            prefetch={false}
                            href="https://in.linkedin.com/company/alliance-international-services"
                            target="_blank"
                            aria-label="Visit LinkedIn profile"
                          >
                            <span className="f-icon">
                              <Image
                                src="/assets/images/linkdin.svg"
                                alt="LinkedIn icon"
                                title="LinkedIn Icon"
                                loading="lazy"
                                width={32}
                                height={32}
                                className="w-100 h-100"
                              />
                            </span>
                          </Link>
                          <Link
                            prefetch={false}
                            href="https://twitter.com/career_alliance"
                            target="_blank"
                            aria-label="Visit Twitter profile"
                          >
                            <span className="f-icon">
                              <Image
                                src="/assets/images/twitter.svg"
                                alt="Twitter icon"
                                title="Twitter Icon"
                                loading="lazy"
                                width={32}
                                height={32}
                                className="w-100 h-100"
                              />
                            </span>
                          </Link>
                          <Link
                            prefetch={false}
                            href="https://www.instagram.com/alliancerecruitment/"
                            target="_blank"
                            aria-label="Visit Instagram profile"
                          >
                            <span className="f-icon">
                              <Image
                                src="/assets/images/instagram.svg"
                                alt="Instagram icon"
                                title="Instagram Icon"
                                loading="lazy"
                                width={32}
                                height={32}
                                className="w-100 h-100"
                              />
                            </span>
                          </Link>
                          <Link
                            prefetch={false}
                            href="https://t.me/officialARA"
                            target="_blank"
                            aria-label="Visit Telegram channel"
                          >
                            <span className="f-icon">
                              <Image
                                src="/assets/images/telegram-svg.svg"
                                alt="Telegram icon"
                                title="Telegram Icon"
                                loading="eager"
                                width={32}
                                height={32}
                                className="w-100 h-100"
                              />
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-0 m-0">
            <div className="footer-bottom">
              <p className="footer-head">{selectedLanguage.places}</p>
              <div className="top-place-service mt-3">
                <FooterSlider />
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copy-right">
          <div className="container-fluid c-pad-x text-center pb-0 mb-0">
            <p className="nav-links" style={{ marginBottom: "0px" }}>
              © <span id="ftr-dynmc-dt">{currentDate}</span>
              <Link prefetch={false} href="/" aria-label="Home">
                {" "}
                {selectedLanguage?.alliance}{" "}
              </Link>{" "}
              | {selectedLanguage.reserved} :
              <Link
                prefetch={false}
                href="https://www.aistechnolabs.com/"
                aria-label="Visit AIS Technolabs website"
              >
                <strong>{selectedLanguage?.developedby}</strong>
              </Link>{" "}
              {selectedLanguage.links?.map((item: any, index: number) => (
                <Link
                  key={index}
                  prefetch={false}
                  href={item.url}
                  aria-label={`Visit ${item.text} page`}
                >
                  {item.text} |
                </Link>
              ))}
            </p>
          </div>
          <div className="footer-bottom-links text-center mt-2">
            <Link
              prefetch={false}
              href="https://www.dmca.com/Protection/Status.aspx?ID=65de1423-f8e5-4b69-986b-ceacb3d52c6f&refurl=https://www.alliancerecruitmentagency.com/"
              className="pe-3"
              aria-label="DMCA Protection Status"
            >
              <Image
                width={121}
                height={24}
                src="/assets/images/dmca-ais.webp"
                alt="DMCA Protection Badge"
                title="DMCA Protection"
                loading="eager"
              />
            </Link>
            <Link
              prefetch={false}
              href="https://www.copyscape.com/"
              aria-label="Copyscape Protection"
            >
              <Image
                width={200}
                height={25}
                src="/assets/images/protected.webp"
                alt="Copyscape Protection Badge"
                title="Copyscape Protection"
                loading="eager"
              />
            </Link>
          </div>
        </div>
      </footer>
      {delay && (
        <>
          <FloatingSidebar />
        </>
      )}
    </>
  );
};
export default Footer;
