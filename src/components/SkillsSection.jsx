import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // === BUSINESS INTELLIGENCE & VISUALIZATION ===
  {
    name: "Looker",
    level: 85,
    logo: "src/assets/icons/looker-icon.svg",
    category: "Business Intelligence & Visualization",
  },
  {
    name: "Power BI (DAX, Power Query)",
    level: 90,
    logo: "src/assets/icons/power-BI-2021.png",
    category: "Business Intelligence & Visualization",
  },
  {
    name: "Tableau",
    level: 85,
    logo: "src/assets/icons/tableau-software.svg",
    category: "Business Intelligence & Visualization",
  },
  {
    name: "Excel",
    level: 92,
    logo: "src/assets/icons/888850.png",
    category: "Business Intelligence & Visualization",
  },
  // {
  //   name: "DAX",
  //   level: 80,
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powerbi/powerbi-original.svg",
  //   category: "Business Intelligence & Visualization",
  // },
  // {
  //   name: "Power Query",
  //   level: 82,
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/excel/excel-original.svg",
  //   category: "Business Intelligence & Visualization",
  // },
  {
    name: "Matplotlib",
    level: 85,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
    category: "Business Intelligence & Visualization",
  },
  {
    name: "Seaborn",
    level: 83,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    category: "Business Intelligence & Visualization",
  },
  // {
  //   name: "Report Writing",
  //   level: 88,
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notepad/notepad-original.svg",
  //   category: "Business Intelligence & Visualization",
  // },
  // {
  //   name: "KPI Tracking",
  //   level: 86,
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tableau/tableau-original.svg",
  //   category: "Business Intelligence & Visualization",
  // },

  // === LANGUAGES ===
  {
    name: "C#",
    level: 85,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    category: "Languages",
  },
  {
    name: "Python",
    level: 88,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    category: "Languages",
  },
  {
    name: "Java",
    level: 75,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    category: "Languages",
  },
  {
    name: "JavaScript (ES6+)",
    level: 82,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "Languages",
  },
  {
    name: "TypeScript",
    level: 78,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: "Languages",
  },
  {
    name: "R",
    level: 80,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
    category: "Languages",
  },
  {
    name: "SQL",
    level: 90,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    category: "Languages",
  },
  {
    name: "HTML5",
    level: 95,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    category: "Languages",
  },
  {
    name: "CSS3",
    level: 95,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    category: "Languages",
  },

  // === FRAMEWORKS & LIBRARIES ===
  {
    name: ".NET 6+",
    level: 85,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    category: "Frameworks & Libraries",
  },
  // {
  //   name: "ASP.NET Core",
  //   level: 83,
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
  //   category: "Frameworks & Libraries",
  // },
  {
    name: "Spring Boot",
    level: 70,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    category: "Frameworks & Libraries",
  },
  {
    name: "Angular 15+",
    level: 90,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    category: "Frameworks & Libraries",
  },
  {
    name: "React",
    level: 78,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Frameworks & Libraries",
  },
  {
    name: "React Native",
    level: 68,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Frameworks & Libraries",
  },
  {
    name: "Flutter",
    level: 65,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    category: "Frameworks & Libraries",
  },
  {
    name: "Node.js",
    level: 72,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    category: "Frameworks & Libraries",
  },

  // === DATABASES ===
  {
    name: "Microsoft SQL Server",
    level: 88,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    category: "Databases",
  },
  {
    name: "PostgreSQL",
    level: 87,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    category: "Databases",
  },
  {
    name: "MySQL",
    level: 89,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    category: "Databases",
  },
  {
    name: "MongoDB",
    level: 82,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "Databases",
  },

  // === CLOUD & CI/CD ===
  {
    name: "Git",
    level: 90,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "Cloud & CI/CD",
  },
  {
    name: "CI/CD Pipelines",
    level: 78,
    logo: "src/assets/icons/ci-cd.png",
    category: "Cloud & CI/CD",
  },
  {
    name: "Docker",
    level: 75,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "Cloud & CI/CD",
  },
  {
    name: "Azure",
    level: 80,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    category: "Cloud & CI/CD",
  },
  {
    name: "AWS",
    level: 90,
    logo: "src/assets/icons/AWS_Simple_Icons_AWS_Cloud.svg.png",
    category: "Cloud & CI/CD",
  },
  {
    name: "Google Cloud (GCP)",
    level: 73,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    category: "Cloud & CI/CD",
  },
  {
    name: "GSuite",
    level: 85,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    category: "Cloud & CI/CD",
  },

  // === TOOLS ===
  {
    name: "Visual Studio",
    level: 88,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
    category: "Tools",
  },
  {
    name: "VS Code",
    level: 92,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    category: "Tools",
  },
  {
    name: "R Studio",
    level: 84,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rstudio/rstudio-original.svg",
    category: "Tools",
  },
  {
    name: "SourceTree",
    level: 75,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sourcetree/sourcetree-original.svg",
    category: "Tools",
  },
  {
    name: "Swagger",
    level: 76,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
    category: "Tools",
  },
  {
    name: "Trello",
    level: 85,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-original.svg",
    category: "Tools",
  },
  {
    name: "Slack",
    level: 90,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
    category: "Tools",
  },
  {
    name: "Jupyter Notebook",
    level: 87,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
    category: "Tools",
  },
  {
    name: "Google Colab",
    level: 85,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecolab/googlecolab-original.svg",
    category: "Tools",
  },
  {
    name: "Kaggle",
    level: 80,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kaggle/kaggle-original.svg",
    category: "Tools",
  },
  {
    name: "Postman",
    level: 88,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    category: "Tools",
  },
  {
    name: "Jira",
    level: 82,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    category: "Tools",
  },
];

// Categories for filtering (matches section titles)
const categories = [
  // "all",
  "Business Intelligence & Visualization",
  "Languages",
  "Frameworks & Libraries",
  "Databases",
  "Cloud & CI/CD",
  "Tools",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(
    "Business Intelligence & Visualization"
  );
  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
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
