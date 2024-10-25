import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "E-commerce Website",
      description: "I have built a complete e-commerce website using HTML, CSS, and implemented product browsing features using JavaScript to filter, sort, and paginate products.",
      imgUrl: projImg1,
      driveLink: "https://drive.google.com/file/d/1LFdIyZ5e2xuWsKcbigqZ-9biM3wEXijz/view?usp=drivesdk", // Add your Google Drive link here
    },
    {
      title: "Food Ordering Website",
      description: "I have built a complete Food Ordering website using HTML, CSS, JavaScript, and developed a user-friendly platform allowing customers to browse menus, select dishes, and place orders.",
      imgUrl: projImg2,
      driveLink: "https://drive.google.com/file/d/1Mfsd5qE6dlDuYyw5BcdSpnJYE2oU1tRw/view?usp=sharing",
    },
    {
      title: "Gym Website",
      description: "I have built a responsive gym website using HTML, enhancing the gym's online visibility and user experience for members and potential clients.",
      imgUrl: projImg3,
      driveLink: "https://drive.google.com/file/d/10HRu8q3HdXLZK_vNIn1EAogrWZtxveot/view?usp=drive_link",
    },
    {
      title: "React.js News APP",
      description: "I have developed a dynamic news application using React.js to fetch and display the latest news articles from various sources.",
      imgUrl: projImg4,
      driveLink: "https://drive.google.com/news-app-link",
    },
    {
      title: "React.js Notes APP (iNotebook)",
      description: "I have developed a dynamic Notes application using React.js, offering features like creating, editing, deleting, and searching notes, with login and signup features.",
      imgUrl: projImg5,
      driveLink: "https://drive.google.com/notes-app-link",
    },
    {
      title: "React.js Task Management System",
      description: "I have developed a task management application that allows users to add, edit, update, and delete tasks with dynamic status tracking.",
      imgUrl: projImg6,
      driveLink: "https://drive.google.com/task-management-link",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>As a passionate developer with a strong foundation in full-stack web development, I have extensively worked with the MERN stack. My projects showcase my ability to design and implement dynamic, user-centric applications that solve real-world problems while providing an engaging user experience.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>This is tab 2 content.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>This is tab 3 content.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  )
}
