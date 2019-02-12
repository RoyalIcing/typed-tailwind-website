import React from "react";
import { ctss as c, py, my, text, leading } from "../../tailwind/functions";

const items = ["types", "functions"] as Array<"types" | "functions">;
const Source = React.lazy(() => import("./Source"));

export default function AlertsPage() {
  return (
    <div className={c(py("8", null))}>
      <article className={c(text("xl"), leading("normal"), my(null, "8"))}>
        <p className={c(my(null, "4"))}>
          Coming very soon <a href="https://github.com/RoyalIcing/ctss">to GitHub — star the project today.</a>
        </p>
        <p className={c(my(null, "4"))}>
          The project works by importing your <code>tailwind.js</code> config file. It’s able to infer types based on the actual values you’ve entered there. There’s no compilation or magic apart from TypeScript itself.
        </p>
      </article>

      {items.map(item => (
        <div className={c(py(null, "12"))}>
          <Source name={item} />
        </div>
      ))}
    </div>
  );
}
