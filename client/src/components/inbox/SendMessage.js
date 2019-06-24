import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SendMessage = ({ text, userId, name, context }) => {
  console.log(context);
  return (
    <div>
      <Link to={`/create-message/${userId}/${name}/${context}`}>
        <button className="btn btn-success">
          {text ? text : "Message "} <i className="fas fa-angle-right" />
        </button>
      </Link>
    </div>
  );
};

SendMessage.propTypes = {
  userId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default SendMessage;
