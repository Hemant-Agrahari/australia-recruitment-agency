"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

// Centralized list of certificates to render via .map()
const certificateImages = [
    {
        src: "/assets/images/homepage/ISO-9001.webp",
        alt: "ISO 9001 Certification",
        title: "ISO 9001 Certified",
    },
    {
        src: "/assets/images/homepage/anniversary-logo-16-years.webp",
        alt: "Serving clients globally for 16 years",
        title: "Serving Clients Globally 16th Year",
    },
    {
        src: "/assets/images/homepage/good-firms-award.webp",
        alt: "Top Staffing Firm Award by Good Firms",
        title: "Top Staffing Firm Award by Good Firms",
    },
    {
        src: "/assets/images/homepage/hall-of-fame-2020-award.webp",
        alt: "Hall of Fame 2020 Award",
        title: "Hall of Fame 2020 Award",
    },
    {
        src: "/assets/images/homepage/recruiters-awards-2023.webp",
        alt: "Recruiters Awards 2023",
        title: "Recruiters Awards 2023",
    },
    {
        src: "/assets/images/homepage/most-reliable-hr-solution.webp",
        alt: "The 10 Most Reliable HR Solution Award",
        title: "The 10 Most Reliable HR Solution Award",
    },
    {
        src: "/assets/images/homepage/hrm-asia-readers-choice-2022.webp",
        alt: "Readers Choice 2022 Award by HRM Asia",
        title: "Readers Choice 2022 Award by HRM Asia",
    },
    {
        src: "/assets/images/homepage/it-rate-top-it-recruiting-companies.webp",
        alt: "Top IT Recruiting Companies Award",
        title: "Top IT Recruiting Companies Award",
    },
    {
        src: "/assets/images/homepage/expertise-award.webp",
        alt: "Best Employment Agencies in San Francisco by Expertise",
        title: "Best Employment Agencies in San Francisco by Expertise",
    },
    {
        src: "/assets/images/homepage/iso.webp",
        alt: "ISO Certification",
        title: "ISO Certification",
    },
    {
        src: "/assets/images/homepage/iaf.webp",
        alt: "International Accreditation Forum (IAF) Certified",
        title: "IAF Certification",
    },
];

export const CertificateSlider: React.FC = () => {
    const [renderCarousel, setRenderCarousel] = useState(false);
    const sectionRef = useRef<HTMLElement | null>(null);

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

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <>
            <section ref={sectionRef}>
                {renderCarousel && (
                    <Slider {...settings} className="our-certifications" aria-live="polite">
                        {certificateImages.map((img, index) => (
                            <div className="item" key={index}>
                                <Image
                                    width={500}
                                    height={500}
                                    src={img.src}
                                    alt={img.alt}
                                    title={img.title}
                                    className="img-fluid"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </Slider>
                )}
            </section>
        </>
    );
};
