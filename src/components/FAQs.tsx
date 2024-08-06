"use client"
import { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the purpose of AI ChatGPT rewriter?",
      answer: "It is an online rewriter tool that helps to rephrase and paraphrase your text without losing its original meaning."
    },
    {
      question: "Which category of audience can use this tool?",
      answer: "everyone can use it. For example, students can use it for assignment writing, teachers can use it for preparing exam papers, and researchers can use it for thesis writing. In short, anyone who wants to improve their command of the English language can use this tool, making its content unique, more refined, and simpler."
    },
  ];

  const toggleFAQ = (index:any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 mb-10">
      <h2 className="text-2xl font-bold mb-4">FAQs</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-grey">
          <button
            className="w-full text-left p-4 bg-grey rounded-md focus:outline-none"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-medium">{faq.question}</h3>
          </button>
          {activeIndex === index && (
            <div className="p-4 bg-white border border-t-0 border-grey rounded-b-md">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
