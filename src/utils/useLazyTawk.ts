"use client";
import { useEffect } from "react";

export function useLazyTawk() {
  useEffect(() => {
    const loadTawk = () => {
      const script = document.createElement("script");
      script.src = "https://embed.tawk.to/586380cfddb8373fd2b4a378/default";
      script.async = true;
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");
      document.body.appendChild(script);
    };

    // Load Tawk after significant idle time or user interaction
    let loaded = false;
    const interactionEvents = ['scroll', 'mousemove', 'touchstart', 'click'];
    
    const loadOnInteraction = () => {
      if (loaded) return;
      loaded = true;
      if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        window.requestIdleCallback(() => setTimeout(loadTawk, 6000), { timeout: 10000 });
      } else {
        setTimeout(loadTawk, 10000);
      }
      interactionEvents.forEach(event => 
        window.removeEventListener(event, loadOnInteraction, { passive: true } as any)
      );
    };

    interactionEvents.forEach(event => 
      window.addEventListener(event, loadOnInteraction, { passive: true } as any)
    );

    // Fallback: load after 15s even without interaction
    const fallbackTimer = setTimeout(loadOnInteraction, 15000);

    return () => {
      clearTimeout(fallbackTimer);
      interactionEvents.forEach(event => 
        window.removeEventListener(event, loadOnInteraction, { passive: true } as any)
      );
    };
  }, []);
}