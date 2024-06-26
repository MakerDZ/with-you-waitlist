import { useState, useEffect, useRef } from 'react';

const useIsInViewport = () => {
    const [isInViewport, setIsInViewport] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInViewport(entry.isIntersecting);
            },
            { threshold: 0.1 } // Adjust this value as needed
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return { ref, isInViewport };
};

export default useIsInViewport;
