import React from "react";
import { ctss as c, my } from "../tailwind/functions";

export default function Item({ children }: { children: React.ReactNode }) {
  return <div className={c(my(null, "4"))}>{children}</div>
}
