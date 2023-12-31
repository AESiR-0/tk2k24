import Image from "next/image";
import Image1 from "@/public/static/images/organizer/1.jpg";
import Image2 from "@/public/static/images/organizer/2.jpg";
import Image3 from "@/public/static/images/organizer/3.jpg";
import Image4 from "@/public/static/images/organizer/himank.jpeg";

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
    name: "Himank Varshney",
    designation: "Organizer",
    image: Image4,
  },
];

export default function Team() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-24 max-md:min-h-screen">
      <h1 className="text-5xl font-semibold max-md:text-3xl">MEET OUR TEAM</h1>
      <div className="flex w-full justify-evenly items-center max-md:flex-col max-md:gap-6">
        {TeamData.map((item, index) => {
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
