import Image from 'next/image';
import { motion } from 'framer-motion';
import useIsInViewport from '@/hooks/useIsInViewPort';

const DogEmoji = () => {
    const { isInViewport, ref } = useIsInViewport();
    return (
        <motion.div
            ref={ref}
            className="absolute top-80 lg:right-52 md:right-32 sm:right-16 right-6"
            animate={isInViewport ? { x: 0 } : { x: 80 }}
            initial={{ x: 80 }}
            transition={{ type: 'spring', stiffness: 100, damping: 12 }}
        >
            <Image
                src="/images/DogEmoji.svg"
                alt="Dog"
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto xl:w-[55px] lg:w-[50px] md:w-[40px] w-[35px] "
            />
        </motion.div>
    );
};

export default DogEmoji;
