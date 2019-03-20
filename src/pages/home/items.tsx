import React from "react";

import Item from "../Item";
import { ctss as c, text, my, leading } from "../../tailwind/functions";

export default [
  <Item>
    <h1 className={c(text("center", "5xl"), my("10"))}>
      TailwindCSS meets TypeScript
    </h1>
    <h2 className={c(text("center", "2xl", "blue-dark"), my("10"))}>
      Automatically create TypeScript functions from your Tailwind config.
    </h2>
  </Item>,

  <Item>
    <h2 className={c(text("center", "3xl"), leading("loose"))}>Benefits</h2>
    <ul className={c(text("lg"), leading("loose"))}>
      <li>
        <strong>Great developer experience:</strong> Get autocompletion for your
        custom colors, font sizes, and everything in Tailwind.
      </li>
      <li>
        <strong>Goodbye typos:</strong> Never misspell a class name again:
        type-checking means typos are compile-time errors.
      </li>
      <li><strong>Simple server rendering:</strong> Zero config server rendering — it’s just static CSS!</li>
      <li>
        <strong>Fast: </strong>Use media-query-based breakpoints and <code>:hover</code>,{" "}
        <code>:focus</code>, <code>:active</code> pseudo classes — purely with
        CSS.
      </li>
      <li>
        <strong>Secure:</strong>
        {" No "}
        <a href="https://frontarm.com/james-k-nelson/how-can-i-use-css-in-js-securely/">
          CSS-in-JS injection attacks.
        </a>
      </li>
    </ul>
  </Item>
];
