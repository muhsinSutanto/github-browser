import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({user: {id, avatar_url, login, html_url}}) => {

    return (
      <div key={id} className="car text-center">
        <img
          src={avatar_url}
          className="round-img"
          style={{ width: "60px" }}
          alt='avatar'
        />
        <h3>{login}</h3>
        <Link to={`user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    );

}

export default UserItem;
