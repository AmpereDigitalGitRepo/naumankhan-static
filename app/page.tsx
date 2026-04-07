import Header from './components/Header';
import Hero from './components/Hero';

export const metadata = {
  title: 'Nauman Khan — Growth Operator, AI, Ventures',
  description: '16 years in digital growth. 2 years building agentic AI. Building what\'s possible.',
};

export default function Home() {
  return (
    <div className="relative w-full">
      <Header />
      <Hero />
      {/* Scroll spacer: creates document scroll height to enable vertical scroll mapping */}
      <div style={{ height: '300vh', backgroundColor: '#0a0b14' }} />
    </div>
  );
}
