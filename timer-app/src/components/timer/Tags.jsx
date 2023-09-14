import { useContext } from "react";
import { Context } from "../../utlis/context";

function Tags() {
  const { activeTag, setActiveTag } = useContext(Context);

  return (
    <div className="bg-[rgb(61,46,27)] xs:w-[90%] w-[25%] flex justify-evenly h-9 items-center rounded-3xl">
      {["Work", "Short break"].map((item, i) => (
        <button
          key={item}
          className={`rounded-3xl text-sm font-semibold px-4  py-1 uppercase ${
            activeTag === i ? "bg-yellow-800 text-white" : ""
          }`}
          onClick={() => setActiveTag(i)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default Tags;
