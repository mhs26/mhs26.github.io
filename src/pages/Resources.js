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

      <div className="left1">
        <h3 className="mt-5 ml-10 text-3xl underline head">Daily Homework</h3>

        <h3 className="mt-5 ml-16 text-3xl underline subhead">
          Accel SS - Kian Barry
        </h3>
        <ul className="mt-5 ml-10 text">
          <li className="ml-20">
            <a
              href="https://classroom.google.com/c/NTQ0MjcxMzY1MzE2/a/NTQ1MDM4MDMwNzIw/details"
              className="underline alert hvr-grow"
              target="_blank"
              rel="noreferrer noopener"
            >
              ○ Ch. 1 of "Guns, Germs, and Steel - <strong>Due Sep 6</strong>
            </a>
          </li>

          <h3 className="mt-5 ml-6 text-3xl underline subhead">
            Acc Econ - Blijdesteijn
          </h3>

          <li className="ml-20">
            <a
              href="https://classroom.google.com/c/NTQ0Mjg2NzU0Njk3/a/NTQ0Mjg3MjQzNTE0/details"
              className="underline alert hvr-grow"
              target="_blank"
              rel="noreferrer noopener"
            >
              ○ Course Guidelines - <strong>Due Sep 7</strong>
            </a>
          </li>
        </ul>
      </div>

      <div class="right1">
        <h3 className="mt-5 ml-10 text-3xl underline subhead">Useful Links</h3>

        <ul className="mt-5 ml-10 text">
          <li className="ml-4">
            <a
              href="https://www.millburn.org/"
              className="underline alert hvr-grow"
              target="_blank"
              rel="noreferrer noopener"
            >
              ○ Official MHS website
            </a>
          </li>

          <li className="ml-4">
            <a
              href="https://drive.google.com/drive/folders/0BytHEdOU5suiZU1ZR2w4dDQ2czg?resourcekey=0-2rnog7nwl51dsap7gxGPIQ"
              className="underline alert hvr-grow"
              target="_blank"
              rel="noreferrer noopener"
            >
              ○ Future MHS Calendars
            </a>
          </li>

          <li className="ml-4">
            <a
              href="https://millburn.powerschool.com/public/"
              className="underline alert hvr-grow"
              target="_blank"
              rel="noreferrer noopener"
            >
              ○ Powerschool
            </a>
          </li>

          <li className="ml-4">
            <a
              href={Bell}
              className="underline alert hvr-grow"
              target="_blank"
              rel="noreferrer noopener"
            >
              ○ Bell Schedules
            </a>
          </li>

          <li className="ml-4">
            <a
              href={Courses}
              className="underline alert hvr-grow"
              target="_blank"
              rel="noreferrer noopener"
            >
              ○ Course Catalog 22-23
            </a>
          </li>

          <li className="ml-4">
            <a
              href="https://launchpad.classlink.com/millburn"
              className="underline alert hvr-grow"
              target="_blank"
              rel="noreferrer noopener"
            >
              ○ Millburn Classlink
            </a>
          </li>

          <li className="ml-4">
            <a
              href="https://mhs.millburn.org/apps/pages/index.jsp?uREC_ID=811686&type=d&pREC_ID=1324940"
              className="underline alert hvr-grow"
              target="_blank"
              rel="noreferrer noopener"
            >
              ○ MHS Calendars (more detailed)
            </a>
          </li>
          <li className="ml-4">
            <a
              href="https://sci-hub.se/"
              className="underline alert hvr-grow"
              target="_blank"
              rel="noreferrer noopener"
            >
              ○ SciHub - Pirate science articles/journals
            </a>
          </li>
          <li className="ml-4">
            <a
              href="https://libgen.is/"
              className="underline alert hvr-grow"
              target="_blank"
              rel="noreferrer noopener"
            >
              ○ Library Genesis - Pirate books
            </a>
          </li>
          <li className="ml-4">
            <a
              href="https://z-lib.org/"
              className="underline alert hvr-grow"
              target="_blank"
              rel="noreferrer noopener"
            >
              ○ Z-lib - Pirate books
            </a>
          </li>
          <li className="ml-4">
            <a
              href="https://www.wolframalpha.com/"
              className="underline alert hvr-grow"
              target="_blank"
              rel="noreferrer noopener"
            >
              ○ WoframAlpha - Online calculator for higher-level maths
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
