import { useState } from "react";
// import axios from "axios";

export function Outfit() {
  //saves the count
  const [count, setCount] = useState(0);

  //submits the count as a high score
  async function submitHighscore() {
    // make router first
  }
  //the html returned from the component
  return (
    <div className={"example-component w-fit flex flex-col gap-5 px-5"}>
      <div>current count {count}</div>
      <button
        className={"border-black border-2 px-5 py-2"}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment count
      </button>
      <button
        onClick={() => {
          submitHighscore().then();
        }}
      >
        Submit
      </button>
    </div>
  );
}
