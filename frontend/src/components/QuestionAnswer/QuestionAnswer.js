import React, { useState } from 'react';
import './QuestionAnswer.css'; // Import custom CSS

const QuestionAnswer = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'Can I use multiple discount codes?',
            answer: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, go forward that has evolved from generation.',
        },
        {
            question: 'Can I add multiple users to the account?',
            answer: 'User management options are available under the account settings. Contact support for additional help.',
        },
        {
            question: 'How can one get the Luvy template?',
            answer: 'The Luvy template can be downloaded from the official website after signing up.',
        },
        {
            question: 'What does enterprise discounts offer?',
            answer: 'Enterprise discounts provide a comprehensive and flexible pricing strategy based on usage and needs.',
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container faq-section">

            <div className="row">
                <div className="col-md-6 faq-container">
                    <h1 className="head-h1">Questions Answers</h1>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'open' : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                {faq.question}
                                <span className="faq-icon">{openIndex === index ? '▲' : '▼'}</span>
                            </div>
                            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
                        </div>
                    ))}
                </div>
                <div className="col-md-6 image-container">
                    <img src="/images/creatives/home-hero-boy.png" alt="FAQ Illustration" className="faq-image img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default QuestionAnswer;
