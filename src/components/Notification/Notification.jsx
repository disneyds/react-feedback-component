import React from 'react';
import PropTypes from 'prop-types';

function Notification({ message }) {
  return <p>{message}</p>;
}

Notification.propTypes = {
  massage: PropTypes.string,
};

export default Notification;
