import { SunIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function ThemeToggle() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(()=>{
        localStorage.setItem('theme',theme);
        document.documentElement.classList.toggle('dark', theme === 'dark');
    },[theme])

    const toggleTheme = ()=>{
        setTheme(theme === 'light' ? 'dark':'light');
    }

  return (
    <motion.div
      className="flex items-center justify-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }} 
    >
      <button onClick={toggleTheme} className="flex justify-center items-center w-10 h-10 rounded-full  border border-primary/20 bg-background/80 dark:bg-background-dark backdrop-blur-sm hover:bg-primary/10 hover:text-primary transition-all duration-300">
        <span className="absolute z-0 w-full h-full rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-20"></span>
        <SunIcon className="m-3"/>
        {/* <MoonIcon className="text-white" /> */}
      </button>
    </motion.div>
  );
}

export default ThemeToggle;
