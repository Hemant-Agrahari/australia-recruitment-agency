export type MobileMenuProps = {
  handleNavLinkClick: () => void;
  handleButtonClick: () => void;
  selectedLanguage: typeof import("./headerData").headerData.en;
  isActive: boolean;
};

export type HeaderLanguage = typeof import("./headerData").headerData.en;

