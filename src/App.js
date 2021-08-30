import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";
import RecommendationSection from "./components/RecommendationSection";
import Contact from "./components/Contact";
import Writearec from "./components/Writearec";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProjectPage from "./components/ProjectPage";
import NotFound from "./components/NotFound";
import AddProject from "./components/AddProject";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Title
            name="Rohit George"
            pos="Membership Development Vice Chair at IEEE FISAT SB"
          />
          <RecommendationSection />
          <Aboutme />
          <SkillSection />
          <ProjectSection />
        </Route>
        <Route exact path="/contact" component={Contact}>
          <Contact />
        </Route>
        <Route exact path="/writerec" component={Writearec}>
          <Writearec />
        </Route>
        <Route exact path="/project/add" component={AddProject} />
        <Route exact path="/project/:id" component={ProjectPage} />
        <Route component={NotFound}>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
