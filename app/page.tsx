import AppIntroSection from '../components/AppIntroSection/MainLayout';
import { FeatureGridSection } from '../components/FeatureGrid/MainLayout';
import HeroMainLayout from '../components/HeroSection/MainLayout';
import NavBar from '../components/NavBar';

export default function Home() {
    return (
        <main>
            <NavBar />
            <HeroMainLayout />
            <div className="w-full min-h-24"></div>
            <AppIntroSection />
            <div className="w-full min-h-24"></div>
            <FeatureGridSection />
            <div className="w-full min-h-24"></div>
        </main>
    );
}
