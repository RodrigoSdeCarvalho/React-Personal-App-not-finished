import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
          <li>
              <a href="#intro">Home</a>
          </li>
          <li>
              <a href="#portfolio">Portfolio</a>
          </li>
          <li>
              <a href="#experience">Experience</a>
          </li>
          {/* <li>
              <a href="intro">Home</a>
          </li> essays*/}
          <li>
              <a href="#contact">Contact</a>
          </li>
      </ul>
    </div>
  )
}
