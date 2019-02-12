import React from "react";
import { pipe, match, map, replace, trim } from "ramda";
import raw from "raw.macro";

import Code from "../../components/Code";

const source = raw("./items.tsx");

const processSource = pipe(
  match(/<Item>[\s\S]+?<\/Item>/g),
  map(pipe(
    replace(/<[\/]?Item>/g, ""),
    replace(/^\s\s\s\s/mg, ""),
    trim
  ))
)

export const itemsSource = processSource(source);

export default function Source({ index }: { index: number }): JSX.Element {
  return <Code code={itemsSource[index]} language="tsx" />
}
