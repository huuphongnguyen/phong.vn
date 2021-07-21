import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "akar-icons";

export default function PayThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="bg-white dark:bg-black border-2 border-black dark:border-white focus:outline-none h-8 px-2 transform transition-all ease-in-out active:scale-75"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {mounted && (
        <div>
          {theme === "dark" ? (
            <div className="w-full h-full flex items-center justify-center ">
              <Sun className="text-black dark:text-white" size={22} />
              <p className="text-black dark:text-white font-sourcecodepro uppercase text-sm">
                Light
              </p>
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center space-x-1">
              <Moon className="text-black dark:text-white" size={22} />
              <p className="text-black dark:text-white font-sourcecodepro uppercase text-sm">
                Dark
              </p>
            </div>
          )}
        </div>
      )}
    </button>
  );
}
