import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

const ThemeSet = () => {
  const [dark, setDark] = useState(false);
  const [fontIcon, setFontIcon] = useState(faMoon); 

  const toggleTheme = () => {
    const newDark = !dark;
    setDark(newDark);
    setFontIcon(newDark ? faSun : faMoon);
    localStorage.setItem("theme", newDark ? "dark" : "light");
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDark(true);
      document.body.classList.add("dark_mode");
      setFontIcon(faSun);
    }
  }, []);

  const handleTheme = () => {
    toggleTheme();
    if (!dark) {
      document.body.classList.add("dark_mode");
    } else {
      document.body.classList.remove("dark_mode");
    }
  };

  return (
    <div onClick={handleTheme} className="theme-btn">
      <FontAwesomeIcon icon={fontIcon}  className="theme-font"/>
    </div>
  );
};

export default ThemeSet;
