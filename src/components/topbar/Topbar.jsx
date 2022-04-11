import './topbar.scss'
import Icon from '@material-ui/core/Icon';
import {Person, Mail} from "@material-ui/icons"

const phone_number = "+55 (47) 99696-0576"
const email = "rodrigosc2401@gmail.com"

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Rodrigo</a>
          <div className="itemContainer">
            <Person className='icon'></Person>
            <button onClick={() => {
              navigator.clipboard.writeText(phone_number);
              alert('Phone number copied to clipboard');
              }}><p className="text">{phone_number}</p>
            </button>
          </div>
          <div className="itemContainer">
            <Mail className='icon'></Mail>
            <button onClick={() => {
              navigator.clipboard.writeText(email);
              alert('E-mail copied to clipboard');
              }}><p className="text">{email}</p>
            </button>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
