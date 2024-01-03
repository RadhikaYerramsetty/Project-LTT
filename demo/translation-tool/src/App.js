import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TranslationTool = () => {
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [destinationLanguage, setDestinationLanguage] = useState('te');
  const [inputText, setInputText] = useState('');
  const [translationResult, setTranslationResult] = useState('');
  const [speaking, setSpeaking] = useState(false);

  const translate = async () => {
    const translationOptions = {
      method: 'GET',
      url: 'https://google-translator8.p.rapidapi.com/translate',
      params: {
        word: inputText,
        source_lang: sourceLanguage,
        dest_lang: destinationLanguage,
      },
      headers: {
        'X-RapidAPI-Key': '6756aefb6fmsh401d23f4dc677c4p1aa847jsne83782a77e9e',
        'X-RapidAPI-Host': 'google-translator8.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(translationOptions);
      setTranslationResult(response.data);
    } catch (error) {
      console.error(error);
      setTranslationResult('Error occurred during translation.');
    }
  };

  const handleTranslation = () => {
    translate();
  };

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(translationResult);
      utterance.lang = destinationLanguage; // Set the destination language for better pronunciation

      setSpeaking(true);

      utterance.onend = () => {
        setSpeaking(false);
      };

      speechSynthesis.speak(utterance);
    } else {
      alert('Speech synthesis is not supported in your browser.');
    }
  };

  useEffect(() => {
    // Cleanup function to cancel any ongoing speech synthesis when the component unmounts
    return () => {
      if (speaking) {
        speechSynthesis.cancel();
      }
    };
  }, [speaking]);

  return (
    <div
      className='radhika'
      style={{
        textAlign: 'center',
        backgroundImage:"url(https://veganoutreachscotland.co.uk/wp-content/uploads/2019/02/black-desktop.jpg)",
        backgroundSize: 'cover',
        
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{color:'white'}}>Language Translation Tool</h1>

      <div>
        <label htmlFor='sourceLanguage' style={{color:'white'}}>Source Language:</label>
        <select
          id='sourceLanguage'
          value={sourceLanguage}
          onChange={(e) => setSourceLanguage(e.target.value)}
        >

          <option value='en'>English</option>
          <option value='ta'>Tamil</option>
          <option value='es'>Spanish</option>
          <option value='th'>Thai</option>
          <option value='ch'>Chinese</option>
          <option value='te'>Telugu</option>
          <option value='hi'>Hindi</option>
          <option value='ma'>Malayali</option>
          <option value='ja'>Japanese</option>
          <option value='ko'>Korean</option>
        </select>
      </div>

      <div>
        <label htmlFor='destinationLanguage' style={{color:'white'}}>Destination Language:</label>
        <select
          id='destinationLanguage'
          value={destinationLanguage}
          onChange={(e) => setDestinationLanguage(e.target.value)}
        >
           <option value='en'>English</option>
          <option value='ta'>Tamil</option>
          <option value='es'>Spanish</option>
          <option value='th'>Thai</option>
          <option value='ch'>Chinese</option>
          <option value='te'>Telugu</option>
          <option value='hi'>Hindi</option>
          <option value='ma'>Malayali</option>
          <option value='ja'>Japanese</option>
          <option value='ko'>Korean</option>
        </select>
      </div>

      <div>
        <label htmlFor='inputText' style={{color:'white'}}>Input Text:</label>
        <textarea
          id='inputText'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
      </div>

      <button onClick={handleTranslation}>Translate</button>

      <div>
        <h2 style={{color:'white'}}>Translation Result:</h2>
        <p style={{color:'white'}}>{translationResult}</p>
      </div>

      <button onClick={handleSpeak} disabled={!translationResult || speaking} style={{color:'whitesmoke'}}>
        {speaking ? 'Speaking...' : 'Speak Translation'}
      </button>
    </div>
  );
};

export default TranslationTool;