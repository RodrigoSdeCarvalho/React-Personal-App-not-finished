import './aboutMe.scss'

export default function Portfolio() {
  return (
    <div className="AboutMe" id="aboutme">
      <div className="title">
        <h5>About me</h5>
      </div>
      <div className="imgContainer">
      <img src="assets/Me.jpg" alt =""/>
      </div>
      <div className="aboutMeText">
        <h1>
          Hey!
        </h1>
        <p>
          My name is Rodrigo. I’m a brazilian developer.
        </p>
        <p>
          My journey in Computer Science started in 2021, when I got accepted into UFSC (Federal University of Santa Catarina), a prestigious brazilian university in tech.
        </p>
        <p>
          Since then, I have studied a lot about programming.
        </p>
        <p>
          I’ve had contact with multiple technologies: Python and some of its libraries, Java, HTML, CSS, JavaScript, React, React Native, Git.
        </p>
        <p>
          I’m still a beginner developer looking for my first internship or junior opportunity.
        </p>
      </div>
    </div>
  )
}
