import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data/index";
import CardProject from "./CardProject";

export const DynamicGrid = () => {

  const [selectedIndex, setSelectedIndex] = useState(null);

  function handleClick(index: number) {
    console.log(index)
    setSelectedIndex(index)
  }
  return (
    <>
      <div className="px-8 grid grid-cols-1 auto-rows-[300px] gap-4 overflow-y-scroll no-scrollbar md:grid-cols-3 ">
        {projects.map((item, index) => {
          const isEvenRow = Math.floor(index / 2) % 2 === 0;
          const isFirstInPair = index % 2 === 0;
          const colSpan =
            isFirstInPair === isEvenRow ? "md:col-span-2" : "md:col-span-1";

          return (
            <motion.div
              key={index}
              layoutId={`item-${index}`}
              className={`col-span-1 ${colSpan} bg-gray-100 text-primary p-4 rounded-4xl cursor-pointer hover:bg-gray-200 transition-all duration-300 ease-in-out`}
              onClick={()=>handleClick(index)}
            >
              <CardProject item={item}/>
            </motion.div>
          );
        })}
      </div>
      <AnimatePresence>
        {selectedIndex !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndex(null)}
            />

            {/* Expanded card */}
            <motion.div
              layoutId={`item-${selectedIndex}`}
              className="fixed top-1/2 left-1/2 z-50 w-[90vw] md:w-[600px] max-w-[90%] bg-white p-6 rounded-xl shadow-xl -translate-x-1/2 -translate-y-1/2"
            >
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-bold">
                  {projects[selectedIndex].title}
                </h2>
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="text-sm text-gray-500 hover:text-gray-800"
                >
                  ✕
                </button>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Contenido expandido para <strong>{projects[selectedIndex].title}</strong>. Aquí podrías poner más info.
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>

   
    </>
  );
};
4