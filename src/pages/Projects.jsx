function Projects() {
  return (
    <section className="projects">

      <div className="projects-container">

        <div className="projects-heading">
          <p>What I've Built</p>
          <h1>My Projects</h1>
        </div>

        <div className="projects-cards">

          <div className="project-card">
            <span className="project-type">
              Web Application
            </span>

            <h2>SkillSwap</h2>

            <p>
              A student skill-exchange platform where students can
              share skills they can teach and skills they want to learn.
              Users can discover other students, send skill-swap
              requests, and manage their exchanges.
            </p>

            <div className="project-technologies">
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MySQL</span>
            </div>

            <a
              href="https://github.com/talha-2002-daff/SkillSwap.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View GitHub Repository
            </a>
          </div>

          <div className="project-card">
            <span className="project-type">
              Web Application
            </span>

            <h2>Travel Destination Recommender</h2>

            <p>
              A web-based project designed to help users discover
              suitable travel destinations based on their preferences.
            </p>

            <div className="project-technologies">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <a
              href="https://github.com/talha-2002-daff/travel_recommender.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View GitHub Repository
            </a>
          </div>

          <div className="project-card">
            <span className="project-type">
              C Programming
            </span>

            <h2>Laundry Management System</h2>

            <p>
              A C-based management application designed to organize
              laundry services and manage customer and service
              information.
            </p>

            <div className="project-technologies">
              <span>C</span>
            </div>

            <p className="repository-unavailable">
              GitHub repository currently not available
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;