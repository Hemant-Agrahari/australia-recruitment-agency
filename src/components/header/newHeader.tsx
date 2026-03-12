import Link from "next/link";
import { useState, useCallback, memo } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { headerData } from "./headerData";
import HeaderTop from "./HeaderTop";
import LogoSection from "./LogoSection";
import DesktopNavigation from "./DesktopNavigation";
import CTAButtons from "./CTAButtons";

// Lazy load heavy components
const MobileMenu = dynamic(() => import("./MobileMenu"), { 
  ssr: false,
  loading: () => null 
});

const HireTalentForm = dynamic(
  () => import("../forms/hireTalentForm").then((m) => m.HireTalentForm),
  { ssr: false }
);

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
    setMobileMenuActive((prev) => !prev);
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
      <header id="ae_header">
        <div className="container-fluid c-pad-x">
          <HeaderTop />
          
          <div className="header-wrapper">
            <LogoSection 
              activeCountry={activeCountry} 
              setActiveCountry={setActiveCountry} 
            />
            
            <div className="w-100">
              <div className="header-right-menu w-100">
                <nav className="bottom-menu d-none-mobile d-flex justify-content-between">
                  <DesktopNavigation 
                    selectedLanguage={selectedLanguage}
                    handleTabClick={handleTabClick}
                  />
                  <CTAButtons 
                    selectedLanguage={selectedLanguage}
                    handleButtonClick={handleButtonClick}
                  />
                </nav>
              </div>
            </div>
            
            <Link
              prefetch={false}
              href="#"
              onClick={handleMenuIconClick}
              className="menu-icon ms-auto"
              aria-label="Toggle mobile navigation menu"
            >
              <i className="fas fa-bars" aria-hidden="true"></i>
              <i className="fas fa-times" aria-hidden="true"></i>
            </Link>
          </div>

          {isMobileMenuActive && (
            <MobileMenu
              handleNavLinkClick={handleNavLinkClick}
              handleButtonClick={handleButtonClick}
              selectedLanguage={selectedLanguage}
              isActive={isMobileMenuActive}
            />
          )}
        </div>
      </header>
      
      {showModalhire && (
        <HireTalentForm
          show={showModalhire}
          setShowModalhire={setShowModalhire}
          title="Hire Talent"
        />
      )}
    </>
  );
};

export default memo(Header);
