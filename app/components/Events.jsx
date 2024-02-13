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

const techEvents = [
  {
    title: "Code Complete",
    src: codeComplete,
    link: "https://drive.google.com/file/d/1ZdPF_U5KRTubtZ4adJsqQqqAify5HS8_/view?usp=sharing",
  },
  {
    title: "Code Swap",
    src: codeSwap,
    link: "https://drive.google.com/file/d/1Gke2Y0uGUD2l3LHIXv8x9UnZUPU_eqop/view?usp=sharing",
  },
  {
    title: "Web Jam",
    src: webJam,
    link: "https://drive.google.com/file/d/1QBPSnO5Go9ZtSLQ3RY4ETUlksnWCtxQX/view?usp=sharing",
  },
  {
    title: "Techno Quiz",
    src: quiz,
    link: "https://drive.google.com/file/d/1tpsZkcUN0IxelndRicgSd3iSVPRL1aGz/view?usp=sharing",
  },
  {
    title: "Data Insights",
    src: dataInsight,
    link: "https://drive.google.com/file/d/1-UzeGeWT5S9Bke2rvDPaLC6Su0__BxDu/view?usp=sharing",
  },
  {
    title: "Cyber Scenario",
    src: cyberScenario,
    link: "https://drive.google.com/file/d/1mqFDwRopZO5H3K6qrGYpyVg9FJqlWLKG/view?usp=sharing",
  },
  {
    title: "Query Cracker",
    src: queryRelay,
    link: "https://drive.google.com/file/d/1bqeTcGj3TUNvnUhZqKndPXaCMMxrL9_x/view?usp=sharing",
  },
  {
    title: "Cypher Titan",
    src: cypherTitan,
    link: "https://drive.google.com/file/d/1WZ0OInIBiY5ZaprEy-U-yddda0zSkW3K/view?usp=sharing",
  },
];

const nonTechEvents = [
  {
    title: "Cinematography",
    src: cinematography,
    link: "https://drive.google.com/file/d/1D2n-dO4ojfGX439EZaHtu86uHDC1NWBC/view?usp=sharing",
  },
  {
    title: "Cricket",
    src: Cricket,
    link: "https://drive.google.com/file/d/1qr3WqfbK9sFuoxaMWAem7UPWu11seJ_W/view?usp=sharing",
  },
  {
    title: "Football",
    src: football,
    link: "https://drive.google.com/file/d/1JKrFqoxod9hqE3JOnX5fVtW-lgkp5NLW/view?usp=sharing",
  },
  {
    title: "Valorant",
    src: valo,
    link: "https://drive.google.com/file/d/13k9H5bM15AqSGwgtR9x5lXbfdMVZGmhV/view?usp=sharing",
  },
  {
    title: "BGMI",
    src: bgmi,
    link: "https://drive.google.com/file/d/13k9H5bM15AqSGwgtR9x5lXbfdMVZGmhV/view?usp=sharing",
  },
];

export default function Events() {
  return (
    <div
      className="min-w-screen h-fit flex items-center  flex-col my-20 gap-10"
      id="events"
    >
      <h2 className="text-4xl max-md:text-2xl font-bold text-center  ">
        Events
      </h2>
      <div className="min-w-screen max-md:gap-10 max-md:flex-col flex gap-40">
        <div className="">
          <h2 className="text-3xl max-md:text-xl py-10 font-bold text-center">
            Tech Events
          </h2>
          <div className="gap-20 flex flex-wrap  justify-center">
            {techEvents.map((event, index) => (
              <EventCard
                link={event.link}
                key={index}
                title={event.title}
                src={event.src}
              />
            ))}
          </div>
        </div>
        <div className="">
          <h2 className="text-3xl max-md:text-xl py-10 font-bold text-center">
            Non-Tech Events
          </h2>
          <div className="gap-24  flex flex-wrap  justify-center">
            {nonTechEvents.map((event, index) => (
              <EventCard
                link={event.link}
                key={index}
                title={event.title}
                src={event.src}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
