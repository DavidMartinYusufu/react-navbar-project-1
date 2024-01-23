import React from "react";
import "./App.css";
import NavBar from "./components/nav-bar/index.js";
import "h8k-components";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/HomePage.jsx";
import About from "./components/AboutPage.jsx";
import Contact from "./components/ContactPage.jsx";
import News from "./components/NewsPage.jsx";

const title = "Navigation Bar";

function App() {
  return (
    <BrowserRouter>
    
      <div>
        <h8k-navbar header={title} />
        <NavBar />
      </div>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="About" element={<About/>}/>
      <Route path="Contact" element={<Contact/>}/>
      <Route path="News" element={<News/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
