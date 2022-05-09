import React, { useState, useEffect } from 'react'

interface CountDownProps { }

const CountDown = (props: CountDownProps) => {
  const [num, setNum] = useState<number>(100);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(num);
      setNum((prev) => prev - 1)
    }, 1000)
    return () => {
      clearInterval(interval);
      console.log("clear");
    }
  }, [num])

  return (
    <div>CountDown: {num}</div>
  )
}

export default CountDown;