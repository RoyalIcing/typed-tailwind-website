import React from "react";

import Item from "../Item";
import {
  ctss as c,
  bg,
  border,
  text,
  font,
  mx,
  my,
  px,
  py,
  rounded,
  display,
  hover,
  cursor,
  listReset,
  textStyle
} from "../../tailwind/functions";

export default [
  <Item>
    <ul className={c(listReset(), display("flex"), border({ b: true }))}>
      <li className={c(my(null, "px", "-"), mx(null, "1"))}>
        <a
          href="#"
          className={c(
            bg("white"),
            display("inline-block"),
            border({ l: true, t: true, r: true }),
            rounded({ t: true }),
            py("2"),
            px("4"),
            text("blue-dark"),
            font("semibold"),
            textStyle("no-underline")
          )}
        >
          Active
        </a>
      </li>
      <li className={c(mx(null, "1"))}>
        <a
          href="#"
          className={c(
            bg("white"),
            display("inline-block"),
            py("2"),
            px("4"),
            text("blue"),
            hover(text("blue-darker")),
            font("semibold"),
            textStyle("no-underline")
          )}
        >
          Tab
        </a>
      </li>
      <li className={c(mx(null, "1"))}>
        <a
          href="#"
          className={c(
            bg("white"),
            display("inline-block"),
            py("2"),
            px("4"),
            text("blue"),
            hover(text("blue-darker")),
            font("semibold"),
            textStyle("no-underline")
          )}
        >
          Tab
        </a>
      </li>
      <li className={c(mx(null, "1"))}>
        <a
          href="#"
          className={c(
            bg("white"),
            display("inline-block"),
            py("2"),
            px("4"),
            text("grey-light"),
            font("semibold"),
            textStyle("no-underline"),
            cursor("default")
          )}
        >
          Tab
        </a>
      </li>
    </ul>
  </Item>
];
