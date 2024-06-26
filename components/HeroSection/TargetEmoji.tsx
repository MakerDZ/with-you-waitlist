import Image from 'next/image';
import { motion } from 'framer-motion';
import useIsInViewport from '@/hooks/useIsInViewPort';

const TargetEmoji = () => {
    const { isInViewport, ref } = useIsInViewport();
    return (
        <motion.div
            className="absolute top-60 lg:right-80 md:right-52 sm:right-10 right-0"
            ref={ref}
            animate={isInViewport ? { y: 0 } : { y: -110 }}
            initial={{ y: -200 }}
            transition={{ type: 'spring', stiffness: 100, damping: 12 }}
        >
            <Image
                src="/images/TargetEmoji.svg"
                alt="Target"
                width="0"
                height="0"
                sizes="100vw"
                className=" h-auto xl:w-[55px] lg:w-[50px] md:w-[40px] w-[35px]"
            />
        </motion.div>
    );
};

export default TargetEmoji;
