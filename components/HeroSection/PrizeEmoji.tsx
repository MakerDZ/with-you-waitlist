import Image from 'next/image';
import { motion } from 'framer-motion';
import useIsInViewport from '@/hooks/useIsInViewPort';

const PrizeEmoji = () => {
    const { isInViewport, ref } = useIsInViewport();
    return (
        <motion.div
            ref={ref}
            className="absolute top-96 lg:right-28 md:right-16 sm:right-11 right-3"
            animate={isInViewport ? { y: 0 } : { y: 110 }}
            initial={{ y: 110 }}
            transition={{ type: 'spring', stiffness: 100, damping: 12 }}
        >
            <Image
                src="/images/PrizeEmoji.svg"
                alt="Prize"
                width="0"
                height="0"
                sizes="100vw"
                className=" h-auto xl:w-[55px] lg:w-[50px] md:w-[40px] w-[35px]  "
            />
        </motion.div>
    );
};

export default PrizeEmoji;
