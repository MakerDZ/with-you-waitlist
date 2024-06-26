import Image from 'next/image';
import { motion } from 'framer-motion';
import useIsInViewport from '@/hooks/useIsInViewPort';
import { useEffect } from 'react';

const SeedlingEmoji = () => {
    const { isInViewport, ref } = useIsInViewport();
    return (
        <motion.div
            ref={ref}
            className=" absolute bottom-64 lg:left-80 md:left-52 sm:left-28 left-14"
            animate={isInViewport ? { x: 0 } : { x: -80 }}
            initial={{ x: -80 }}
            transition={{ type: 'spring', stiffness: 100, damping: 12 }}
        >
            <Image
                src="/images/SeedlingEmoji.svg"
                alt="ChartUp"
                width="0"
                height="0"
                sizes="100vw"
                className=" h-auto xl:w-[55px] lg:w-[45px] md:w-[35px] w-[30px]"
            />
        </motion.div>
    );
};

export default SeedlingEmoji;
