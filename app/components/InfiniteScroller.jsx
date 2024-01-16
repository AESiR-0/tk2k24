"use client";
import React from "react";
import Amul from "@/public/static/images/logo/sponsors/amul.png";
import lakme from "@/public/static/images/logo/sponsors/lakme.png";
import mbachai from "@/public/static/images/logo/sponsors/mbachai.png";
import McD from "@/public/static/images/logo/sponsors/McD.png";
import pizzahut from "@/public/static/images/logo/sponsors/pizzahut.png";
import Image from "next/image";
import { useEffect } from "react";

export default function InfiniteScroller() {
  const listOfSponsors = [
    { img: Amul, alt: "Amul" },
    { img: lakme, alt: "Lakme" },
    { img: mbachai, alt: "MBA Chai wala" },
    { img: McD, alt: "McDonalds" },
    { img: pizzahut, alt: "Pizza Hut" },
  ];

//   useEffect(() =>{ 
//   const scrollerInner = document.getElementById("scroll-ul");
//   const scrollerContent = Array.from(scrollerInner.children);
//   // For each item in the array, clone it
//   // add aria-hidden to it
//   // add it into the `.scroller-inner`
//   scrollerContent.forEach((item) => {
//     const duplicatedItem = item.cloneNode(true);
//     duplicatedItem.setAttribute("aria-hidden", true);
//     scrollerInner.appendChild(duplicatedItem);scrollerContent.forEach((item) => {
//       const duplicatedItem = item.cloneNode(true);
//       duplicatedItem.setAttribute("aria-hidden", true);
//       scrollerInner.appendChild(duplicatedItem);
//     })
//   })
// }, []);
    

  return (
    <div className="text-4xl max-sm:text-2xl font-semibold -mt-20 max-md:mt-0 text-center gap-20 mb-10 flex flex-col text-white">
    Previous Sponsors
    <div
      id="scroller"
      className="w-screen items-center  justify-center h-[40vh] mb-10 flex  "
    > 
      <ul
      id="scroll-ul"
        className="flex w-max items-center max-md:flex-col max-md:h-fit gap-2 justify-center scroll__inner  [&_li]:mx-8 [&_img]:max-w-none   "
     
      >
        {listOfSponsors.map((sponsor, index) => (
          <li
            key={index}
            className="flex items-center bg-white justify-center"
            aria-hidden={true}
          >
            <Image
              className="h-20 w-32 md:h-24"
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
