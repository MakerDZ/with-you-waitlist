import WaitlistButton from './waitlist/WaitlistButton';

export default function NavBar() {
    return (
        <nav className=" sticky top-4 text-[#475466] z-50 flex flex-row justify-between items-center px-6 ">
            <div className="px-2 py-2 backdrop-blur-md bg-white/30 rounded-lg text-lg font-extrabold flex flex-row items-center space-x-2">
                <div className="relative flex items-center justify-center aspect-square z-10 ">
                    <img
                        alt="Avatar"
                        loading="lazy"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-lg h-11 w-11 border-[1px] border-gray-100 z-10"
                        style={{ color: 'transparent' }}
                        src="/images/logo.jpg"
                    />

                    <img
                        alt="Avatar"
                        loading="lazy"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-lg h-12 w-12 absolute blur-lg opacity-70 saturate-[6] translate-y-2 -z-10"
                        style={{ color: 'transparent' }}
                        src="https://t4.ftcdn.net/jpg/04/41/16/97/360_F_441169716_cHhSAy9FtA7ZV96GMq4CzADZCvvB9zJq.jpg"
                    />
                </div>

                <h1>
                    WithYou <span className="text-[#FE9C26] ">AI</span>
                </h1>
            </div>
            <WaitlistButton />
        </nav>
    );
}
