import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {

  const [page, setPage] = useState("home");

  return (
    <>

      <Navbar setPage={setPage} />

      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "education" && <Education />}
      {page === "skills" && <Skills />}
      {page === "projects" && <Projects />}
      {page === "contact" && <Contact />}

    </>
  );
}

export default App;