import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import BaseLayout from './components/BaseLayout';

export const metadata = {
  title: 'Nauman Khan — Growth Operator, AI, Ventures',
  description: '16 years in digital growth. 2 years building agentic AI. Building what\'s possible.',
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20 lg:pt-24">
        {/* Hero: Panoramic Scroll */}
        <div className="w-full">
          <Hero />
        </div>

        {/* Future sections will use BaseLayout for constrained content */}
      </main>
      <Footer />
    </>
  );
}
