import React, { useState } from 'react';
import SpeechInput from './SpeechInput';
import 'bootstrap/dist/css/bootstrap.min.css';

// Main App component for the healthcare translation prototype
function App() {
  // State for original transcript, translated text, and language selections
  const [original, setOriginal] = useState('');
  const [translated, setTranslated] = useState('');
  const [inputLang, setInputLang] = useState('en'); // Default: English
  const [outputLang, setOutputLang] = useState('es'); // Default: Spanish

  // Supported languages (extendable list)
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    // Add more languages as needed
  ];

  // Handle new transcript from SpeechInput component
  const handleTranscript = async (text) => {
    setOriginal(text); // Update original transcript in real-time
    if (text) {
      try {
        // Send transcript to backend for processing
        const response = await fetch('http://localhost:8000/api/process/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text,
            input_lang: inputLang,
            output_lang: outputLang,
          }),
        });
        const data = await response.json();
        setTranslated(data.translated); // Update translated text
      } catch (error) {
        console.error('Error processing transcript:', error);
        setTranslated('Error in translation');
      }
    } else {
      setTranslated(''); // Clear translation if no input
    }
  };

  // Play translated text using Web Speech Synthesis
  const speakTranslated = () => {
    if (translated) {
      const utterance = new SpeechSynthesisUtterance(translated);
      utterance.lang = outputLang; // Set language for playback
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="container-fluid p-3">
      <h1 className="text-center mb-4">Healthcare Translator</h1>
      <div className="row g-3">
        {/* Language selection dropdowns */}
        <div className="col-md-6">
          <label htmlFor="inputLang" className="form-label">Input Language</label>
          <select
            id="inputLang"
            className="form-select"
            value={inputLang}
            onChange={(e) => setInputLang(e.target.value)}
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="outputLang" className="form-label">Output Language</label>
          <select
            id="outputLang"
            className="form-select"
            value={outputLang}
            onChange={(e) => setOutputLang(e.target.value)}
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
        {/* Speech input component */}
        <div className="col-12">
          <SpeechInput onTranscript={handleTranscript} />
        </div>
        {/* Dual transcript display */}
        <div className="col-12">
          <h3>Original Transcript</h3>
          <p className="border p-3 bg-light">{original || 'No transcript yet'}</p>
        </div>
        <div className="col-12">
          <h3>Translated Transcript</h3>
          <p className="border p-3 bg-light">{translated || 'No translation yet'}</p>
        </div>
        {/* Speak button for audio playback */}
        <div className="col-12 text-center">
          <button
            className="btn btn-primary"
            onClick={speakTranslated}
            disabled={!translated}
          >
            Speak Translated Text
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;