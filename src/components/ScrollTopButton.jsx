import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-black/20 backdrop-blur-2xl text-white p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollTopButton;