import { CodeIcon, Github, Heart, Linkedin } from "lucide-react"
import { motion } from "motion/react"

function Footer() {
  return (
    <footer className="relative flex border-t border-gray-300 h-screen text-xs md:text-base md:py-12 md:h-auto">      
      <div className="mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="mb-4"
            >
              <a href="#" className="text-xl font-bold text-primary flex items-center gap-2">
                <CodeIcon className="h-5 w-5"/>
                <span>Portfolio</span>
              </a>
            </motion.div>
            <p className="text-sm max-w-xs">
              A React developer passionate about creating beautiful and performant user interfaces with attention to detail.
            </p>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <nav className="flex  flex-col space-y-2 text-sm">
              <a href="#projects" className="hover:text-primary transition-colors hover:translate-x-1 transform duration-200">Projects</a>
              <a href="#about" className="hover:text-primary transition-colors hover:translate-x-1 transform duration-200">About Me</a>
              <a href="#contact" className="hover:text-primary transition-colors hover:translate-x-1 transform duration-200">Contact</a>
            </nav>
          </div>
        
          <div>
            <h3 className="text-base font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="p-2 hover:text-primary transition-colors bg-background rounded-full shadow-sm"
              >
                <Github className="h-4 w-4" />
              </motion.a>
              
              
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="p-2 hover:text-primary transition-colors bg-background rounded-full shadow-sm"
              >
                <Linkedin className="h-4 w-4" />
              </motion.a>
            </div>
          </div>
        </div>
        
        <div className="pt-6 mt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm md:order-1 mt-4 md:mt-0">
            © {new Date().getFullYear()} Daniela Gutierrez. All rights reserved.
          </div>
          
          <div className="text-sm flex items-center order-1 md:order-2">
            <span>Made with</span>
            <Heart className="h-3 w-3 mx-1 text-red-500 animate-pulse" />
            <span>using</span>
            <span className="text-primary ml-1">React & TailwindCSS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer