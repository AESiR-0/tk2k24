"use client";

import Link from "next/link"
import Image from "next/image";
import LogoText from "@/public/static/images/logo/short.png"
import MoboNavBar from "./Mobo-NavBar";

export default function NavBar() {

    const NavItems = [
        {
            name: "Events",
            link: "#events"
        },
        {
            name: "About",
            link: "#about"
        },
        {
            name: "Contact",
            link: "#contact"
        },
        {
            name: "Registration",
            link: "/registration"
        }
    ]

    return <div className="flex justify-between items-center w-full absolute top-0 h-20 pt-5 max-md:px-8 backdrop-blur-sm">
        <Link href={'/'} className="w-[30%] h-full flex justify-center items-center gap-3">
            <Image src={LogoText} alt="Logo" height={64} width={64} className="max-md:h-[44px] max-md:w-[44px]"/> <span className="text-5xl mt-2 font-medium max-md:text-4xl">24</span>
        </Link>
        <div className="flex gap-14 pr-14 max-md:hidden">
        {NavItems.map((item, index) => {
            return <li key={index} className="text-2xl list-none">
                <Link href={item.link}>{item.name}</Link>
            </li>
        })}
        </div>
        <div className="hidden max-md:block">
         <MoboNavBar props={NavItems} />
        </div>
    </div>
}
