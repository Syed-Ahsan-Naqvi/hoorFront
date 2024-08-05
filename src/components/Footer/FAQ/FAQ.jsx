import React, { useState } from 'react';
import './FAQ.scss';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: 'What is React?',
            answer: 'React is a JavaScript library for building user interfaces.',
        },
        {
            question: 'What is SCSS?',
            answer: 'SCSS is a preprocessor scripting language that is interpreted or compiled into <b>CSS</b>.',
        },
        {
            question: 'How do I create a component in React?',
            answer: 'A React component can be created either as a function or a class.',
        },
    ];

    const handleToggle = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq">
            <p>FREQUENTLY ASKED QUESTIONS</p>

            {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <div className="faq-question" onClick={() => handleToggle(index)}>
                        {faq.question}

                        <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
                    </div>
                    {activeIndex === index && (
                        <div
                            className="faq-answer"
                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQ;
