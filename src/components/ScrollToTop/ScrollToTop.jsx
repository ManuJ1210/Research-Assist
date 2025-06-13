import { useEffect, useState } from "react";
import { LuCircleArrowUp } from "react-icons/lu";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 1, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-26 z-50">
      {isVisible && (
        <button
          onClick={handleClick}
          className="text-5xl text-blue-1000 bg-black text-blue-900 rounded-4xl border-0 animate-bounce hover:text-white transition duration-300 ease-in-out"
          aria-label="Scroll to top"
        >
          <LuCircleArrowUp />
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;
