'use client';
import React, { useState, useEffect, useRef } from 'react';
import HeroContent from './HeroContent';
import StarEmoji from './StarEmoji';
import ChartUpEmoji from './ChartUpEmoji';
import SeedlingEmoji from './SeedlingEmoji';
import TargetEmoji from './TargetEmoji';
import DogEmoji from './DogEmoji';
import PrizeEmoji from './PrizeEmoji';

const HeroMainLayout = () => {
    const [activesupportiveMessagesIndex, setActivesupportiveMessagesIndex] =
        useState(0);
    const supportiveMessagesContainerRef = useRef<any>(null);
    const [TOTAL_ROTATION_ANGLE, setTotalRotationAngle] = useState(100);

    const supportiveMessages = [
        { text: 'I am with you to motivate you.', emoji: null },
        { text: 'I am with you to heal you.', emoji: null },
        { text: 'I am with you to listen to you.', emoji: null },
        { text: 'I am with you to guide you.', emoji: null },
        { text: 'I am with you to support you.', emoji: null },
        { text: 'I am with you to encourage you.', emoji: null },
        { text: 'I am with you to comfort you.', emoji: '🐶' },
        { text: 'I am with you to inspire you.', emoji: '🦋' },
        { text: 'I am with you to understand you.', emoji: '💖' },
        { text: 'I am with you to stand by you.', emoji: '🐈' },
        { text: 'I am with you to cheer you on.', emoji: '👏' },
        { text: 'I am with you to uplift you.', emoji: '🚀' },
        { text: 'I am with you to help you grow.', emoji: '🌱' },
        { text: 'I am with you to be your strength.', emoji: '💪' },
        { text: 'I am with you to share your burdens.', emoji: '🐱' },
        { text: 'I am with you to make you smile.', emoji: '😊' },
        { text: 'I am with you to face challenges together.', emoji: '🧗🏻' },
        { text: 'I am with you to celebrate your victories.', emoji: '🎉' },
        { text: 'I am with you to be your confidant.', emoji: '💬' },
        { text: 'I am with you to journey with you.', emoji: '🌍' },
    ];

    const skip = supportiveMessages.filter(
        (supportiveMessage) => !supportiveMessage.emoji
    ).length;

    // Adjust this value to control the spread of supportiveMessages
    //const TOTAL_ROTATION_ANGLE = 100;

    const persupportiveMessagesRotationPercentage =
        100 / (supportiveMessages.length - skip - 1);
    const totalRotation = TOTAL_ROTATION_ANGLE;

    useEffect(() => {
        const updateRotationAngle = () => {
            if (typeof window !== 'undefined') {
                if (window.matchMedia('(min-width: 1280px)').matches) {
                    setTotalRotationAngle(100);
                } else if (window.matchMedia('(min-width: 1024px)').matches) {
                    setTotalRotationAngle(100);
                } else if (window.matchMedia('(min-width: 768px)').matches) {
                    setTotalRotationAngle(130);
                } else {
                    setTotalRotationAngle(180);
                }
            }
        };

        window.addEventListener('resize', updateRotationAngle);
        updateRotationAngle();

        return () => window.removeEventListener('resize', updateRotationAngle);
    }, []);

    useEffect(() => {
        const onScroll = () => {
            if (
                typeof window !== 'undefined' &&
                supportiveMessagesContainerRef.current
            ) {
                const maxScrollY =
                    supportiveMessagesContainerRef.current.clientHeight -
                    window.innerHeight;
                const scrollPercentage = (window.scrollY / maxScrollY) * 100;
                const nsupportiveMessages = supportiveMessages.length - skip;
                const newActivesupportiveMessagesIndex =
                    skip +
                    Math.round((scrollPercentage / 100) * nsupportiveMessages);
                setActivesupportiveMessagesIndex(
                    newActivesupportiveMessagesIndex
                );
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', onScroll);
            onScroll();
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', onScroll);
            }
        };
    }, [skip, supportiveMessages.length]);

    const handlesupportiveMessagesClick = (index: any) => {
        const percentage =
            persupportiveMessagesRotationPercentage * (index - skip);
        window.scrollTo({
            top:
                (percentage / 100) *
                (supportiveMessagesContainerRef.current.clientHeight -
                    window.innerHeight),
            behavior: 'smooth',
        });
    };

    return (
        <div className="overflow-x-clip over">
            <div
                id="supportiveMessages"
                ref={supportiveMessagesContainerRef}
                className="h-[600vh] relative"
            >
                <div className="follow-screen h-screen sticky top-0 flex items-center -ml-[30vw]">
                    {supportiveMessages.map((supportiveMessage, index) => {
                        const rotationPercentage =
                            index * persupportiveMessagesRotationPercentage;
                        const rotation =
                            (rotationPercentage / 100) * totalRotation;

                        const scrollRotation =
                            typeof window !== 'undefined' &&
                            window.scrollY !== undefined &&
                            supportiveMessagesContainerRef.current
                                ? (window.scrollY /
                                      (supportiveMessagesContainerRef.current
                                          ?.clientHeight -
                                          window.innerHeight)) *
                                  totalRotation
                                : 0;

                        const skipRotation =
                            ((skip * persupportiveMessagesRotationPercentage) /
                                100) *
                            totalRotation;

                        return (
                            <span
                                key={index}
                                className={`
                                    absolute transform-gpu origin-left pl-[40vw] whitespace-nowrap select-none
                                    transition-all duration-300 ease-in-out text-[4.5vw] flex items-center
                                    ${!supportiveMessage.emoji ? 'pointer-events-none opacity-20' : ''}
                                    ${index === activesupportiveMessagesIndex ? 'active' : ''}
                                    ${!supportiveMessage.emoji && index !== activesupportiveMessagesIndex ? 'opacity-50' : ''}
                                    ${supportiveMessage.emoji && index !== activesupportiveMessagesIndex ? 'hover:opacity-70 cursor-pointer' : ''}
                                `}
                                style={{
                                    transform: `rotate(${rotation - scrollRotation - skipRotation}deg)`,
                                }}
                                onClick={() =>
                                    supportiveMessage.emoji &&
                                    handlesupportiveMessagesClick(index)
                                }
                            >
                                <span
                                    className="absolute left-[35vw] scale-0 transition-transform duration-200 ease-in-out"
                                    style={{
                                        transform:
                                            index ===
                                            activesupportiveMessagesIndex
                                                ? 'scale(0.7)'
                                                : 'scale(0)',
                                    }}
                                >
                                    {supportiveMessage.emoji}
                                </span>
                                <span
                                    className={`xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold ${index === activesupportiveMessagesIndex ? 'text-[#667085]' : 'text-[#D0D5DD]'} `}
                                >
                                    {supportiveMessage.text}
                                </span>
                            </span>
                        );
                    })}
                </div>
            </div>
            <HeroContent>
                <StarEmoji />
                <ChartUpEmoji />
                <SeedlingEmoji />
                <TargetEmoji />
                <DogEmoji />
                <PrizeEmoji />
            </HeroContent>
        </div>
    );
};

export default HeroMainLayout;
