import { ChevronDown } from "lucide-react";
import profilePic from "../assets/foto.jpeg";
import { ButtonType } from "../enums";
import Button from "./Button";

function Presentation() {
  return (
    <section className=" relative w-full flex flex-col justify-center h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-90 h-90 bg-apple-gradient opacity-10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-60 h-60 bg-apple-gradient opacity-10 rounded-full filter blur-3xl animate-pulse [animation-delay:2s]"></div>
        <div className="absolute top-2/3 right-1/4 w-40 h-40 bg-puapple-gradient opacity-20 rounded-full filter blur-3xl animate-pulse [animation-delay:4s]"></div>
      </div>

      <div className="relative mx-8 flex flex-col justify-between items-center gap-4 h-full z-0 md:flex-row">
        <div className="flex flex-col justify-center items-center  font-extralight text-4xl dark:text-dark order-2 md:items-start md:text-6xl md:order-1">
          <h1 className="text-center md:text-left">
            React & React Native{" "}
          </h1>
          <span className="text-apple-gradient">Developer</span>
          <p className="text-lg mt-4 text-center md:text-left md:w-1/2">Creating seamless, elegant user experiences with modern JavaScript frameworks. Specialized in building responsive and intuitive interfaces.</p>
          <div className="flex gap-4 mt-6">
            <Button value="View Projects" />
            <Button value="Contact Me" buttonType={ButtonType.background}/>
          </div>
        </div>
        <div className="rounded-full w-50 p-1 bg-background shadow-xl/20 dark:bg-background-dark order-1 md:order-2 md:w-80">
            <img
            src={profilePic}
            alt="profile picture"
            className="rounded-full object-cover"
            />
        </div>
      </div>
      <ChevronDown className="text-primary w-full mb-8 animate-bounce"/>
    </section>
  );
}

export default Presentation;
