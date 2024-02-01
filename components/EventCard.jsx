import {
    Card,
    CardContent
  } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'
  
export default function EventCard(props) {
  return (
    <div className="hover:shadow-lg hover:scale-95 hover:shadow-gray-800 hover:cursor-pointer transition-all h-auto w-48 ">
    <Card>
      <Link href={props.link}>
        <CardContent>
            <h1 className="text-lg text-center m-2 font-jost opacity-85">{props.title}</h1>
            <Image src={props.src} height={142} width={142}  alt="Event"></Image>
        </CardContent>
        </Link>
        
</Card>
</div>

    )
}
