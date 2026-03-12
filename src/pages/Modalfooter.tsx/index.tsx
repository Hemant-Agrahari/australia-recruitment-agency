"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AutoPopUp from "../Modal";

const Modalfooter = () => {
  const router = useRouter();
  // const [isOpenSalaryGuide, setIsOpenSalaryGuide] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = router.asPath.split('?')[0];

  // function topFunction() {
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // }

  const excludedPaths = ["/job-seekers", "/job-details", "/thank-you"];
  const jobPrefix = ["/job/", "/job-seekers/"];
  const isExcluded =
    excludedPaths.includes(pathname) ||
    jobPrefix.some((prefix) => pathname.startsWith(prefix));
  const excluded = ["/igaming-platform-software-provider"];

  // useEffect(() => {
  //   setTimeout(() => {
  //     const scrollBtn = document.getElementById("scrollToTopBtn");
  //     if (scrollBtn) {
  //       addEventListener("scroll", function scrollFunction() {
  //         if (
  //           document.body.scrollTop > 300 ||
  //           document.documentElement.scrollTop > 200
  //         ) {
  //           scrollBtn.style.display = "block";
  //         } else {
  //           scrollBtn.style.display = "none";
  //         }
  //       });
  //     } else {
  //       console.warn("Element with ID 'scrollToTopBtn' not found.");
  //     }
  //   }, 1000);
  //   setTimeout(() => {
  //     setIsOpenSalaryGuide(true);
  //   }, 7000);
  // }, []);

  useEffect(() => {
    const popupShownKey = `popup-shown${pathname}`;
    const popupClosedKey = `popup-closed${pathname}`;
    const isSubmitted = sessionStorage.getItem("isSubmitted");
    const handleMouseLeave = (e: MouseEvent) => {
      const hasShownPopup = sessionStorage.getItem(popupShownKey);
      const hasClosedPopup = sessionStorage.getItem(popupClosedKey);

      if (e.clientY <= 0 && !hasShownPopup && !hasClosedPopup) {
        // Mark as shown BEFORE showing modal
        sessionStorage.setItem(popupShownKey, "true");

        setIsModalOpen(true);
      }
    };

    if (
      !sessionStorage.getItem(popupShownKey) &&
      !sessionStorage.getItem(popupClosedKey) &&
      !isExcluded &&
      !isSubmitted
    ) {
      document.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [pathname]);

  return (
    <div>
      {isModalOpen && (
        <AutoPopUp show={isModalOpen} setShowModal={setIsModalOpen} />
      )}

      {/* {isOpenSalaryGuide && (
        <button
          id="scrollToTopBtn"
          className="scroll-to-top"
          onClick={() => topFunction()}
        ></button>
      )} */}
    </div>
  );
};

export default Modalfooter;
