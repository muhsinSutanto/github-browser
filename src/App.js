import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/layout/Navbar";
import Users from "./component/user/Users";
import Search from "./component/user/Search";
import Alert from "./component/layout/Alert";
import axios from "axios";
import About from "./component/pages/About";
import User from "./component/user/User"

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null,
  };

  async componentDidMount() {
    // this.setState({ loading: true });
    // const res = await axios.get("http://api.github.com/users");
    // this.setState({ users: res.data, loading: false });
  }

  getUser = async (userName) => {
    this.setState({ loading: true });

    const res = await axios.get(`http://api.github.com/users/${userName}`);

    this.setState({ user: res.data, loading: false });
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
              <Route
                exact
                path='/about'
                component={About}
              />
              <Route
                exact
                path= '/user/:login'
                render={props => (
                  <User {...props} user={this.state.user} getUser={this.getUser} loading={this.state.loading} />
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
