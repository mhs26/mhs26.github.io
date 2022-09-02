import React from "react";

import Day1Bells from "../assets/Day1Bells2022.pdf";
import MHSCalendar from "../assets/MHScalendar2022-23.pdf";
import Scavenger from "../assets/Scavenger.png";
import Homeroom from "../assets/Homerooms.pdf";

export default function Announcements() {
  return (
    <>
      <h1 className="mt-5 text-4xl font-bold text-center underline head">
        Announcements
      </h1>

      <p className="mt-3 text-xl text-center desc">
        Announcements from teachers, emails, and other events are posted here
      </p>

      <div className="left1">
        <h3 className="mt-5 ml-10 text-3xl underline subhead">
          N/A
        </h3>
        <ul className="mt-5 ml-10 text">

        </ul>
      </div>

      <div className="right1">
        <h3 className="mt-5 ml-10 text-3xl underline subhead">
          Archived Announcements
        </h3>
        <ul className="mt-5 ml-10 archived">
          <li className="ml-4">
            {" "}
            <a
              href={Day1Bells}
              className="underline alert hvr-grow archived"
              target="_blank"
              rel="noreferrer noopener"
            >
              ○ Grade 9 Day 1 Schedule
            </a>
          </li>
          <li className="ml-4">
            {" "}
            <a
              href={Homeroom}
              className="underline alert hvr-grow archived"
              target="_blank"
              rel="noreferrer noopener"
            >
              ○ Grade 9 Day 1 HOMEROOM PLACEMENTS (Homeroom begins @ 8:00)
            </a>
          </li>
    </ul>
        <h3 className="mt-5 ml-10 text-xl subhead archived">
          Freshman Orientation
        </h3>
        <ul className="mt-5 ml-10 text archived">
          <li className="ml-4">
            ○ Open house begins at 9:00 AM, ends at 11:00 AM
          </li>
          <li className="ml-4">
            ○ Parents may come to the auditorium for more information
          </li>
          <li className="ml-4">
            ○ Senior Ambassadors will greet you when you enter and direct you to
            your homeroom before 9.
          </li>
          <li className="ml-4">○ Scavenger Hunt during tour</li>
          <li className="ml-4">○ Band will also have a meeting</li>
          <li className="ml-4">○ Chromebook pickup ~11:00 AM</li>
          <li className="ml-4">
            {" "}
            <a
              href={Day1Bells}
              className="underline alert hvr-grow archived"
              target="_blank"
              rel="noreferrer noopener"
            >
              ○ Grade 9 Open House + Orientation!
            </a>
          </li>
          <li className="ml-4">
            {" "}
            <a
              href={MHSCalendar}
              className="underline alert hvr-grow archived"
              target="_blank"
              rel="noreferrer noopener"
            >
              ○ Updated MHS Calendar 22-23 (you can find a condensed version in
              "Calendar")
            </a>
          </li>
          <li className="ml-4">
            {" "}
            <a
              href={Scavenger}
              className="underline alert hvr-grow archived"
              target="_blank"
              rel="noreferrer noopener"
            >
              ○ Scavenger hunt information
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
