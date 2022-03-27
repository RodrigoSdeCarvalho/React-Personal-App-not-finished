import './topbar.scss'
import {Person, Mail} from "@material-ui/icons"

const phone_number = "+55 (47) 99696-0576"
const email = "rodrigosc2401@gmail.com"

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Rodrigo</a>
          <div className="itemContainer">
            <Person className="icon"/>
            <button onClick={() => {
              navigator.clipboard.writeText(phone_number);
              alert('Phone number copied to clipboard');
              }}><p className="text">{phone_number}</p>
            </button>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <button onClick={() => {
              navigator.clipboard.writeText(email);
              alert('E-mail copied to clipboard');
              }}><p className="text">{email}</p>
            </button>
          </div>
        </div>
        <div className="right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
