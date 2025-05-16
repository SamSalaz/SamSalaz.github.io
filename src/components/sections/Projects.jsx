import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First project start */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition bg-[rbga(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
              <h3 className="text-xl font-bold mb-2">
                {" "}
                Mecazon Project (Product Managment)
              </h3>
              <p className="text-gray-400 mb-4">
                In a full stack project using MongoDB, React, and Tailwind CSS,
                I managed the product data—gathering items, ensuring color
                variations, writing descriptions, and sourcing images for the
                database.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "CSS", "Vite", "Axios","Express.js", "MongoDB", "Node.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/WestMecCoding/3pm-teamD-MECAZON-client-dev/tree/main"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            {/* 1st project end */}
            {/* project photo start */}
            <div
              className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all bg-[rbga(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg flex justify-center items-center
            "
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6XSuKs6ypLt466rRWXuqj_jKwndui8a_yJA&s"
                alt="Example"
                className="w-150 rounded-sm"
              />
            </div>
            {/* project photo end */}
            {/* second porject start */}
            <div
              className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all bg-[rbga(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg
            "
            >
              <h3 className="text-xl font-bold mb-2">AI Analytics Dashboard</h3>
              <p className="text-gray-400 mb-4">
                ML-powered data visualization platform with predictive analytics
                and interactive reports.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "TensorFlow", "D3.js", "Flask"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            {/* second project end */}
            {/* second picture start */}
            <div
              className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all bg-[rbga(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg flex justify-center items-center
            "
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6XSuKs6ypLt466rRWXuqj_jKwndui8a_yJA&s"
                alt="Example"
                className="w-150 rounded-sm"
              />
            </div>
            {/* second picture end */}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
