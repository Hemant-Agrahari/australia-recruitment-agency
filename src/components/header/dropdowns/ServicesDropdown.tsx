import Link from "next/link";
import { memo } from "react";
import { HeaderLanguage } from "../types";

interface ServicesDropdownProps {
  selectedLanguage: HeaderLanguage;
}

const ServicesDropdown = memo(({ selectedLanguage }: ServicesDropdownProps) => {
  return (
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

        <div className="col-lg-4">
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
            <span>{selectedLanguage?.ManpowerRecruitment}</span>
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
            <span>{selectedLanguage?.StaffingServices}</span>
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
  );
});

ServicesDropdown.displayName = "ServicesDropdown";

export default ServicesDropdown;

