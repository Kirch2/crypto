import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { CryptoList } from "./pages/CryptoList";
import { WatchLists } from "./pages/WatchList";
import { WatchListNew } from "./pages/WatchListNew";
import { WatchListEdit } from "./pages/WatchListEdit";
import { Register } from "./pages/Register";
import { WatchListId } from "./pages/WatchListId";
import { CryptoAlerts } from "./pages/CryptoAlertList";
import { CryptoAlertNew } from "./pages/CryptoAlertNew";
import { CryptoAlertEdit } from "./pages/CryptoAlertEdit";
import { Resources } from "./pages/Resources";
import { Profile } from "./pages/Profile";

function App() {
  const email = localStorage.getItem("email");
  const username = localStorage.getItem("username");
  const user_id = localStorage.getItem("user_id");
  const isLoggedIn: boolean =
    email !== null && user_id !== null && username !== null;
  return (
    <Router>
      <Navbar loggedIn={isLoggedIn} />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <Switch>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/">
                <CryptoList />
              </Route>
              <Route exact path="/cryptocurrencies">
                <CryptoList />
              </Route>
              <Route exact path="/crypto_alerts/new">
                <CryptoAlertNew />
              </Route>
              <Route exact path="/crypto_alerts/:id/edit">
                <CryptoAlertEdit />
              </Route>
              <Route exact path="/crypto_alerts">
                <CryptoAlerts />
              </Route>
              <Route exact path="/watchlists">
                <WatchLists />
              </Route>
              <Route exact path="/watchlists/new">
                <WatchListNew />
              </Route>
              <Route exact path="/watchlists/:id">
                <WatchListId />
              </Route>
              <Route exact path="/watchlists/:id/edit">
                <WatchListEdit />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              <Route exact path="/resources">
                <Resources />
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
