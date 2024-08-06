// // components/TextRewriter.tsx
'use client';

import { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import { IoCopyOutline } from "react-icons/io5";


const TextRewriter = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isCopied, setIsCopied] = useState(false);
    const [error, setError] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const wordLimit = 1000;
    const advancedLimit = 3;

    useEffect(() => {
      const advancedCount = parseInt(localStorage.getItem('advancedCount') || '0', 10);
      if (advancedCount >= advancedLimit) {
        checkAdBlocker();
      }
    }, []);

    const handleInputChange = (e:any) => {
      const text = e.target.value;
      const wordCount = text.split(/\s+/).length;
  
      if (wordCount > wordLimit) {
        setError(`Word limit exceeded! Please reduce your text to ${wordLimit} words or less.`);
      } else {
        setError('');
        setInputText(text);
      }
    };
  

    const handleSubmit = async (mode:any) => {
      if (inputText.split(/\s+/).length > wordLimit) {
        setError(`Word limit exceeded! Please reduce your text to ${wordLimit} words or less.`);
        return;
      }
      
    if (mode === 'Advanced') {
      const advancedCount = parseInt(localStorage.getItem('advancedCount') || '0', 10) + 1;
      localStorage.setItem('advancedCount', advancedCount.toString());

      if (advancedCount >= advancedLimit) {
        setShowPopup(true);
        return;
      }
    }
      try {
        const response = await fetch('http://localhost:3000/api/rewrite', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ inputText, mode }),
        });
        const data = await response.json();
        setOutputText(data.rewrittenText);
      } catch (error) {
        console.error('Error fetching completion:', error);
        setOutputText('Error fetching completion');
      }
    };

  const handleCopyText = () => {
    navigator.clipboard.writeText(outputText).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Hide the tick icon after 2 seconds
    }).catch(err => {
      console.error('Failed to copy text', err);
    });
  };
  const checkAdBlocker = () => {
    const ad = document.createElement('div');
    ad.className = 'adsbox';
    ad.style.display = 'none';
    document.body.appendChild(ad);
    if (ad.offsetHeight === 0) {
      setShowPopup(true);
    }
    document.body.removeChild(ad);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
  <div className="flex flex-col items-center justify-center min-h-screen py-2 px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl font-bold mb-4">Text Rewriter</h1>
    <form onSubmit={handleSubmit} className="w-full max-w-5xl flex flex-col md:flex-row gap-9">
      <div className="w-full md:w-1/2 p-5">
        <textarea
          className="w-full h-[15rem] md:h-[20rem] p-4 border border-light rounded resize-none focus:outline-none focus:shadow-2xl"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter your text here....."
        />
        <div className="flex flex-col md:flex-row justify-center mt-5 gap-4 md:gap-20">
          <button 
            type="submit" 
            form="rewrite-form"
            className="bg-dark text-white px-4 py-2 md:px-7 md:py-2 rounded"
            onClick={() => handleSubmit('Basic')}
            disabled={Boolean(error)}
          >
            Basic Rewrite
          </button>
          <button 
            type="submit" 
            form="rewrite-form"
            className="bg-dark text-white px-4 py-2 md:px-7 md:py-2 rounded"
            onClick={() => handleSubmit('Advanced')}
            disabled={Boolean(error)}
          >
            Advanced Rewrite
          </button>
          {error && <div className="text-darkRed mt-2">{error}</div>}
        </div>
      </div>
      <div className="w-full md:w-1/2 p-5 relative">
        <div className="absolute top-7 right-7">
          <button onClick={handleCopyText} className="text-dark border border-dark rounded-lg p-1">
            {isCopied ? <FaCheck size={20} /> : <IoCopyOutline size={20} />}
          </button>
        </div>
        <div className="w-full h-[15rem] md:h-[20rem] p-6 rounded bg-grey overflow-auto">
          <h2 className="text-2xl font-bold mb-2">Rewritten Text</h2>
          <p>{outputText || "Your rewritten text will appear here..."}</p>
        </div>
      </div>
    </form>
  </div>





  );
};

export default TextRewriter;




