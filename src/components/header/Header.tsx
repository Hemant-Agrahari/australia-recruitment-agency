import Link from "next/link";
import { useState, useCallback, memo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const HireTalentForm = dynamic(
  () => import("../forms/hireTalentForm").then((m) => m.HireTalentForm),
  { ssr: false }
);
import { useRouter } from "next/router";

type MobileMenuProps = {
  handleNavLinkClick: any;
  handleButtonClick: any;
  selectedLanguage: any;
  isActive: boolean;
};

export const headerData = {
  en: {
    LifeAlliance: "Life @ Alliance",
    about: "About Us",
    services: "Services",
    location: "Location",
    abuDhabi: "Abu Dhabi",
    jeddah: "Jeddah",
    riyadh: "Riyadh",
    qatar: "Qatar",
    kuwait: "Kuwait",
    sharjah: "Sharjah",
    dubai: "Dubai",
    oman: "Oman",
    bahrain: "Bahrain",
    ManpowerRecruitment: "Manpower Recruitment",
    RecruitmentServices: "Recruitment Services",
    RecruitmentConsultant: "Recruitment Consultant",
    RecruitmentAgency: "Recruitment Agency",
    EmploymentAgency: "Employment Agency",
    ManpowerCompany: "Manpower Company",
    RPOServices: "RPO Services",
    HRConsultant: "HR Consultant",
    PlacementAgency: "Placement Agency",
    StaffingServices: "Staffing Services",
    TempStaffingAgency: "Temp Staffing Agency",
    ITStaffingCompany: "IT Staffing Company",
    Franchise: "Franchise",
    Executivesearch: "Executive search",
    MedicalHealthcarestaffing: "Medical-Healthcare staffing",
    Employmentagencyfranchise: "Employment agency franchise",
    HRconsultancy: "HR consultancy",
    Recruitmentagency: "Recruitment agency",
    Manpowerconsultancy: "Manpower consultancy",
    Staffingagencyfranchise: "Staffing agency franchise",
    HireCLevel: "Hire C- Level",
    CSuite: "C- Suite",
    CLevel: "C-Level",
    //
    learnMoreAboutCLevelRecruitment: "Learn more about C-Level Recruitment",
    cxoStaffingSolutions: "CXO Staffing Solutions",
    learnMoreAboutCEORecruitment: "Learn more about CEO Recruitment",
    exploreCTORecruitmentServices: "Explore CTO Recruitment Services",
    cfoExecutiveSearchServices: "CFO Executive Search Services",
    exploreExecutiveRecruitmentDubai:
      "Explore Executive Recruitment services in Dubai",
    learnAboutCEORecruitmentServices: "Learn about CEO Recruitment services",
    discoverExecutiveChefEmployment:
      "Discover Executive Chef Employment opportunities",
    findOutExecutiveSearchDubai:
      "Find out about Executive Search services in Dubai",
    exploreCFOHeadhunters: "Explore CFO Headhunters for your recruitment needs",

    //

    CEO: "CEO",
    CTO: "CTO",
    CXO: "CXO",
    CFO: "CFO",
    ExecutiveSearch: "Executive Search",
    ExecutiveRecruitmentDubai: "Executive Recruitment Dubai",
    CEORecruitment: "CEO Recruitment",
    ExecutiveChefEmployment: "Executive Chef Employment",
    ExecutiveSearchDubai: "Executive Search Dubai",
    Headhunter: "Headhunter",
    HEADHUNTER: "HEADHUNTER",
    ExecutiveHeadhunter: "Executive Headhunter",
    CFOHeadhunters: "CFO Headhunters",
    CTOHeadhunters: "CTO Headhunters",
    Industries: "Industries",
    WERECRUIT: "WERECRUIT FOR FOLLOWING INDUSTRIES",
    healthcare: "Healthcare",
    doctor: "Doctor",
    dentist: "Dentist",
    medical: "Medical",
    nursing: "Nursing",
    executiveChef: "Executive Chef",
    sousChef: "Sous Chef",
    shipCrew: "Ship Crew",
    cruiseShip: "Cruise Ship",
    driver: "Driver",
    teacher: "Teacher",
    it: "IT",
    legal: "Legal",
    banking: "Banking",
    accountant: "Accountant",
    construction: "Construction",
    engineering: "Engineering",
    hr: "HR",
    marketing: "Marketing",
    hospitality: "Hospitality",
    hotel: "Hotel",
    maid: "Maid",
    photography: "Photography",
    oilAndGas: "Oil and Gas",
    retail: "Retail",
    finance: "Finance",
    blog: "Blog",
    contact: "Contact Us",
    postYourVacancy: "Post Your Vacancy",
    franchiseInquiry: "Franchise Apply",
    hireATalent: "Hire a Talent",
    jobSeekers: "Job Seekers",
  },
  ar: {
    home: "الرئيسية",
    LifeAlliance: "الحياة في أليانس",
    about: "معلومات عنا",
    services: "الخدمات",
    location: "الموقع",
    abuDhabi: "أبو ظبي",
    jeddah: "جدة",
    riyadh: "الرياض",
    qatar: "قطر",
    kuwait: "الكويت",
    sharjah: "الشارقة",
    dubai: "دبي",
    oman: "عمان",
    bahrain: "البحرين",
    ManpowerRecruitment: "توظيف القوى العاملة",
    RecruitmentServices: "خدمات التوظيف",
    RecruitmentConsultant: "استشاري التوظيف",
    RecruitmentAgency: "وكالة التوظيف",
    EmploymentAgency: "وكالة التوظيف",
    ManpowerCompany: "شركة القوى العاملة",
    RPOServices: "خدمات تعهيد عمليات التوظيف",
    HRConsultant: "استشاري الموارد البشرية",
    PlacementAgency: "وكالة التوظيف",
    StaffingServices: "خدمات التوظيف",
    TempStaffingAgency: "وكالة التوظيف المؤقت",
    ITStaffingCompany: "شركة توظيف تقنية المعلومات",
    Franchise: "الامتياز التجاري",
    Executivesearch: "البحث التنفيذي",
    MedicalHealthcarestaffing: "توظيف الرعاية الصحية الطبية",
    Employmentagencyfranchise: "امتياز وكالة التوظيف",
    HRconsultancy: "استشارات الموارد البشرية",
    Recruitmentagency: "وكالة التوظيف",
    Manpowerconsultancy: "استشارات القوى العاملة",
    Staffingagencyfranchise: "امتياز وكالة التوظيف",
    HireCLevel: "توظيف كبار التنفيذيين",
    CSuite: "الإدارة التنفيذية",
    CLevel: "المستوى التنفيذي",
    //
    learnMoreAboutCLevelRecruitment: "المستوى التنفيذي",
    cxoStaffingSolutions: "حلول توظيف المناصب التنفيذية",
    learnMoreAboutCEORecruitment: "تعرف على المزيد حول توظيف الرئيس التنفيذي",
    exploreCTORecruitmentServices: "استكشف خدمات توظيف مدير التكنولوجيا",
    cfoExecutiveSearchServices: "خدمات البحث التنفيذي للمدير المالي",
    exploreExecutiveRecruitmentDubai: "استكشف خدمات التوظيف التنفيذي في دبي",
    learnAboutCEORecruitmentServices: "تعرف على خدمات توظيف الرئيس التنفيذي",
    discoverExecutiveChefEmployment: "اكتشف فرص توظيف الطهاة التنفيذيين",
    findOutExecutiveSearchDubai: "اكتشف خدمات البحث التنفيذي في دبي",
    exploreCFOHeadhunters:
      "استكشف مديري التوظيف المالي لخدمات التوظيف الخاصة بك",

    //
    CEO: "الرئيس التنفيذي",
    CTO: "المدير التقني",
    CXO: "المسؤول التنفيذي",
    CFO: "المدير المالي",
    ExecutiveSearch: "البحث التنفيذي",
    ExecutiveRecruitmentDubai: "توظيف التنفيذيين دبي",
    CEORecruitment: "توظيف الرؤساء التنفيذيين",
    ExecutiveChefEmployment: "توظيف الطهاة التنفيذيين",
    ExecutiveSearchDubai: "البحث التنفيذي دبي",
    Headhunter: "الباحث عن المواهب",
    HEADHUNTER: "الباحث عن المواهب",
    ExecutiveHeadhunter: "الباحث التنفيذي عن المواهب",
    CFOHeadhunters: "الباحثون عن المديرين الماليين",
    CTOHeadhunters: "الباحثون عن المديرين التقنيين",
    Industries: "الصناعات",
    WERECRUIT: "نقوم بالتوظيف في الصناعات التالية",
    healthcare: "الرعاية الصحية",
    doctor: "طبيب",
    dentist: "طبيب أسنان",
    medical: "طبي",
    nursing: "تمريض",
    executiveChef: "الطاهي التنفيذي",
    sousChef: "الطاهي المساعد",
    shipCrew: "طاقم السفينة",
    cruiseShip: "سفينة سياحية",
    driver: "سائق",
    teacher: "معلم",
    it: "تقنية المعلومات",
    legal: "القانون",
    banking: "المصرفية",
    accountant: "محاسب",
    construction: "الإنشاءات",
    engineering: "الهندسة",
    hr: "الموارد البشرية",
    marketing: "التسويق",
    hospitality: "الضيافة",
    hotel: "فندق",
    maid: "خادمة",
    photography: "التصوير",
    oilAndGas: "النفط والغاز",
    retail: "التجزئة",
    finance: "المالية",
    blog: "مدونة",
    contact: "اتصل بنا",
    postYourVacancy: "أعلن عن وظيفتك",
    franchiseInquiry: "استفسار عن الامتياز",
    hireATalent: "توظيف موهبة",
    jobSeekers: "الباحثون عن عمل",
  },
};

const countryOptions = [
  { code: "AE", name: "UAE", href: "https://www.alliancerecruitmentagency.ae" },
  {
    code: "CA",
    name: "Canada",
    href: "https://www.alliancerecruitmentagency.ca",
  },
  {
    code: "AU",
    name: "Australia",
    href: "https://www.alliancerecruitmentagency.com.au",
  },
  {
    code: "UK",
    name: "United Kingdom",
    href: "https://www.alliancerecruitmentagency.co.uk",
  },
  {
    code: "IN",
    name: "India",
    href: "https://www.allianceinternational.co.in",
  },
  {
    code: "Global",
    name: "Global",
    href: "https://www.alliancerecruitmentagency.com",
  },
];

const Header = () => {
  const [isMobileMenuActive, setMobileMenuActive] = useState(false);
  const [showModalhire, setShowModalhire] = useState(false);
  const [activeCountry, setActiveCountry] = useState("AE");

  const handleTabClick = useCallback((event: any) => {
    event.preventDefault();
    event.stopPropagation();
  }, []);

  const handleButtonClick = useCallback(() => {
    setShowModalhire(true);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuActive((prev) => prev ? false : true);
  }, []);

  const handleMenuIconClick = useCallback((e?: any) => {
    if (e && typeof e.preventDefault === "function") e.preventDefault();
    toggleMobileMenu();
  }, [toggleMobileMenu]);

  const handleNavLinkClick = useCallback(() => {
    setMobileMenuActive(false);
  }, []);



  const router = useRouter();
  const isArabic = router.asPath.includes("/ar");
  const selectedLanguage = isArabic ? headerData.ar : headerData.en;

  return (
    <>
      {/* sticky popup removed */}

      <header id="ae_header">
        <div className="container-fluid c-pad-x">
          <div className="header-top">
            <div className="header-top-inner">
              <ul className="job-seeker-wrapper">
                <li>
                  <span>
                    <Image
                      width={100}
                      height={100}
                      src="/assets/images/header/uk.png"
                      loading="eager"
                      alt="United Kingdom Flag"
                    />
                  </span>
                  <Link
                    prefetch={false}
                    href="tel:+44 20 3838 0743"
                    className="com-pera"
                  >
                    <span className="phone-icon">
                      <Image
                        width={100}
                        height={100}
                        src="/assets/images/header/phone-icon.svg"
                        alt="Call Now"
                        loading="lazy"
                      />
                    </span>
                    +44 20 3838 0743
                  </Link>
                </li>
                <li>
                  <span>
                    <Image
                      width={100}
                      height={100}
                      src="/assets/images/header/united-states-flag.svg"
                      loading="lazy"
                      alt="United State Flag"
                    />
                  </span>
                  <Link
                    prefetch={false}
                    href="tel:+19179009072"
                    className="com-pera"
                  >
                    <span className="phone-icon">
                      <Image
                        width={100}
                        height={100}
                        src="/assets/images/header/phone-icon.svg"
                        alt="Call Now"
                        loading="lazy"
                      />
                    </span>
                    +1 (917) 900 9072
                  </Link>
                </li>
                <li>
                  <span>
                    <Image
                      width={100}
                      height={100}
                      src="/assets/images/header/canada-flag.svg"
                      alt="Canada Flag"
                      loading="lazy"
                    />
                  </span>
                  <Link
                    prefetch={false}
                    href="tel:+17809004752"
                    className="com-pera"
                  >
                    {" "}
                    <span className="phone-icon">
                      <Image
                        width={100}
                        height={100}
                        src="/assets/images/header/phone-icon.svg"
                        loading="lazy"
                        alt="Call Now"
                      />
                    </span>{" "}
                    +1 (780) 900 4752
                  </Link>
                </li>
                <li>
                  <span>
                    <Image
                      width={100}
                      height={100}
                      src="/assets/images/header/india-flag.svg"
                      alt="India Flag"
                      loading="lazy"
                    />
                  </span>
                  <Link
                    prefetch={false}
                    href="tel:+918980018741"
                    className="com-pera"
                  >
                    {" "}
                    <span className="phone-icon">
                      <Image
                        width={100}
                        height={100}
                        src="/assets/images/header/phone-icon.svg"
                        loading="lazy"
                        alt="Call Now"
                      />
                    </span>{" "}
                    +91 89800 18741
                  </Link>
                </li>
              </ul>

              <div className="header-social-link">
                <ul className="job-seeker-wrapper">
                  <li>
                    <Link

                      href="https://wa.me/918980018741?text=Hi"
                      target="_blank"
                      title="Share on WhatsApp"
                      aria-label="Share on WhatsApp"
                    >
                      <span className="f-icon">
                        <i className="fab fa-whatsapp"></i>
                      </span>
                    </Link>

                    <Link

                      href="skype:Aistechnolabs?chat"
                      target="_blank"
                      aria-label="Chat on Skype"
                    >
                      <span className="f-icon">
                        <i className="fab fa-skype"></i>
                      </span>
                    </Link>

                    <Link

                      href="https://www.facebook.com/Alliancerecruitmentagency/"
                      target="_blank"
                      aria-label="Visit our Facebook page"
                    >
                      <span className="f-icon">
                        <i className="fab fa-facebook-f"></i>
                      </span>
                    </Link>

                    <Link

                      href="mailto:sales@alliancerecruitmentagency.com"
                      target="_blank"
                      className="com-pera"
                      aria-label="Send an email"
                    >
                      <span className="f-icon me-0">
                        <i className="fa fa-envelope"></i>
                      </span>
                    </Link>

                    <Link

                      aria-label="Visit our Telegram channel"
                      href="https://t.me/officialARA"
                      target="_blank"
                    >
                      <Image
                        src="/assets/images/telegram-fa.svg"
                        width={30}
                        height={26}
                        alt="Telegram icon"
                        title="Telegram icon"
                        loading="eager"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="header-wrapper">
            <div className="brand-img">
              <Link
                aria-label="alliance-new-logo"
                href="/"
                className="company-logo"
              >
                <Image
                  width={384}
                  height={107}
                  src="/assets/images/header/alliance-new-logo.png"
                  alt="alliancerecruitmentagency"
                  title="alliancerecruitmentagency"
                  className="img-fluid"
                  loading="eager"
                  priority
                />
              </Link>
              <div className="country-selector">
                <span className="country-divider">/</span>
                <div className="country-dropdown">
                  <button className="country-toggle" type="button">
                    <span className="country-code">{activeCountry}</span>
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="#494b4c"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div className="country-dropdown-menu">
                    {countryOptions.map((country) => (
                      <Link
                        key={country.code}
                        href={country.href}
                        className={`country-option ${activeCountry === country.code ? "active" : ""
                          }`}
                        onClick={() => setActiveCountry(country.code)}
                      >
                        <span className="option-name">{country.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

            </div>
            <div className="w-100">
              <div className="header-right-menu w-100">
                <nav className="bottom-menu d-none-mobile d-flex justify-content-between">
                  <ul className="bottom-menu-nav">
                    <li className="bottom-nav-li dropdown">
                      <Link
                        aria-label="vector-down"
                        prefetch={false}
                        href="#"
                        className="bottom-nav-link dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {selectedLanguage?.about}
                        <Image
                          src="/assets/images/header/vector-down.png"
                          width="12"
                          height="7"
                          alt="vector"
                          loading="eager"
                        />
                      </Link>
                      <div
                        className="dropdown-menu min-height-back w-auto hire-c"
                        aria-labelledby="navbarDropdown"
                      >
                        <div className=" listing-row">
                          <ul className="uder-line-icon-ul">
                            <li>
                              <Link
                                prefetch={false}
                                href="/life-at-alliance-international"
                                className="uder-line-icon-ul-link"
                              >
                                {selectedLanguage?.LifeAlliance}
                              </Link>
                            </li>

                            <li>
                              <Link
                                prefetch={false}
                                href="/manpower-agency-dubai"
                                className="uder-line-icon-ul-link"
                              >
                                {selectedLanguage?.about}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>

                    <li className="bottom-nav-li dropdown">
                      <Link
                        prefetch={false}
                        href="#"
                        className="bottom-nav-link dropdown-toggle"
                        id="navbarDropdown1"
                        role="button"
                        aria-expanded="false"
                        onClick={(e) => e.preventDefault()}
                      >
                        {selectedLanguage?.services}
                        <Image
                          src="/assets/images/header/vector-down.png"
                          width="12"
                          height="7"
                          alt="vector-down"
                          loading="eager"
                        />
                      </Link>

                      <div
                        className="dropdown-menu min-height-back hire-c"
                        aria-labelledby="navbarDropdown1"
                      >
                        <div className="row listing-row">
                          <div className="col-lg-12">
                            <div className="megamenu-title">
                              <span>{selectedLanguage?.location}</span>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <ul className="uder-line-icon-ul">
                              <li>
                                <Link
                                  prefetch={false}
                                  href="/recruitment-agencies-abu-dhabi"
                                  className="uder-line-icon-ul-link"
                                >
                                  {selectedLanguage?.abuDhabi}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  prefetch={false}
                                  href="/recruitment-agencies-qatar"
                                  className="uder-line-icon-ul-link"
                                >
                                  {selectedLanguage?.qatar}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  prefetch={false}
                                  href="/manpower-agency-dubai"
                                  className="uder-line-icon-ul-link"
                                >
                                  {selectedLanguage?.dubai}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  prefetch={false}
                                  href="/recruitment-agencies-bahrain"
                                  className="uder-line-icon-ul-link"
                                >
                                  {selectedLanguage?.bahrain}
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div className="col-lg-4 ">
                            <ul className="uder-line-icon-ul">
                              <li>
                                <Link
                                  prefetch={false}
                                  href="/recruitment-agencies-jeddah"
                                  className="uder-line-icon-ul-link"
                                >
                                  {selectedLanguage?.jeddah}
                                </Link>
                              </li>

                              <li>
                                <Link
                                  prefetch={false}
                                  href="/recruitment-agencies-kuwait"
                                  className="uder-line-icon-ul-link"
                                >
                                  {selectedLanguage?.kuwait}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  prefetch={false}
                                  href="/recruitment-agencies-oman"
                                  className="uder-line-icon-ul-link"
                                >
                                  {selectedLanguage?.oman}
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div className="col-lg-4">
                            <ul className="uder-line-icon-ul">
                              <li>
                                <Link
                                  prefetch={false}
                                  href="/recruitment-agencies-riyadh"
                                  className="uder-line-icon-ul-link"
                                >
                                  {selectedLanguage?.riyadh}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  prefetch={false}
                                  href="/recruitment-agencies-sharjah"
                                  className="uder-line-icon-ul-link"
                                >
                                  {selectedLanguage?.sharjah}
                                </Link>
                              </li>

                              <li>
                                <Link
                                  prefetch={false}
                                  href="/recruitment-agencies-dubai"
                                  className="uder-line-icon-ul-link"
                                >
                                  {selectedLanguage?.dubai}
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-4 mt-3">
                            <div className="megamenu-title">
                              <span>
                                {" "}
                                {selectedLanguage?.ManpowerRecruitment}{" "}
                              </span>
                            </div>
                            <ul className="uder-line-icon-ul">
                              <li>
                                <Link
                                  prefetch={false}
                                  href="/recruitment-dubai"
                                  className="uder-line-icon-ul-link"
                                >
                                  {selectedLanguage?.RecruitmentServices}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  prefetch={false}
                                  href="/recruitment-consultants-in-dubai"
                                  className="uder-line-icon-ul-link"
                                >
                                  {selectedLanguage?.RecruitmentConsultant}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  prefetch={false}
                                  href="/recruitment-agency-in-dubai"
                                  className="uder-line-icon-ul-link"
                                >
                                  {selectedLanguage?.RecruitmentAgency}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  prefetch={false}
                                  href="/employment-agencies-in-dubai"
                                  className="uder-line-icon-ul-link"
                                >
                                  {selectedLanguage?.EmploymentAgency}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  prefetch={false}
                                  href="/manpower-company-in-dubai"
                                  className="uder-line-icon-ul-link"
                                >
                                  {selectedLanguage?.ManpowerCompany}
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-4 mt-3">
                            <div className="megamenu-title">
                              <span>{selectedLanguage?.RPOServices}</span>
                            </div>
                            <ul className="uder-line-icon-ul">
                              <li>
                                <Link
                                  prefetch={false}
                                  href="/hr-consultants-in-dubai"
                                  className="uder-line-icon-ul-link"
                                >
                                  {selectedLanguage?.HRConsultant}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  prefetch={false}
                                  href="/placement-agency-in-dubai"
                                  className="uder-line-icon-ul-link"
                                >
                                  {selectedLanguage?.PlacementAgency}
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-4 mt-3">
                            <div className="megamenu-title">
                              <span> {selectedLanguage?.StaffingServices}</span>
                            </div>
                            <ul className="uder-line-icon-ul">
                              <li>
                                <Link
                                  prefetch={false}
                                  href="/temporary-staffing-agencies-in-dubai"
                                  className="uder-line-icon-ul-link"
                                >
                                  {selectedLanguage?.TempStaffingAgency}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  prefetch={false}
                                  href="/it-staffing-companies-in-dubai"
                                  className="uder-line-icon-ul-link"
                                >
                                  {selectedLanguage?.ITStaffingCompany}
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="bottom-nav-li dropdown">
                      <Link
                        prefetch={false}
                        href="#"
                        className="bottom-nav-link dropdown-toggle"
                        id="navbarDropdown7"
                        role="button"
                        aria-expanded="false"
                        onClick={(e) => e.preventDefault()}
                      >
                        {selectedLanguage?.Franchise}
                        <Image
                          src="/assets/images/header/vector-down.png"
                          width="12"
                          height="7"
                          alt="vector"
                          loading="eager"
                        />
                      </Link>
                      <div
                        className="dropdown-menu bg-none min-height-back hire-c w-100"
                        aria-labelledby="navbarDropdown6"
                      >
                        <div className="listing-row row g-5">
                          <div className="col-lg-4">
                            <ul className=" uder-line-icon-ul">
                              <li>
                                {" "}
                                <Link
                                  prefetch={false}
                                  className="uder-line-icon-ul-link"
                                  href="/executive-search-franchise-opportunities/"
                                >
                                  {selectedLanguage?.ExecutiveSearch}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link
                                  prefetch={false}
                                  className="uder-line-icon-ul-link"
                                  href="/medical-healthcare-staffing-franchise-opportunities/"
                                >
                                  {selectedLanguage?.MedicalHealthcarestaffing}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link
                                  prefetch={false}
                                  className="uder-line-icon-ul-link"
                                  href="/employment-agency-franchise-opportunities/"
                                >
                                  {selectedLanguage?.Employmentagencyfranchise}
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-4">
                            <ul className="uder-line-icon-ul">
                              <li>
                                {" "}
                                <Link
                                  prefetch={false}
                                  className="uder-line-icon-ul-link"
                                  href="/hr-consultancy-franchise-opportunities/"
                                >
                                  {selectedLanguage?.HRConsultant}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link
                                  prefetch={false}
                                  className="uder-line-icon-ul-link"
                                  href="/recruitment-agency-franchise/"
                                >
                                  {selectedLanguage?.RecruitmentAgency}
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-4">
                            <ul className="uder-line-icon-ul">
                              <li>
                                {" "}
                                <Link
                                  prefetch={false}
                                  className="uder-line-icon-ul-link"
                                  href="/manpower-consultancy-franchise-opportunities/"
                                >
                                  {selectedLanguage?.Manpowerconsultancy}
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link
                                  prefetch={false}
                                  className="uder-line-icon-ul-link"
                                  href="/staffing-agency-franchise-opportunities/"
                                >
                                  {selectedLanguage?.Staffingagencyfranchise}
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="bottom-nav-li dropdown">
                      <Link
                        prefetch={false}
                        href="#"
                        className="bottom-nav-link dropdown-toggle"
                        id="navbarDropdown5"
                        role="button"
                        aria-expanded="false"
                        onClick={(e) => e.preventDefault()}
                      >
                        {selectedLanguage?.HireCLevel}

                        <Image
                          src="/assets/images/header/vector-down.png"
                          width="12"
                          height="7"
                          alt="vector"
                          loading="eager"
                        />
                      </Link>
                      <div
                        className="dropdown-menu bg-none min-height-back hire-c w-100"
                        aria-labelledby="navbarDropdown5"
                      >
                        <div className="">
                          <div className="tab-content" id="pills-tabContent">
                            <div
                              className="tab-pane fade show active"
                              id="HireCLevel"
                              role="tabpanel"
                              aria-labelledby="#HireCLevel-tab"
                            >
                              <div className=" listing-row">
                                <div className="row">
                                  <div className="col-lg-4">
                                    <div className="megamenu-title">
                                      <span>{selectedLanguage?.CSuite}</span>
                                    </div>
                                    <ul className="uder-line-icon-ul">
                                      <li>
                                        <Link
                                          prefetch={false}
                                          // title="Learn more about C-Level Recruitment"
                                          title={`${selectedLanguage?.learnMoreAboutCLevelRecruitment}`}
                                          href="/c-level-recruitment-agency"
                                          className="uder-line-icon-ul-link"
                                        >
                                          {selectedLanguage?.CLevel}
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          prefetch={false}
                                          href="/ceo-manpower-agency/"
                                          className="uder-line-icon-ul-link"
                                          // title="Learn more about CEO Recruitment"
                                          title={`${selectedLanguage?.learnMoreAboutCEORecruitment}`}
                                        >
                                          {selectedLanguage?.CEO}
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          prefetch={false}
                                          href="/cto-recruitment-agency/"
                                          className="uder-line-icon-ul-link"
                                          // title="Explore CTO Recruitment Services"
                                          title={`${selectedLanguage?.exploreCTORecruitmentServices}`}
                                        >
                                          {selectedLanguage?.CTO}
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          prefetch={false}
                                          href="/cxo-staffing-agency/"
                                          className="uder-line-icon-ul-link"
                                          // title="CXO Staffing Solutions"
                                          title={`${selectedLanguage?.cxoStaffingSolutions}`}
                                        >
                                          {selectedLanguage?.CXO}
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          prefetch={false}
                                          href="/cfo-executive-search/"
                                          className="uder-line-icon-ul-link"
                                          // title="CFO Executive Search Services"
                                          title={`${selectedLanguage?.cfoExecutiveSearchServices}`}
                                        >
                                          {selectedLanguage?.CFO}
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-lg-4">
                                    <div className="megamenu-title">
                                      <span>
                                        {" "}
                                        {selectedLanguage?.ExecutiveSearch}
                                      </span>
                                    </div>
                                    <ul className="uder-line-icon-ul">
                                      <li>
                                        <Link
                                          prefetch={false}
                                          href="/executive-recruitment-dubai/"
                                          className="uder-line-icon-ul-link"
                                          // title="Explore Executive Recruitment services in Dubai"
                                          title={`${selectedLanguage?.exploreExecutiveRecruitmentDubai}`}
                                        >
                                          {
                                            selectedLanguage?.ExecutiveRecruitmentDubai
                                          }
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          prefetch={false}
                                          href="/chief-executive-officer-recruitment-agency/"
                                          className="uder-line-icon-ul-link"
                                          // title="Learn about CEO Recruitment services"
                                          title={`${selectedLanguage?.learnAboutCEORecruitmentServices}`}
                                        >
                                          {selectedLanguage?.CEORecruitment}
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          prefetch={false}
                                          href="/executive-chef-employment-agency/"
                                          className="uder-line-icon-ul-link"
                                          // title="Discover Executive Chef Employment opportunities"
                                          title={`${selectedLanguage?.discoverExecutiveChefEmployment}`}
                                        >
                                          {
                                            selectedLanguage?.ExecutiveChefEmployment
                                          }
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          prefetch={false}
                                          href="/executive-search-dubai/"
                                          className="uder-line-icon-ul-link"
                                          // title="Find out about Executive Search services in Dubai"
                                          title={`${selectedLanguage?.findOutExecutiveSearchDubai}`}
                                        >
                                          {
                                            selectedLanguage?.ExecutiveSearchDubai
                                          }
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="bottom-nav-li dropdown">
                      <Link
                        prefetch={false}
                        href="#"
                        className="bottom-nav-link dropdown-toggle"
                        id="navbarDropdown6"
                        role="button"
                        aria-expanded="false"
                        onClick={(e) => e.preventDefault()}
                      >
                        {selectedLanguage?.Headhunter}

                        <Image
                          src="/assets/images/header/vector-down.png"
                          width="12"
                          height="7"
                          alt="vector"
                          loading="eager"
                        />
                      </Link>
                      <div
                        className="dropdown-menu bg-none min-height-back hire-c w-100 "
                        aria-labelledby="navbarDropdown6"
                      >
                        {/* *********************************************************************** */}

                        <div>
                          <div className="tab-content" id="pills-tabContent1">
                            <div
                              className="tab-pane show active headhunter-nav-tab"
                              id="Headhunter"
                              role="tabpanel"
                              aria-labelledby="#Headhunter-tab"
                            >
                              <div className=" listing-row">
                                <ul
                                  className="nav nav-tabs"
                                  id="myTab"
                                  role="tablist"
                                >
                                  <li className="nav-item" role="presentation">
                                    <button
                                      className="nav-link  active"
                                      id="profile-tab"
                                      data-bs-toggle="tab"
                                      data-bs-target="#headhunter"
                                      type="button"
                                      role="tab"
                                      aria-controls="home"
                                      aria-selected="false"
                                      onClick={handleTabClick}
                                    >
                                      {selectedLanguage?.Headhunter}
                                    </button>
                                  </li>
                                  <li className="nav-item" role="presentation">
                                    <button
                                      className="nav-link"
                                      id="home-tab"
                                      data-bs-toggle="tab"
                                      data-bs-target="#industries"
                                      type="button"
                                      role="tab"
                                      aria-controls="home"
                                      aria-selected="true"
                                      onClick={handleTabClick}
                                    >
                                      {selectedLanguage?.Industries}
                                    </button>
                                  </li>
                                </ul>

                                <div className="tab-content" id="myTabContent">
                                  <div
                                    className="tab-pane fade "
                                    id="industries"
                                    role="tabpanel"
                                    aria-labelledby="home-tab"
                                  >
                                    <div className="container">
                                      <div className="megamenu-title">
                                        <span>
                                          {selectedLanguage?.WERECRUIT}
                                        </span>
                                      </div>
                                      <div className="row listing-row">
                                        <div className="col-lg-4">
                                          <ul className="uder-line-icon-ul">
                                            <li>
                                              <Link
                                                prefetch={false}
                                                href="/healthcare-recruitment-agencies-in-dubai"
                                                className="uder-line-icon-ul-link"
                                              >
                                                {selectedLanguage?.healthcare}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                prefetch={false}
                                                href="/doctor-recruitment-dubai"
                                                className="uder-line-icon-ul-link"
                                              >
                                                {selectedLanguage?.doctor}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                prefetch={false}
                                                href="/dentist-recruitment-agencies-in-dubai"
                                                className="uder-line-icon-ul-link"
                                              >
                                                {selectedLanguage?.dentist}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                prefetch={false}
                                                href="/medical-recruitment-agency-dubai"
                                                className="uder-line-icon-ul-link"
                                              >
                                                {selectedLanguage?.medical}
                                              </Link>
                                            </li>

                                            <li>
                                              <Link
                                                prefetch={false}
                                                href="/nursing-recruitment-agency-dubai"
                                                className="uder-line-icon-ul-link"
                                              >
                                                {selectedLanguage?.nursing}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                prefetch={false}
                                                href="/executive-chef-dubai"
                                                className="uder-line-icon-ul-link"
                                              >
                                                {
                                                  selectedLanguage?.executiveChef
                                                }
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                prefetch={false}
                                                href="/executive-sous-chef-dubai"
                                                className="uder-line-icon-ul-link"
                                              >
                                                {selectedLanguage?.sousChef}
                                              </Link>
                                            </li>

                                            <li>
                                              <Link
                                                prefetch={false}
                                                href="/ship-crew-recruitment-agencies-in-dubai"
                                                className="uder-line-icon-ul-link"
                                              >
                                                {selectedLanguage?.shipCrew}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                prefetch={false}
                                                href="/cruise-ship-recruitment-agency-in-dubai"
                                                className="uder-line-icon-ul-link"
                                              >
                                                {selectedLanguage?.cruiseShip}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                prefetch={false}
                                                href="/driver-hiring-in-dubai"
                                                className="uder-line-icon-ul-link"
                                              >
                                                {selectedLanguage?.driver}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>

                                        <div className="col-lg-4">
                                          <ul className="uder-line-icon-ul">
                                            <li>
                                              <Link
                                                prefetch={false}
                                                href="/teacher-recruitment-agencies-in-dubai"
                                                className="uder-line-icon-ul-link"
                                              >
                                                {selectedLanguage?.teacher}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                prefetch={false}
                                                href="/it-recruitment-agency-dubai"
                                                className="uder-line-icon-ul-link"
                                              >
                                                {selectedLanguage?.it}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                prefetch={false}
                                                href="/legal-recruitment-agencies-dubai"
                                                className="uder-line-icon-ul-link"
                                              >
                                                {selectedLanguage?.legal}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                prefetch={false}
                                                href="/banking-recruitment-agencies-in-dubai"
                                                className="uder-line-icon-ul-link"
                                              >
                                                {selectedLanguage?.banking}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                prefetch={false}
                                                href="/accountant-hiring-in-dubai"
                                                className="uder-line-icon-ul-link"
                                              >
                                                {selectedLanguage?.accountant}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                prefetch={false}
                                                href="/construction-recruitment-agencies-in-dubai"
                                                className="uder-line-icon-ul-link"
                                              >
                                                {selectedLanguage?.construction}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                prefetch={false}
                                                href="/engineering-recruitment-agencies-in-dubai"
                                                className="uder-line-icon-ul-link"
                                              >
                                                {selectedLanguage?.engineering}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                prefetch={false}
                                                href="/hr-recruitment-agencies-dubai"
                                                className="uder-line-icon-ul-link"
                                              >
                                                {selectedLanguage?.hr}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                prefetch={false}
                                                href="/marketing-recruitment-agency-dubai"
                                                className="uder-line-icon-ul-link"
                                              >
                                                {selectedLanguage?.marketing}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>

                                        <div className="col-lg-4">
                                          <ul className="uder-line-icon-ul">
                                            <li>
                                              <Link
                                                prefetch={false}
                                                href="/hospitality-recruitment-agency-dubai"
                                                className="uder-line-icon-ul-link"
                                              >
                                                {selectedLanguage?.hospitality}
                                              </Link>
                                            </li>

                                            <li>
                                              <Link
                                                prefetch={false}
                                                href="/hotel-recruitment-agency-dubai"
                                                className="uder-line-icon-ul-link"
                                              >
                                                {selectedLanguage?.hotel}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                prefetch={false}
                                                href="/maid-recruitment-agency-in-dubai"
                                                className="uder-line-icon-ul-link"
                                              >
                                                {selectedLanguage?.maid}
                                              </Link>
                                            </li>

                                            <li>
                                              <Link
                                                prefetch={false}
                                                href="/hire-photographer-dubai"
                                                className="uder-line-icon-ul-link"
                                              >
                                                {selectedLanguage?.photography}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                prefetch={false}
                                                href="/dubai-oil-and-gas-recruitment-agencies"
                                                className="uder-line-icon-ul-link"
                                              >
                                                {selectedLanguage?.oilAndGas}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                prefetch={false}
                                                href="/retail-recruitment-agencies-in-dubai"
                                                className="uder-line-icon-ul-link"
                                              >
                                                {selectedLanguage?.retail}
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                prefetch={false}
                                                href="/finance-recruitment-agencies-in-dubai"
                                                className="uder-line-icon-ul-link"
                                              >
                                                {selectedLanguage?.finance}
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="tab-pane fade show active"
                                    id="headhunter"
                                    role="tabpanel"
                                    aria-labelledby="profile-tab"
                                  >
                                    <div className="container">
                                      <div className="row uder-line-icon-ul mt-3">
                                        <div className="col-lg-4">
                                          <Link
                                            prefetch={false}
                                            href="/executive-headhunters-in-dubai/"
                                            className="uder-line-icon-ul-link"
                                            title="Connect with Executive Headhunters in Dubai"
                                          >
                                            {
                                              selectedLanguage?.ExecutiveHeadhunter
                                            }
                                          </Link>
                                        </div>
                                        <div className="col-lg-4">
                                          <Link
                                            prefetch={false}
                                            href="/cfo-headhunters/"
                                            className="uder-line-icon-ul-link"
                                            title={`${selectedLanguage?.exploreCFOHeadhunters}`}
                                          >
                                            {selectedLanguage?.CFOHeadhunters}
                                          </Link>
                                        </div>
                                        <div className="col-lg-4">
                                          <Link
                                            prefetch={false}
                                            href="/cto-headhunters/"
                                            className="uder-line-icon-ul-link"
                                            title="Discover CTO Headhunters for executive talent search"
                                          >
                                            {selectedLanguage?.CTOHeadhunters}
                                          </Link>
                                        </div>
                                        {/* <ul className="uder-line-icon-ul mt-3">
                  
                                      </ul> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* *********************************************************************** */}
                      </div>
                    </li>

                    <li className="bottom-nav-li">
                      <Link
                        prefetch={false}
                        href="/webblog"
                        className="bottom-nav-link"
                      >
                        {selectedLanguage?.blog}
                      </Link>
                    </li>

                    <li className="bottom-nav-li">
                      <Link
                        prefetch={false}
                        href="/contact-us"
                        style={{ whiteSpace: "nowrap" }}
                        className="bottom-nav-link"
                      >
                        {selectedLanguage?.contact}
                      </Link>
                    </li>
                  </ul>{" "}
                  <ul>
                    <li className="bottom-nav-li cta-btn-list">
                      <div>
                        <Link id="" href="/contact-us">
                          <div className="btn-box">
                            <Image
                              src="/assets/images/header/post-vacancy-bg.png"
                              alt="post-vacancy"
                              width="116"
                              height="40"
                              loading="lazy"
                              className="btn-bg"
                            />
                            <Image
                              src="/assets/images/header/post-vacancy-icon.png"
                              alt="post-vacancy-icon"
                              loading="lazy"
                              width="43"
                              height="40"
                              className="btn-icon"
                            />
                            {/* <Image
                              src="/assets/images/header/triangle-animation.gif"
                              alt="triangle-animation"
                              width="40"
                              height="32"
                              loading="lazy"
                              className="gif-icon"
                            /> */}
                            <Image
                              src="/assets/images/header/post-vacancy-text.png"
                              width="60"
                              height="28"
                              alt="vacancy"
                              loading="lazy"
                              className="btn-text"
                            />
                          </div>
                          {/* tablet button  start here*/}
                          <div className="btn-box tablet-btn">
                            <Image
                              loading="lazy"
                              src="/assets/images/header/tab-post-vacancy-bg.png"
                              alt="post-vacancy"
                              width="70"
                              height="26"
                              className="btn-bg"
                            />
                            <Image
                              loading="lazy"
                              src="/assets/images/header/tab-post-vacancy-icon.png"
                              alt="post-vacancy-icon"
                              width="26"
                              height="26"
                              className="btn-icon"
                            />
                            {/* <Image
                              loading="lazy"
                              src="/assets/images/header/triangle-animation.gif"
                              alt="triangle-animation"
                              width="20"
                              height="22"
                              className="gif-icon"
                            /> */}
                            <Image
                              loading="lazy"
                              src="/assets/images/header/tab-post-vacancy-text.png"
                              width="39"
                              height="19"
                              alt=""
                              className="btn-text"
                            />
                          </div>
                          {/* tablet button  start here*/}
                        </Link>
                      </div>
                      <div onClick={handleButtonClick}>
                        {/* <Image   loading="eager"
                          src="/assets/images/header/hire-talent-ae.png"
                          width="98"
                          height="48"
                          alt="hire talent"
                          onClick={handleButtonClick}
                        /> */}
                        <div className="btn-box">
                          <Image
                            loading="lazy"
                            src="/assets/images/header/hire-talent-bg.png"
                            alt="post-vacancy"
                            width="98"
                            height="40"
                            className="btn-bg"
                          />
                          <Image
                            loading="lazy"
                            src="/assets/images/header/hire-talent-icon.png"
                            alt="post-vacancy-icon"
                            width="43"
                            height="40"
                            className="btn-icon"
                          />
                          {/* <Image
                            loading="lazy"
                            src="/assets/images/header/triangle-animation.gif"
                            alt="triangle-animation"
                            width="40"
                            height="32"
                            className="gif-icon"
                          /> */}
                          <Image
                            loading="lazy"
                            src="/assets/images/header/hire-talent-text.png"
                            width="40"
                            height="26"
                            alt="hire-talent-text"
                            className="btn-text"
                          />
                        </div>
                        {/* tablet button  start here*/}
                        <div className="btn-box tablet-btn">
                          <Image
                            loading="lazy"
                            src="/assets/images/header/tab-hire-talent-bg.png"
                            alt="post-vacancy"
                            width="70"
                            height="26"
                            className="btn-bg"
                          />
                          <Image
                            loading="lazy"
                            src="/assets/images/header/tab-hire-talent-icon.png"
                            alt="post-vacancy-icon"
                            width="26"
                            height="26"
                            className="btn-icon"
                          />
                          {/* <Image
                            loading="lazy"
                            src="/assets/images/header/triangle-animation.gif"
                            alt="triangle-animation"
                            width="20"
                            height="22"
                            className="gif-icon"
                          /> */}
                          <Image
                            loading="lazy"
                            src="/assets/images/header/tab-hire-talent-text.png"
                            width="39"
                            height="19"
                            alt="tab-hire-talent-text"
                            className="btn-text"
                          />
                        </div>
                        {/* tablet button  start here*/}
                      </div>
                      <div>
                        <Link id="" href="/franchise-apply">
                          {/* <Image   loading="eager"
                            src="/assets/images/header/franchise-inq-ae.png"
                            width="114"
                            height="48"
                            alt="franchise-inquary"
                          /> */}
                          <div className="btn-box">
                            <Image
                              loading="lazy"
                              src="/assets/images/header/franchise-inq-bg.png"
                              alt="post-vacancy"
                              width="114"
                              height="40"
                              className="btn-bg"
                            />
                            <Image
                              loading="lazy"
                              src="/assets/images/header/franchise-inquiry-icon.png"
                              alt="post-vacancy-icon"
                              width="43"
                              height="40"
                              className="btn-icon"
                            />
                            {/* <Image
                              loading="lazy"
                              src="/assets/images/header/triangle-animation.gif"
                              alt="triangle-animation"
                              width="40"
                              height="32"
                              className="gif-icon"
                            /> */}
                            <Image
                              loading="lazy"
                              src="/assets/images/header/franchise-apply-text.webp"
                              width="62"
                              height="29"
                              alt="franchise-apply-text"
                              className="btn-text"
                            />
                          </div>
                          {/* tablet button  start here*/}
                          <div className="btn-box tablet-btn">
                            <Image
                              loading="lazy"
                              src="/assets/images/header/tab-franchise-inq-bg.png"
                              alt="post-vacancy"
                              width="70"
                              height="26"
                              className="btn-bg"
                            />
                            <Image
                              loading="lazy"
                              src="/assets/images/header/tab-franchise-inq-icon.png"
                              alt="post-vacancy-icon"
                              width="26"
                              height="26"
                              className="btn-icon"
                            />
                            {/* <Image
                              loading="lazy"
                              src="/assets/images/header/triangle-animation.gif"
                              alt="triangle-animation"
                              width="20"
                              height="22"
                              className="gif-icon"
                            /> */}
                            <Image
                              loading="lazy"
                              src="/assets/images/header/tab-franchise-inq-text.png"
                              width="39"
                              height="19"
                              alt="tab-franchise-inq-text"
                              className="btn-text"
                            />
                          </div>
                          {/* tablet button  End here*/}
                        </Link>
                      </div>
                      <div>
                        <Link

                          id=""
                          href="/job-seekers"
                        // target="_blank"
                        >
                          {/* <Image   loading="eager"
                            src="/assets/images/header/job-seekers-ae.png"
                            width="107"
                            height="48"
                            alt="franchise-inquary"
                          /> */}
                          <div className="btn-box">
                            <Image
                              loading="lazy"
                              src="/assets/images/header/job-seekers-bg.png"
                              alt="post-vacancy"
                              width="107"
                              height="40"
                              className="btn-bg"
                            />
                            <Image
                              loading="lazy"
                              src="/assets/images/header/job-seekers-icon.png"
                              alt="post-vacancy-icon"
                              width="43"
                              height="40"
                              className="btn-icon"
                            />
                            {/* <Image
                              loading="lazy"
                              src="/assets/images/header/triangle-animation.gif"
                              alt="triangle-animation"
                              width="40"
                              height="32"
                              className="gif-icon"
                            /> */}
                            <Image
                              loading="lazy"
                              src="/assets/images/header/job-seekers-text.png"
                              width="50"
                              height="27"
                              alt="job-seekers-text"
                              className="btn-text"
                            />
                          </div>
                          {/* tablet button  start here*/}
                          <div className="btn-box tablet-btn">
                            <Image
                              loading="lazy"
                              src="/assets/images/header/tab-job-seekers-bg.png"
                              alt="post-vacancy"
                              width="70"
                              height="26"
                              className="btn-bg"
                            />
                            <Image
                              loading="lazy"
                              src="/assets/images/header/tab-job-seekers-icon.png"
                              alt="post-vacancy-icon"
                              width="26"
                              height="26"
                              className="btn-icon"
                            />
                            {/* <Image
                              loading="lazy"
                              src="/assets/images/header/triangle-animation.gif"
                              alt="triangle-animation"
                              width="20"
                              height="22"
                              className="gif-icon"
                            /> */}
                            <Image
                              loading="lazy"
                              src="/assets/images/header/tab-job-seekers-text.png"
                              width="39"
                              height="19"
                              alt="tab-job-seekers-text"
                              className="btn-text"
                            />
                          </div>
                          {/* tablet button  End here*/}
                        </Link>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <Link
              prefetch={false}
              href="#"
              onClick={handleMenuIconClick}
              className="menu-icon ms-auto"
              aria-label="icon"
            >
              <i className="fas fa-bars"></i>
              <i className="fas fa-times"></i>
            </Link>
          </div>

          {isMobileMenuActive ? (
            <MobileMenu
              handleNavLinkClick={handleNavLinkClick}
              handleButtonClick={handleButtonClick}
              selectedLanguage={selectedLanguage}
              isActive={isMobileMenuActive}
            />
          ) : null}
        </div>
      </header>
      {showModalhire ? (
        <HireTalentForm
          show={showModalhire}
          setShowModalhire={setShowModalhire}
          title="Hire Talent"
        />
      ) : null}
    </>
  );
};
export default memo(Header);

const MobileMenu = memo(({
  handleNavLinkClick,
  handleButtonClick,
  selectedLanguage,
  isActive,
}: MobileMenuProps) => {

  return (
    <>
      <div className="mob-header container-fluid c-pad-x">
        <div className={`mobile-main-menu d-none-desktop ${isActive ? "active" : ""}`}>
          <div>
            <div className="container p-0">
              <div className="country-numbers">
                <div className="contact-content">
                  <span>
                    <Image
                      loading="eager"
                      priority
                      width={20}
                      height={20}
                      src="/assets/images/header/uk.png"
                      alt="United Kingdom Flag"
                    />
                  </span>
                  <Link
                    prefetch={false}
                    aria-label="phone-icon"
                    href="tel:+44 20 3838 0743"
                    className="com-pera"
                  >
                    <span className="phone-icon">
                      <Image
                        loading="eager"
                        width={20}
                        height={20}
                        src="/assets/images/header/phone-icon.svg"
                        alt="Call Now"
                      />
                    </span>
                    +44 20 3838 0743
                  </Link>
                </div>
                <div className="contact-content">
                  <span>
                    <Image
                      priority
                      loading="eager"
                      width={20}
                      height={20}
                      src="/assets/images/header/united-states-flag.svg"
                      alt="United State Flag"
                    />
                  </span>
                  <Link
                    prefetch={false}
                    aria-label="phone-icon1"
                    href="tel:+19179009072"
                    className="com-pera"
                  >
                    <span className="phone-icon">
                      <Image
                        loading="eager"
                        priority
                        width={20}
                        height={20}
                        src="/assets/images/header/phone-icon.svg"
                        alt="Call Now"
                      />
                    </span>
                    +1 (917) 900 9072
                  </Link>
                </div>
                <div className="contact-content">
                  <span>
                    <Image
                      priority
                      loading="eager"
                      width={20}
                      height={20}
                      src="/assets/images/header/canada-flag.svg"
                      alt="Canada Flag"
                    />
                  </span>
                  <Link
                    prefetch={false}
                    aria-label="phone-icon3"
                    href="tel:+17809004752"
                    className="com-pera"
                  >
                    <span className="phone-icon">
                      <Image
                        loading="eager"
                        priority
                        width={20}
                        height={20}
                        src="/assets/images/header/phone-icon.svg"
                        alt="Call Now"
                      />
                    </span>
                    +1 (780) 900 4752
                  </Link>
                </div>
                <div className="contact-content">
                  <span>
                    <Image
                      loading="eager"
                      priority
                      width={20}
                      height={20}
                      src="/assets/images/header/india-flag.svg"
                      alt="India Flag"
                    />
                  </span>
                  <Link
                    prefetch={false}
                    aria-label="phone-icon3"
                    href="tel:+918980018741"
                    className="com-pera"
                  >
                    <span className="phone-icon">
                      <Image
                        loading="eager"
                        priority
                        width={20}
                        height={20}
                        src="/assets/images/header/phone-icon.svg"
                        alt="Call Now"
                      />
                    </span>
                    +91 89800 18741
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="first-custome-acr c-p-x">
            <ul className="accordion" id="accordionExample">
              <li className="first-custome-acr-li">
                <Link
                  prefetch={false}
                  aria-label="phone-icon4"
                  onClick={handleNavLinkClick}
                  href="/"
                  className="first-custome-acr-li-a"
                >
                  {selectedLanguage?.home}
                </Link>
              </li>

              <li className="accordion-item first-custome-acr-li">
                <p className="accordion-header" id="headingOne">
                  <button
                    aria-label="about"
                    className="accordion-button first-custome-acr-li arrow-design collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    {selectedLanguage?.about}
                  </button>
                </p>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <ul className="second-inner-ul-1">
                      <li>
                        <Link
                          prefetch={false}
                          aria-label="LifeAlliance"
                          onClick={handleNavLinkClick}
                          href="/life-at-alliance-international/"
                        >
                          {" "}
                          {selectedLanguage?.LifeAlliance}
                        </Link>
                      </li>
                      <li>
                        <Link
                          prefetch={false}
                          aria-label="about"
                          onClick={handleNavLinkClick}
                          href="/manpower-agency-dubai/"
                        >
                          {selectedLanguage?.about}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="accordion-item first-custome-acr-li">
                <p className="accordion-header" id="headinservice">
                  <button
                    aria-label="services"
                    className="accordion-button first-custome-acr-li arrow-design collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseservice"
                    aria-expanded="true"
                    aria-controls="collapseservice"
                  >
                    {selectedLanguage?.services}
                  </button>
                </p>
                <div
                  id="collapseservice"
                  className="accordion-collapse collapse"
                  aria-labelledby="headinservice"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <ul className="second-inner-ul-1">
                      <li className="accordion-item first-custome-acr-li">
                        <p className="accordion-header" id="headinservice-1">
                          <button
                            aria-label="ManpowerRecruitment"
                            className="accordion-button first-custome-acr-li arrow-design collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseservice-1"
                            aria-expanded="true"
                            aria-controls="collapseservice-1"
                          >
                            {selectedLanguage?.ManpowerRecruitment}
                          </button>
                        </p>
                        <div
                          id="collapseservice-1"
                          className="accordion-collapse collapse"
                          aria-labelledby="headinservice-1"
                          data-bs-parent="#accordionExample-2"
                        >
                          <div className="accordion-body">
                            <ul className="second-inner-ul-1">
                              <li>
                                <Link
                                  prefetch={false}
                                  aria-label="dubai"
                                  onClick={handleNavLinkClick}
                                  href="/manpower-dubai/"
                                >
                                  {" "}
                                  {selectedLanguage?.ManpowerRecruitment}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  prefetch={false}
                                  aria-label="RecruitmentServices"
                                  onClick={handleNavLinkClick}
                                  href="/recruitment-dubai/"
                                >
                                  {selectedLanguage?.RecruitmentServices}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  prefetch={false}
                                  aria-label="RecruitmentConsultant1"
                                  onClick={handleNavLinkClick}
                                  href="/recruitment-consultants-in-dubai/"
                                >
                                  {selectedLanguage?.RecruitmentConsultant}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  prefetch={false}
                                  aria-label="recruitment-agency-in-dubaii"
                                  onClick={handleNavLinkClick}
                                  href="/recruitment-agency-in-dubai/"
                                >
                                  {selectedLanguage?.RecruitmentAgency}
                                </Link>
                              </li>
                              <li>
                                <Link

                                  onClick={handleNavLinkClick}
                                  href="/employment-agencies-in-dubai/"
                                >
                                  {selectedLanguage?.EmploymentAgency}
                                </Link>
                              </li>
                              <li>
                                <Link

                                  onClick={handleNavLinkClick}
                                  href="/manpower-company-in-dubai/"
                                >
                                  {selectedLanguage?.ManpowerCompany}
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="accordion-item first-custome-acr-li">
                        <p className="accordion-header" id="headinservice-2">
                          <button
                            className="accordion-button first-custome-acr-li arrow-design collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseservice-2"
                            aria-expanded="true"
                            aria-controls="collapseservice-2"
                          >
                            {selectedLanguage?.RPOServices}
                          </button>
                        </p>
                        <div
                          id="collapseservice-2"
                          className="accordion-collapse collapse"
                          aria-labelledby="headinservice-2"
                          data-bs-parent="#accordionExample-2"
                        >
                          <div className="accordion-body">
                            <ul className="second-inner-ul-1">
                              <li>
                                <Link

                                  onClick={handleNavLinkClick}
                                  href="/hr-consultants-in-dubai/"
                                >
                                  {" "}
                                  {selectedLanguage?.HRConsultant}
                                </Link>
                              </li>
                              <li>
                                <Link

                                  onClick={handleNavLinkClick}
                                  href="/placement-agency-in-dubai/"
                                >
                                  {selectedLanguage?.PlacementAgency}
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="accordion-item first-custome-acr-li">
                        <p className="accordion-header" id="headinservice-3">
                          <button
                            aria-label="StaffingServices"
                            className="accordion-button first-custome-acr-li arrow-design collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseservice-3"
                            aria-expanded="true"
                            aria-controls="collapseservice-3"
                          >
                            {selectedLanguage?.StaffingServices}
                          </button>
                        </p>
                        <div
                          id="collapseservice-3"
                          className="accordion-collapse collapse"
                          aria-labelledby="headinservice-3"
                          data-bs-parent="#accordionExample-2"
                        >
                          <div className="accordion-body">
                            <ul className="second-inner-ul-1">
                              <li>
                                <Link
                                  prefetch={false}
                                  aria-label="agencies-in-dubai"
                                  onClick={handleNavLinkClick}
                                  href="/temporary-staffing-agencies-in-dubai/"
                                >
                                  {" "}
                                  {selectedLanguage?.TempStaffingAgency}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  prefetch={false}
                                  aria-label="ITStaffingCompanys"
                                  onClick={handleNavLinkClick}
                                  href="/it-staffing-companies-in-dubai/"
                                >
                                  {selectedLanguage?.ITStaffingCompany}
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="accordion-item first-custome-acr-li">
                        <p className="accordion-header" id="headinservice-4">
                          <button
                            aria-label="location"
                            className="accordion-button first-custome-acr-li arrow-design collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseservice-4"
                            aria-expanded="true"
                            aria-controls="collapseservice-4"
                          >
                            {selectedLanguage?.location}
                          </button>
                        </p>
                        <div
                          id="collapseservice-4"
                          className="accordion-collapse collapse"
                          aria-labelledby="headinservice-4"
                          data-bs-parent="#accordionExample-2"
                        >
                          <div className="accordion-body">
                            <ul className="second-inner-ul-1">
                              <li>
                                <Link

                                  onClick={handleNavLinkClick}
                                  href="/recruitment-agencies-abu-dhabi/"
                                >
                                  {" "}
                                  {selectedLanguage?.abuDhabi}
                                </Link>
                              </li>
                              <li>
                                <Link

                                  onClick={handleNavLinkClick}
                                  href="/recruitment-agencies-qatar/"
                                >
                                  {selectedLanguage?.qatar}
                                </Link>
                              </li>
                              <li>
                                <Link

                                  onClick={handleNavLinkClick}
                                  href="/manpower-agency-dubai/"
                                >
                                  {selectedLanguage?.Dubai}
                                </Link>
                              </li>
                              <li>
                                <Link

                                  onClick={handleNavLinkClick}
                                  href="/recruitment-agencies-bahrain/"
                                >
                                  {selectedLanguage?.bahrain}
                                </Link>
                              </li>
                              <li>
                                <Link

                                  onClick={handleNavLinkClick}
                                  href="/recruitment-agencies-jeddah/"
                                >
                                  {selectedLanguage?.jeddah}
                                </Link>
                              </li>
                              <li>
                                <Link

                                  onClick={handleNavLinkClick}
                                  href="/recruitment-agencies-dubai/"
                                >
                                  {selectedLanguage?.dubai}
                                </Link>
                              </li>
                              <li>
                                <Link

                                  onClick={handleNavLinkClick}
                                  href="/recruitment-agencies-kuwait/"
                                >
                                  {selectedLanguage?.kuwait}
                                </Link>
                              </li>
                              <li>
                                <Link

                                  onClick={handleNavLinkClick}
                                  href="/recruitment-agencies-oman/"
                                >
                                  {selectedLanguage?.oman}
                                </Link>
                              </li>
                              <li>
                                <Link

                                  onClick={handleNavLinkClick}
                                  href="/recruitment-agencies-riyadh/"
                                >
                                  {selectedLanguage?.riyadh}
                                </Link>
                              </li>
                              <li>
                                <Link

                                  onClick={handleNavLinkClick}
                                  href="/recruitment-agencies-sharjah/"
                                >
                                  {selectedLanguage?.sharjah}
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="accordion-item first-custome-acr-li">
                <p className="accordion-header" id="headinservice">
                  <button
                    className="accordion-button first-custome-acr-li arrow-design collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsefranchise"
                    aria-expanded="true"
                    aria-controls="collapsefranchise"
                  >
                    {selectedLanguage?.Franchise}
                  </button>
                </p>
                <div
                  id="collapsefranchise"
                  className="accordion-collapse collapse"
                  aria-labelledby="headinservice"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <ul className="second-inner-ul-1">
                      <li>
                        {" "}
                        <Link

                          onClick={handleNavLinkClick}
                          className="uder-line-icon-ul-link"
                          href="/executive-search-franchise-opportunities/"
                        >
                          {selectedLanguage?.ExecutiveSearch}
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link

                          onClick={handleNavLinkClick}
                          className="uder-line-icon-ul-link"
                          href="/medical-healthcare-staffing-franchise-opportunities/"
                        >
                          {selectedLanguage?.MedicalHealthcarestaffing}
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link

                          onClick={handleNavLinkClick}
                          className="uder-line-icon-ul-link"
                          href="/employment-agency-franchise-opportunities/"
                        >
                          {selectedLanguage?.Employmentagencyfranchise}
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link

                          onClick={handleNavLinkClick}
                          className="uder-line-icon-ul-link"
                          href="/hr-consultancy-franchise-opportunities/"
                        >
                          {selectedLanguage?.HRConsultant}
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link

                          onClick={handleNavLinkClick}
                          className="uder-line-icon-ul-link"
                          href="/recruitment-agency-franchise/"
                        >
                          {selectedLanguage?.RecruitmentAgency}
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link

                          onClick={handleNavLinkClick}
                          className="uder-line-icon-ul-link"
                          href="/manpower-consultancy-franchise-opportunities/"
                        >
                          {selectedLanguage?.Manpowerconsultancy}
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          onClick={handleNavLinkClick}
                          className="uder-line-icon-ul-link"
                          href="/staffing-agency-franchise-opportunities/"
                        >
                          {selectedLanguage?.Staffingagencyfranchise}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="accordion-item first-custome-acr-li">
                <p className="accordion-header" id="hireclevel">
                  <button
                    className="accordion-button first-custome-acr-li arrow-design collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseservice-11"
                    aria-expanded="true"
                    aria-controls="collapseservice-11"
                  >
                    {selectedLanguage?.HireCLevel}
                  </button>
                </p>
                <div
                  id="collapseservice-11"
                  className="accordion-collapse collapse"
                  aria-labelledby="headinservice"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <ul className="second-inner-ul-1">
                      <li className="accordion-item first-custome-acr-li">
                        <p className="accordion-header" id="headinservice-5">
                          <button
                            className="accordion-button first-custome-acr-li arrow-design collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseservice-1-man"
                            aria-expanded="true"
                            aria-controls="collapseservice-1-man"
                          >
                            {selectedLanguage?.CSuite}
                          </button>
                        </p>
                        <div
                          id="collapseservice-1-man"
                          className="accordion-collapse collapse"
                          aria-labelledby="headinservice-5"
                          data-bs-parent="#accordionExample-2"
                        >
                          <div className="accordion-body">
                            <ul className="second-inner-ul-1">
                              <li>
                                <Link

                                  onClick={handleNavLinkClick}
                                  href="/c-level-recruitment-agency/"
                                >
                                  {" "}
                                  {selectedLanguage?.CLevel}
                                </Link>
                              </li>
                              <li>
                                <Link

                                  onClick={handleNavLinkClick}
                                  href="/ceo-manpower-agency"
                                >
                                  {selectedLanguage?.CEO}
                                </Link>
                              </li>
                              <li>
                                <Link

                                  onClick={handleNavLinkClick}
                                  href="/cto-recruitment-agency/"
                                >
                                  {selectedLanguage?.CTO}
                                </Link>
                              </li>
                              <li>
                                <Link

                                  onClick={handleNavLinkClick}
                                  href="/cxo-staffing-agency/"
                                >
                                  {selectedLanguage?.CXO}
                                </Link>
                              </li>
                              <li>
                                <Link

                                  onClick={handleNavLinkClick}
                                  href="/cfo-executive-search/"
                                >
                                  {selectedLanguage?.CFO}
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="accordion-item first-custome-acr-li">
                        <p className="accordion-header" id="headinservice-6">
                          <button
                            className="accordion-button first-custome-acr-li arrow-design collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseservice-2-man"
                            aria-expanded="true"
                            aria-controls="collapseservice-2-man"
                          >
                            {selectedLanguage?.Executivesearch}
                          </button>
                        </p>
                        <div
                          id="collapseservice-2-man"
                          className="accordion-collapse collapse"
                          aria-labelledby="headinservice-6"
                          data-bs-parent="#accordionExample-2"
                        >
                          <div className="accordion-body">
                            <ul className="second-inner-ul-1">
                              <li>
                                <Link

                                  onClick={handleNavLinkClick}
                                  href="/executive-recruitment-dubai/"
                                >
                                  {selectedLanguage?.ExecutiveRecruitmentDubai}
                                </Link>
                              </li>
                              <li>
                                <Link

                                  onClick={handleNavLinkClick}
                                  href="/chief-executive-officer-recruitment-agency/"
                                >
                                  {selectedLanguage?.CEORecruitment}
                                </Link>
                              </li>
                              <li>
                                <Link

                                  onClick={handleNavLinkClick}
                                  href="/executive-chef-employment-agency/"
                                >
                                  {selectedLanguage?.ExecutiveChefEmployment}
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="accordion-item first-custome-acr-li">
                <p className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button first-custome-acr-li arrow-design collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    {selectedLanguage?.Headhunter}
                  </button>
                </p>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <ul className="second-inner-ul-1">
                      <li>
                        <Link

                          onClick={handleNavLinkClick}
                          href="/executive-headhunters-in-dubai/"
                          className="uder-line-icon-ul-link"
                          title="Connect with Executive Headhunters in Dubai"
                        >
                          {selectedLanguage?.ExecutiveHeadhunter}
                        </Link>
                      </li>
                      <li>
                        <Link

                          onClick={handleNavLinkClick}
                          href="/cfo-headhunters/"
                          className="uder-line-icon-ul-link"
                          title={`${selectedLanguage?.exploreCFOHeadhunters}`}
                        >
                          {selectedLanguage?.CFOHeadhunters}
                        </Link>
                      </li>
                      <li>
                        <Link

                          onClick={handleNavLinkClick}
                          href="/cto-headhunters/"
                          className="uder-line-icon-ul-link"
                          title="Discover CTO Headhunters for executive talent search"
                        >
                          {selectedLanguage?.CTOHeadhunters}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="accordion-item first-custome-acr-li">
                <p className="accordion-header" id="headinservice-22">
                  <button
                    className="accordion-button first-custome-acr-li arrow-design collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseservice-23"
                    aria-expanded="true"
                    aria-controls="collapseservice-23"
                  >
                    {selectedLanguage?.Industries}
                  </button>
                </p>
                <div
                  id="collapseservice-23"
                  className="accordion-collapse collapse"
                  aria-labelledby="headinservice-22"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <ul className="second-inner-ul-1">
                      <li>
                        <Link

                          onClick={handleNavLinkClick}
                          href="/healthcare-recruitment-agencies-in-dubai/"
                        >
                          {selectedLanguage?.Healthcare}
                        </Link>
                      </li>
                      <li>
                        <Link

                          onClick={handleNavLinkClick}
                          href="/doctor-recruitment-dubai/"
                        >
                          {selectedLanguage?.doctor}
                        </Link>
                      </li>
                      <li>
                        <Link

                          onClick={handleNavLinkClick}
                          href="/dentist-recruitment-agencies-in-dubai/"
                        >
                          {selectedLanguage?.dentist}
                        </Link>
                      </li>
                      <li>
                        <Link

                          onClick={handleNavLinkClick}
                          href="/medical-recruitment-agency-dubai/"
                        >
                          {selectedLanguage?.medical}
                        </Link>
                      </li>
                      <li>
                        <Link

                          onClick={handleNavLinkClick}
                          href="/nursing-recruitment-agency-dubai/"
                        >
                          {selectedLanguage?.nursing}
                        </Link>
                      </li>

                      <li>
                        <Link

                          onClick={handleNavLinkClick}
                          href="/executive-chef-dubai/"
                        >
                          {selectedLanguage?.executiveChef}
                        </Link>
                      </li>
                      <li>
                        <Link

                          onClick={handleNavLinkClick}
                          href="/executive-sous-chef-dubai/"
                        >
                          {selectedLanguage?.sousChef}
                        </Link>
                      </li>
                      <li>
                        <Link

                          onClick={handleNavLinkClick}
                          href="/ship-crew-recruitment-agencies-in-dubai/"
                        >
                          {selectedLanguage?.shipCrew}
                        </Link>
                      </li>
                      <li>
                        <Link

                          onClick={handleNavLinkClick}
                          href="/cruise-ship-recruitment-agency-in-dubai/"
                        >
                          {selectedLanguage?.cruiseShip}
                        </Link>
                      </li>
                      <li>
                        <Link

                          onClick={handleNavLinkClick}
                          href="/driver-hiring-in-dubai/"
                        >
                          {selectedLanguage?.driver}
                        </Link>
                      </li>
                      <li>
                        <Link

                          onClick={handleNavLinkClick}
                          href="/teacher-recruitment-agencies-in-dubai/"
                        >
                          {selectedLanguage?.teacher}
                        </Link>
                      </li>
                      <li>
                        <Link

                          onClick={handleNavLinkClick}
                          href="/it-recruitment-agency-dubai/"
                        >
                          {selectedLanguage?.it}
                        </Link>
                      </li>
                      <li>
                        <Link

                          onClick={handleNavLinkClick}
                          href="/legal-recruitment-agencies-dubai/"
                        >
                          {selectedLanguage?.legal}
                        </Link>
                      </li>
                      <li>
                        <Link

                          onClick={handleNavLinkClick}
                          href="/banking-recruitment-agencies-in-dubai/"
                        >
                          {selectedLanguage?.banking}
                        </Link>
                      </li>
                      <li>
                        <Link

                          onClick={handleNavLinkClick}
                          href="/accountant-hiring-in-dubai/"
                        >
                          {selectedLanguage?.accountant}
                        </Link>
                      </li>
                      <li>
                        <Link

                          onClick={handleNavLinkClick}
                          href="/construction-recruitment-agencies-in-dubai/"
                        >
                          {selectedLanguage?.construction}
                        </Link>
                      </li>
                      <li>
                        <Link

                          onClick={handleNavLinkClick}
                          href="/engineering-recruitment-agencies-in-dubai/"
                        >
                          {selectedLanguage?.engineering}
                        </Link>
                      </li>
                      <li>
                        <Link

                          onClick={handleNavLinkClick}
                          href="/hr-recruitment-agencies-dubai/"
                        >
                          {selectedLanguage?.hr}
                        </Link>
                      </li>
                      <li>
                        <Link

                          onClick={handleNavLinkClick}
                          href="/marketing-recruitment-agency-dubai/"
                        >
                          {selectedLanguage?.marketing}
                        </Link>
                      </li>
                      <li>
                        <Link

                          onClick={handleNavLinkClick}
                          href="/hospitality-recruitment-agency-dubai/"
                        >
                          {selectedLanguage?.hospitality}
                        </Link>
                      </li>
                      <li>
                        <Link

                          onClick={handleNavLinkClick}
                          href="/hotel-recruitment-agency-dubai/"
                        >
                          {selectedLanguage?.hotel}
                        </Link>
                      </li>

                      <li>
                        <Link

                          onClick={handleNavLinkClick}
                          href="/maid-recruitment-agency-in-dubai/"
                        >
                          {selectedLanguage?.maid}
                        </Link>
                      </li>

                      <li>
                        <Link

                          onClick={handleNavLinkClick}
                          href="/hire-photographer-dubai/"
                        >
                          {selectedLanguage?.photography}
                        </Link>
                      </li>

                      <li>
                        <Link

                          onClick={handleNavLinkClick}
                          href="/dubai-oil-and-gas-recruitment-agencies/"
                        >
                          {selectedLanguage?.oilAndGas}
                        </Link>
                      </li>

                      <li>
                        <Link

                          onClick={handleNavLinkClick}
                          href="/retail-recruitment-agencies-in-dubai/"
                        >
                          {selectedLanguage?.retail}
                        </Link>
                      </li>

                      <li>
                        <Link

                          onClick={handleNavLinkClick}
                          href="/finance-recruitment-agencies-in-dubai/"
                        >
                          {selectedLanguage?.finance}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="first-custome-acr-li">
                <Link

                  onClick={handleNavLinkClick}
                  href="/webblog/"
                  className="first-custome-acr-li-a"
                >
                  {selectedLanguage?.blog}
                </Link>
              </li>

              <li className="first-custome-acr-li">
                <Link

                  onClick={handleNavLinkClick}
                  href="/contact-us/"
                  className="first-custome-acr-li-a"
                >
                  {selectedLanguage?.contact}
                </Link>
              </li>
              <li className="first-custome-acr-lia">
                <Link

                  onClick={handleNavLinkClick}
                  href="/contact-us/"
                  className="mob-franchise-btn"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <div className="mob-btn-box">
                    <div className="mob-btn-bg">
                      <Image
                        loading="eager"
                        src="/assets/images/header/post-vacancy-bg-mob.png"
                        alt="post-vacancy-bg-mob"
                        width="167"
                        height="40"
                      />
                      <Image
                        loading="eager"
                        src="/assets/images/header/post-vacancy-mob.png"
                        alt="post-vacancy-mob"
                        width="43"
                        height="40"
                        className="mob-btn-icon"
                      />
                      {/* <Image
                        loading="eager"
                        src="/assets/images/header/triangle-animation.gif"
                        alt="triangle-animation"
                        width="43"
                        height="40"
                        className="mob-btn-animation"
                      /> */}
                      <span className="mob-btn-text">
                        {selectedLanguage?.postYourVacancy}
                      </span>
                    </div>
                  </div>
                </Link>
                <Link

                  onClick={handleNavLinkClick}
                  href="/franchise-apply/"
                  className="mob-franchise-btn"
                  style={{
                    textDecoration: "none", // Ensure to include textDecoration to remove underlines
                  }}
                ></Link>
                <Link

                  onClick={handleNavLinkClick}
                  href="/franchise-apply/"
                  className="mob-franchise-btn"
                  style={{
                    textDecoration: "none", // Ensure to include textDecoration to remove underlines
                  }}
                >
                  {/* <Image   loading="eager"
                        src="/assets/images/header/mob-franchise-inq.png"
                        width="167"
                        height="40"
                        alt=""
                      /> */}
                  <div className="mob-btn-box">
                    <div className="mob-btn-bg">
                      <Image
                        loading="eager"
                        src="/assets/images/header/franchise-inq-bg-mob.png"
                        alt="franchise-inq-bg-mob"
                        width="167"
                        height="40"
                      />
                      <Image
                        loading="eager"
                        src="/assets/images/header/franchise-inq-mob.png"
                        alt="franchise"
                        width="43"
                        height="40"
                        className="mob-btn-icon"
                      />
                      {/* <Image
                        loading="eager"
                        src="/assets/images/header/triangle-animation.gif"
                        alt="triangle-animation"
                        width="43"
                        height="40"
                        className="mob-btn-animation"
                      /> */}
                      <span className="mob-btn-text">
                        {selectedLanguage?.franchiseInquiry}
                      </span>
                    </div>
                  </div>
                </Link>
                <button
                  onClick={handleButtonClick}
                  // onClick={handleNavLinkClick}
                  // href="/franchise-enquiry/"
                  className="mob-franchise-btn"
                  style={{
                    textDecoration: "none",
                    border: "none",
                    background: "transparent", // Ensure to include textDecoration to remove underlines
                  }}
                >
                  {/* <Image
                        src="/assets/images/header/mob-hire-talent.png"
                        width="167"
                        height="40"
                        alt=""
                      /> */}
                  <div className="mob-btn-box">
                    <div className="mob-btn-bg">
                      <Image
                        loading="eager"
                        src="/assets/images/header/hire-talent-bg-mob.png"
                        alt="hire-talent-bg-mob"
                        width="167"
                        height="40"
                      />
                      <Image
                        loading="eager"
                        src="/assets/images/header/hire-talent-mob.png"
                        alt="hire-talent-mob"
                        width="43"
                        height="40"
                        className="mob-btn-icon"
                      />
                      {/* <Image
                            loading="eager"
                            src="/assets/images/header/triangle-animation.gif"
                            alt="triangle-animation"
                            width="43"
                            height="40"
                            className="mob-btn-animation"
                          /> */}
                      <span className="mob-btn-text">{selectedLanguage?.hireATalent}</span>
                    </div>
                  </div>
                </button>
                <Link
                  onClick={handleNavLinkClick}
                  href="/job-seekers"
                  className="mob-franchise-btn"
                  style={{
                    textDecoration: "none", // Ensure to include textDecoration to remove underlines
                  }}
                >
                  {/* <Image
                        src="/assets/images/header/mob-job-seekers.png"
                        width="167"
                        height="40"
                        alt=""
                      /> */}
                  <div className="mob-btn-box">
                    <div className="mob-btn-bg">
                      <Image
                        loading="eager"
                        src="/assets/images/header/job-seekers-bg-mob.png"
                        alt="job-seekers-bg-mob"
                        width="167"
                        height="40"
                      />
                      <Image
                        src="/assets/images/header/job-seekers-mob.png"
                        alt="job-seekers-mob"
                        loading="eager"
                        width="43"
                        height="40"
                        className="mob-btn-icon"
                      />
                      {/* <Image
                        src="/assets/images/header/triangle-animation.gif"
                        loading="eager"
                        alt="triangle-animation"
                        width="43"
                        height="40"
                        className="mob-btn-animation"
                      /> */}
                      <span className="mob-btn-text">
                        {" "}
                        {selectedLanguage?.jobSeekers}
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
});
