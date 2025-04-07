import "../styles/Home.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
// import ujjuu from '.src/assets/ujjuu.png'; // ✅ correct path


const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <p>
          <strong>
            I'm Ujjwal Vaishnav, a web developer passionate about creating amazing applications.<br />
            I am self-motivated, adaptable, and a problem solver with a keen interest in designing<br />
            and developing web applications.<br /><br />
          </strong>
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

      <div className="home-image-container">
        <div className="home-image-bg"></div>
        <img src={`${import.meta.env.BASE_URL}ujjuu.png`} alt="ujjuu" />


      </div>
    </section>
  );
};

export default Home;
