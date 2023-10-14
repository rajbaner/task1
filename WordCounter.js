import React, { useState } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');
  
  const countWords = (text) => {
    const words = text.trim().split(/\s+/);
    return words.filter(word => word !== '').length;
  };

  const handleInputChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  };

  const wordCount = countWords(text);

  return (
    <div>
      <h2>Word Counter</h2>
      <textarea
        placeholder="Type something..."
        value={text}
        onChange={handleInputChange}
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
};

export default WordCounter;
