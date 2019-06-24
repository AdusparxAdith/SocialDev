import React from "react";

import PropTypes from "prop-types";
import Moment from "react-moment";
import SendMessage from "./SendMessage";

const MessageItem = ({ message: { date, text, from, name } }) => {
  return (
    <div>
      <div className="container message">
        <div>
          <p>
            <span>{name}</span>,
          </p>
          <p>{text}</p>
          <Moment format="DD/MM/YYYY HH:mm">{date}</Moment>
        </div>

        <div className="messageOptions">
          <SendMessage userId={from} name={name} />
        </div>
      </div>
    </div>
  );
};

MessageItem.propTypes = {
  message: PropTypes.object.isRequired
};

export default MessageItem;
