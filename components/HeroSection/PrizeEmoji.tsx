import Image from 'next/image';
import { motion } from 'framer-motion';
import useIsInViewport from '@/hooks/useIsInViewPort';
import useIsMobile from '@/hooks/useIsMobile';

const PrizeEmoji = () => {
    const { isInViewport, ref } = useIsInViewport();
    const { isMobile } = useIsMobile();
    return (
        <motion.div
            ref={ref}
            className="absolute sm:top-96 top-52 lg:right-28 md:right-16 sm:right-11 right-3"
            animate={!isMobile && isInViewport ? { y: 0 } : { y: 110 }}
            initial={!isMobile ? { y: 110 } : undefined}
            transition={
                isMobile
                    ? { type: 'spring', stiffness: 100, damping: 12 }
                    : undefined
            }
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
