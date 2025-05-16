export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rbga(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      {/* I took the back drop of the window effect from the Navbar, and I used it for my other items so my text boxes are easily readable */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            zero<span className="text-blue-500">.com</span>
          </a>
          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden">
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transistion-colors"
            >
              {" "}
              Home{" "}
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-300 hover:text-white transistion-colors"
            >
              {" "}
              About{" "}
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transistion-colors"
            >
              {" "}
              Projects{" "}
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transistion-colors"
            >
              {" "}
              Contact{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
