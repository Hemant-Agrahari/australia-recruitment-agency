import React, { ReactNode } from "react";
import Navbar from "@/components/header/newHeader";
import dynamic from "next/dynamic";
import Modalfooter from "@/pages/Modalfooter.tsx";



// Dynamically import the Footer component, disable SSR
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
    
      <Navbar />
      <main>{children}</main>
      <Modalfooter/>
      <Footer />
    </>
  );
};

export default Layout;
