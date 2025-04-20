import { Github, Globe, Linkedin, Locate, Mail } from "lucide-react"
import Button from "./Button"
import { ButtonType } from "../enums"

function Contact() {
  return (
    <section className="relative inset-0 w-full flex flex-col justify-center items-center h-screen">
        <h2 className="text-apple-gradient text-4xl">Get In Touch</h2>
        <div className="flex mt-20 text-background">
          <div className="flex flex-col justify-center space-y-4 bg-apple-gradient rounded-xl p-8">
            <h2 className="font-bold text-2xl py-2">Contact Information</h2>
            <ul className="flex flex-col  justify-center gap-4">
              <li className="flex gap-2"><Mail/><p>danielagp96@gmail.com</p></li>
              <li className="flex gap-2"><Locate/><p>Mexico</p></li>
              <li className="flex gap-2"><Linkedin/><p>https://www.linkedin.com/in/danielacode/</p></li>
              <li className="flex gap-2"><Github/><p>https://github.com/Danielagtrzpr</p></li>
            </ul>
            <p>Looking forward to hearing from you!</p>
          </div>
          <div className="flex flex-col justify-center space-y-4 rounded-xl p-8 ml-8 text-background-dark">
            <section>
              <h2 className="font-bold text-2xl py-2">Contact Form</h2>
              <form className="flex flex-col gap-4">
                <input type="text" placeholder="Name" className="p-2 rounded-md"/>
                <input type="email" placeholder="Email" className="p-2 rounded-md"/>
                <textarea placeholder="Message" className="p-2 rounded-md"></textarea>
                <Button buttonType={ButtonType.appleGradient} value="Send"/>
              </form>
            </section>
          </div>
        </div>
    </section>
  )
}

export default Contact