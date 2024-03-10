import React from 'react';
import FeedbackApp from './FeedbackWidget/FeedbackApp';
import './styles.css';
import PhonebookApp from './ContactBook/PhonebookApp';

const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // fontSize: 40,
        color: '#010101',
      }}
    >
      <PhonebookApp />
      <FeedbackApp />
    </div>
  );
};

export default App;
