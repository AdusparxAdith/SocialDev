import React, { useState } from "react";
import PropTypes from "prop-types";
import { sendMessage } from "../../actions/message";
import { connect } from "react-redux";

const MessageForm = ({ match, sendMessage }) => {
  const [formData, setformData] = useState("");
  const userId = match.params.id;
  const name = match.params.name;
  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>To {name}</h3>
      </div>
      <form
        className="form my-1"
        onSubmit={e => {
          e.preventDefault();
          sendMessage(userId, { message: formData });
          setformData("");
        }}
      >
        <textarea
          name="text"
          cols="30"
          rows="5"
          value={formData}
          onChange={e => setformData(e.target.value)}
          placeholder="Create a Message"
          required
        />
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

MessageForm.propTypes = {
  sendMessage: PropTypes.func.isRequired
};

export default connect(
  null,
  { sendMessage }
)(MessageForm);
