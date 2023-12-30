
import Image from "next/image"
import HImage from '@/public/static/images/logo/full.png'
export default function HeroImage() {
    return <div className='flex w-screen h-screen justify-center items-center'>
        <Image src={HImage} width={720} height={720} alt='tk.logo' />
    </div>
}