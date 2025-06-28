function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold">Rudraksh</h1>
      <ul className="flex gap-6 text-sm">
        <li>
          <a href="#hero" className="hover:text-gray-300">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-gray-300">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
