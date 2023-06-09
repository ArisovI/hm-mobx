import React from "react";
import { observer } from "mobx-react-lite";
import store from "../store/store";
import LearnItem from "./LearnItem";

const Learn: React.FC = observer(() => {
  const numberStatus = store.learn.filter((el) => el.status === true).length;
  return (
    <div>
      <h1>Learn</h1>
      <ul>
        {store.learn.map((obj: any) => {
          return <LearnItem key={obj.id} obj={obj} />;
        })}
      </ul>
      <div>
        {numberStatus} /{store.learn.length} left
      </div>
    </div>
  );
});

export default Learn;
