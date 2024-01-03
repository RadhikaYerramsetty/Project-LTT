import React, { useState } from 'react';
import axios from 'axios';

const TranslationApp = () => {
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [destinationLanguage, setDestinationLanguage] = useState('te');
  const [inputText, setInputText] = useState('');
  const [translationResult, setTranslationResult] = useState('');

  const translate = async () => {
    const translationOptions = {
      method: 'GET',
      url: 'https://google-translator8.p.rapidapi.com/translate',
      params: {
        word: inputText,
        source_lang: sourceLanguage,
        dest_lang: destinationLanguage
      },
      headers: {
        'X-RapidAPI-Key': '6756aefb6fmsh401d23f4dc677c4p1aa847jsne83782a77e9e',
        'X-RapidAPI-Host': 'google-translator8.p.rapidapi.com'
      }
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

  return (
    <div>
      <h1>Language Translation App</h1>
      
      <div>
        <label htmlFor="sourceLanguage">Source Language:</label>
        <select
          id="sourceLanguage"
          value={sourceLanguage}
          onChange={(e) => setSourceLanguage(e.target.value)}
        >
          <option value="en">English</option>
          {/* Add more language options as needed */}
        </select>
      </div>

      <div>
        <label htmlFor="destinationLanguage">Destination Language:</label>
        <select
          id="destinationLanguage"
          value={destinationLanguage}
          onChange={(e) => setDestinationLanguage(e.target.value)}
        >
          <option value="te">Telugu</option>
          {/* Add more language options as needed */}
        </select>
      </div>

      <div>
        <label htmlFor="inputText">Input Text:</label>
        <textarea
          id="inputText"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
      </div>

      <button onClick={handleTranslation}>Translate</button>

      <div>
        <h2>Translation Result:</h2>
        <p>{translationResult}</p>
      </div>
    </div>
  );
};

export default TranslationApp;
