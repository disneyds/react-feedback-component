import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.buttonList}>
      <button
        type="button"
        className={s.good}
        onClick={() => onLeaveFeedback('good')}
      >
        Отлично
      </button>
      <button
        type="button"
        className={s.normal}
        onClick={() => onLeaveFeedback('neutral')}
      >
        Неплохо
      </button>
      <button
        type="button"
        className={s.bad}
        onClick={() => onLeaveFeedback('bad')}
      >
        Ужасно
      </button>
    </div>
  );
}
