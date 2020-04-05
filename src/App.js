import React, { Component } from "react";
import "./App.css";
import Navbar from "./component/layout/Navbar";
import Users from "./component/user/Users";
import Search from "./component/user/Search";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false,
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
  }

  render() {
    console.log("users", this.state.users);

    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchUser={this.searchUser}/>
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
