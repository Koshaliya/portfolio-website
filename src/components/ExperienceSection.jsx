import {
  BrainCircuit,
  BriefcaseBusiness,
  ChartSpline,
  Code,
  User,
} from "lucide-react";
export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* Image & Skills Section */}

            {/* Profile Image */}
            <div className="flex justify-center rounded-lg overflow-hidden ">
              <img
                src="src\assets\profile.jpeg"
                alt="Koshaliya - Software Engineer"
                className="w-50 h-auto object-cover item-center"
                style={{ borderRadius: "50%" }}
              />
            </div>

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
              I am passionate about leveraging data and technology to drive
              innovation, continuously learning and adapting to build systems
              that are not only functional but also intelligent and
              future-ready.
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
                {/* <div className="p-3 rounded-full bg-primary/10">
                  <BriefcaseBusiness className="h-6 w-6 text-primary" />
                </div> */}
                <img
                  src="/src/assets/Azend.png"
                  alt="Azend Technologies Logo"
                  className="h-12 w-12 rounded-full object-cover border border-gray-200"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software Engineer</h4>
                  <p className="text-muted-foreground">
                    Azend Technologies (Pvt) Ltd
                  </p>
                  <p className="text-muted-foreground">Colombo, Sri Lanka</p>
                  <p className="text-muted-foreground">
                    April 2023 - February 2025
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                {/* <div className="p-3 rounded-full bg-primary/10">
                  <BriefcaseBusiness className="h-6 w-6 text-primary" />
                </div> */}
                <img
                  src="/src/assets/arimac.png"
                  alt="Azend Technologies Logo"
                  className="h-12 w-12 rounded-full object-cover border border-gray-200"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Software Engineer - Intern
                  </h4>
                  <p className="text-muted-foreground">
                    Arimac Lanka (Pvt) Ltd
                  </p>
                  <p className="text-muted-foreground">Colombo, Sri Lanka</p>
                  <p className="text-muted-foreground">
                    January 2022 - July 2022
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="gradient-border p-6 card-hover">
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
