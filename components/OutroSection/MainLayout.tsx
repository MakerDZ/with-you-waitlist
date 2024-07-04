'use client';

import React, { useState, useEffect, useRef } from 'react';

const OutroLayout = () => {
    const content = `This app's your safe digital home, where a pet helps you achieve life goals and truly understands you.`;
    const words = content.split(' ');

    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const sectionRef = useRef<any>(null);

    useEffect(() => {
        const handleScroll = () => {
            const sectionHeight =
                sectionRef.current.offsetHeight - window.innerHeight;
            const scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
            const sectionTop = sectionRef.current.offsetTop;
            const scrollFraction = Math.min(
                Math.max((scrollTop - sectionTop) / sectionHeight, 0),
                1
            );
            const newIndex =
                Math.floor(scrollFraction * (words.length + 1)) - 1;

            setHighlightedIndex(newIndex);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [words.length]);

    return (
        <div
            ref={sectionRef}
            className="w-full h-[150vh] sm:min-h-[250vh] sm:max-h-[250vh]"
        >
            <div className="w-full h-screen flex flex-col justify-center sticky top-0">
                <p className="text-left font-bold xl:text-4xl lg:text-3xl md:text-2xl text-xl lg:w-7/12 md:w-8/12 w-10/12 mx-auto">
                    {words.map((word, index) => (
                        <span
                            className="text-[#475465]"
                            key={index}
                            style={{
                                opacity: index <= highlightedIndex ? 1 : 0.3,
                                transition: 'opacity 0.3s ease-in-out',
                            }}
                        >
                            {word}{' '}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
};

export default OutroLayout;