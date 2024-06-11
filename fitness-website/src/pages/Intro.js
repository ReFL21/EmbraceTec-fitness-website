import React, { useState, useEffect, useRef } from "react";
import LineChart from "../components/LineChart";
import { UserData } from "../Data";
import "./Intro.css";

function Intro() {
  const userData = {
    labels: UserData.map((data) => data.date),
    datasets: [
      {
        labels: UserData.map((data) => data.kcal),
        data: UserData.map((data) => data.weight),
        borderColor: "red",
        pointHoverRadius: 7,
        pointHoverBackgroundColor: "black",
        segment: {
          borderColor: (ctx) =>
            ctx.p0.parsed.y < ctx.p1.parsed.y ? "red" : "green",
        },
      },
    ],
  };

  return (
    <main className="main-intro">
      <div className="ebigo">
        {/* <div className="image-container">
          <img src={cannabisImage} alt="Cannabis Plant" />
        </div> */}
        <div className="text-container">
          <h1 className="zaglavie">Personal Purpose</h1>
          <p className="opisanie">
            For my Embrace Tec minor semester, I chose to follow a healthier
            lifestyle with the goal in mind to get in better shape and track my
            overall progress every day as my Personal Purpose project.
          </p>
          <p className="opisanie">
            My regime was simple, eating less than 2320 kcalories a day, 
            which is my maintenance, and hitting the gym as much as possible
            (weight training 4x per week and cardio).
          </p>
          <p className="opisanie">
          There were days when I felt discouraged, when the scale didn't move
          as fast as I wanted it to, or when I craved unhealthy foods. During
          these times, I reminded myself why I started and focused on my progress,
          not perfection. Every small victory, whether it was resisting a craving
          or noticing my clothes fitting better, motivated me to keep going.
          </p>
          <p className="opisanie">
          If you're considering starting your weight loss journey, know that it's possible.
          You have the strength within you to make changes and achieve your goals. Take it
          one step at a time, celebrate every victory, and don't be too hard on yourself. 
          Your journey will have ups and downs, but every effort you make is a step toward
          a healthier future.
          Remember, the journey of a thousand miles begins with a single step. 
          If I can do it, so can you. Start today, and let your journey to a healthier you begin.
          </p>
          <p className="opisanie">
          Stay motivated, stay positive, and most importantly, believe in yourself.
          Your journey to a healthier you starts now.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Intro;
