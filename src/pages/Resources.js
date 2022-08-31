import React from "react";

import Bell from "../assets/bellschedule2122B.pdf";
import Courses from "../assets/CourseCatalog2022-2023.pdf";

export default function Resources() {
  return (
    <>
      <h1 className="mt-5 text-4xl font-bold text-center underline head">
        Resources
      </h1>

      <p className="mt-3 text-xl text-center desc">
        All resources, including notes, homework, and study guides are posted
        here
      </p>
      <h3 className="mt-5 ml-10 text-3xl underline subhead">Useful Links</h3>
      <ul className="mt-5 ml-10 text">
        <li className="ml-4">
          <a
            href="https://www.millburn.org/"
            className="underline alert hvr-grow"
            target="_blank"
          >
            ○ Official MHS website
          </a>
        </li>

        <li className="ml-4">
          <a
            href="https://drive.google.com/drive/folders/0BytHEdOU5suiZU1ZR2w4dDQ2czg?resourcekey=0-2rnog7nwl51dsap7gxGPIQ"
            className="underline alert hvr-grow"
            target="_blank"
          >
            ○ Future MHS Calendars
          </a>
        </li>

        <li className="ml-4">
          <a
            href="https://millburn.powerschool.com/public/"
            className="underline alert hvr-grow"
            target="_blank"
          >
            ○ Powerschool
          </a>
        </li>

        <li className="ml-4">
          <a href={Bell} className="underline alert hvr-grow" target="_blank">
            ○ Bell Schedules
          </a>
        </li>

        <li className="ml-4">
          <a
            href={Courses}
            className="underline alert hvr-grow"
            target="_blank"
          >
            ○ Course Catalog 22-23
          </a>
        </li>

        <li className="ml-4">
          <a
            href="https://launchpad.classlink.com/millburn"
            className="underline alert hvr-grow"
            target="_blank"
          >
            ○ Millburn Classlink
          </a>
        </li>

        <li className="ml-4">
          <a
            href="https://mhs.millburn.org/apps/pages/index.jsp?uREC_ID=811686&type=d&pREC_ID=1324940"
            className="underline alert hvr-grow"
            target="_blank"
          >
            ○ MHS Calendars (more detailed)
          </a>
        </li>
        <li className="ml-4">
          <a
            href="https://sci-hub.se/"
            className="underline alert hvr-grow"
            target="_blank"
          >
            ○ SciHub - Pirate science articles/journals
          </a>
        </li>
        <li className="ml-4">
          <a
            href="https://libgen.is/"
            className="underline alert hvr-grow"
            target="_blank"
          >
            ○ Library Genesis - Pirate books
          </a>
        </li>
        <li className="ml-4">
          <a
            href="https://z-lib.org/"
            className="underline alert hvr-grow"
            target="_blank"
          >
            ○ Z-lib - Pirate books
          </a>
        </li>
        <li className="ml-4">
          <a
            href="https://www.wolframalpha.com/"
            className="underline alert hvr-grow"
            target="_blank"
          >
            ○ WoframAlpha - Online calculator for higher-level maths
          </a>
        </li>
      </ul>
    </>
  );
}
