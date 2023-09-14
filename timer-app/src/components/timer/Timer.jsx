import Tags from "./Tags";
import Circular from "./Circular";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../utlis/context";
import { signOut } from "firebase/auth";
import { auth } from ".././FirebaseConfig";
import { useNavigate } from "react-router-dom";

function Timer() {
  const [isSlideOpen, setIsSlideOpen] = useState(false);
  const navigate = useNavigate();

  const { isActive, time, setTime, setProgress, initTime, currentUser } =
    useContext(Context);

  useEffect(() => {
    if (isActive && time > 0) {
      let interval = setInterval(() => {
        setTime((prevState) => prevState - 1);
        setProgress((prevState) => prevState - 100 / initTime);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [initTime, time, isActive]);



  return (
    <div className="font-sans bg-gradient-to-tr  from-[rgb(208,181,146)] to-[rgb(44,40,37)] h-screen flex flex-col items-center">
      <h1 className="text-white text-5xl font-semibold tracking-wide mt-1 mb-10 uppercase">
        Pomodro
      </h1>
      <Tags />
      <Circular />
      <div
        className="mt-6 text-3xl cursor-pointer"
        onClick={() => setIsSlideOpen(true)}
      >
        ⚙️
      </div>
      {isSlideOpen && (
        <div className="w-full h-full bg-[rgba(0,0,0,0.5)]  fixed top-0 left-0 right-0 bottom-0">
          <div className="w-[300px] h-[50vh] bg-white absolute right-0 rounded-lg mt-3 mr-3">
            <div className="flex justify-between items-center mx-2 my-2 border-b pb-2">
              <h3 className="uppercase font-semibold text-xl">Profile</h3>
              <span
                className="uppercase font-medium text-base hover:opacity-60 cursor-pointer"
                onClick={() => setIsSlideOpen(false)}
              >
                X <span>close</span>
              </span>
            </div>

            <div className="mx-2">
              <h4 className="mt-5  text-2xl text-yellow-700 font-bold">
                {currentUser.displayName}
              </h4>
              <p>{currentUser.email}</p>
            </div>

            <div className="flex justify-center border-2 border-yellow-600 mt-10 mx-2 uppercase">
              <button
                onClick={() => {
                  signOut(auth);
                  navigate("/");
                }}
                className="uppercase  cursor-pointer"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Timer;
