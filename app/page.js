import Image from 'next/image'
import ShootingStars from './components/shootingStars'
import HeroImage from './components/HeroImage'
import NavBar from '@/components/NavBar'
import About from './components/About'
import { CarouselPlugin } from './components/Carousel'
import Team from './components/Team'
import Events from './components/Events'
import Footer from './components/Footer'
import InfiniteScroller from './components/InfiniteScroller'

export default function Home() {
  return (
    <section className='flex overflow-x-hidden flex-col w-full h-full'>
      <ShootingStars /> {/* This is background stars animation */}
      <NavBar />
      <HeroImage />
      <About />
      <InfiniteScroller />
      <div className='flex flex-col gap-2 h-screen w-screen'>
        <h1 className='text-4xl font-bold text-center px-10 uppercase'>Glimpses</h1>
        <CarouselPlugin />
      </div>
      <Team />
      <Events />
      <Footer />
    </section>
  )
}
