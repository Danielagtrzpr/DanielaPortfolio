import { Code, MenuIcon } from "lucide-react";
import { motion } from "motion/react";
import ThemeToggle from "./ThemeToggle";
import { ScrollPosition } from "../types";

// Navigation links
const navLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "About", href: "#about", id: "about" },
  { name: "Contact", href: "#contact", id: "contact" },
];

type HeaderProps = {
  scrollPosition: ScrollPosition;
}

function Header({scrollPosition}:HeaderProps) {

  const isScrolled = scrollPosition.y > 50;

  return (
    <motion.header 
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className={`${isScrolled ? "bg-background/70 dark:bg-background-dark/70 shadow-lg backdrop-blur-lg" : "bg-transparent"} text-background-dark dark:text-background fixed top-0 left-0 z-50 w-full py-4 px-8 transition-all duration-500`}>
      <motion.div className="flex absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      <motion.div className="relative z-10 flex items-center justify-between w-full ">
        <motion.div
          className="flex items-center gap-2 opacity-100"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Code className="text-primary font-black stroke-3" />
          <h1 className="text-2xl font-bold  text-blue-500">Portfolio</h1>
        </motion.div>
        <div className="flex space-x-6 items-center">
          <nav className="hidden sm:flex">
            <ul className="flex flex-row-reverse space-x-4 ml-8">
              {navLinks.map((link) => (
                <li key={link.id} className={`flex ${link.id===scrollPosition.currentSection?"order-1":""} px-4`}>
                  <a
                    href={link.href}
                    className={`${link.id===scrollPosition.currentSection?"text-apple-gradient text-lg":""} hover:text-primary font-medium transition-colors`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <MenuIcon className="w-6 h-6 text-ligth dark:text-dark sm:hidden" />
          <ThemeToggle />
        </div>
      </motion.div>
    </motion.header>
  );
}

export default Header;
