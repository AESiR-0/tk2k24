import Image from "next/image";
import HImage from "@/public/static/images/logo/full.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroImage() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center  items-center">
      <Image src={HImage} width={720} height={720} alt="tk.logo" />
      <Link href="https://tally.so/r/mOG9xM">
        <Button className="scale-125"> Register Now </Button>
      </Link>
    </div>
  );
}
