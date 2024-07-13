import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hotel from "../../Assets/Projects/hotel.png";
import attendance from "../../Assets/Projects/attendancemgm.png";
import PixSolve from "../../Assets/Projects/PixSolve.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PixSolve}
              isBlog={false}
              title="PixSolve"
              description="PixSolve is a cutting-edge framework designed for the recognition and solution of mathematical and scientific expressions in real-world scenarios. This powerful Streamlit application accurately recognizes and converts mathematical equations from images and documents into text format. Recognizing complex math expressions is highly challenging due to the variety of symbols, notations, and layout complexities. PixSolve not only extracts these expressions but also provides their solutions and detailed information by integrating with the GPT-3.5 Turbo API."
              ghLink="https://github.com/premdwivedi/PixSolve.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={attendance}
              isBlog={false}
              title="Attendance Management System"
              description="It is my college project, which is a Full-Stack Web Application. The project is College- Attendance-Management-System which will help teachers maintain daily attendance and it will also help students to track their attendance on a real-time basis. We have used technologies like React.js, Node.js, MySQL, bootstrap, express, etc."
              ghLink="https://github.com/premdwivedi/JSSATEN-attendance.git"
              demoLink="https://jssaten.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title="Frontend-for-Hotel"
              description="I have built a responsive hotel website, crafted meticulously using HTML, CSS, and JavaScript. Designed to offer a seamless and engaging user experience, this site showcases the beauty and elegance of our hotel, ensuring accessibility and compatibility across all devices. You can dive into a virtual tour of our exquisite rooms, explore our amenities, and make reservations effortlessly, all through a sleek and intuitive interface. Experience the perfect blend of aesthetic appeal and functional excellence with my state-of-the-art hotel website."
              ghLink="https://github.com/premdwivedi/Frontend-for-Hotel.git"
              demoLink="https://premshotel.netlify.app/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
