import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router  , Route,Switch   } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import About from "./pages/About";
import ArticlePage from "./pages/ArticlePage";
import ArticlesList from "./components/ArticlesList";



function App() {
  return (

          <div className="App">
              <Navigation/>

          </div>


  );
}

export default App;
