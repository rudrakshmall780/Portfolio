const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100 text-black px-6">
      <h2 className="text-3xl font-semibold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {/* Project 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">Weather App</h3>
          <p className="text-sm text-gray-600">
            A simple app that fetches weather using a public API. Built using
            React.
          </p>
          <a
            href="#"
            className="text-blue-600 mt-2 inline-block hover:underline"
          >
            View Code
          </a>
        </div>

        {/* Project 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">Todo List</h3>
          <p className="text-sm text-gray-600">
            A CRUD-based todo list app using React hooks and local storage.
          </p>
          <a
            href="#"
            className="text-blue-600 mt-2 inline-block hover:underline"
          >
            View Code
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
