function Navbar({ setPage }) {
  return (
    <nav className="navbar">

      <div className="navbar-container">

        <button
          className="navbar-logo"
          onClick={() => setPage("home")}
        >
          TALHA
        </button>

        <div className="nav-links">

          <button onClick={() => setPage("home")}>
            Home
          </button>

          <button onClick={() => setPage("about")}>
            About
          </button>

          <button onClick={() => setPage("education")}>
            Education
          </button>

          <button onClick={() => setPage("skills")}>
            Skills
          </button>

          <button onClick={() => setPage("projects")}>
            Projects
          </button>

          <button onClick={() => setPage("contact")}>
            Contact
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;