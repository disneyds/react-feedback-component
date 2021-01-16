import s from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={s.stats}>
      <div className={s.votes}>
        <p className={s.vote}>Отлично: {good}</p>
        <p className={s.vote}>Неплохо: {neutral}</p>
        <p className={s.vote}>Ужасно: {bad}</p>
      </div>
      <div className={s.total}>
        <p>Общее колличество отзывов: {total}</p>
        <p>из них {positivePercentage} положительных</p>
        {Number.parseInt(positivePercentage) <= 33 && (
          <p className={s.emoji}>&#128530;</p>
        )}
        {Number.parseInt(positivePercentage) > 33 &&
          Number.parseInt(positivePercentage) < 66 && (
            <p className={s.emoji}>&#128528;</p>
          )}
        {Number.parseInt(positivePercentage) >= 66 &&
          Number.parseInt(positivePercentage) <= 90 && (
            <p className={s.emoji}>&#128526;</p>
          )}
        {Number.parseInt(positivePercentage) > 90 && (
          <p className={s.emoji}>&#128525;</p>
        )}
      </div>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
