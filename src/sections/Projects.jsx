import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 bg-gray-100 text-black px-6 min-h-screen"
    >
      <h2 className="text-3xl font-semibold text-center mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Project 1 */}
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 8px 24px rgba(0,0,0,0.2)",
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className="bg-white shadow-lg rounded-lg p-6"
        >
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
        </motion.div>

        {/* Project 2 */}
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 8px 24px rgba(0,0,0,0.2)",
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className="bg-white shadow-lg rounded-lg p-6"
        >
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
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 8px 24px rgba(0,0,0,0.2)",
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className="bg-white shadow-lg rounded-lg p-6"
        >
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
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 8px 24px rgba(0,0,0,0.2)",
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className="bg-white shadow-lg rounded-lg p-6"
        >
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
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 8px 24px rgba(0,0,0,0.2)",
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className="bg-white shadow-lg rounded-lg p-6"
        >
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
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 8px 24px rgba(0,0,0,0.2)",
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className="bg-white shadow-lg rounded-lg p-6"
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
