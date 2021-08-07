import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";
import RecommendationSection from "./components/RecommendationSection";

function App() {
  return (
    <div>
      <Navbar />
      <Title name="Rohit George" pos = "Membership Development Vice Chair at IEEE FISAT SB"/>
      <RecommendationSection />
      <Aboutme />
      <SkillSection />
      <ProjectSection />
      <Footer />
    </div>
  );
}

export default App;
