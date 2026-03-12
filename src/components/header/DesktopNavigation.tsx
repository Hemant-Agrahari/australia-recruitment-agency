import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { memo } from "react";
import { HeaderLanguage } from "./types";

// Lazy load heavy dropdown components
const ServicesDropdown = dynamic(() => import("./dropdowns/ServicesDropdown"), { ssr: false });
const FranchiseDropdown = dynamic(() => import("./dropdowns/FranchiseDropdown"), { ssr: false });
const HireCLevelDropdown = dynamic(() => import("./dropdowns/HireCLevelDropdown"), { ssr: false });
const HeadhunterDropdown = dynamic(() => import("./dropdowns/HeadhunterDropdown"), { ssr: false });

interface DesktopNavigationProps {
  selectedLanguage: HeaderLanguage;
  handleTabClick: (event: any) => void;
}

const DesktopNavigation = memo(({ selectedLanguage, handleTabClick }: DesktopNavigationProps) => {
  return (
    <ul className="bottom-menu-nav">
        {/* About Dropdown */}
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
            <div className="listing-row">
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

        {/* Services Dropdown - Lazy Loaded */}
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
          <ServicesDropdown selectedLanguage={selectedLanguage} />
        </li>

        {/* Franchise Dropdown - Lazy Loaded */}
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
          <FranchiseDropdown selectedLanguage={selectedLanguage} />
        </li>

        {/* Hire C-Level Dropdown - Lazy Loaded */}
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
          <HireCLevelDropdown selectedLanguage={selectedLanguage} />
        </li>

        {/* Headhunter Dropdown - Lazy Loaded */}
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
          <HeadhunterDropdown selectedLanguage={selectedLanguage} handleTabClick={handleTabClick} />
        </li>

        {/* Blog Link */}
        <li className="bottom-nav-li">
          <Link
            prefetch={false}
            href="/webblog"
            className="bottom-nav-link"
          >
            {selectedLanguage?.blog}
          </Link>
        </li>

        {/* Contact Link */}
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
      </ul>
  );
});

DesktopNavigation.displayName = "DesktopNavigation";

export default DesktopNavigation;

