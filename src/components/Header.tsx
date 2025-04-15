import { Code, MenuIcon } from "lucide-react";
import { motion } from "motion/react";
import ThemeToggle from "./ThemeToggle";

// Navigation links
const navLinks = [
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "About", href: "#about", id: "about" },
  { name: "Contact", href: "#contact", id: "contact" },
];

function Header() {
  return (
    <motion.header className="flex fixed top-0 z-50 w-full justify-between items-center p-8 text-ligth dark:text-dark">
      <motion.div className="flex absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-50" />
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
            <ul className="flex space-x-4 ml-8">
              {navLinks.map((link) => (
                <li key={link.id} className="px-4">
                  <a
                    href={link.href}
                    className="hover:text-primary font-medium transition-colors"
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
