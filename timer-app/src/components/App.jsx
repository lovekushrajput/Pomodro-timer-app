import { useContext } from "react";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Timer from "./timer/Timer";
import { Route, Routes } from "react-router-dom";
import { Context } from "../utlis/context";

function App() {
  const { currentUser } = useContext(Context);
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/login"} element={<Login />} />
        {currentUser && <Route path={"/timer"} element={<Timer />} />}
      </Routes>
    </>
  );
}

export default App;
