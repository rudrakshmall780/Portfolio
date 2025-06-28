const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black text-white text-center px-4"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold">Hi, I'm Rudraksh</h1>
      <p className="mt-4 text-lg md:text-xl">
        Frontend Developer | React Enthusiast
      </p>
      <a
        href="#projects"
        className="mt-6 px-6 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition"
      >
        View Projects
      </a>
    </section>
  );
};

export default Hero;
