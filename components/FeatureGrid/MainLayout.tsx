import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import { cn } from '@/libs/utlis';
import {
    TargetIcon,
    HeartIcon,
    BellIcon,
    EyeOpenIcon,
} from '@radix-ui/react-icons';
import { AnimatedList } from '../magicui/animated-list';
import { OrbitingCirclesDemo } from './CompanionOrbit';
import { HeatMap } from './HeatMap';
import EmotionChart from './EmotionChart';

const files = [
    {
        name: 'bitcoin.pdf',
        body: 'Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.',
    },
    {
        name: 'finances.xlsx',
        body: 'A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.',
    },
    {
        name: 'logo.svg',
        body: 'Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.',
    },
    {
        name: 'keys.gpg',
        body: 'GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.',
    },
    {
        name: 'seed.txt',
        body: 'A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.',
    },
];

interface Item {
    name: string;
    description: string;
    icon: string;
    color: string;
    time: string;
}

let notifications = [
    {
        name: 'Complete Project Milestone',
        description: `You're close to finishing that big task!`,
        time: '15m ago',
        icon: '🐶',
        color: '#00C9A7',
    },
    {
        name: 'Health Journey',
        description: 'Remember your fitness goals today.',
        time: '10m ago',
        icon: '🐈',
        color: '#FFB800',
    },
    {
        name: 'Learning New Skills',
        description: 'Keep practicing that new language!',
        time: '5m ago',
        icon: '🐒',
        color: '#FF3D71',
    },
    {
        name: 'Financial Planning',
        description: 'Stay steady with your savings plan.',
        time: '2m ago',
        icon: '🐼',
        color: '#1E86FF',
    },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
    return (
        <figure
            className={cn(
                'relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4',
                // animation styles
                'transition-all duration-200 ease-in-out hover:scale-[103%]',
                // light styles
                'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
                // dark styles
                'transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]'
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <div
                    className="flex max-h-10 min-h-10 max-w-10 min-w-10 items-center justify-center rounded-2xl"
                    style={{
                        backgroundColor: color,
                    }}
                >
                    <span className="text-lg">{icon}</span>
                </div>
                <div className="flex flex-col overflow-hidden">
                    <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
                        <span className="text-sm sm:text-lg">{name}</span>
                        <span className="mx-1">·</span>
                        <span className="text-xs text-gray-500">{time}</span>
                    </figcaption>
                    <p className="text-sm font-normal dark:text-white/60">
                        {description}
                    </p>
                </div>
            </div>
        </figure>
    );
};

const features = [
    {
        Icon: HeartIcon,
        name: 'EQ Prioritized',
        description: 'We automatically save your files as you type.',
        href: '/',
        cta: 'Learn more',
        className: 'col-span-3 lg:col-span-1',
        background: <OrbitingCirclesDemo />,
    },
    {
        Icon: TargetIcon,
        name: 'Track Your Journey',
        description: 'Search through all your files in one place.',
        href: '/',
        cta: 'Learn more',
        className: 'col-span-3 lg:col-span-2',
        background: (
            <div className="absolute max-h-[250px] min-h-[250px] flex flex-col justify-center right-0">
                <HeatMap />
            </div>
        ),
    },
    {
        Icon: EyeOpenIcon,
        name: 'Visualize your emotions',
        description: 'Supports 100+ integrations and counting.',
        href: '/',
        cta: 'Learn more',
        className: 'col-span-3 lg:col-span-2',
        background: (
            <div className="absolute max-h-[250px] min-h-[250px] flex flex-col justify-center ">
                <EmotionChart />
            </div>
        ),
    },
    {
        Icon: BellIcon,
        name: 'Personalized Reminders',
        description: 'Use the calendar to filter your files by date.',
        className: 'col-span-3 lg:col-span-1',
        href: '/',
        cta: 'Learn more',
        background: (
            <div className="flex max-h-[190px] min-h-[190px] w-full max-w-[32rem] flex-col overflow-hidden rounded-lg  p-6 absolute">
                <AnimatedList>
                    {notifications.map((item, idx) => (
                        <Notification {...item} key={idx} />
                    ))}
                </AnimatedList>
            </div>
        ),
    },
];

export function FeatureGridSection() {
    return (
        <section className="next-trip lg:h-[150vh] h-full w-full">
            <div className="w-full lg:h-[100vh] h-full lg:py-0 py-16 px-20 flex flex-col justify-center items-center top-0 sticky-container">
                <BentoGrid>
                    {features.map((feature, idx) => (
                        <BentoCard key={idx} {...feature} />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
}
