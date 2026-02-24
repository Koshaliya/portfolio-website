import { ArrowRight, Github } from "lucide-react";
import TableauDashboard from "../assets/projects-ss/sales-dashboard-tableau.png";
import DataJobDashboard from "../assets/projects-ss/data-job-dashboard.png";
import BikeSalesDashboard from "../assets/projects-ss/bike-sales-dashboard.png";
import BADashboard from "../assets/projects-ss/BA tableau.png";
import ABTestingProject from "../assets/projects-ss/AB-Testing-Tools.jpg";
import CustomerSegProject from "../assets/projects-ss/Segmentation-image.jpg";
const projects = [
  {
    id: 1,
    title: "Customer Experience Analytics - British Airways",
    description: "Analyzed British Airways customer feedback data to identify key drivers of passenger satisfaction. Discovered A320 aircraft as a critical focus area with 3.3% customer impact score and over 40% at-risk passengers. Proposed targeted seat-comfort enhancements, estimating that a 0.5-point uplift would significantly improve experience across a large passenger segment.",
    image: "/projects/",
    tags: ["tableau", "customer-analytics"],
    image: BADashboard,
    githubUrl: "https://github.com/Koshaliya/british-airways-tableau-analysis",
  },
  {
    id: 2,
    title: "Portfolio A/B Test: Light vs Dark Theme",
    description:
    "Designed and implemented a real-world A/B test on my personal portfolio website to evaluate whether Light or Dark theme improves engagement with the 'Get In Touch' section. Applied hypothesis testing and statistical comparison to determine conversion impact.",
    image: "/projects/",
    tags: ["python", "ab-testing", "analytics"],
    image: ABTestingProject,
    githubUrl: "https://github.com/Koshaliya/portfolio-theme-a-b-testing-with-python",
  },
  {
    id: 3,
    title: "Customer Segmentation & Retention Analytics",
    description:
    "Built an end-to-end customer analytics pipeline using RFM-based K-Means clustering to segment 4,000+ e-commerce customers into four behaviorally distinct groups (Silhouette Score: 0.44). Performed cohort retention and churn analysis, identifying a 100% churn high-risk segment and a VIP segment with only 3.2% churn. Delivered data-driven retention strategies targeting early lifecycle drop-offs, uncovering a 15%+ churn risk segment with strong revenue recovery potential.",
    image: "/projects/",
    tags: ["python", "customer-segmentation", "cohort-analysis", "churn-analysis"],
    image: CustomerSegProject,
    githubUrl: "https://github.com/Koshaliya/customer-segmentation",
  },
  {
    id: 4,
    title: "Tableau Sales & Profit Dashboard",
    description:
      "Interactive dashboard analyzing sales, profit, and quantity trends across time, product categories, and locations. Enables dynamic filtering and comparison using intuitive visualizations including line charts (weekly trends), bar charts (category performance), and dual-axis insights.",
    image: "/projects/",
    tags: ["tableau", "dashboard"],
    image: TableauDashboard,
    githubUrl: "https://github.com/Koshaliya/sales-dashboard-tableau",
  },
  {
    id: 5,
    title: "Data Job Skills Dashboard with Power BI",
    description:
      "This dashboard was created for Job Seekers, Job Transitioners and Job Swappers to solve a common problem: info about the data job market is scattered and hard to grasp.",
    image: "/projects/",
    tags: ["powerbi", "dashboard"],
    image: DataJobDashboard,
    githubUrl: "https://github.com/Koshaliya/job-data-dashboard-powerbi",
  },
  {
    id: 6,
    title: "Pricing Analytics - E-bike Traders",
    description:
      "A Power BI dashboard connected to an MSSQL database to analyze key performance metrics for E-bike Traders. It supports informed decision-making, including recommendations on pricing adjustments for the upcoming year.",
    image: "/projects/",
    tags: ["powerbi", "MSSQL"],
    image: BikeSalesDashboard,
    githubUrl: "https://github.com/Koshaliya/bike-sales-dashboard",
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
          coding, machine learning, data analysis and
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
              {/* Image Section */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
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
