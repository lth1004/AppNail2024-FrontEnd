// App.js
import React from "react";
import { useAppSelector, useAppDispatch } from "./hooks/hooks";
import { setUserValue } from "./redux/user/userSlice";

function App() {
  const userValue = useAppSelector((state: any) => state.user.Value);
  console.log(userValue);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setUserValue("New Value")); // Thay đổi giá trị của Provider
  };

  return (
    <div>
      <h1>User Value: {userValue}</h1>
      <button onClick={handleClick}>Change Value</button>
    </div>
  );
}

export default App;
