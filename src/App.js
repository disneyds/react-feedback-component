import React, { Component } from 'react';
import './App.css';
import Container from './components/Container/Container';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = assessment => {
    this.setState(prevState => {
      return { [assessment]: prevState[assessment] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = (total, positiveFeedback) => {
    const positivePersent = ((positiveFeedback / total) * 100).toFixed(0);
    if (positivePersent === 'NaN') {
      return 0;
    }
    return `${positivePersent}%`;
  };

  render() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage(
      total,
      this.state.good,
    );
    return (
      <Container>
        <Section title="Пожалуйста оставьте отзыв!">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Отзывы клиентов">
          {total === 0 ? (
            <Notification message="Тут пока пусто :(" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positiveFeedback}
            />
          )}
        </Section>
      </Container>
    );
  }
}
