import React, { useState, useEffect } from 'react';

const timeStyle = {
  margin: '10px',
  border: '2px solid grey',
  color: '#fff',
  backgroundColor: '#000',
};

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(t);
  }, []);

  const formatCurrentTime = (now) => {
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    function formatTwoDigits(number) {
      return number < 10 ? `0${number}` : number;
    }

    const formattedHours = formatTwoDigits(hours);
    const formattedMinutes = formatTwoDigits(minutes);
    const formattedSeconds = formatTwoDigits(seconds);

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return <h1 style={timeStyle}>{formatCurrentTime(time)}</h1>;
}
