import { observable, action } from "mobx";
interface LearnItem {
  id: number;
  value: string;
  status: boolean;
}

interface Timer {
  click: number;
  mouseOver: number;
  mouseOut: number;
  timestapm: number | null | Date;
  total: number;
}

interface State {
  learn: LearnItem[];
  timer: Timer;
  changeStatus: (payload: number) => void;
  click: () => void;
  mouseOver: () => void;
  mouseOut: () => void;
  total: () => void;
  reset: () => void;
  timestamps: () => void;
}
const store: State = observable({
  learn: [
    {
      id: 1,
      value: "Learn css",
      status: false,
    },
    {
      id: 2,
      value: "Learn js",
      status: false,
    },
  ],
  timer: {
    click: 0,
    mouseOver: 0,
    mouseOut: 0,
    timestapm: null,
    total: 0,
  },

  changeStatus: action((payload: number) => {
    const item = store.learn.find((item) => item.id === payload);
    if (item) {
      item.status = !item.status;
    }
  }),
  click: action(() => {
    store.timer.click++;
  }),
  mouseOver: action(() => {
    store.timer.mouseOver++;
  }),
  mouseOut: action(() => {
    store.timer.mouseOut++;
  }),
  total: action(() => {
    store.timer.total =
      store.timer.click + store.timer.mouseOver + store.timer.mouseOut;
  }),

  timestamps: action(() => {
    const updatetime = action(() => {
      const date = new Date();
      store.timer.timestapm = date;
    });

    setInterval(updatetime, 1000);
  }),

  reset: action(() => {
    store.timer.click = 0;
    store.timer.mouseOut = 0;
    store.timer.mouseOver = 0;
    store.timer.total = 0;
    store.timer.timestapm = null;
  }),
});

export default store;
