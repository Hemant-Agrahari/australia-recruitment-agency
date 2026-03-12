import Link from "next/link";
import { memo } from "react";
import { HeaderLanguage } from "../types";

interface HeadhunterDropdownProps {
  selectedLanguage: HeaderLanguage;
  handleTabClick: (event: any) => void;
}

const HeadhunterDropdown = memo(({ selectedLanguage, handleTabClick }: HeadhunterDropdownProps) => {
  return (
    <div
      className="dropdown-menu bg-none min-height-back hire-c w-100"
      aria-labelledby="navbarDropdown6"
    >
      <div>
        <div className="tab-content" id="pills-tabContent1">
          <div
            className="tab-pane show active headhunter-nav-tab"
            id="Headhunter"
            role="tabpanel"
            aria-labelledby="#Headhunter-tab"
          >
            <div className="listing-row">
              <ul
                className="nav nav-tabs"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
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
                  className="tab-pane fade"
                  id="industries"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="container">
                    <div className="megamenu-title">
                      <span>{selectedLanguage?.WERECRUIT}</span>
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
                              {selectedLanguage?.executiveChef}
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
                          {selectedLanguage?.ExecutiveHeadhunter}
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

HeadhunterDropdown.displayName = "HeadhunterDropdown";

export default HeadhunterDropdown;

