import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <ul style={{ textAlign: "justify" }}>
            <li>🌍  I'm based in Abuja Nigeria</li>
            <li>✉️ You can contact me at ayeniemmy003@gmail.com</li>
            <li>🧠 I'm learning pytorch</li>
            <li>🤝 Im open to collaborating on web development and machine learning</li>
          </ul>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching movies 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "change the world with good technology !"{" "}
          </p>
          <footer className="blockquote-footer">ayeniEmmy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
