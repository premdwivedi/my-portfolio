import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prem Nath </span>
            from <span className="purple"> Noida, India.</span>
            <br />
            I am a recent graduate from JSS Academy of Technical Education, Noida.
            <br />
            I have completed Master Of Computer Applications(MCA).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Empowered by logic and creativity, I code with purpose, crafting applications that enhance lives and drive progress."{" "}
          </p>
          <footer className="blockquote-footer">Prem Nath</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
