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
            <FeatureGridSection />
        </main>
    );
}
