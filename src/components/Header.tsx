import { Code } from 'lucide-react';
import { motion } from "motion/react"
import ThemeToggle from './ThemeToggle';


  // Navigation links
  const navLinks = [
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "About", href: "#about", id: "about" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

function Header() {
  return (
    <motion.header 
      className="p-8 flex justify-between items-center  text-white bg-background/80"
      >
        <motion.div 
          className='flex items-center gap-2'
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}>
           <Code className="text-primary font-black stroke-3"/>
           <h1 className="text-2xl font-bold  text-blue-500">Portfolio</h1>
        </motion.div>
        <nav className='flex items-center'>
            <ul className="flex space-x-4 ml-8">
                {navLinks.map((link) => (
                    <li key={link.id} className='px-4'>
                        <a
                            href={link.href}
                            className="hover:text-primary font-medium transition-colors"
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
            <ThemeToggle/>
        </nav>
    </motion.header>
  )
}

export default Header