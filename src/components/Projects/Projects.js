import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import print from "../../Assets/Projects/4.png";
import emotion from "../../Assets/Projects/emotion.png";
import post from "../../Assets/Projects/3.png";
import chatify from "../../Assets/Projects/1.png";
import blog from "../../Assets/Projects/5.png";
import frg from "../../Assets/Projects/2.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink=""
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={frg}
              isBlog={false}
              title="Face recognition CLI"
              description="Facerecognition-cli- is a Python-based command-line interface (CLI) tool designed for facial recognition tasks. It allows users to detect and recognize faces in images or video streams directly from the terminal. The project leverages popular machine learning libraries and computer vision techniques to provide accurate and efficient face detection."
              ghLink="https://github.com/10abdulmoid/Facerecognition-cli"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={post}
              isBlog={false}
              title="Postagent"
              description="A human-in-the-loop autonomous agent that collects tech articles from RSS feeds, generates LinkedIn-ready post drafts, and posts to LinkedIn via the official API only after manual approval."
              ghLink="https://github.com/10abdulmoid/Postagent"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={print}
              isBlog={false}
              title="Printer API"
              description="A production-quality .NET 8 ASP.NET Core REST API for managing printers, print queues, and print jobs. This service mimics the core workflow of an enterprise print service backend by handling printer registration, queue management, job submission, and background job processing."
              ghLink="https://github.com/10abdulmoid/Printer-api"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog-website"
              description="Dark Blog - Minimalist dark theme w/ purple accents. Pure HTML/CSS, mobile-ready. Perfect for devs & writers. Clone & deploy!"
              ghLink="blog-website-pi-five.vercel.app"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
