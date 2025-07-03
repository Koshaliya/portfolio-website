const projects = [
  {
    id: 1,
    title: "xxx",
    description: "ddddd",
    image: "/projects/",
    tags: ["rrr"],
    demoUrl: "3",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "xxx",
    description: "ddddd",
    image: "/projects/",
    tags: ["rrr"],
    demoUrl: "3",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "xxx",
    description: "ddddd",
    image: "/projects/",
    tags: ["rrr"],
    demoUrl: "3",
    githubUrl: "#",
  },
];
export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured<span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          kkkkkkkkkkkkkk
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};
