import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  //Frontend
  {
    name: "HTML5/CSS3",
    level: 95,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg ",
    category: "frontend",
  },
  {
    name: "Angular JS",
    level: 90,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg ",
    category: "frontend",
  },
  {
    name: "React JS",
    level: 75,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg ",
    category: "frontend",
  },
  {
    name: "JavaScript",
    level: 80,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg ",
    category: "frontend",
  },
  {
    name: "Bootstrap",
    level: 95,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg ",
    category: "frontend",
  },
  {
    name: "Flutter",
    level: 60,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg ",
    category: "frontend",
  },
  // {
  //   name: "ReactNative",
  //   level: 56,
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg ",
  //   category: "frontend",
  // },

  //Backend
  {
    name: ".NET ",
    level: 85,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg ",
    category: "backend",
  },
  {
    name: "Java ",
    level: 65,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg ",
    category: "backend",
  },
  {
    name: "Python ",
    level: 78,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg ",
    category: "backend",
  },
  {
    name: "Node.js ",
    level: 65,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg ",
    category: "backend",
  },
  {
    name: "R ",
    level: 78,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg ",
    category: "backend",
  },
  {
    name: "MySQL ",
    level: 87,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg ",
    category: "backend",
  },
  {
    name: "PostgreSQL ",
    level: 87,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg ",
    category: "backend",
  },
  {
    name: "MS SQL ",
    level: 83,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg ",
    category: "backend",
  },
  {
    name: "MongoDB ",
    level: 81,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg ",
    category: "backend",
  },

  //Tools
  // { name: "Git ", level: 91, category: "tools" },
  // { name: "Excel ", level: 84, category: "tools" },

  //Data Analysis

  //
];

const categories = ["all", "frontend", "backend"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Technical <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-4 rounded-lg shadow-xs card-hover flex flex-col items-center justify-center text-center"
            >
              {/* <div className="text-center mb-4"> */}
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="w-12 h-12 object-contain mb-4"
              />
              <h3 className="font-semibold text-lg">{skill.name}</h3>
              {/* </div> */}
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                {/* <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out"
                  style={{ width: skill.level + "%" }}
                ></div> */}
              </div>
              <div className="text-center mt-1">
                {/* <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
