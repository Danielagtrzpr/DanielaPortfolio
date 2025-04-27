import { Github, Globe, Linkedin, Locate, Mail } from "lucide-react"
import Button from "./Button"
import { ButtonType } from "../enums"
import Section from "./Section"
import { useRef } from "react";


function Contact() {
  const contactRef = useRef<HTMLDivElement>(null);
  return (
    <Section id = {"contact"} ref={contactRef}>
        <div className="w-full p-4 text-background text-sm grid md:grid-cols-2 lg:w-full lg:px-40 md:space-x-4">
          <div className="flex flex-col justify-center space-y-4 bg-primary rounded-xl p-4 md:p-8">
            <h2 className="font-bold text-center py-2 md:text-left">Contact Information</h2>
            <ul className="flex flex-col w-full justify-center gap-4">
              <li className="flex flex-col justify-center items-center w-full flex-wrap md:flex-row md:justify-start md:gap-2"><Mail/><p className="flex flex-wrap">danielagp96@gmail.com</p></li>
              <li className="flex flex-col justify-center items-center w-full flex-wrap md:flex-row md:justify-start md:gap-2"><Locate/><p className="flex flex-wrap">Mexico</p></li>
              <li className="flex flex-col justify-center items-center w-full flex-wrap md:flex-row md:justify-start md:gap-2"><Linkedin/><p className="flex flex-wrap">https://www.linkedin.com/in/danielacode/</p></li>
              <li className="flex flex-col justify-center items-center w-full flex-wrap md:flex-row md:justify-start md:gap-2"><Github/><p className="flex flex-wrap">https://github.com/Danielagtrzpr</p></li>
            </ul>
            <p className="font-bold text-center py-2 md:text-left">Looking forward to hearing from you!</p>
          </div>
          <div className="flex flex-col justify-center space-y-4 rounded-xl text-background-dark dark:text-background  shadow-2xl shadow-primary/40 p-4 md:p-8">
            <section>
              <h2 className="font-bold py-2">Contact Form</h2>
              <form className="flex flex-col gap-4">
                <input type="text" placeholder="Name" className="p-2 rounded-md"/>
                <input type="email" placeholder="Email" className="p-2 rounded-md"/>
                <textarea placeholder="Message" className="p-2 rounded-md"></textarea>
                <Button buttonType={ButtonType.primary} value="Send"/>
              </form>
            </section>
          </div>
        </div>
    </Section>
  )
}

export default Contact