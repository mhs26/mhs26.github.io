import React from "react";

export default function Calendar() {
  return (
    <>
      <h1 className="mt-5 text-4xl font-bold text-center underline head">
        Calendar
      </h1>

      <p className="mt-3 text-xl text-center desc">
        All important dates including school calendar, test dates, and other
        events will be here. (Daily Homework can be found on the "Resources"
        page)
      </p>

      <div className="left">
        <h3 className="mt-5 ml-10 text-3xl underline subhead">
          General School
        </h3>
        <ul className="mt-5 ml-10 text">
          <li className="normal">9/1/22 :: School starts</li>
          <li className="mt-2 closed">9/5 :: District CLOSED (Labor Day)</li>
          <li className="mt-2 delay">9/19 :: Delayed Opening (Staff PD)</li>
          <li className="mt-2 closed">9/26 - 9/27 :: District CLOSED</li>
          <li className="mt-2 closed">10/5 :: District CLOSED</li>
          <li className="mt-2 delay">10/10 Early Dismissal (Staff PD)</li>
          <li className="mt-2 closed">10/24 :: District CLOSED</li>
          <li className="mt-2 closed">
            11/10 - 11/11 :: District CLOSED (NJEA Conv.)
          </li>
          <li className="mt-2 delay">11/23 :: Early Dismissal</li>
          <li className="mt-2 closed">
            11/24 - 11/25 :: District CLOSED (Thanksgiving)
          </li>
          <li className="mt-2 delay">12/5 :: Delayed Opening (Staff PD)</li>
          <li className="mt-2 delay">12/23 :: Early Dismissal</li>
          <li className="mt-2 closed">
            12/26 - 1/2/23 :: District CLOSED (Winter Break) 🥳
          </li>
          <li className="mt-2 closed">1/16 - District CLOSED (MLK Jr. Day)</li>
          <li className="mt-2 delay">1/30 - Delayed Opening (Staff PD)</li>
          <li className="mt-2 closed">
            2/20 - 2/24 - District CLOSED (Midwinter Break) 🥳
          </li>
          <li className="mt-2 delay">3/15 - Early Dismissal (Staff PD)</li>
          <li className="mt-2 closed">
            4/3 - 4/7 :: District CLOSED (Spring Break) 🥳
          </li>
          <li className="mt-2 closed">5/29 - District CLOSED (Memorial Day)</li>
          <li className="mt-2 delay">6/5 :: Early Dismissal (Staff PD)</li>
          <li className="mt-2 normal">6/21 :: Last day of School! 🥳</li>
        </ul>
      </div>

      <div className="right">
        <h3 className="mt-5 ml-10 text-3xl underline subhead">
          Class-Specific (Test dates, Due dates, etc)
        </h3>
        <ul className="mt-5 ml-10 text">
          <li className="normal">9/1/22 :: School starts</li>
        </ul>
      </div>
    </>
  );
}
