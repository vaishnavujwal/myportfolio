import "../styles/About.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-image">
        <img src="/logoo.jpeg" alt="Ujjwal Vaishnav" /> {/* ✅ Use public folder path */}
      </div>

      <div className="about-content">    
        <h2>About Me</h2>
        <p>
          <strong> Ujjwal Vaishnav is a passionate Computer Science and Engineering student at
            J.T. Mahajan College of Engineering, Faizpur, with a CGPA of 7.45. He has a strong foundation in
            web development, specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js).
            With expertise in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB, Ujjwal
            has worked on several projects, including an e-commerce website, a facial authentication system,
            and a book store app. His e-commerce project is currently being enhanced with
            additional pages, a shopping cart feature, and dynamic pricing.</strong>
        </p>

        <div className="tech-icons">
          <FaHtml5 className="icon html" />
          <FaCss3Alt className="icon css" />
          <FaJs className="icon js" />
          <FaReact className="icon react" />
          <FaNodeJs className="icon node" />
          <FaGithub className="icon github" />
        </div>
      </div>
    </section>
  );
};

export default About;
