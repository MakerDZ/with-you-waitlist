import Image from 'next/image';
import { motion } from 'framer-motion';
import useIsInViewport from '@/hooks/useIsInViewPort';
import useIsMobile from '@/hooks/useIsMobile';

const ChartUp = () => {
    const { isInViewport, ref } = useIsInViewport();
    const { isMobile } = useIsMobile();
    return (
        <motion.div
            ref={ref}
            className="absolute bottom-36 lg:left-52 md:left-32 sm:left-16 left-6"
            animate={isMobile && isInViewport ? { y: 0 } : { y: 110 }}
            initial={isMobile ? { y: 110 } : undefined}
            transition={
                isMobile
                    ? { type: 'spring', stiffness: 100, damping: 12 }
                    : undefined
            }
        >
            <Image
                src="/images/ChartUpEmoji.svg"
                alt="ChartUp"
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto xl:w-[55px] lg:w-[50px] md:w-[40px] w-[35px] "
            />
        </motion.div>
    );
};

export default ChartUp;
