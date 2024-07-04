import Footer from './Footer';
import SayingCard from './SayingCard';

export default function FooterLayout() {
    return (
        <div className="w-full">
            <div className="w-full h-[70vh] rounded-full relative">
                <div className="mx-auto md:w-9/12 sm:w-10/12 w-11/12 ">
                    <SayingCard />
                </div>
            </div>
            <Footer />
        </div>
    );
}
