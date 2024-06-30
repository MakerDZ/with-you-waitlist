import { ReactNode } from 'react';

const HeroContent = ({ children }: { children: ReactNode }) => {
    return (
        <section className="next-trip h-[200vh] w-full">
            <div className="h-[100vh] w-full flex flex-col justify-center items-center top-0 sticky-container">
                <span className="z-10 text-shadow text-center select-none lg:text-xl md:text-lg text-base text-[#667085] font-semibold">
                    WithYou AI
                </span>
                <span className="z-10 text-shadow text-center select-none lg:text-3xl md:text-2xl text-xl font-bold">
                    Your Ally in Achieving Life's Goals
                </span>
                {children}
            </div>
        </section>
    );
};

export default HeroContent;
