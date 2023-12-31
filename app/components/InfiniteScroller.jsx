import React from "react";
import Amul from "@/public/static/images/logo/sponsors/amul.png";
import lakme from "@/public/static/images/logo/sponsors/lakme.png";
import mbachai from "@/public/static/images/logo/sponsors/mbachai.png";
import McD from "@/public/static/images/logo/sponsors/McD.png";
import pizzahut from "@/public/static/images/logo/sponsors/pizzahut.png";
import Image from "next/image";

export default function InfiniteScroller() {
  const listOfSponsors = [
    { img: Amul, alt: "Amul" },
    { img: lakme, alt: "Lakme" },
    { img: mbachai, alt: "MBA Chai wala" },
    { img: McD, alt: "McDonalds" },
    { img: pizzahut, alt: "Pizza Hut" },
  ];
  return (
    <div className="w-screen h-[30vh] mb-10 inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <ul
        x-ref="logos"
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll overflow-hidden "
        aria-hidden="true"
      >
        {listOfSponsors.map((sponsor, index) => (
          <li key={index} className="flex items-center justify-center">
            <Image
              className="h-20 w-32 md:h-24"
              src={sponsor.img}
              alt={sponsor.alt}
            />
          </li>
        ))}
        {listOfSponsors.map((sponsor, index) => (
          <li key={index} className="flex items-center justify-center">
            <Image
              className="h-20 w-32 md:h-24"
              src={sponsor.img}
              alt={sponsor.alt}
            />
          </li>
        ))}
        {listOfSponsors.map((sponsor, index) => (
          <li key={index} className="flex items-center justify-center">
            <Image
              className="h-20 w-32 md:h-24"
              src={sponsor.img}
              alt={sponsor.alt}
            />
          </li>
        ))}
        {listOfSponsors.map((sponsor, index) => (
          <li key={index} className="flex items-center justify-center">
            <Image
              className="h-20 w-32 md:h-24"
              src={sponsor.img}
              alt={sponsor.alt}
            />
          </li>
        ))}
        {listOfSponsors.map((sponsor, index) => (
          <li key={index} className="flex items-center justify-center">
            <Image
              className="h-20 w-32 md:h-24"
              src={sponsor.img}
              alt={sponsor.alt}
            />
          </li>
        ))}
        {listOfSponsors.map((sponsor, index) => (
          <li key={index} className="flex items-center justify-center">
            <Image
              className="h-20 w-32 md:h-24"
              src={sponsor.img}
              alt={sponsor.alt}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
