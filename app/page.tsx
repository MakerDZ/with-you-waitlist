import AppIntroSection from '../components/AppIntroSection/MainLayout';
import { FeatureGridSection } from '../components/FeatureGrid/MainLayout';
import HeroMainLayout from '../components/HeroSection/MainLayout';
import NavBar from '../components/NavBar';

export default function Home() {
    return (
        <main>
            <NavBar />
            <HeroMainLayout />
            <AppIntroSection />
            <div className="w-full h-14"></div>
            <FeatureGridSection />
        </main>
    );
}
