import aboutImg from "../assets/about.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="bg-[#05010f] text-white py-20 px-6 min-h-screen"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <motion.div
          className="flex justify-center w-full md:w-1/2"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={aboutImg}
            alt="About Me"
            className="rounded-full w-72 h-72 object-cover border-4 border-white shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold mb-4">About Me</h2>
          <p className="text-lg text-red-400 font-semibold mb-4">
            Hi, my name is Rudraksh !!
          </p>
          <p className="text-gray-300 text-sm mb-4 italic">
            I am a B.Tech student at MNNIT Allahabad. I’m passionate about
            building responsive and clean web interfaces. I love solving
            problems and learning new technologies in web development.
          </p>
          <p className="text-gray-300 text-sm mb-6 italic">
            I’m currently focused on improving my frontend skills and exploring
            full-stack development. I aim to build real-world projects that make
            a difference.
          </p>
          <ul className="text-white text-left text-sm space-y-2">
            <li>
              <span className="font-semibold">1. </span>
              <em>Problem Solving</em>
            </li>
            <li>
              <span className="font-semibold">2. </span>
              <em>DSA</em>
            </li>
            <li>
              <span className="font-semibold">3. </span>
              <em>JavaScript & React</em>
            </li>
            <li>
              <span className="font-semibold">4. </span>
              <em>Web Development</em>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
