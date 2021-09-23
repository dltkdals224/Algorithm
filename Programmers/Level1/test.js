import React, { useState } from "react";
export default function Counter() {
  const [state, setState] = useState({ count: 0 });
  console.log("mounted or updated");
  return (
    <div>
      {" "}
      <p>{state.count}</p>{" "}
      <button
        onClick={() => {
          setState((prevState) => ({ count: prevState.count + 1 }));
        }}
      >
        {" "}
        +1{" "}
      </button>{" "}
      <button
        onClick={() =>
          setState((prevState) => ({ count: prevState.count - 1 }))
        }
      >
        {" "}
        -1{" "}
      </button>{" "}
    </div>
  );
}
