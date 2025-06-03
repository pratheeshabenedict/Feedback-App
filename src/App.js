import React from 'react';
import { useState } from 'react';
import {FeedbackButton} from './components/FeedbackButton';
import {Stats} from './components/Stats'
import { HEADING } from './constants/constant';
import './styles/global.css'

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onGoodClick = () => setGood(good + 1);
  const onNeutralClick = () => setNeutral(neutral + 1);
  const onBadClick = () => setBad(bad + 1);


  return (
    <div className="max-w-md mx-auto p-6">
    <h1 className="text-4xl font-bold text-center mb-8">{HEADING}</h1>
        <FeedbackButton
          onGoodClick={onGoodClick}
          onNeutralClick={onNeutralClick}
          onBadClick={onBadClick}
        />
        <Stats
          good={good}
          neutral={neutral}
          bad={bad}
        />
    </div>
  );
}

export default App;
