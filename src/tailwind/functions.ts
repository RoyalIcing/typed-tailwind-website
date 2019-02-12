import { addPrefixToMany } from "@ctss/core";
import { BackgroundColor, BorderWidth, BorderStyle, BorderColor, TextSize, TextColor, TextAlign, FontWeight, Leading, Margin, Padding, Width, Height, Rounded, Display, Pin, SVGFill, SVGStroke, FlexAlign, FlexItem, FontStyle, TextTransform, TextDecoration, FontSmoothing, Opacity } from "./types";

export { ctss } from "@ctss/core";

export type CanHover = string & {
  startsWith(searchString: "hover:"): false;
};
export type CanFocus = string & {
  startsWith(searchString: "focus:"): false;
};
export type CanActive = string & {
  startsWith(searchString: "active:"): false;
};
export type Breakpointable = string & {
  startsWith(searchString: "sm:" | "md:" | "lg:" | "xl:"): false;
};
export type Base = CanHover & CanFocus & CanActive & Breakpointable;


function make(...strings: Array<string>): Array<Base> {
  return strings as Array<Base>;
}

export function sm(...arrayOfSuffixes: Array<Array<Breakpointable>>): Array<string> {
  return addPrefixToMany(arrayOfSuffixes as Array<Array<string>>, "sm:");
}

export function md(...arrayOfSuffixes: Array<Array<Breakpointable>>): Array<string> {
  return addPrefixToMany(arrayOfSuffixes as Array<Array<string>>, "md:");
}

export function lg(...arrayOfSuffixes: Array<Array<Breakpointable>>): Array<string> {
  return addPrefixToMany(arrayOfSuffixes as Array<Array<string>>, "lg:");
}

export function xl(...arrayOfSuffixes: Array<Array<Breakpointable>>): Array<string> {
  return addPrefixToMany(arrayOfSuffixes as Array<Array<string>>, "xl:");
}

export function hover(...arrayOfSuffixes: Array<Array<CanHover>>): Array<Breakpointable> {
  return addPrefixToMany(arrayOfSuffixes as Array<Array<string>>, "hover:") as Array<Breakpointable>;
}

export function focus(...arrayOfSuffixes: Array<Array<CanFocus>>): Array<Breakpointable> {
  return addPrefixToMany(arrayOfSuffixes as Array<Array<string>>, "focus:") as Array<Breakpointable>;
}

export function active(...arrayOfSuffixes: Array<Array<CanActive>>): Array<Breakpointable> {
  return addPrefixToMany(arrayOfSuffixes as Array<Array<string>>, "active:") as Array<Breakpointable>;
}

export function bg(suffix: BackgroundColor): Array<Base> {
  return make("bg-" + suffix);
}

export function mx(leftOrBoth: Margin | null, right?: Margin | null): Array<Base> {
  if (leftOrBoth == null) {
    return make(`mr-${right}`);
  } else if (right === null) {
    return make(`ml-${leftOrBoth}`);
  } else if (right === undefined) {
    return make(`mx-${leftOrBoth}`);
  } else {
    return make(`ml-${leftOrBoth}`, `mr-${right}`);
  }
}

export function my(topOrBoth: Margin | null, bottom?: Margin | null): Array<Base> {
  if (topOrBoth === null) {
    return make(`mb-${bottom}`);
  } else if (bottom === null) {
    return make(`mt-${topOrBoth}`);
  } else if (bottom === undefined) {
    return make(`my-${topOrBoth}`);
  } else {
    return make(`mt-${topOrBoth}`, `mb-${bottom}`);
  }
}

export function px(leftOrBoth: Padding | null, right?: Padding | null): Array<Base> {
  if (leftOrBoth === null) {
    return make(`pr-${right}`);
  } else if (right === null) {
    return make(`pl-${leftOrBoth}`);
  } else if (right === undefined) {
    return make(`px-${leftOrBoth}`);
  } else {
    return make(`pl-${leftOrBoth}`, `pr-${right}`);
  }
}

export function py(topOrBoth: Padding | null, bottom?: Padding | null): Array<Base> {
  if (topOrBoth === null) {
    return make(`pb-${bottom}`);
  } else if (bottom === null) {
    return make(`pt-${topOrBoth}`);
  } else if (bottom === undefined) {
    return make(`py-${topOrBoth}`);
  } else {
    return make(`pt-${topOrBoth}`, `pb-${bottom}`);
  }
}

export function w(suffix: Width): Array<Base> {
  return [`w-${suffix}`] as Array<Base>;
}

export function h(suffix: Height): Array<Base> {
  return [`h-${suffix}`] as Array<Base>;
}

export function items(suffix: FlexAlign): Array<Base> {
  return [`items-${suffix}`] as Array<Base>;
}

export function flexItem(...suffixes: Array<FlexItem>): Array<Base> {
  return suffixes.map(suffix => `flex-${suffix}` as Base);
}

export function text(...suffixes: Array<TextSize | TextColor | TextAlign>): Array<Base> {
  return suffixes.map(suffix => `text-${suffix}` as Base);
}

export function font(...suffixes: Array<FontWeight>): Array<Base> {
  return suffixes.map(suffix => `font-${suffix}` as Base);
}

export function leading(suffix: Leading): Array<Base> {
  return [`leading-${suffix}`] as Array<Base>;
}

export function textStyle(...suffixes: Array<FontStyle | TextTransform | TextDecoration | FontSmoothing>): Array<Base> {
  return suffixes as Array<Base>;
}

type BoxSide = "t" | "r" | "b" | "l";
function applyPrefixToSides<T>(sides: Partial<Record<BoxSide, BorderWidth>>, prefix: string): Array<string> {
  return [
    sides.t != null && `${prefix}t-${sides.t}`,
    sides.r != null && `${prefix}r-${sides.r}`,
    sides.b != null && `${prefix}b-${sides.b}`,
    sides.l != null && `${prefix}l-${sides.l}`,
  ].filter(Boolean) as Array<string>;
}

export function border(color?: BorderColor, width?: BorderWidth | Partial<Record<BoxSide, BorderWidth>>, style?: BorderStyle): Array<Base> {
  return [
    ...(width != null ? (typeof width === "string" ? [`border-${width}`] : applyPrefixToSides(width as Partial<Record<BoxSide, BorderWidth>>, "border-")) : ["border"]),
    color != null && `border-${color}`,
    style != null && `border-${style}`
  ].filter(Boolean) as Array<Base>;
}

export function rounded(suffix?: Rounded): Array<Base> {
  return (suffix ? [`rounded-${suffix}`] : ["rounded"]) as Array<Base>;
}

export function display(name: Display): Array<Base> {
  return [name] as Array<Base>;
}

export function relative(): Array<Base> {
  return ["relative"] as Array<Base>;
}

export function absolute(...pins: Array<Pin>): Array<Base> {
  return ["absolute"].concat(pins) as Array<Base>;
}

export function fill(name: SVGFill): Array<Base> {
  return [name] as Array<Base>;
}

export function stroke(name: SVGStroke): Array<Base> {
  return [name] as Array<Base>;
}

export function opacity(suffix: Opacity): Array<Base> {
  return [`opacity-${suffix}`] as Array<Base>;
}
