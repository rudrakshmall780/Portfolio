import { Link } from "react-scroll";
function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold">Rudraksh</h1>
      <ul className="flex gap-6 text-sm">
        <li>
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-300"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-300"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
