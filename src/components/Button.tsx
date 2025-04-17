import { motion } from "motion/react";
import { ButtonType } from "../enums";

type ButtonProps = {
  value: string;
  buttonType?: ButtonType;
}

function Button({value, buttonType=ButtonType.primary}: ButtonProps) {
  return (
    <motion.button 
    className={`flex justify-center items-center text-base py-2 px-6 rounded-full ${buttonType}`}
    whileHover={{ 
        scale: 1.05 ,
        opacity: 0.8,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.2 }
    }}
    whileTap={{ scale: 0.95 }}
    >
        {value}
    </motion.button>
  )
}

export default Button