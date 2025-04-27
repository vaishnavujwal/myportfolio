import { useEffect, useState } from "react";
import "../styles/Skills.css";

const skillsData = [
  { name: "HTML5", percentage: 90, color: "#e34c26" },
  { name: "CSS3", percentage: 95, color: "#264de4" },
  { name: "Tailwind", percentage: 85, color: "#9400e7" },
  { name: "Bootstrap", percentage: 95, color: "#e34c26" },
  { name: "JavaScript", percentage: 80, color: "#f7df1e" },
  { name: "React.js", percentage: 90, color: "#003049" },
  { name: "Node.js", percentage: 50, color: "#FFAE42" },
  { name: "Express.js", percentage: 50, color: "#e34c26" },
  { name: "MongoDB", percentage: 85, color: "#9400e7" }
];

const basicSkillsData = [
  { name: "Python", percentage: 25, color: "#3776AB" },
  { name: "SQL", percentage: 20, color: "#FFAE42" },
  { name: "React Native", percentage: 25, color: "#61dafb" },
  { name: "Angular", percentage: 10, color: "#dd0031" }
];

const Skills = () => {
  const [progress, setProgress] = useState({});
  const [basicProgress, setBasicProgress] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      const updatedProgress = {};
      skillsData.forEach((skill) => {
        updatedProgress[skill.name] = skill.percentage;
      });
      setProgress(updatedProgress);

      const updatedBasicProgress = {};
      basicSkillsData.forEach((skill) => {
        updatedBasicProgress[skill.name] = skill.percentage;
      });
      setBasicProgress(updatedBasicProgress);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className="skill-box" key={index}>
            <div className="skill-label">
              <span>{skill.name}</span>
              <span>{progress[skill.name] || 0}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${progress[skill.name] || 0}%`,
                  backgroundColor: skill.color
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      
      <h2 className="section-title">Basic Skills</h2>
      <div className="skills-container">
        {basicSkillsData.map((skill, index) => (
          <div className="skill-box" key={index}>
            <div className="skill-label">
              <span>{skill.name}</span>
              <span>{basicProgress[skill.name] || 0}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${basicProgress[skill.name] || 0}%`,
                  backgroundColor: skill.color
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
