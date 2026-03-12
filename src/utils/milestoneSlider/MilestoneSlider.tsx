import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

const MilestoneSlider: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { rootMargin: '0px 0px -20% 0px', threshold: 0.1 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
  };

  return (
    <section ref={sectionRef} className="Our-milestone py-50">
      <div className="container-fluid c-pad-x">
        <h2 className="com-title">Our Milestone</h2>
        {isVisible && (
          <Slider {...settings} className="owl-theme" aria-live="polite">
            <div aria-roledescription="slide">
              <Image
                width={500}
                height={300}
                src="/assets/images/homepage/our-milestone-1.svg"
                alt="ISO 9001 Certified"
                title="ISO 9001 Certified"
                className="h-100 w-100"
                priority={false}
              />
            </div>
            <div aria-roledescription="slide">
              <Image
                width={500}
                height={300}
                src="/assets/images/homepage/our-milestone-2.svg"
                alt="Proudly Serving Clients Globally 13th Years"
                title="Proudly Serving Clients Globally 13th Years"
                className="h-100 w-100"
                priority={false}
              />
            </div>
          </Slider>
        )}
      </div>
    </section>
  );
};

export default MilestoneSlider;
