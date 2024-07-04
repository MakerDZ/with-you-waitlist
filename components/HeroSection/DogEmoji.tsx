import Image from 'next/image';
import { motion } from 'framer-motion';
import useIsInViewport from '@/hooks/useIsInViewPort';
import useIsMobile from '@/hooks/useIsMobile';

const DogEmoji = () => {
    const { isInViewport, ref } = useIsInViewport();
    const { isMobile } = useIsMobile();
    return (
        <motion.div
            ref={ref}
            className="absolute sm:top-80 top-56 lg:right-52 md:right-32 sm:right-16 right-36"
            animate={!isMobile && isInViewport ? { x: 0 } : { x: 80 }}
            initial={!isMobile ? { x: 80 } : undefined}
            transition={
                isMobile
                    ? { type: 'spring', stiffness: 100, damping: 12 }
                    : undefined
            }
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
