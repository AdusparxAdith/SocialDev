import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const MessageItem = ({ message: { date, text, from, name } }) => {
  return (
    <div>
      <div>
        <p>{name},</p>
        <p>{text}</p>
        <Moment format="DD/MM/YYYY HH:mm">{date}</Moment>
        <br />
        <br />
      </div>
    </div>
  );
};

MessageItem.propTypes = {
  message: PropTypes.object.isRequired
};

export default MessageItem;
