import React from "react";
import Amul from "@/public/static/images/logo/sponsors/amul.png";
import lakme from "@/public/static/images/logo/sponsors/lakme.png";
import mbachai from "@/public/static/images/logo/sponsors/mbachai.png";
import McD from "@/public/static/images/logo/sponsors/McD.png";
import pepsi from "@/public/static/images/logo/sponsors/pepsi.png";
import paperBoat from "@/public/static/images/logo/sponsors/paperBoat.png";
import theFatChef from "@/public/static/images/logo/sponsors/tfc.png";
import pizzahut from "@/public/static/images/logo/sponsors/pizzahut.png";
import Image from "next/image";

export default function InfiniteScroller() {
  const listOfSponsors = [
    { img: Amul, alt: "Amul" },
    { img: lakme, alt: "Lakme" },
    { img: mbachai, alt: "MBA Chai wala" },
    { img: McD, alt: "McDonalds" },
    { img: pizzahut, alt: "Pizza Hut" },
    { img: theFatChef, alt: "The Fat Chef" },
    {img: pepsi, alt: "Pepsi"},
    {img: paperBoat, alt: "Paper Boat"},
  ];

    

  return (
    <div className="text-4xl my-10 max-sm:text-2xl font-semibold max-md:mt-0 text-center gap-20 flex flex-col text-white">
    Previous Sponsors
    <div
      id="scroller"
      className="w-screen items-center   justify-center h-auto mb-10 flex  "
    > 
      <ul
      id="scroll-ul"
        className="flex h-fit w-max items-center flex-wrap max-md:flex-col gap-10 max-md:py-0 py-12 justify-center scroll__inner  [&_li]:mx-8 [&_img]:max-w-none   "
     
      >
        {listOfSponsors.map((sponsor, index) => (
          <li
            key={index}
            className="flex items-center bg-white justify-center"
            aria-hidden={true}
          >
            <Image
              className="h-20 w-32 max-md:h-24"
              src={sponsor.img}
              alt={sponsor.alt}
            />
          </li>
        ))}

      </ul>
    </div>
    </div>
  );
}
