import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const buttonType = Object.keys(options);
  return (
    <div className={s.buttonList}>
      {buttonType.map(item => (
        <button
          key={item}
          type="button"
          className={s[item]}
          onClick={() => onLeaveFeedback(item)}
        >
          {item.slice(0, 1).toLocaleUpperCase() + item.slice(1)}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};
