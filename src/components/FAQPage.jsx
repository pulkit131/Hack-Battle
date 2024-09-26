import React, { useState } from 'react'; 
import Spline from '@splinetool/react-spline';

const FAQPage = () => {
    const GeneralFAQ = [
        {
            id: 1,
            toggle: false,
            question: 'What is a medical prescription analyzer?',
            answer:
                'A medical prescription analyzer is a tool that uses machine learning to extract and interpret data from prescriptions..',
        },
        {
            id: 2,
            toggle: false,
            question: "What is deepfake image recognition?",
            answer:
                'Deepfake image recognition is a technology that detects manipulated images and distinguishes them from authentic ones using machine learning algorithms.',
        },
        {
            id: 3,
            toggle: false,
            question:
                "What is a medical image synthesizer?",
            answer:
                'A medical image synthesizer is a tool that generates synthetic medical images using machine learning techniques, typically through a Generative Adversarial Network (GAN).',
        },
        {
            id: 4,
            toggle: false,
            question:
                "What are the applications of synthetic medical images?",
            answer:
                'Synthetic images can be used for training machine learning models, augmenting datasets, and improving diagnostic accuracy in medical imaging.',
        },
        {
            id: 5,
            toggle: false,
            question: "How does the prescription analyzer improve patient care?",
            answer:
                'By enhancing accuracy in medication management, it helps reduce errors in patient care, ensuring safer medication practices.',
        },
        {
            id: 6,
            toggle: false,
            question: 'How does deepfake detection work?',
            answer:
                'It employs a convolutional neural network (CNN) to extract features from images and classify them as real or fake.',
        },
    ];

    const FAQ2 = [
        {
            id: 1,
            toggle: false,
            question: 'How long can I use the service for free?',
            answer:
                'You can use the service for free for 1 month.',
        },
        {
            id: 2,
            toggle: false,
            question: ' What payment methods do you accept?',
            answer:
                'We accept various payment methods, including credit cards and PayPal.',
        },
    ];

    const [genFAQ, setGenFAQ] = useState(GeneralFAQ);
    const [Faq2, setFaq2] = useState(FAQ2);
    const handleToggle = (id) => {
        setGenFAQ((prevFaqs) =>
            prevFaqs.map((faq) =>
                faq.id === id
                    ? {
                            ...faq,
                            toggle: !faq.toggle,
                      }
                    : faq
            )
        );
    };
    const handleToggle2 = (id) => {
        setFaq2((prevFaqs2) =>
            prevFaqs2.map((faq) =>
                faq.id === id
                    ? {
                            ...faq,
                            toggle: !faq.toggle,
                      }
                    : faq
            )
        );
    };

    return (
        <div className="max-w-full mx-auto p-0 box-border bg-black rounded-tl-3xl rounded-tr-3xl">
            <div className="bg-green-700 text-white py-10 px-20 mb-10 text-center relative flex flex-col items-start rounded-tl-3xl rounded-tr-3xl">
                <p className="mb-2 text-left text-lg" id="support">Customer Support</p>
                <h1 className="text-5xl mb-6 text-left">Top questions about <span id="title" className="text-black">Us!</span></h1>
                {/* <input className="w-full max-w-xs p-2 border border-black text-white rounded bg-transparent text-xl mt-5" type="text" placeholder="Search" /> */}
                {/* <p className="absolute right-40 top-1/2 transform -translate-y-1/2 text-right text-xl max-w-xl">
                    Save 100s of man hours monitoring and detect crucial events. 
                    <br /> Detect events. Every day. Automatically.
                </p> */}
            </div>

            <div className="mb-10 px-8 flex items-start min-h-full py-12">
                <div className="w-2/5 p-2 text-center">
                    <h2 className="text-3xl mb-2 text-white">General FAQs</h2>
                    <p className="text-xl mb-5 text-gray-400">
                        Everything you need to know about the product and how it works. Can't find an answer? Please chat to our friendly team.
                    </p>
                    <Spline className="rounded-3xl h-[550px]" scene="https://prod.spline.design/OBVLAn96eBOxt-5J/scene.splinecode" />
                </div>
                <div className="w-3/5 px-28 flex flex-col min-h-[30%]">
                    {genFAQ.map((q) => (
                        <div className="border-b border-gray-300 py-2 w-full flex flex-col justify-center" key={q.id}>
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl text-white">{q.question}</h3>
                                <span className="text-2xl cursor-pointer pl-2 text-green-500" onClick={() => handleToggle(q.id)}>
                                    {q.toggle ? '-' : '+'}
                                </span>
                            </div>
                            {q.toggle && <p className="text-lg mt-2 text-gray-300">{q.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-10 px-8 flex items-start min-h-full py-12">
                <div className="w-2/5 p-2 text-center">
                    <h2 className="text-3xl mb-2 text-white">Billing FAQs</h2>
                    <p className="text-xl mb-5 text-gray-400">
                        Everything you need to know about the billing and invoices. Can't find an answer? Please chat to our friendly team.
                    </p>
                </div>
                <div className="w-3/5 px-28 flex flex-col min-h-[30%]">
                    {Faq2.map((q) => (
                        <div className="border-b border-gray-300 py-2 w-full flex flex-col justify-center" key={q.id}>
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl text-white">{q.question}</h3>
                                <span className="text-2xl cursor-pointer pl-2 text-green-500" onClick={() => handleToggle2(q.id)}>
                                    {q.toggle ? '-' : '+'}
                                </span>
                            </div>
                            {q.toggle && <p className="text-lg mt-2 text-gray-300">{q.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
