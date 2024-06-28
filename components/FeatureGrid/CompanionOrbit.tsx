import OrbitingCircles from '@/components/magicui/orbiting-circles';
import DogImage from '../../public/images/dog_face_3d.png';
import RabbitImage from '../../public/images/rabbit_face_3d.png';
import MouseImage from '../../public/images/mouse_face_3d.png';
import PandaImage from '../../public/images/panda_3d.png';

import Image from 'next/image';

export function OrbitingCirclesDemo() {
    return (
        <div className="absolute flex h-[250px] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background ">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                Companion
            </span>

            {/* Inner Circles */}
            <OrbitingCircles
                className="h-[30px] w-[30px] border-none bg-transparent"
                duration={20}
                delay={20}
                radius={80}
            >
                <DogFaceImage />
            </OrbitingCircles>
            <OrbitingCircles
                className="h-[30px] w-[30px] border-none bg-transparent"
                duration={20}
                delay={10}
                radius={80}
            >
                <RabbitFaceImage />
            </OrbitingCircles>

            {/* Outer Circles (reverse) */}
            <OrbitingCircles
                className="h-[50px] w-[50px] border-none bg-transparent"
                radius={190}
                duration={20}
                reverse
            >
                <MouseFaceImage />
            </OrbitingCircles>
            <OrbitingCircles
                className="h-[50px] w-[50px] border-none bg-transparent"
                radius={190}
                duration={20}
                delay={20}
                reverse
            >
                <PandaFaceImage />
            </OrbitingCircles>
        </div>
    );
}

const DogFaceImage = () => (
    <Image src={DogImage} alt="Dog Face" width={100} height={100} />
);

const RabbitFaceImage = () => (
    <Image src={RabbitImage} alt="Rabbit Face" width={100} height={100} />
);

const MouseFaceImage = () => (
    <Image src={MouseImage} alt="Mouse Face" width={100} height={100} />
);

const PandaFaceImage = () => (
    <Image src={PandaImage} alt="Panda Face" width={100} height={100} />
);
