import React from "react";
import { observer } from "mobx-react-lite";

import store from "../store/store";
const Timer = observer(() => {
  function out() {
    store.mouseOut();
    store.total();
  }
  function over() {
    store.mouseOver();
    store.total();
  }
  function click() {
    store.click();
    store.total();
  }
  return (
    <div style={{ height: "2  00px", background: "orange" }}>
      <pre onClick={click} onMouseOut={out} onMouseOver={over}>
        {JSON.stringify(store.timer, null, 2)}
      </pre>
      <div>
        <button onClick={() => store.reset()}>RESET</button>
        <button onClick={() => store.timestamps()}>TIMER</button>
      </div>
    </div>
  );
});

export default Timer;
