import { useState, useEffect } from "react";
import { ScrollPosition } from "../types";

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    currentSection: "home",
  });
  
  const bodyHeight = document.body.clientHeight;

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition((prev)=>{
        let currentSection = "home";

        if (window.scrollY > bodyHeight * 0.1 && window.scrollY < bodyHeight * 1.1) {
          currentSection = "projects";
        }else if (window.scrollY > bodyHeight * 1.1 && window.scrollY < bodyHeight * 2.1) {
          currentSection = "about";
        }else if (window.scrollY > bodyHeight * 2.1) {
          currentSection = "contact";
        }

        return {
          ...prev,
          x: window.scrollX,
          y: window.scrollY,
          bodyWidth: document.body.clientWidth,
          bodywHeight: document.body.clientHeight,
          currentSection: currentSection,
        }
      });
    };

    
    // Add scroll event listener
    document.addEventListener("scroll", handleScroll);
    
    // Set initial scroll position
    handleScroll();
    
    // Clean up
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);
  
  return scrollPosition;
}
