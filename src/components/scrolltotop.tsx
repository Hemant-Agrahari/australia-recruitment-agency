import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const ScrollToTop = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    const isTickingRef = useRef(false);

    const handleScroll = () => {
        if (isTickingRef.current) return;
        isTickingRef.current = true;
        requestAnimationFrame(() => {
            const scroll = window.scrollY;
            setScrollProgress(scroll);
            isTickingRef.current = false;
        });
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        // Set isMounted to true after component mounts
        setIsMounted(true);

        // Event listener for scroll
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Don't render until the component has mounted
    if (!isMounted) {
        return null;
    }

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="scroll-to-top-button"
            type="button"
            style={{ opacity: scrollProgress > 100 ? '1' : '0' }}
        >
            <Image alt="Scroll to top" src="/assets/images/scroll-top.png" width="56" height="56" />
        </button>
    );
};

export default ScrollToTop;
