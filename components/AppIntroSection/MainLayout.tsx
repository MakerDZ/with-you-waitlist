'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from 'framer-motion';
import { AnimatedListDemo } from './Noti';
import { BorderBeam } from '../magicui/border-beam';

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const AppIntroSection = () => {
    const ref = useRef<any>(null);
    const [isScrolling, setIsScrolling] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    useEffect(() => {
        let scrollTimeout: number | undefined;
        let scrollInterval: number | undefined;

        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const inView =
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <=
                        (window.innerHeight ||
                            document.documentElement.clientHeight) &&
                    rect.right <=
                        (window.innerWidth ||
                            document.documentElement.clientWidth);

                if (inView) {
                    setIsScrolling(true);
                    clearTimeout(scrollTimeout);
                    scrollTimeout = window.setTimeout(() => {
                        setIsScrolling(false);
                    }, 150); // Adjust the timeout as needed
                } else {
                    setIsScrolling(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout !== undefined) clearTimeout(scrollTimeout);
            if (scrollInterval !== undefined) clearInterval(scrollInterval);
        };
    }, []);

    useEffect(() => {
        if (isScrolling) {
            const interval = window.setInterval(() => {
                // Generate random values within a small range of the current values
                const newX = x.get() + Math.floor(Math.random() * 11) - 5; // Adjust range as needed
                const newY = y.get() + Math.floor(Math.random() * 11) - 5; // Adjust range as needed
                x.set(newX);
                y.set(newY);
            }, 100);

            return () => {
                clearInterval(interval);
            };
        } else {
            x.set(0);
            y.set(0);
        }
    }, [isScrolling]);

    const handleMouseMove = (e: any) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section className="next-trip min-h-[200vh] max-h-[200vh] w-full relative mb-20">
            <div className="h-[80vh] w-full flex flex-col justify-center items-center top-16 sticky">
                <AnimatedListDemo />
                <motion.div
                    ref={ref}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        transformStyle: 'preserve-3d',
                        transform,
                    }}
                    className="md:w-9/12 sm:w-10/12 w-11/12 mx-auto border-[2px] border-[#E5E5E5] rounded-xl shadow-md shadow-indigo-900/5 bg-white pt-7 md:px-10 px-8  lg:pb-16 md:pb-12 pb-10"
                >
                    <p
                        style={{
                            transform: 'translateZ(75px)',
                        }}
                        className="z-10 w-full text-shadow text-center select-none md:text-lg  font-bold  mb-4 text-[#515460]"
                    >
                        Get{' '}
                        <span
                            style={{
                                fontWeight: 'inherit',
                                backgroundImage:
                                    'linear-gradient(135deg, #9e7aff 0%, #EC5291 33.33%, #ffbd7a 44.67%, #FD9C25 53%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Personalized Support{' '}
                        </span>
                        From Empathy Companion
                    </p>
                    <div
                        style={{
                            transform: 'translateZ(75px)',
                            transformStyle: 'preserve-3d',
                        }}
                        className="relative w-full h-auto rounded-md"
                    >
                        <BorderBeam size={250} duration={12} delay={9} />
                        <Image
                            src="/images/AppPreview.png"
                            alt="blog thumbnail"
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="w-full h-auto rounded-md border-[1px] border-gray-200"
                        />
                        <BorderBeam size={250} duration={12} delay={9} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AppIntroSection;
