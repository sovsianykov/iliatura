import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router  , Route,Switch   } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import About from "./pages/About";
// import ArticlePage from "./pages/ArticlePage";
import Main from "./Main/Main";
import NewArticle from "./Articles/NewArticle/NewArticle";
import ViewArticle from "./Articles/ViewArticle/ViewArtice";




function App() {
  return (

          <div className="App">
              <Router>
                  <Navigation/>
                  <div id="page-body">
                  <Switch >
                      <Route path="/" component={ Homepage } exact />
                      <Route path="/about/" component={ About }  />
                      {/*<Route path="/article/:name" component={ ArticlePage } />*/}
                      <Route path="/maine/" component={ Main } />
                      <Route path="/article/:id">
                          <ViewArticle />
                      </Route>
                      <Route path="/new-article">
                          <NewArticle />
                      </Route>
                  </Switch>
                  </div>
              </Router>
          </div>


  );
}

export default App;
