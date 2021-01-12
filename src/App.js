import React, { Component } from 'react';
import './App.css';
import Container from './components/Container/Container';

export default class App extends Component() {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Container className="Container">
        {/* <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions> */}

        {/* <Statistics good={} neutral={} bad={} total={} positivePercentage={}></Statistics> */}
      </Container>
    );
  }
}
