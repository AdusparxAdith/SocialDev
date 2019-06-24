import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SendMessage = ({ userId, name }) => {
  return (
    <div>
      <Link to={`/create-message/${userId}/${name}`}>
        <button className="btn btn-success">
          Message <i className="fas fa-angle-right" />
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
