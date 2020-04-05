import React, { Component } from "react";
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchUser : PropTypes.func.isRequired,
    clearUser: PropTypes.func.isRequired
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUser(this.state.text)
    this.setState({
      text: ''
    }) 
   
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    // console.log(this.state.text);
    
    return (
      <div>
        <form className='form' onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="search user"
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="search"
            className="btn btn-dark btn-block"
          />
        </form>
        <button className='btn btn-light btn-block' onClick={this.props.clearUser}>Clear</button>
      </div>
    );
  }
}

export default Search;
