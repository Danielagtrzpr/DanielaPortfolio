import { SunIcon } from "lucide-react";
import { motion } from "framer-motion";

function ThemeToggle() {
  return (
    <motion.div
      className="flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <button className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors">
        <SunIcon className="text-white" />
        {/* <MoonIcon className="text-white" /> */}
      </button>
    </motion.div>
  );
}

export default ThemeToggle;
