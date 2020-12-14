import React from "react";
import { Switch, Route, Link } from "react-router-dom";

// Material ui

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// Components
import Articles from "../Articles/Articles";
import Resources from "../Resources/ResourcesList";

function Home() {
  // TODO Create Home component and import it here
  return <p>Im home</p>;
}

function MainNavigation(props) {
  return (
    <div>
      <List component="nav">
        <ListItem component="div">
          <ListItemText inset>
            <Link to="/" data-test="link-homepage">
              Home
            </Link>
          </ListItemText>

          <ListItemText inset>
            <Link to="/articles" data-test="link-articles">
              Articles
            </Link>
          </ListItemText>

          <ListItemText inset>
            <Link to="/resources" data-test="link-resources">
              Resources
            </Link>
          </ListItemText>
        </ListItem>
      </List>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/articles">
          <Articles />
        </Route>
        <Route path="/resources">
          <Resources />
        </Route>
      </Switch>
    </div>
  );
}

export default MainNavigation;
