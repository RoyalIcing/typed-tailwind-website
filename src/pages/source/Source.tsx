import React from "react";
import raw from "raw.macro";

import Code from "../../components/Code";

const typesSource = raw("../../tailwind/types.ts");
const functionsSource = raw("../../tailwind/functions.ts");

function TypesSource(): JSX.Element {
  return <>
    <h2>types.ts</h2>
    <Code code={typesSource} language="ts" />
  </>
}

function FunctionsSource(): JSX.Element {
  return <>
    <h2>functions.ts</h2>
    <Code code={functionsSource} language="ts" />
  </>
}

export default function Source({ name }: { name: "types" | "functions" }): JSX.Element {
  switch (name) {
    case "types": return <TypesSource />;
    case "functions": return <FunctionsSource />;
  }
}
