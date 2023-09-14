import { useContext } from "react";
import { Context } from "../../utlis/context";
import Clock from "./Clock";

function Circular() {
  return (
    <div>
      <OuterCircle></OuterCircle>
    </div>
  );
}

function OuterCircle() {
  return (
    <div className="w-[350px] h-[350px]  bg-[rgb(0,0,0)]  rounded-full grid place-items-center mt-10">
      <InnerCircle></InnerCircle>
    </div>
  );
}

function InnerCircle() {
  const { progress } = useContext(Context);
  return (
    <div
      style={{
        background: `conic-gradient(red ${progress}%, transparent ${progress}%)`,
      }}
      className="w-[300px] h-[300px] bg-red-700   rounded-full grid place-items-center"
    >
      <Clock />
    </div>
  );
}

export default Circular;
