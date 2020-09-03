import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//CONTEXT
import { AnimesContextProvider } from "./context/AnimesContext";

//PAGES
import Home from "./pages/Home";
import TopAnime from "pages/Top";
import TopMangas from "pages/Top/Manga"
import SeasonAnime from "pages/SeasonAnime";
import ScheduleAnimes from 'pages/ScheduleAnime'
import SearchResults from "./pages/SearchResults";
import PageDetail from "./pages/Details";
import Soon from "pages/Soon";

function App() {
  return (
    <Router>
      <Switch>
        <AnimesContextProvider>
          <Route exact path="/" component={Home} />
          <Route exact path="/top/:type/:subType?" component={TopAnime} />
          <Route exact path="/top/:type/:subType?" component={TopMangas} />
          <Route exact path="/season/anime" component={SeasonAnime} />
          <Route exact path='/schedule/:day?' component={ScheduleAnimes} />
          <Route path="/search/:keyword/:rated?" component={SearchResults} />
          <Route path="/anime/:id" component={PageDetail} />
          <Route path="/soon" component={Soon} />
        </AnimesContextProvider>
      </Switch>
    </Router>
  );
}

export default App;
