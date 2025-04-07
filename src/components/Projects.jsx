import "../styles/Projects.css";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "QR-GENERATOR",
    link: "https://vaishnavujwal.github.io/qrgenerator/",
  },
  {
    name: "PASSWORD-CREATER",
    link: "https://vaishnavujwal.github.io/password-creater/",
  },
  {
    name: "WEATHER APP",
    link: "https://vaishnavujwal.github.io/weather-app/",
  },
  {
    name: "CALCULATOR",
    link: "https://vaishnavujwal.github.io/calculator-app/",
  },
  {
    name: "DISEASE-SEARCH APP",
    link: "https://vaishnavujwal.github.io/disease-search-app/",
  },
  {
    name: "BOOK-STORE APP",
    link: "https://github.com/yourgithub/task-manager",
  },
  {
    name: "MOOD TRACKER APP",
    link: "https://github.com/yourgithub/task-manager",
  },
  {
    name: "ECOMMERCE WEBSITE",
    link: "https://github.com/yourgithub/task-manager",
  },
  {
    name: "MY-PORTFOLIO",
    link: "https://github.com/yourgithub/task-manager",
  },
  {
    name: "ABSTRACT TEXT SUMMURIZATION",
    link: "https://github.com/yourgithub/task-manager",
  },
  {
    name: "INSTAGRAM-CLONE COMING SOON",
    link: "https://github.com/yourgithub/task-manager",
  },
  {
    name: "COMING SOON ",
    link: "https://github.com/yourgithub/task-manager",
  },
  
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-box" key={index}>
            <h3>{project.name}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button>Click To View</button>
            </a>
          </div>
        ))}
      </div>


      <div className="github-link">
        <p><strong>All projects code is on my GitHub, check it.</strong></p>
        <a
          href="https://github.com/vaishnavujwal"
          target="_blank"
          rel="noopener noreferrer"
          className="github-icon"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
};

export default Projects;
