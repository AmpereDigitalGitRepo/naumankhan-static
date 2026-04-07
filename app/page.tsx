import { Hero } from './sections/Hero'
import { Gallery } from './sections/Gallery'
import { TwoPillars } from './sections/TwoPillars'
import { MarketingDepth } from './sections/MarketingDepth'
import { AiDepth } from './sections/AiDepth'
import { Philosophy } from './sections/Philosophy'
import { Thinking } from './sections/Thinking'
import { Connect } from './sections/Connect'

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <TwoPillars />
      <MarketingDepth />
      <AiDepth />
      <Philosophy />
      <Thinking />
      <Connect />
    </>
  )
}
