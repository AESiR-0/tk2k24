import React from "react";
import cinematography from "@/public/static/images/events/svg/cinematography.svg";
import codeComplete from "@/public/static/images/events/svg/code complete.svg";
import codeSwap from "@/public/static/images/events/svg/code swap 2.svg";
import Cricket from "@/public/static/images/events/svg/Cricket.svg";
import football from "@/public/static/images/events/svg/football.svg";
import webJam from "@/public/static/images/events/svg/webjam.svg";
import quiz from "@/public/static/images/events/svg/quiz 2.svg";
import dataInsight from "@/public/static/images/events/svg/data insight.svg";
import cyberScenario from "@/public/static/images/events/svg/cypher scenario.svg";
import queryRelay from "@/public/static/images/events/svg/query relay 2.svg";
import cypherTitan from "@/public/static/images/events/svg/cypher titan.svg";
import valo from "@/public/static/images/events/games/valorant.png";
import EventCard from "@/components/EventCard";
import bgmi from "@/public/static/images/events/games/Bgmi.png";

const events = [
  {title:"Cinematography",src:cinematography},
  {title:"Code Complete",src:codeComplete},
  {title:"Code Swap",src:codeSwap},
  {title:"Cricket",src:Cricket},
  {title:"Football", src:football},
  {title:"Web Jam",src:webJam},
  {title:"Techno Quiz", src:quiz},
  {title:"Data Insights" ,src:dataInsight},
  {title:"Cyber Scenario",src:cyberScenario},
  {title:"Query Cracker",src:queryRelay},
  {title:"Cypher Titan", src:cypherTitan},
  {title:"Valorant", src:valo},
  {title:"BGMI", src:bgmi},
];

export default function Events() {
  return (
    
    <div className="min-w-screen h-fit flex items-center  flex-col my-20 gap-10" id="events">
      <h2 className="text-4xl max-md:text-2xl font-bold text-center  ">Events</h2>
    <div
      
      className="gap-14  flex flex-wrap  min-w-screen justify-center"
    >
      {events.map((event, index) => (
      <EventCard key={index} title={event.title} src={event.src} />
      ))}
    </div>
    </div>
  );
}
