import Link from "next/link";
import Image from "next/image";
import { memo } from "react";
import { MobileMenuProps } from "./types";

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
                                  {selectedLanguage?.dubai}
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
                          {selectedLanguage?.healthcare}
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
                    textDecoration: "none",
                  }}
                ></Link>
                <Link

                  onClick={handleNavLinkClick}
                  href="/franchise-apply/"
                  className="mob-franchise-btn"
                  style={{
                    textDecoration: "none",
                  }}
                >
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
                      <span className="mob-btn-text">
                        {selectedLanguage?.franchiseInquiry}
                      </span>
                    </div>
                  </div>
                </Link>
                <button
                  onClick={handleButtonClick}
                  className="mob-franchise-btn"
                  style={{
                    textDecoration: "none",
                    border: "none",
                    background: "transparent",
                  }}
                >
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
                      <span className="mob-btn-text">{selectedLanguage?.hireATalent}</span>
                    </div>
                  </div>
                </button>
                <Link

                  onClick={handleNavLinkClick}
                  href="/job-seekers"
                  className="mob-franchise-btn"
                  style={{
                    textDecoration: "none",
                  }}
                >
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

MobileMenu.displayName = "MobileMenu";

export default MobileMenu;

