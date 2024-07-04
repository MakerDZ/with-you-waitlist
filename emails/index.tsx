import {
    Font,
    Container,
    Tailwind,
    Img,
    Head,
    Html,
    Body,
} from '@react-email/components';

const Email = () => {
    return (
        <Html>
            <Head>
                <Font
                    fontFamily="Nunito"
                    fallbackFontFamily="sans-serif"
                    webFont={{
                        url: 'https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap',
                        format: 'woff2',
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                />
            </Head>
            <Tailwind
                config={{
                    theme: {
                        extend: {
                            colors: {
                                brand: '#007291',
                            },
                        },
                    },
                }}
            >
                <Body className="bg-[#f9fafb]">
                    <Container className="w-full h-auto bg-gradient-to-r from-[#F3F6FF] to-white rounded-lg shadow-md px-7 py-10 flex flex-col justify-start border-[1px] border-[#EAEAEA]">
                        <div className="flex items-center">
                            <Img
                                src="https://us-east-1.tixte.net/uploads/ajax.tixte.co/logo.jpg"
                                alt="Cat"
                                width="40"
                                height="40"
                                className="rounded-md"
                            />
                            <h1 className="text-lg text-[#475465] ml-2">
                                WithYou{' '}
                                <span className="text-[#FD9C25]">AI</span>
                            </h1>
                        </div>

                        <div className="my-10">
                            <p className="text-[#FD9C25] text-sm font-semibold">
                                Thank You So Much For
                            </p>
                            <h1 className="-mt-3 text-xl text-[#475465] font-black">
                                Joining the Waiting List.
                            </h1>
                            <p className="mt-5 text-sm text-[#98A2B2]">
                                We will try to notify you as soon as possible
                                after the release of the publicly testable
                                version. Thank you so much for your interest in
                                our app; it means a lot to us as we continue
                                building it.
                            </p>
                        </div>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default Email;
