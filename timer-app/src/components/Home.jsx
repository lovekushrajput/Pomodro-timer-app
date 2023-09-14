import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="font-sans bg-gradient-to-tr from-[rgb(208,181,146)] to-[rgb(44,40,37)] h-screen text-white text-3xl flex flex-col justify-center items-center">
      <div className="flex flex-col h-[400px] justify-between items-center">
        <h1 className="text-center text-4xl  text-gray-300 leading-[50px] tracking-widest">
          We are getting ready <br /> to launch
          <span className="font-semibold"> POMODRO </span>
          timer!
        </h1>

        <div className="w-[92%]">
          <div className="flex justify-between mb-4">
            <span className="tracking-widest">00</span>
            <span className="tracking-widest">00</span>
            <span className="tracking-widest">00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm uppercase tracking-wider">Hours</span>
            <span className="text-sm uppercase tracking-wider ml-2">
              minutes
            </span>
            <span className="text-sm uppercase tracking-wider">seconds</span>
          </div>
        </div>

        <button
          onClick={() => navigate("/register")}
          className="uppercase bg-[#685b4a] text-2xl tracking-wider hover:opacity-60 py-4 px-10 rounded-2xl"
        >
          Let`s started -{">"}
        </button>
      </div>
    </div>
  );
}

export default Home;
