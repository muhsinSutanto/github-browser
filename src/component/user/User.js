import React, { Component } from "react";

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_respons,
      public_gists,
      hireable,
    } = this.props.user;

    const { loading } = this.props.loading;

    console.log('user', this.props.user)

    return <div>{name}</div>;
  }
}

export default User;
