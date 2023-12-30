import Image from 'next/image'
import ShootingStars from './components/shootingStars'
import HeroImage from './components/HeroImage'
import NavBar from '@/components/NavBar'
import About from './components/About'
import { CarouselPlugin } from './components/Carousel'
import Team from './components/Team'

export default function Home() {
  return (
    <section className='flex flex-col w-full h-full'>
      <ShootingStars /> {/* This is background stars animation */}
      <NavBar />
      <HeroImage />
      <About />
      <CarouselPlugin />
      <Team />
    </section>
  )
}
