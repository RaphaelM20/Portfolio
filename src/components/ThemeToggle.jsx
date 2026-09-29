import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const lightQuery = "(prefers-color-scheme: light)";

function getTheme() {
  const saved = document.documentElement.dataset.theme;
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia(lightQuery).matches ? "light" : "dark";
}

function ThemeToggle() {
  const [theme, setTheme] = useState(getTheme);

  // Keep the icon in sync if the OS theme changes and no choice is saved.
  useEffect(() => {
    const media = window.matchMedia(lightQuery);
    const onChange = () => setTheme(getTheme());
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage unavailable; the choice still applies for this visit.
    }
    setTheme(next);
  }

  const label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      className="icon-button"
      onClick={toggle}
      aria-label={label}
      title={label}
    >
      {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
}

export default ThemeToggle;
