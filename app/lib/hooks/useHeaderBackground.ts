'use client';
import { useEffect } from "react";

export default function useHeaderBackground() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        if (window.scrollY > 100) {
          header.style.background = "rgba(255, 255, 255, 0.98)";
          header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
        } else {
          header.style.background = "rgba(255, 255, 255, 0.95)";
          header.style.boxShadow = "none";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}
