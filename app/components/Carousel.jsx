"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image1 from "@/public/static/images/glimpses/1.jpg"
import Image2 from "@/public/static/images/glimpses/2.jpg"
import Image3 from "@/public/static/images/glimpses/3.jpg"
import Image4 from "@/public/static/images/glimpses/4.jpg"
import Image5 from "@/public/static/images/glimpses/5.jpg"
import Image6 from "@/public/static/images/glimpses/6.jpg"

import Image from "next/image"
const slides = [
    {
        loc: Image1
    },
    {
        loc: Image2
    },
    {
        loc: Image3
    },
    {
        loc: Image4
    },
    {
        loc: Image5
    },
    {
        loc: Image6
    }
]

export function CarouselPlugin() {
    const plugin = React.useRef(
        Autoplay({ delay: 1000, stopOnInteraction: true }),
    )

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <Carousel
                plugins={[plugin.current]}
                opts={{
                    align: "center",
                    loop: true,
                  }}
                className="bg-[#0c1113]  max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-4xl w-full "
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {slides.map((slide, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1 ">
                                <Card >
                                    <CardContent className="flex bg-background items-center justify-center p-6">
                                        <Image src={slide.loc} alt="Glimpses" width={650} height={650}/>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}
