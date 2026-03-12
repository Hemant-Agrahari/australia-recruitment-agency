import { AppProps } from "next/app";
import Layout from "../components/layout";
import { ToastContainer } from 'react-toastify';

// Importing custom CSS files
import "bootstrap/dist/css/bootstrap.css";
import "../../public/assets/css/header.css";
import "../../public/assets/css/all.css";
import "../../public/assets/css/style.css";
import "../../public/assets/css/globals.css";
import "../../public/assets/css/footer.css";
import "../../public/assets/css/responsive.css";
import "../../public/assets/css/responsivecustom.css";
import "../../public/assets/css/custom.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-phone-input-2/lib/style.css";
import "../../public/assets/css/landingpage.css";
import "../../public/assets/css/blog.css";
import "../../public/assets/css/handbook.css";
import "../../public/assets/css/franchiseEnquiry.css";
import "../../public/assets/css/franchise-apply.css";
import "../../public/assets/css/autoPopupForm.css";
import "../../public/assets/css/franchisewhatsappcta.css";
import "../../public/assets/css/landingpage-responsive.css";
import "../../public/assets/css/owl.carousel.min.css";
import "../../public/assets/css/owl.theme.default.css";
import "../../public/assets/css/intlTelInput.css";
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "@/components/scrolltotop";
import Script from "next/script";
import React, { useState, useEffect } from "react";

// Fix: Directly apply Verdana in global styles (system font)
export default function App({ Component, pageProps }: AppProps) {
  const [loadChatWidget, setLoadChatWidget] = useState(false);

  useEffect(() => {
    // Load chat widget after 6 seconds to clear the initial hydration/TBT window
    const timer = setTimeout(() => {
      setLoadChatWidget(true);
    }, 6000);

    // Also load on user interaction as a fallback
    const handleInteraction = () => {
      setLoadChatWidget(true);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };

    window.addEventListener('scroll', handleInteraction, { passive: true });
    window.addEventListener('mousemove', handleInteraction, { passive: true });
    window.addEventListener('touchstart', handleInteraction, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  return (
    <>
      {/* Apply the font to the body directly in global styles */}
      <style jsx global>{`
        body {
          font-family: 'Verdana', sans-serif; /* Apply Verdana with fallback to sans-serif */
        }
      `}</style>

      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />

      <Script
        strategy="lazyOnload"
        type="text/javascript/"
        src="../assets/scripts/jQuery.js"
        async
      />
      <Script
        strategy="lazyOnload"
        src="../assets/scripts/bootstrap5.js"
        async
      />
      {loadChatWidget && (
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6992b33ea0e96a16f262b2c0"
          strategy="lazyOnload"
        />
      )}
      {/* Optional: Uncomment if you need to load Owl Carousel JS */}
      {/* <Script
        strategy="lazyOnload"
        src="../assets/scripts/owl.carousel.min.js"
        async
      /> */}
      <ScrollToTop />
    </>
  );
} 
