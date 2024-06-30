import Image from 'next/image';
import { motion } from 'framer-motion';
import useIsInViewport from '@/hooks/useIsInViewPort';
import useIsMobile from '@/hooks/useIsMobile';

const StarEmoji = () => {
    const { isInViewport, ref } = useIsInViewport();
    const { isMobile } = useIsMobile();
    return (
        <motion.div
            ref={ref}
            className="absolute bottom-72 lg:left-28 md:left-16 sm:left-11 left-3"
            animate={!isMobile && isInViewport ? { y: 0 } : { y: -110 }}
            initial={!isMobile ? { y: -110 } : undefined}
            transition={
                !isMobile
                    ? { type: 'spring', stiffness: 100, damping: 12 }
                    : undefined
            }
        >
            <Image
                src="/images/StarEmoji.svg"
                alt="StarEmoji"
                width="0"
                height="0"
                sizes="100vw"
                className=" h-auto xl:w-[60px] lg:w-[55px] md:w-[45px] w-[40px] "
            />
        </motion.div>
    );
};

export default StarEmoji;
