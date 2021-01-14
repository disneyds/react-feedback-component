import React from 'react';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      <button type="button" onClick={() => onLeaveFeedback('good')}>
        Good
      </button>
      <button type="button" onClick={() => onLeaveFeedback('neutral')}>
        Neutral
      </button>
      <button type="button" onClick={() => onLeaveFeedback('bad')}>
        Bad
      </button>
    </div>
  );
}
