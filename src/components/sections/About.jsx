import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "CSS",
    "HTML",
    "React",
    "TypeScript",
    "TailwindCSS",
  ];

  const backendSkills = ["Node.js", "Express.js", "AWS", "MongoDB", "GraphQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            <span className="">About Me</span>
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all bg-[rbga(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <p className="text-gray-300 mb-6">
              Passionate about the{" "}
              <span className="text-blue-300 underline">arts</span> of making a
              website. I enjoy finding ways to make a website truly stand out
              and pop.
              <br></br>
              <span className="block mt-4 mb-2 text-lg italic text-white">
                "The aim of art is to represent not the outward appearance of
                things, but their inward significance."
              </span>
              <br></br>— Aristotle
            </p>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-black/10 text-black-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-black/10 text-black-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-[rbga(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> High School </strong> - Sierra Linda (Graduate 2025)
                </li>
                <li>
                  Relevant Coursework: Digital Photography 1-2, Art 3-4, AP
                  Art...
                </li>
                <li>
                  <strong> technical education </strong> - West-Mec (Graduate
                  2025)
                </li>
                <li>
                  Relevant Certifications: Information Technology Specialist OD
                  306 HTML5, Information Technology Specialist OD 302 Java
                  Script...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-[rbga(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
              <h3 className="text-xl font-bold mb-4">
                {" "}
                💼 Volunteer Experience{" "}
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold"> NASCAR (2023) </h4>
                  <p>
                    Developed strong interpersonal and communication skills by
                    interacting with a diverse crowd in a fast-paced
                    environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
