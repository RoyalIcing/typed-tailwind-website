import React from "react";
import { ctss as c, py } from "../../tailwind/functions";

import items from "./items";
const Source = React.lazy(() => import("./Source"));

export default function AlertsPage() {
  return (
    <div className={c(py("8", null))}>
      {items.map((item, index) => (
        <div className={c(py(null, "12"))}>
          {item}
          <Source index={index} />
        </div>
      ))}
    </div>
  );
}
