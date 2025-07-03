import { BrainCircuit, ChartSpline, Code, User } from "lucide-react";
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Software Engineer | Data Analyst
            </h3>
            <p className="text-muted-foreground">
              With over 2.5 years of experience building scalable web
              applications and a strong foundation in data analysis, I combine
              technical expertise with data-driven insights to create impactful
              software solutions.
            </p>

            <p className="text-muted-foreground">
              I enjoy solving problems, writing clean code, and turning data
              into meaningful insights. Whether it’s building robust software or
              exploring patterns in data, I love creating solutions that make an
              impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch{" "}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full-Stack Development
                  </h4>
                  <p className="text-muted-foreground">
                    Focused on delivering robust, efficient, and maintainable
                    solutions using modern development practices.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ChartSpline className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Data Science & Analysis
                  </h4>
                  <p className="text-muted-foreground">
                    Skilled in uncovering meaningful trends and driving
                    data-informed decision-making.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Machine Learning & Statistics
                  </h4>
                  <p className="text-muted-foreground">
                    Experienced in analyzing complex datasets to build
                    predictive and intelligent systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
