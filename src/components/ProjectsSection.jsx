import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Movie Recommendation System",
    description:
      "It recommends movies based on the similarity of their overviews and genres. The system uses the Bag of Words technique and Cosine Similarity to find similar movies.",
    image: "/projects/",
    tags: ["python"],
    demoUrl: "3",
    githubUrl: "https://github.com/Koshaliya/movie-recommendation-system",
  },
  {
    id: 2,
    title: "Twitter Sentiment Analysis",
    description:
      "The dataset is sourced from Kaggle, and the analysis involves preprocessing the text using Porter Stemmer, vectorizing the text using TF-IDF, and training a machine learning model to predict sentiment.",
    image: "/projects/",
    tags: ["python"],
    demoUrl: "3",
    githubUrl: "https://github.com/Koshaliya/twitter_sentiment_analysis",
  },
  {
    id: 3,
    title: "Currency Exchange Rate Prediction",
    description:
      "This project focuses on building and evaluating machine learning models to predict currency exchange rates from GBP to EUR, HKD, USD, and JPY.",
    image: "/projects/",
    tags: ["python"],
    demoUrl: "3",
    githubUrl: "https://github.com/Koshaliya/currency-rate-prediction",
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
          A collection of academic and personal projects showcasing my skills in
          full-stack development, machine learning, data analysis, and
          problem-solving.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover relative"
            >
              {/* <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div> */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}{" "}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
              </div>
              {/* <div className="flex justify-between items-center"> */}
              <div className="absolute bottom-4 right-6">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="text-foreground/80 hoverr:text-primary transition-colors duration-300"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
            // </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Koshaliya"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
