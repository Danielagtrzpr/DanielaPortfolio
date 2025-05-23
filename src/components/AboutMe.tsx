import { Binary, BookLock, BugPlay, Code, Code2, Computer, SquareTerminal } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Section from "./Section";


function AboutMe() {
  const [image, setImage] = useState<string>("");

  const aboutMeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const randomSeed = Math.floor(Math.random() * 1000);
    const imageUrl = `https://picsum.photos/seed/${randomSeed}/2000`;
    setImage(imageUrl);
  }, []);
    
  return (
    <Section id = "about" ref = {aboutMeRef}>
      <div className="grid text-xs m-4 overflow-y-scroll no-scrollbar md:m-8 md:gap-8 md:grid-cols-2 md:text-base">
        <div className="flex flex-col flex-1/2 items-center justify-center">
          <p className="text-justify mt-4 text-gray-500">
          I'm a passionate frontend developer specializing in React and React Native. 
          With a strong focus on creating intuitive and performant user interfaces, 
          I bring designs to life with clean, maintainable code.

          My journey in web development started over 5 years ago, 
          and I've been working with React ecosystems for most of that time. 
          I enjoy solving complex UI challenges and creating seamless experiences across different devices.
          </p>
        <div className="flex flex-col gap-8 mt-4 text-background-dark dark:text-background sm:flex-row">
          <div className="border-1 w-full border-primary rounded-2xl p-8">
            <h2 className="font-bold text-xl">Skills</h2>
            <div className="flex flex-col mt-2">
              <ul className="flex flex-col gap-2">
                <li className="flex  items-center gap-3"><Code className="text-primary bg-primary/10 p-1 rounded-sm"/><p>React</p></li>
                <li className="flex  items-center gap-3"><Code2 className="text-primary bg-primary/10 p-1 rounded-sm"/><p>React Native</p></li>
                <li className="flex  items-center gap-3"><Binary className="text-primary bg-primary/10 p-1 rounded-sm"/><p>JavaScript</p></li>
                <li className="flex  items-center gap-3"><BugPlay className="text-primary bg-primary/10 p-1 rounded-sm"/><p>TypeScript</p></li>
                <li className="flex  items-center gap-3"><SquareTerminal className="text-primary bg-primary/10 p-1 rounded-sm"/><p>HTML</p></li>
                <li className="flex  items-center gap-3"><Computer className="text-primary bg-primary/10 p-1 rounded-sm"/><p>CSS</p></li>
                <li className="flex  items-center gap-3"><BookLock className="text-primary bg-primary/10 p-1 rounded-sm"/><p>Tailwind CSS</p></li>
              </ul>
            </div>
          </div>
          <div className="border-1 w-full border-primary  rounded-2xl p-8">
            <h2 className="font-bold text-xl">Interest</h2>
            <div className="flex flex-col mt-2">
              <ul className="flex flex-col gap-2">
                <li className="flex  items-center gap-3"><Code className="text-primary bg-primary/10 p-1 rounded-sm"/><p>Performance optimization</p></li>
                <li className="flex  items-center gap-3"><Code2 className="text-primary bg-primary/10 p-1 rounded-sm"/><p>Responsive design</p></li>
                <li className="flex  items-center gap-3"><Binary className="text-primary bg-primary/10 p-1 rounded-sm"/><p>Cross-platform development</p></li>
                <li className="flex  items-center gap-3"><BugPlay className="text-primary bg-primary/10 p-1 rounded-sm"/><p>UI/UX design</p></li>
              </ul>
            </div>
          </div>
        </div>

        </div>
        <div className="p-8 flex items-center justify-center">
          <img src={image} alt="" className="w-full h-full object-cover rounded-4xl" />
        </div>
      </div>
    </Section>
  );
}

export default AboutMe;
