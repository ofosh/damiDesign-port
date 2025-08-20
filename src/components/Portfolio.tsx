import React, { useState } from "react";
import { ExternalLink, Eye } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "web",
      image:
        "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Modern e-commerce solution with seamless user experience",
      link: "https://drive.google.com/drive/folders/1dFrTxsti6JUlboVEfL7jf60qywq3vXPL?usp=drive_link",
    },
    {
      id: 2,
      title: "Brand Identity",
      category: "branding",
      image:
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Complete brand redesign for tech startup",
      link: "https://drive.google.com/drive/folders/1kdQB1WL_lZfaEoQ63QUdHhYuggCtMxXu?usp=drive_link",
    },
    {
      id: 3,
      title: "Mobile App UI",
      category: "mobile",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Intuitive mobile application interface design",
      link: "https://drive.google.com/drive/folders/1a1smrgKHwhxGzwxSyMgD2mk1xtWZebNC?usp=drive_link",
    },
    {
      id: 4,
      title: "Corporate Website",
      category: "web",
      image:
        "https://images.pexels.com/photos/3184336/pexels-photo-3184336.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Professional corporate website with CMS integration",
    },
    {
      id: 5,
      title: "Logo Design",
      category: "branding",
      image:
        "https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Minimalist logo design for lifestyle brand",
      link: "https://drive.google.com/drive/folders/1UNLm5z-mfTW_XZybsh2UGcIYJd4zjrwS?usp=drive_link",
    },
    {
      id: 6,
      title: "Dashboard Design",
      category: "web",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Analytics dashboard with data visualization",
    },
  ];

  const filters = ["all", "web", "branding", "mobile"];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            My <span className="text-orange-500">Portfolio</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore a selection of my recent work showcasing creativity,
            functionality, and attention to detail across various industries.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/80 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4">
                    <button className="bg-white text-slate-900 p-3 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300">
                      <Eye size={20} />
                    </button>
                    <a href={project.link}>
                      <button className="bg-white text-slate-900 p-3 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300">
                        <ExternalLink size={20} />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
