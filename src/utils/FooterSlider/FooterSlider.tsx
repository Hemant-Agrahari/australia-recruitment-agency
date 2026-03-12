import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { useRouter } from 'next/router';

// Define an interface for the slider data
interface SliderItem {
  text: string;
  url: string;
}

// Footer slider data in English and Arabic
const footerSliderData: { en: SliderItem[]; ar: SliderItem[] } = {
  en: [
    { text: "Qatar", url: "/recruitment-agencies-qatar/" },
    { text: "Dubai, UAE", url: "/recruitment-agency-in-dubai/" },
    { text: "Abu Dhabi", url: "/recruitment-agencies-abu-dhabi/" },
    { text: "Sharjah", url: "/recruitment-agencies-sharjah/" },
    { text: "Kuwait", url: "/recruitment-agencies-kuwait/" },
    { text: "Jeddah", url: "/recruitment-agencies-jeddah/" },
    { text: "Riyadh", url: "/recruitment-agencies-riyadh/" },
    { text: "Bahrain", url: "/recruitment-agencies-bahrain/" },
    { text: "Oman", url: "/recruitment-agencies-oman/" },
    { text: "Other City", url: "/manpower-middle-east-dubai/" },
  ],
  ar: [
    { text: "قطر", url: "/recruitment-agencies-qatar/" },
    { text: "دبي، الإمارات العربية المتحدة", url: "/recruitment-agency-in-dubai/" },
    { text: "أبو ظبي", url: "/recruitment-agencies-abu-dhabi/" },
    { text: "الشارقة", url: "/recruitment-agencies-sharjah/" },
    { text: "الكويت", url: "/recruitment-agencies-kuwait/" },
    { text: "جدة", url: "/recruitment-agencies-jeddah/" },
    { text: "الرياض", url: "/recruitment-agencies-riyadh/" },
    { text: "البحرين", url: "/recruitment-agencies-bahrain/" },
    { text: "عمان", url: "/recruitment-agencies-oman/" },
    { text: "مدينة أخرى", url: "/manpower-middle-east-dubai/" },
  ],
};

export const FooterSlider: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const [renderCarousel, setRenderCarousel] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const router = useRouter();
  const isArabic = router.asPath.includes('/ar');
  const selectedLanguage = isArabic ? footerSliderData.ar : footerSliderData.en;

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setRenderCarousel(true);
        });
      },
      { rootMargin: '0px 0px -20% 0px', threshold: 0.1 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section ref={sectionRef} className="footer-slider py-10">
        <div className="carousel-container">
          {renderCarousel && (
            <Slider {...settings}>
              {selectedLanguage.map((item, index) => (
                <div className="item" key={index}>
                  <Link className="marker-hover" href={item.url} aria-label={`Go to ${item.text} page`}>
                    <i className="fas fa-map-marker-alt" aria-hidden="true"></i> {item.text}
                  </Link>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </section>
    </>
  );
};
