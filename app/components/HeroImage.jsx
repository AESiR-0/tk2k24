import Image from "next/image";
import HImage from "@/public/static/images/logo/full.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroImage() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center   items-center">
      <Image src={HImage} width={720} height={720} alt="tk.logo" />
      <h1 className="text-3xl font-jost max-md:mt-0 opacity-85 -mt-20 mb-20">15th & 16th February</h1>
      <Link href="https://tally.so/r/mOG9xM">
        <Button className="scale-125"> Register Now </Button>
      </Link>
    </div>
  );
}
