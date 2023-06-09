import { observer } from "mobx-react-lite";
import React from "react";
import store from "../store/store";

interface ILearnItemProps {
  obj: any;
}

const LearnItem: React.FC<ILearnItemProps> = observer(({ obj }) => {
  return (
    <li
      style={{
        textDecoration: obj.status ? "line-through" : "",
        userSelect: "none",
      }}
      onDoubleClick={() => store.changeStatus(obj.id)}
    >
      {obj.value}
    </li>
  );
});

export default LearnItem;
