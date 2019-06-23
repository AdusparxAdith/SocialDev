import React, { Fragment, useEffect } from "react";
import { getMessages } from "../../actions/message";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import MessageItem from "./MessageItem";

const Inbox = ({ getMessages, message: { inbox, loading } }) => {
  useEffect(() => {
    getMessages();
  }, [getMessages]);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Messages</h1>
      {inbox.map(message => (
        <MessageItem key={message._id} message={message} />
      ))}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  message: state.message
});

Inbox.propTypes = {
  getMessages: PropTypes.func.isRequired,
  message: PropTypes.object.isRequired
};
export default connect(
  mapStateToProps,
  { getMessages }
)(Inbox);
