import React from "react";
import { ctss as c, sm, lg, bg, border, text, font, leading, mx, my, px, py, w, h, rounded, display, relative, absolute, fill, items, flexItem, textStyle, opacity, hover, cursor, shadow } from "../tailwind/functions";

export default function ButtonsPage() {
  return (
    <div className={c(py("8", null))}>
      <div className={c(my(null, "8"))}>
        <button className={c(
          bg("blue"),
          hover(bg("blue-dark")),
          text("white"),
          font("bold"),
          py("2"),
          px("4"),
          rounded()
        )}>
          Simple
        </button>
      </div>

      <div className={c(my(null, "8"))}>
        <button className={c(
          bg("blue"),
          hover(bg("blue-dark")),
          text("white"),
          font("bold"),
          py("2"),
          px("4"),
          rounded("full")
        )}>
          Pill
        </button>
      </div>

      <div className={c(my(null, "8"))}>
        <button className={c(
          bg("transparent"),
          hover(bg("blue")),
          text("blue-dark"),
          hover(text("white")),
          font("semibold"),
          py("2"),
          px("4"),
          border(true, "blue"),
          hover(border(null, "transparent")),
          rounded()
        )}>
          Outline
        </button>
      </div>

      <div className={c(my(null, "8"))}>
        <button className={c(
          bg("blue"),
          hover(bg("blue-dark")),
          text("white"),
          font("bold"),
          py("2"),
          px("4"),
          border(true, "blue-darker"),
          rounded()
        )}>
          Bordered
        </button>
      </div>

      <div className={c(my(null, "8"))}>
        <button disabled className={c(
          bg("blue"),
          hover(bg("blue-dark")),
          text("white"),
          font("bold"),
          py("2"),
          px("4"),
          rounded(),
          opacity("50"),
          cursor("not-allowed"),
        )}>
          Disabled
        </button>
      </div>

      <div className={c(my(null, "8"))}>
        <button className={c(
          bg("blue"),
          hover(bg("blue-light")),
          text("white"),
          font("bold"),
          py("2"),
          px("4"),
          border({b: "4"}, "blue-dark"),
          hover(border(null, "blue")),
          rounded()
        )}>
          3D
        </button>
      </div>

      <div className={c(my(null, "8"))}>
        <button className={c(
          bg("white"),
          hover(bg("grey-lightest")),
          text("grey-darkest"),
          font("semibold"),
          py("2"),
          px("4"),
          border(true, "grey-light"),
          rounded(),
          shadow()
        )}>
          Elevated
        </button>
      </div>
      
      <div className={c(my(null, "8"))}>
        <button className={c(
          bg("grey-light"),
          hover(bg("grey")),
          text("grey-darkest"),
          font("bold"),
          py("2"),
          px("4"),
          rounded({l: true}),
        )}>
          Prev
        </button>
        <button className={c(
          bg("grey-light"),
          hover(bg("grey")),
          text("grey-darkest"),
          font("bold"),
          py("2"),
          px("4"),
          rounded({r: true}),
        )}>
          Next
        </button>
      </div>

      <div className={c(my(null, "8"))}>
        <button className={c(
          bg("grey-light"),
          hover(bg("grey")),
          text("grey-darkest"),
          font("bold"),
          py("2"),
          px("4"),
          rounded(),
          display("inline-flex"),
          items("center")
        )}>
          <svg className={c(
            fill("current"),
            w("4"),
            h("4"),
            mx(null, "2")
          )} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
          <span>{"Download"}</span>
        </button>
      </div>

    </div>
  );
}
