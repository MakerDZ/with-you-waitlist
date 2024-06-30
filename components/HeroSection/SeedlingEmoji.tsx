import Image from 'next/image';
import { motion } from 'framer-motion';
import useIsInViewport from '@/hooks/useIsInViewPort';
import useIsMobile from '@/hooks/useIsMobile';

const SeedlingEmoji = () => {
    const { isInViewport, ref } = useIsInViewport();
    const { isMobile } = useIsMobile();
    return (
        <motion.div
            ref={ref}
            className=" absolute bottom-60 lg:left-80 md:left-52 sm:left-28 left-14"
            animate={!isMobile && isInViewport ? { x: 0 } : { x: -80 }}
            initial={!isMobile ? { x: -80 } : undefined}
            transition={
                !isMobile
                    ? { type: 'spring', stiffness: 100, damping: 12 }
                    : undefined
            }
        >
            <Image
                src="/images/SeedlingEmoji.svg"
                alt="ChartUp"
                width="0"
                height="0"
                sizes="100vw"
                className=" h-auto xl:w-[55px] lg:w-[50px] md:w-[40px] w-[35px]"
            />
        </motion.div>
    );
};

export default SeedlingEmoji;
