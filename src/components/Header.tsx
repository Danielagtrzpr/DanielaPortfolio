import { Code } from 'lucide-react';

function Header() {
  return (
    <div className="p-8 flex justify-between items-center bg-gray-800 text-white">
        <div className='flex items-center gap-2'>
           <Code className="text-primary font-black stroke-3"/>
           <h1 className="text-2xl font-bold  text-blue-500">Portfolio</h1>
        </div>
        <nav >
            <ul className="flex space-x-4 ml-8">
                <li><a href="#about" className="hover:text-gray-400">About</a></li>
                <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
                <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header