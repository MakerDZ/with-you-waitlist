import Link from 'next/link';

export default function Footer() {
    return (
        <div className="bg-white py-9 w-full border-t-[1px] border-gray-200">
            <div className="w-11/12 mx-auto h-auto">
                {/* Upper Section of Footer */}
                <div className="md:flex md:flex-row justify-between">
                    {/* Logo and About */}
                    <div>
                        {/* Logo and Name */}
                        <div className="flex flex-row items-center space-x-3">
                            <div className="flex items-center justify-center aspect-square z-10 h-10 w-h-10">
                                <img
                                    alt="Avatar"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="1"
                                    className="rounded-lg h-10 w-h-10 border-[1px] border-gray-100 z-10"
                                    style={{ color: 'transparent' }}
                                    src="/images/logo.jpg"
                                />

                                <img
                                    alt="Avatar"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="1"
                                    className="rounded-lg h-10 w-h-10 absolute blur-lg opacity-70 saturate-[6] translate-y-2 -z-10"
                                    style={{ color: 'transparent' }}
                                    src="https://t4.ftcdn.net/jpg/04/41/16/97/360_F_441169716_cHhSAy9FtA7ZV96GMq4CzADZCvvB9zJq.jpg"
                                />
                            </div>
                            <h1 className="text-xl text-[#655556] font-extrabold">
                                WithYou{' '}
                                <span className="text-[#FE9C26] ">AI</span>
                            </h1>
                        </div>

                        {/* About */}
                        <p className="text-[#475466] w-80 mt-5">
                            Please give us a chance. This technology is not a
                            replacement for human interaction. We are striving
                            to connect more authentically.
                        </p>
                    </div>

                    {/* Grid Section */}
                    <div className="grid md:grid-cols-3 grid-cols-1 md:gap-16 gap-9 md:mt-0 mt-9">
                        {/* Grid 1 */}
                        <div>
                            <h3 className="text-[#475466] font-bold">
                                General
                            </h3>
                            <div className="md:mt-5 mt-3 text-[#98A2B2] space-y-3 list-none">
                                <li>
                                    <Link href={'/'}>Pricing</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Security</Link>
                                </li>
                                <li>
                                    <Link
                                        href={'https://discord.gg/RbRWaf95zy'}
                                        target="_blank"
                                        className="flex items-center space-x-3"
                                    >
                                        <span>Discord</span>{' '}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/'}
                                        target="_blank"
                                        className="flex items-center space-x-3"
                                    >
                                        <span>Twitter</span>{' '}
                                    </Link>
                                </li>
                            </div>
                        </div>

                        {/* Grid 2 */}
                        <div>
                            <h3 className="text-[#475466] font-bold">Team</h3>
                            <div className="md:mt-5 mt-3 text-[#98A2B2] space-y-3 list-none">
                                <li>
                                    <Link
                                        href={'https://github.com/makerdz'}
                                        target="_blank"
                                    >
                                        @Zed
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'https://github.com/Xceler'}
                                        target="_blank"
                                    >
                                        @Xceler
                                    </Link>
                                </li>
                            </div>
                        </div>

                        {/* Grid 3 */}
                        <div>
                            <h3 className="text-[#475466] font-bold">
                                Company
                            </h3>
                            <div className="md:mt-5 mt-3 text-[#98A2B2] space-y-3 list-none">
                                <li>
                                    <Link href={'/'}>Terms of Service</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Privacy Policy</Link>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lower Section of Footer */}
                <h1 className="text-[#98A2B2] text-base font-semibold mt-14">
                    Made with love by humans.
                </h1>
            </div>
        </div>
    );
}
