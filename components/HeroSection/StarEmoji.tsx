import Image from 'next/image';
import { motion } from 'framer-motion';
import useIsInViewport from '@/hooks/useIsInViewPort';

const StarEmoji = () => {
    const { isInViewport, ref } = useIsInViewport();
    return (
        <motion.div
            ref={ref}
            className="absolute bottom-72 lg:left-28 md:left-16 sm:left-11 left-3"
            animate={isInViewport ? { y: 0 } : { y: -110 }}
            initial={{ y: -110 }}
            transition={{ type: 'spring', stiffness: 100, damping: 12 }}
        >
            <Image
                src="/images/StarEmoji.svg"
                alt="StarEmoji"
                width="0"
                height="0"
                sizes="100vw"
                className=" h-auto xl:w-[60px] lg:w-[50px] md:w-[40px] w-[35px] "
            />
        </motion.div>
    );
};

export default StarEmoji;
