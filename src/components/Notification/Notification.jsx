import s from './Notification.module.css';
import PropTypes from 'prop-types';

function Notification({ message }) {
  return (
    <div className={s.message}>
      <p>{message}</p>
      <p>&#128557;</p>
    </div>
  );
}

Notification.propTypes = {
  massage: PropTypes.string,
};

export default Notification;
