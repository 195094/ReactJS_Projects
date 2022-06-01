import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React",
    content: "JavaScript library",
  },
  {
    title: "Whay use react",
    content: "For that cahs money boi",
  },
  {
    title: "Best eer react app",
    content: "Probably not tho . . .",
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
