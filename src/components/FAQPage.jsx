import React, { useState } from 'react'; 
import Spline from '@splinetool/react-spline';

const FAQPage = () => {
    const GeneralFAQ = [
        {
            id: 1,
            toggle: false,
            question: 'How does the AI detect violence in surveillance footage?',
            answer:
                'Our system uses advanced deep learning models to analyse patterns and behaviours in video footage. Can identify potential violent and malignant activities.',
        },
        {
            id: 2,
            toggle: false,
            question: "How does the system notify us of potential violence?",
            answer:
                'When the system detects possible violent behaviour, it flags the specific slice of footage and sends an instant alert to an assigned operator for review.',
        },
        {
            id: 3,
            toggle: false,
            question:
                "Can the system integrate with my existing CCTV setup?",
            answer:
                'Yes, our AI solution is designed to work with most existing CCTV systems, transforming them into smart surveillance setups without the need for extensive hardware upgrades.',
        },
        {
            id: 4,
            toggle: false,
            question:
                "How accurate is the detection?",
            answer:
                'The system achieves up to 92% accuracy in detecting violent activities, ensuring minimal false positives and highly reliable alerts.',
        },
        {
            id: 5,
            toggle: false,
            question: "What kind of footage is flagged for review?",
            answer:
                'Only video segments where the AI detects potential violence are flagged, allowing your security team to focus on relevant footage and reduce manual monitoring time.',
        },
        {
            id: 6,
            toggle: false,
            question: 'Is the system capable of 24/7 monitoring?',
            answer:
                'Yes, our AI surveillance solution provides continuous monitoring and detection around the clock, ensuring real-time threat detection and alerts.',
        },
    ];

    const FAQ2 = [
        {
            id: 1,
            toggle: false,
            question: 'Is it a one-time payment?',
            answer:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis libero eveniet deleniti, consequatur ut maiores. Autem vel impedit praesentium porro aspernatur dicta iure nisi nobis. Vel aliquid tempora iste autem.',
        },
        {
            id: 2,
            toggle: false,
            question: 'How does billing work?',
            answer:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis libero eveniet deleniti, consequatur ut maiores. Autem vel impedit praesentium porro aspernatur dicta iure nisi nobis. Vel aliquid tempora iste autem.',
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
        <div className="max-w-full mx-auto p-0 box-border bg-black">
            <div className="bg-blue-500 text-white py-10 px-20 mb-10 text-center relative flex flex-col items-start rounded-tl-3xl rounded-tr-3xl">
                <p className="mb-2 text-left text-lg" id="support">Customer Support</p>
                <h1 className="text-5xl mb-6 text-left">Top questions about <span id="title" className="text-cyan-400">KalkiNI</span></h1>
                <input className="w-full max-w-xs p-2 border border-cyan-400 text-white rounded bg-transparent text-xl mt-5" type="text" placeholder="Search" />
                <p className="absolute right-40 top-1/2 transform -translate-y-1/2 text-right text-xl max-w-xl">
                    Save 100s of man hours monitoring and detect crucial events. 
                    <br /> Detect events. Every day. Automatically.
                </p>
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
                                <span className="text-2xl cursor-pointer pl-2 text-white" onClick={() => handleToggle(q.id)}>
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
                                <span className="text-2xl cursor-pointer pl-2 text-white" onClick={() => handleToggle2(q.id)}>
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
