import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import food from "../../Assets/Projects/food.png";
import editor from "../../Assets/Projects/codeEditor.png";
import task from "../../Assets/Projects/task.png";
import e from "../../Assets/Projects/e.png";
import bot from "../../Assets/Projects/bot.png";
import chat from '../../Assets/Projects/chat.png'
import { useRef } from "react";
function Projects() {
  const projects = useRef(null);
  return (
    <Container fluid className="project-section" ref={projects} id='project'>
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
              imgPath={chat}
              isBlog={false}
              title="Django chatapp"
              description="This Django project is a real-time study group platform that uses Django Channels and WebSockets to enable instant communication and collaboration between users. It allows students to join topic-based rooms, send and receive messages instantly, and engage in live discussions without refreshing the page. The system supports secure user authentication, dynamic room creation, and real-time chat—making it ideal for remote learning, group study, and academic networking"
              ghLink="https://github.com/Emmyayeni/DjangoChatapp"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="Task management system"
              description="A Django-powered task manager with secure user authentication (signup, login, sessions) and a clean HTML/CSS frontend. Users can create, assign, update, and track tasks—each completion awards points toward their profile. A responsive dashboard displays pending vs. completed tasks alongside a live points tally, motivating productivity through simple gamification."
              ghLink="https://github.com/Emmyayeni/task_management_system"
              demoLink="https://task-system-38db.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={e}
              isBlog={false}
              title="ECommerce website"
              description="A furniture eCommerce website built with Django that allows users to browse, search, and purchase furniture online. It features product listings, a shopping cart, secure checkout with payment integration, user authentication, and an admin panel for managing products, orders, and customers."
              ghLink="https://github.com/Emmyayeni/Ecommerce_with_django"
              demoLink="https://ewd-rrfi.onrender.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}S
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink=""
              demoLink=""
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bot}
              isBlog={false}
              title="chat bot "
              description="a basic chatbot using the tensorflow and natural language preprocessor. It initializes a chatbot that trains it with English corpus data, and defines a function to return responses based on user input.
"
              ghLink="https://github.com/Emmyayeni/chatboty/blob/main/botapp"
              // demoLink=""
            />
          </Col>
bitsOfCoDde
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Shazam for food"
              description="This project is an **African Food Image Classification Model** built with **PyTorch**, designed to identify different African dishes from images. It uses a Convolutional Neural Network (CNN), trained on a curated dataset of African food, and includes data preprocessing, model training.
"
              ghLink="https://github.com/Emmyayeni/African_food_prediction"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
