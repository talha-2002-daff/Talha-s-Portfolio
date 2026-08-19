import profileImage from "../assets/profile.jpeg";

function Home() {
  const handleViewProjects = () => {
    window.open(
      "https://talha-2002-daff.github.io/travel_recommender/",
      "_blank"
    );
  };

  return (
    <section className="home">

      <div className="home-content">

        <p className="home-intro">
          Hello, I'm
        </p>

        <h1>
          Talha Bin Khalid
        </h1>

        <h2>
          Software Engineering Student with lots of passion
        </h2>

        <p className="home-description">
          I'm a passionate student driven by curiosity and a love for
          technology. I enjoy building modern web applications,
          learning new technologies, and solving real-world problems.
        </p>

        <div className="home-buttons">

          <button onClick={handleViewProjects}>
            View My Projects
          </button>

        </div>

      </div>

      <div className="home-image">

        <div className="profile-placeholder">
          <img
            src={profileImage}
            alt="Talha Bin Khalid"
          />
        </div>

      </div>

    </section>
  );
}

export default Home;