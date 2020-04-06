import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/layout/Navbar";
import Users from "./component/user/Users";
import Search from "./component/user/Search";
import Alert from "./component/layout/Alert";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  async componentDidMount() {
    // this.setState({ loading: true });
    // const res = await axios.get("http://api.github.com/users");
    // this.setState({ users: res.data, loading: false });
  }

  searchUser = async (text) => {
    // console.log('text', text)
    this.setState({ loading: true });

    const res = await axios.get(`http://api.github.com/search/users?q=${text}`);

    this.setState({ users: res.data.items, loading: false });
  };

  clearUser = () => {
    this.setState({
      users: [],
      loading: false,
    });
  };

  setAlert = (msg, type) => {
    this.setState({
      alert: {
        msg,
        type,
      },
    });

    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    // console.log("users", this.state.users);

    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUser={this.searchUser}
                      clearUser={this.clearUser}
                      showClearUser={this.state.users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Alert alert={this.state.alert} />
                    <Users
                      users={this.state.users}
                      loading={this.state.loading}
                    />
                  </Fragment>
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
