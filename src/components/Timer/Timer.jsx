import React from "react";
import { useState, useEffect } from "react";

const Timer = (props) => {
  const { initialMinute = 10, initialSeconds = 0, stop } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [lastminutes, setlastMinutes] = useState(0);
  const [lastseconds, setlastSeconds] = useState(0);

  useEffect(() => {
    let myInterval;
    if (!stop) {
      myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    } else {
      setlastMinutes(minutes);
      setlastSeconds(seconds);
      clearInterval(myInterval);
    }

    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <>
      {stop ? (
        <div>
          {lastminutes === 0 && lastseconds === 0 ? (
            "0:00"
          ) : (
            <h1>
              {lastminutes}:{lastseconds}
            </h1>
          )}
        </div>
      ) : (
        <div>
          {minutes === 0 && seconds === 0 ? (
            "0:00"
          ) : (
            <h1>
              {" "}
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </h1>
          )}
        </div>
      )}
    </>
  );
};

export default Timer;
