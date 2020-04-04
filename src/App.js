import React, { Component } from "react";
import "./App.css";
import Navbar from "./component/layout/Navbar";
import Users from "./component/user/Users";
import axios from "axios";

class App extends Component {
  state = {
    users : [],
    loading: false
  }

  async componentDidMount () {
    this.setState({loading: true})
    
    const res = await axios.get("http://api.github.com/users")

    this.setState({users: res.data, loading: false})
      
  }

  render() {
    console.log('users', this.state.users);
    
    return (
      <div className="App">
        <Navbar />
        <Users users={this.state.users} loading={this.state.loading}/>
      </div>
    );
  }
}

export default App;
