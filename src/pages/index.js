import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { startButton } from "@/components/startButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [sec, setSec] = useState(0);
  const [stop, setStop] = useState(false);
  function Increase() {
    setSec(sec + 1);
  }
  function handleStop() {
    setStop(!stop);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (stop) {
        setSec(sec + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sec, stop]);

  return (
    <>
      <div>{sec}</div>
      <button onClick={handleStop}>stop-watch</button>
    </>
  );
}
