import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router  , Route   } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import About from "./pages/About";
import ArticlePage from "./pages/ArticlePage";
import ArticlesList from "./components/ArticlesList";


function App() {
  return (
      <Router>
          <div className="App">
              <Navigation/>
              <Route path="/" component={ Homepage } exact />
              <Route path="/about" component={ About } exact />
              <Route path="/article" component={ ArticlePage } exact />
          </div>
          <ArticlesList/>
      </Router>

  );
}

export default App;
