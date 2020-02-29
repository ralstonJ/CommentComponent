import React from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

const Card = props => {
  const {
    name,
    logo,
    type,
    time,
    message,
    nReply,
    upVote,
    downVote
  } = props.profile;
  return (
    <div className="card">
      <div>
        <img width={40} height={40} src={logo} className="card-profile-img" />
      </div>
      <div className="card-content">
        <div className="card-header">
          {name}
          {type === "Author" && <span className="card-type">Author</span>}{" "}
          {time} ago
        </div>
        <div className="card-message">{message}</div>
        <div className="card-footer">
          <button className="btn">REPLY</button>
          <button className="btn">
            {nReply} {nReply === 1 ? "REPLY" : "REPLIES"}
          </button>
          <button className="btn">
            <MdExpandLess className="vote-icon" />
            <span className="txt-vote">{upVote}</span>
          </button>
          <button className="btn">
            <MdExpandMore className="vote-icon" />
            <span className="txt-vote">{downVote}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
