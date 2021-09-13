import dayjs from "dayjs";
export const lineData = [
  {
    id: "Sesizari",

    data: [
      {
        x: dayjs().subtract(11, "month").format("MMM"),
        y: 130,
      },
      {
        x: dayjs().subtract(10, "month").format("MMM"),
        y: 110,
      },
      {
        x: dayjs().subtract(9, "month").format("MMM"),
        y: 180,
      },
      {
        x: dayjs().subtract(8, "month").format("MMM"),
        y: 160,
      },
      {
        x: dayjs().subtract(7, "month").format("MMM"),
        y: 46,
      },
      {
        x: dayjs().subtract(6, "month").format("MMM"),
        y: 74,
      },
      {
        x: dayjs().subtract(5, "month").format("MMM"),
        y: 150,
      },
      {
        x: dayjs().subtract(4, "month").format("MMM"),
        y: 170,
      },
      {
        x: dayjs().subtract(3, "month").format("MMM"),
        y: 65,
      },
      {
        x: dayjs().subtract(2, "month").format("MMM"),
        y: 57,
      },
      {
        x: dayjs().subtract(1, "month").format("MMM"),
        y: 80,
      },
    ],
  },
];
