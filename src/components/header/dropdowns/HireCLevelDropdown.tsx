import Link from "next/link";
import { memo } from "react";
import { HeaderLanguage } from "../types";

interface HireCLevelDropdownProps {
  selectedLanguage: HeaderLanguage;
}

const HireCLevelDropdown = memo(({ selectedLanguage }: HireCLevelDropdownProps) => {
  return (
    <div
      className="dropdown-menu bg-none min-height-back hire-c w-100"
      aria-labelledby="navbarDropdown5"
    >
      <div>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="HireCLevel"
            role="tabpanel"
            aria-labelledby="#HireCLevel-tab"
          >
            <div className="listing-row">
              <div className="row">
                <div className="col-lg-4">
                  <div className="megamenu-title">
                    <span>{selectedLanguage?.CSuite}</span>
                  </div>
                  <ul className="uder-line-icon-ul">
                    <li>
                      <Link
                        prefetch={false}
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
                        title={`${selectedLanguage?.cfoExecutiveSearchServices}`}
                      >
                        {selectedLanguage?.CFO}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <div className="megamenu-title">
                    <span>{selectedLanguage?.ExecutiveSearch}</span>
                  </div>
                  <ul className="uder-line-icon-ul">
                    <li>
                      <Link
                        prefetch={false}
                        href="/executive-recruitment-dubai/"
                        className="uder-line-icon-ul-link"
                        title={`${selectedLanguage?.exploreExecutiveRecruitmentDubai}`}
                      >
                        {selectedLanguage?.ExecutiveRecruitmentDubai}
                      </Link>
                    </li>
                    <li>
                      <Link
                        prefetch={false}
                        href="/chief-executive-officer-recruitment-agency/"
                        className="uder-line-icon-ul-link"
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
                        title={`${selectedLanguage?.discoverExecutiveChefEmployment}`}
                      >
                        {selectedLanguage?.ExecutiveChefEmployment}
                      </Link>
                    </li>
                    <li>
                      <Link
                        prefetch={false}
                        href=""
                        className="uder-line-icon-ul-link"
                        title={`${selectedLanguage?.findOutExecutiveSearchDubai}`}
                      >
                        {selectedLanguage?.ExecutiveSearchDubai}
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
  );
});

HireCLevelDropdown.displayName = "HireCLevelDropdown";

export default HireCLevelDropdown;

