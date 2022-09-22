import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <h1>카운터 {count}</h1>
        <button
          className="border-2 border-solid border-black p-2 mr-1"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +1
        </button>
        <button
          className="border-2 border-solid border-black p-2 mr-1"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -1
        </button>
      </div>
    </>
  );
}
