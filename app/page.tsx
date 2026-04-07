import Header from './components/Header';
import Hero from './components/Hero';

export const metadata = {
  title: 'Nauman Khan — Growth Operator, AI, Ventures',
  description: '16 years in digital growth. 2 years building agentic AI. Building what\'s possible.',
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* Page content below hero reveals after all slides are exhausted */}
    </>
  );
}
