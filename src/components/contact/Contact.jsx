import { useState } from "react";
import "./contact.scss"

export default function Contact() {

  const [message, setMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true)
  }

  return (
    <div className='contact' id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt=""/>
      </div>
      <div className="right">
        <h2>
          Contact.
        </h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email"/>
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP!</span>}
        </form>
        <div className="socialMediaContainer">
        <a href="https://www.linkedin.com/in/rodrigo-santos-de-carvalho/" target="_blank"><div className="github">
              <img src="assets/linkedIn.png" alt=""/>
            </div></a>
            <a href="https://github.com/RodrigoSdeCarvalho/" target="_blank"><div className="github">
              <img src="assets/github.png" alt=""/>
            </div></a>
          </div>
      </div>
    </div>
  )
}
