"use client";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import Link from "next/link";

export default function MoboNavBar({ props }) {
    return <Menubar>
        <MenubarMenu>
            <MenubarTrigger>⌘
            </MenubarTrigger>
            <MenubarContent>

                {props.length > 0 && props.map((items, index) => {
                    return <div key={index}>
                        <MenubarItem >
                            <Link href={items.link}>{items.name}</Link>
                        </MenubarItem>
                        <MenubarSeparator />
                    </div>
                })}
            </MenubarContent>
        </MenubarMenu>
    </Menubar>

}