import "./App.css";

import Hero_section from "./Components/Hero_section";
import Skill_section from "./Components/Skill_section";
import My_projects from "./Components/My_projects";
import Navbar from "./Components/Navbar";
import ProjectCard from "./Components/projectCard";

function App() {
  return (
    <>
      <Navbar />
      <Hero_section />
      <Skill_section />
      <My_projects />
      <ProjectCard />
    </>
  );
}

export default App;
