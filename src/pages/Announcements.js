import React from "react";

import Day1Bells from "../assets/Day1Bells2022.pdf";
import MHSCalendar from "../assets/MHScalendar2022-23.pdf";
import Scavenger from "../assets/Scavenger.png";

export default function Announcements() {
  return (
    <>
      <h1 className="mt-5 text-4xl font-bold text-center underline head">
        Announcements
      </h1>

      <p className="mt-3 text-xl text-center desc">
        Announcements from teachers, emails, and other events are posted here
      </p>

      <div className="left">
        <h3 className="mt-5 ml-10 text-3xl underline subhead">
          Freshman Orientation
        </h3>
        <ul className="mt-5 ml-10 text">
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
              className="underline alert hvr-grow"
              target="_blank"
            >
              ○ Grade 9 Open House + Orientation!
            </a>
          </li>
          <li className="ml-4">
            {" "}
            <a
              href={MHSCalendar}
              className="underline alert hvr-grow"
              target="_blank"
            >
              ○ Updated MHS Calendar 22-23 (you can find a condensed version in
              "Calendar")
            </a>
          </li>
          <li className="ml-4">
            {" "}
            <a
              href={Scavenger}
              className="underline alert hvr-grow"
              target="_blank"
            >
              ○ Scavenger hunt information
            </a>
          </li>
        </ul>
      </div>

      <div className="right">
        <h3 className="mt-5 ml-10 text-3xl underline subhead">
          No more announcements for now...
        </h3>
      </div>
    </>
  );
}
