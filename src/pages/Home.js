import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  // Sep 1, 2022 8:00:00
  // Jun 1, 2023 2:50:00
  const calculateTimeLeft = (time) => {
    let finalDate = new Date(time).getTime();
    const difference = +finalDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft("Sep 1, 2022 8:00:00")
  );

  const [timeLeft1, setTimeLeft1] = useState(
    calculateTimeLeft("Jun 1, 2023 2:50:00")
  );

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft("Sep 1, 2022 8:00:00"));
      setTimeLeft1(calculateTimeLeft("Jun 1, 2023 2:50:00"));
    }, 1000);
  });

  const timerComponents = [];
  const timerComponents1 = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  Object.keys(timeLeft1).forEach((interval1) => {
    if (!timeLeft1[interval1]) {
      return;
    }

    timerComponents1.push(
      <span>
        {timeLeft1[interval1]} {interval1}{" "}
      </span>
    );
  });

  return (
    <>
      <h1 className="mt-5 text-4xl font-bold text-center underline head">
        Millburn High School - Website of the Millers
      </h1>

      <p className="mt-3 text-xl text-center desc">
        Welcome to the unofficial student-run website of Millburn High School
        class of 2026. Here you will find useful link and resources (homework,
        study guides, notes) for school.
      </p>

      <h3 className="mt-10 text-2xl text-center cdown">
        {timerComponents.length ? (
          timerComponents
        ) : (
          <span>School started! The grind begins...</span>
        )}{" "}
        <strong>until school STARTS</strong>
      </h3>

      <h3 className="mt-5 text-2xl text-center cdown">
        {timerComponents1.length ? timerComponents1 : <span>Time's up!</span>}{" "}
        <strong>until school ENDS</strong>
      </h3>

      <h3 className="mt-32 text-3xl text-center text-red-300">
        Alert:{" "}
        <Link to="/announcements" className="underline alert hvr-float-shadow">
          Grade 9 Open House + Orientation!
        </Link>
      </h3>
    </>
  );
}
