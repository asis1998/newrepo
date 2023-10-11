import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="container flex navigation">
        <div className="flex nav-left">
          <h1>Prem</h1>
          <div className="line">Soft. Engineer</div>
        </div>

        <div className="menu">
          <ul className="flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about-me">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
