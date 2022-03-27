import './topbar.scss'
import {Person, Mail} from "@material-ui/icons"

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Rodrigo</a>
          <div className="itemContainer">
            <Person className="icon"/>
            <span>+47 99696-0576</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>rodrigosc2401@gmail.com</span>
          </div>
        </div>
        <div className="right">
        </div>
      </div>
    </div>
  )
}
