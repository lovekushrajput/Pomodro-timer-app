import { useContext } from "react";
import { Context } from "../../utlis/context";

function Clock() {
  const { time, setTime, isActive, setIsActive, initTime, setProgress } =
    useContext(Context);

  const getTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  };

  const toggleIsActive = () => {
    setIsActive(!isActive);
    if (time === 0) {
      setTime(initTime);
      setProgress(100);
    }
  };

  return (
    <div className="w-[290px] h-[290px]  bg-[rgb(0,0,0)]   rounded-full flex flex-col justify-center">
      <div>
        <h2 className="text-white text-center text-7xl tracking-wide">
          {getTime(time)}
        </h2>
      </div>

      <button
        onClick={toggleIsActive}
        className={`uppercase tracking-widest text-2xl mt-4 cursor-pointer ${
          time === 0 ? "text-red-500" : "text-white"
        }`}
      >
        {time === 0 ? "reset" : isActive ? "pause" : "start"}
      </button>
    </div>
  );
}

export default Clock;
