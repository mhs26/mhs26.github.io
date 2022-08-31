import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  // Sep 1, 2022 8:00:00
  // Jun 1, 2023 2:50:00
  const calculateTimeLeft = (time) => {
    const endTime = Math.floor(new Date(time).getTime() / 1000);

    const nowTime = Math.floor(new Date().getTime() / 1000);

    console.log(nowTime);

    const timeLeft = endTime - nowTime;

    if (timeLeft < 0) return;

    const days = Math.floor(timeLeft / 86400);
    const hours = Math.floor((timeLeft - days * 86400) / 3600);
    const minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    const seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );

    if (days) {
      return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
    }
    if (hours) {
      return `${hours} hours ${minutes} minutes ${seconds} seconds`;
    }
    if (minutes) {
      return `${minutes} minutes ${seconds} seconds`;
    }
    if (seconds) {
      return `${seconds} seconds`;
    }
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
        {timeLeft ? (
          <>
            {timeLeft} <strong>until school STARTS</strong>
          </>
        ) : (
          <span>School started! The grind begins...</span>
        )}{" "}
      </h3>

      <h3 className="mt-5 text-2xl text-center cdown">
        {timeLeft1 ? (
          <>
            {timeLeft1} <strong>until school ENDS</strong>
          </>
        ) : (
          <span>Time's up!</span>
        )}{" "}
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
