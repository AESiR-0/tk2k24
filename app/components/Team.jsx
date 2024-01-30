import Image from "next/image";
import Image1 from "@/public/static/images/organizer/1.jpg";
import Image2 from "@/public/static/images/organizer/2.jpg";
import Image3 from "@/public/static/images/organizer/3.jpg";
import Image4 from "@/public/static/images/organizer/himank.jpeg";
import Image5 from "@/public/static/images/organizer/4.jpg";


const faciData = [
  {
    name: "Himank Varshney",
    designation: "Facilitator",
    image: Image4,
  }
]
const TeamData = [
  {
    name: "Rohit Shukla",
    designation: "Organizer",
    number: "+91 9316331662",
    image: Image1,
  },
  {
    name: "Pratham Chellani",
    designation: "Organizer",
    image: Image2,
    number: "+91 9664590100",
  },
  {
    name: "Muhammadumar Shaikh",
    designation: "Organizer",
    image: Image3,
    number: "+91 9313190969",
  },
  
  {
    name: "Tirth Mehta",
    designation: "Organizer",
    image: Image5,
    number: "+91 6353935 670",
  }
];

export default function Team() {
  return (
    <div id="team" className="w-screen min-h-screen flex flex-col z-10 flex-wrap justify-center py-10 items-center gap-24 max-md:min-h-screen">
      <h1 className="text-5xl font-semibold max-md:text-3xl">MEET OUR TEAM</h1>
      <div className="w-screen justify-evenly flex flex-wrap gap-x-36 gap-y-10 items-center max-md:flex-col max-md:gap-6">
        {TeamData.map((item, index) => {
          return <CardGenerator props={item} key={index} />;
        })}
      </div>
      <h1 className="text-4xl font-semibold max-md:text-2xl">Facilitator</h1>
      <div className="w-screen justify-center flex max-md:flex-col max-md:gap-6">
        {faciData.map((item, index) => {
          return <CardGenerator props={item} key={index} />;
        })}
      </div>
    </div>
  );
}

function CardGenerator({ props }) {
  return (
    <div className="flex flex-col gap-3 max-w-[250px] justify-center items-center">
      <Image
        src={props.image}
        alt={props.name}
        className="object-cover h-[250px] w-[250px] border-[5px] border-white max-md:h-[150px] max-md:w-[150px]  rounded-full"
      />
      <h1 className="text-3xl font-semibold max-md:text-xl overflow-visible whitespace-nowrap">
        {props.name}
      </h1>
      <h1 className="text-xl max-md:text-sm font-[400]">
        {" "}
        {props.designation}{" "}
      </h1>
      <h1 className="text-xl max-md:text-sm font-thin"> {props.number} </h1>
    </div>
  );
}
