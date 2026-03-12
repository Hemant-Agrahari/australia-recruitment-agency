import Link from "next/link";
import { memo } from "react";
import { HeaderLanguage } from "../types";

interface FranchiseDropdownProps {
  selectedLanguage: HeaderLanguage;
}

const FranchiseDropdown = memo(({ selectedLanguage }: FranchiseDropdownProps) => {
  return (
    <div
      className="dropdown-menu bg-none min-height-back hire-c w-100"
      aria-labelledby="navbarDropdown6"
    >
      <div className="listing-row row g-5">
        <div className="col-lg-4">
          <ul className="uder-line-icon-ul">
            <li>
              <Link
                prefetch={false}
                className="uder-line-icon-ul-link"
                href="/executive-search-franchise-opportunities/"
              >
                {selectedLanguage?.ExecutiveSearch}
              </Link>
            </li>
            <li>
              <Link
                prefetch={false}
                className="uder-line-icon-ul-link"
                href="/medical-healthcare-staffing-franchise-opportunities/"
              >
                {selectedLanguage?.MedicalHealthcarestaffing}
              </Link>
            </li>
            <li>
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
              <Link
                prefetch={false}
                className="uder-line-icon-ul-link"
                href="/hr-consultancy-franchise-opportunities/"
              >
                {selectedLanguage?.HRConsultant}
              </Link>
            </li>
            <li>
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
              <Link
                prefetch={false}
                className="uder-line-icon-ul-link"
                href="/manpower-consultancy-franchise-opportunities/"
              >
                {selectedLanguage?.Manpowerconsultancy}
              </Link>
            </li>
            <li>
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
  );
});

FranchiseDropdown.displayName = "FranchiseDropdown";

export default FranchiseDropdown;

