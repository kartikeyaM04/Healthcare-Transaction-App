// Speech input component
import React, { useState } from 'react';

const SpeechInput = ({ onTranscript }) => {
  const [transcript, setTranscript] = useState('');
  const recognition = new window.webkitSpeechRecognition() || new window.SpeechRecognition();
  recognition.continuous = true; // For ongoing speech
  recognition.interimResults = true; // Show live updates

  const startListening = () => {
    recognition.start();
    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      setTranscript(text);
      onTranscript(text); // Send to parent for further processing
    };
  };

  return (
    <div>
      <button onClick={startListening}>Start Speaking</button>
      <p>Live Transcript: {transcript}</p>
    </div>
  );
};

export default SpeechInput;