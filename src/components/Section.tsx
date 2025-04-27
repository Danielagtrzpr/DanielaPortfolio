import { motion, useInView } from "motion/react";
import { useContext, useEffect } from "react";
import { AppContext } from "../api/AppContext";

type SectionProps = {
    children: React.ReactNode;
  };
function Section({ children, ...props}: SectionProps) {

    const { scrollPosition } = useContext(AppContext);
    const inView = useInView(props.ref, { 
        threshold: 0.5 
    });

    useEffect(() => {
      if (scrollPosition.currentSection === props.id) {
        props.ref.current?.scrollIntoView({ behavior: "smooth" });
      }
    }, [scrollPosition.currentSection]);
  
  return (
    <motion.section
      {...props}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 2}}
      className="relative inset-0 w-full flex flex-col justify-center h-screen"
    >
      {children}
    </motion.section>
  );
}

export default Section;
