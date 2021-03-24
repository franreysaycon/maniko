import { useEffect } from "react";

const useClickOutside = (ref, onClick) => {
  const handleClickOutside = (e) => {
    if (ref?.current && !ref.current.contains(e.target)) {
      onClick();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
};

export default useClickOutside
