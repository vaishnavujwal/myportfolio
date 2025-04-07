import { useEffect, useState } from "react";
import "../styles/Skills.css";

const skillsData = [
  { name: "HTML", percentage: 90, color: "#e34c26" },
  { name: "CSS", percentage: 95, color: "#264de4" },
  { name: "JavaScript", percentage: 80, color: "#f7df1e" },
  { name: "React.js", percentage: 90, color: "#003049" },
  { name: "Node.js", percentage: 50, color: "#FFAE42" },
  { name: "MongoDB", percentage: 65, color: "#9400e7" }
];

const Skills = () => {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      const updatedProgress = {};
      skillsData.forEach((skill) => {
        updatedProgress[skill.name] = skill.percentage;
      });
      setProgress(updatedProgress);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="skills">
      <h2>My Skills</h2>
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
    </section>
  );
};

export default Skills;
