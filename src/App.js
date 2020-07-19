import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchResults from "./pages/SearchResults";
import Home from "./pages/Home";
import TopAnime from "pages/TopAnimes";
import PageDetail from "./pages/Details";
import { AnimesContextProvider } from "./context/AnimesContext";

function App() {
  return (
    <Router>
      <Switch>
        <AnimesContextProvider>
          <Route exact path="/" component={Home} />
          <Route exact path="/top/anime" component={TopAnime} />
          <Route path="/search/:keyword" component={SearchResults} />
          <Route path="/anime/:id" component={PageDetail} />
        </AnimesContextProvider>
      </Switch>
    </Router>
  );
}

export default App;
