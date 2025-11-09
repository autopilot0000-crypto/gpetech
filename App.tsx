import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Features from './components/Features';
import DetailedFeatures from './components/DetailedFeatures';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import HowToStart from './components/HowToStart';
import Affiliate from './components/Affiliate';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
    return (
        <LanguageProvider>
            <div className="bg-pirus-dark font-sans text-pirus-light">
                <Header />
                <main>
                    <Hero />
                    <About />
                    <Products />
                    <Features />
                    <DetailedFeatures />
                    <Services />
                    <Testimonial />
                    <HowToStart />
                    <Affiliate />
                </main>
                <Footer />
            </div>
        </LanguageProvider>
    );
};

export default App;