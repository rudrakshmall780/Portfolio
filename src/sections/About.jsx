import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <section id="about" className="bg-[#05010f] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="flex justify-center w-full md:w-1/2">
          <img
            src={aboutImg}
            alt="About Me"
            className="rounded-full w-72 h-72 object-cover border-4 border-white shadow-lg"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2">
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
        </div>
      </div>
    </section>
  );
};

export default About;
