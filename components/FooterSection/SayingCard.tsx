import Marquee from '@/components/magicui/marquee';
import { cn } from '@/libs/utlis';
import { Button } from '@nextui-org/button';

const reviews = [
    {
        name: 'Buddy',
        username: '@loyal_dog',
        body: "Woof! You nailed that presentation today. I'm so proud of you!",
        img: '/images/dog_face_3d.png',
    },
    {
        name: 'Whiskers',
        username: '@wise_rabbit',
        body: "Binkying! I noticed you've been stressed. How about we meditate?",
        img: '/images/rabbit_face_3d.png',
    },
    {
        name: 'Bamboo',
        username: '@calm_panda',
        body: "You're doing great with your diet. Small steps lead to big changes!",
        img: '/images/panda_3d.png',
    },
    {
        name: 'Bananas',
        username: '@playful_mickey',
        body: 'Ooh ooh! Your Spanish is improving. ¡Vamos a practicar juntos!',
        img: '/images/mouse_face_3d.png',
    },
    {
        name: 'Hootie',
        username: '@wise_owl',
        body: "That book you finished? It's shaping you. Let's discuss it!",
        img: '/images/owl_3d.png',
    },
    {
        name: 'Splash',
        username: '@friendly_dolphin',
        body: "Click-click! Calling your mom today? She'll be so happy to hear from you!",
        img: '/images/spouting_whale_3d.png',
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 ',
                // light styles
                'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]'
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img
                    className="rounded-full"
                    width="32"
                    height="32"
                    alt=""
                    src={img}
                />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">
                        {username}
                    </p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

const SayingCard = () => {
    return (
        <div className="relative flex w-full h-[380px] flex-col items-center justify-center overflow-hidden rounded-3xl border bg-background py-20 ">
            <div className="absolute inset-0 z-30 bg-gradient-to-t from-white/90 to-white/0 via-white/90 via-opacity-60"></div>
            <div className="absolute w-full h-full z-40 bg-white  bg-opacity-30 flex flex-col justify-center">
                <div className="flex items-center justify-center aspect-square z-10 h-16 w-16 mx-auto mb-5">
                    <img
                        alt="Avatar"
                        loading="lazy"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-lg h-16 w-16 border-[1px] border-gray-100 z-10"
                        style={{ color: 'transparent' }}
                        src="/images/logo.jpg"
                    />

                    <img
                        alt="Avatar"
                        loading="lazy"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-lg h-16 w-16 absolute blur-lg opacity-70 saturate-[6] translate-y-2 -z-10"
                        style={{ color: 'transparent' }}
                        src="https://t4.ftcdn.net/jpg/04/41/16/97/360_F_441169716_cHhSAy9FtA7ZV96GMq4CzADZCvvB9zJq.jpg"
                    />
                </div>
                <h1 className=" text-[#5E5459] md:text-2xl text-xl font-bold text-center ">
                    Coming Soon!!
                </h1>
                <p className="text-center font-semibold text-neutral-500 w-10/12 mx-auto">
                    Your personal AI companion pet for life, growth, and
                    everything.
                </p>
                <Button
                    radius="md"
                    className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg font-semibold sm:text-base text-sm max-w-[150px] mx-auto mt-5"
                >
                    Join WaitList
                </Button>
            </div>

            <Marquee
                className="[--duration:20s] transform my-2 min-h-36"
                style={{ rotate: '30deg' }}
            >
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee
                reverse
                className="[--duration:20s] transform my-2 min-h-36 bg-slate-100  bg-opacity-35"
                style={{ rotate: '30deg' }}
            >
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee
                className="[--duration:20s] transform my-2 min-h-36"
                style={{ rotate: '30deg' }}
            >
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee
                reverse
                className="[--duration:20s] transform my-2 min-h-36"
                style={{ rotate: '30deg' }}
            >
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee
                className="[--duration:20s] transform my-2 min-h-36"
                style={{ rotate: '30deg' }}
            >
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
};

export default SayingCard;
