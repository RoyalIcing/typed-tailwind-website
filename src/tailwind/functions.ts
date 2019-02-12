import { addPrefixToMany } from "@ctss/core";
import { BackgroundColor, BorderWidth, BorderStyle, BorderColor, TextSize, TextColor, TextAlign, FontWeight, Leading, Margin, Padding, Width, Height, Rounded, Display, Pin, SVGFill, SVGStroke, FlexAlignItems, FlexJustify, FlexItem, FontStyle, TextTransform, TextDecoration, FontSmoothing, Opacity, Cursor, Shadow } from "./types";

export { ctss } from "@ctss/core";

// Breakpoint prefixes
// sm:
// md:
// lg:
// xl:

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

// Pseudo class prefixes
// hover:
// focus:
// active:

export function hover(...arrayOfSuffixes: Array<Array<CanHover>>): Array<Breakpointable> {
  return addPrefixToMany(arrayOfSuffixes as Array<Array<string>>, "hover:") as Array<Breakpointable>;
}

export function focus(...arrayOfSuffixes: Array<Array<CanFocus>>): Array<Breakpointable> {
  return addPrefixToMany(arrayOfSuffixes as Array<Array<string>>, "focus:") as Array<Breakpointable>;
}

export function active(...arrayOfSuffixes: Array<Array<CanActive>>): Array<Breakpointable> {
  return addPrefixToMany(arrayOfSuffixes as Array<Array<string>>, "active:") as Array<Breakpointable>;
}

// Background

export function bg(suffix: BackgroundColor): Array<Base> {
  return make("bg-" + suffix);
}

// Margin

type NegativePrefix = "-" | "";

export function mx(leftOrBoth: Margin | null, right?: Margin | null, negative: NegativePrefix = ""): Array<Base> {
  if (leftOrBoth == null) {
    return make(`${negative}mr-${right}`);
  } else if (right === null) {
    return make(`${negative}ml-${leftOrBoth}`);
  } else if (right === undefined) {
    return make(`${negative}mx-${leftOrBoth}`);
  } else {
    return make(`${negative}ml-${leftOrBoth}`, `${negative}mr-${right}`);
  }
}

export function my(topOrBoth: Margin | null, bottom?: Margin | null, negative: NegativePrefix = ""): Array<Base> {
  if (topOrBoth === null) {
    return make(`${negative}mb-${bottom}`);
  } else if (bottom === null) {
    return make(`${negative}mt-${topOrBoth}`);
  } else if (bottom === undefined) {
    return make(`${negative}my-${topOrBoth}`);
  } else {
    return make(`${negative}mt-${topOrBoth}`, `${negative}mb-${bottom}`);
  }
}

// Padding

export function px(leftOrBoth: Padding | null, right?: Padding | null, negative: NegativePrefix = ""): Array<Base> {
  if (leftOrBoth === null) {
    return make(`${negative}pr-${right}`);
  } else if (right === null) {
    return make(`${negative}pl-${leftOrBoth}`);
  } else if (right === undefined) {
    return make(`${negative}px-${leftOrBoth}`);
  } else {
    return make(`${negative}pl-${leftOrBoth}`, `${negative}pr-${right}`);
  }
}

export function py(topOrBoth: Padding | null, bottom?: Padding | null, negative: NegativePrefix = ""): Array<Base> {
  if (topOrBoth === null) {
    return make(`${negative}pb-${bottom}`);
  } else if (bottom === null) {
    return make(`${negative}pt-${topOrBoth}`);
  } else if (bottom === undefined) {
    return make(`${negative}py-${topOrBoth}`);
  } else {
    return make(`${negative}pt-${topOrBoth}`, `${negative}pb-${bottom}`);
  }
}

// Sizing: width & height

export function w(suffix: Width): Array<Base> {
  return [`w-${suffix}`] as Array<Base>;
}

export function h(suffix: Height): Array<Base> {
  return [`h-${suffix}`] as Array<Base>;
}

// Flex box

export function items(suffix: FlexAlignItems): Array<Base> {
  return [`items-${suffix}`] as Array<Base>;
}

export function justify(suffix: FlexJustify): Array<Base> {
  return [`justify-${suffix}`] as Array<Base>;
}

export function flexItem(...suffixes: Array<FlexItem>): Array<Base> {
  return suffixes.map(suffix => `flex-${suffix}` as Base);
}

// Text & fonts

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

// Border

type BorderSide = "t" | "r" | "b" | "l";
function borderSides(sides: Partial<Record<BorderSide, BorderWidth | true>>): Array<Base | false> {
  return [
    sides.t != null && (sides.t === true ? `border-t` : `border-t-${sides.t}`),
    sides.r != null && (sides.r === true ? `border-r` : `border-r-${sides.r}`),
    sides.b != null && (sides.b === true ? `border-b` : `border-b-${sides.b}`),
    sides.l != null && (sides.l === true ? `border-l` : `border-l-${sides.l}`),
  ] as Array<Base | false>;
}

export function border(width: BorderWidth | true | null | Partial<Record<BorderSide, BorderWidth | true>>, color?: BorderColor, style?: BorderStyle): Array<Base> {
  return [
    ...(width !== null ? (width === true ? ["border"] : typeof width === "string" ? [`border-${width}`] : borderSides(width as Partial<Record<BorderSide, BorderWidth | true>>)) : []),
    color != null && `border-${color}`,
    style != null && `border-${style}`
  ].filter(Boolean) as Array<Base>;
}

// Rounded border radius

type RoundedSide = "t" | "r" | "b" | "l";
type RoundedCorner = "tl" | "tr" | "br" | "bl";
function roundedSidesOrCorners(sidesOrCorners: Partial<Record<RoundedSide | RoundedCorner, Rounded | true>>): Array<Base> {
  return [
    sidesOrCorners.t != null && (sidesOrCorners.t === true ? `rounded-t` : `rounded-t-${sidesOrCorners.t}`),
    sidesOrCorners.r != null && (sidesOrCorners.r === true ? `rounded-r` : `rounded-r-${sidesOrCorners.r}`),
    sidesOrCorners.b != null && (sidesOrCorners.b === true ? `rounded-b` : `rounded-b-${sidesOrCorners.b}`),
    sidesOrCorners.l != null && (sidesOrCorners.l === true ? `rounded-l` : `rounded-l-${sidesOrCorners.l}`),
    sidesOrCorners.tl != null && (sidesOrCorners.tl === true ? `rounded-tl` : `rounded-tl-${sidesOrCorners.tl}`),
    sidesOrCorners.tr != null && (sidesOrCorners.tr === true ? `rounded-tr` : `rounded-tr-${sidesOrCorners.tr}`),
    sidesOrCorners.br != null && (sidesOrCorners.br === true ? `rounded-br` : `rounded-br-${sidesOrCorners.br}`),
    sidesOrCorners.bl != null && (sidesOrCorners.bl === true ? `rounded-bl` : `rounded-bl-${sidesOrCorners.bl}`),
  ].filter(Boolean) as Array<Base>;
}
export function rounded(value?: Rounded | Partial<Record<RoundedSide | RoundedCorner, Rounded | true>>): Array<Base> {
  if (value === undefined) {
    return ["rounded"] as Array<Base>;
  } else if (typeof value === "string") {
    return [`rounded-${value}`] as Array<Base>;
  } else {
    return roundedSidesOrCorners(value as Partial<Record<RoundedSide | RoundedCorner, Rounded | true>>);
  }
}

// Block level CSS

export function display(name: Display): Array<Base> {
  return [name] as Array<Base>;
}

export function relative(): Array<Base> {
  return ["relative"] as Array<Base>;
}

export function absolute(...pins: Array<Pin>): Array<Base> {
  return ["absolute"].concat(pins) as Array<Base>;
}

// SVG

export function fill(name: SVGFill): Array<Base> {
  return [name] as Array<Base>;
}

export function stroke(name: SVGStroke): Array<Base> {
  return [name] as Array<Base>;
}

// Opacity

export function opacity(suffix: Opacity): Array<Base> {
  return [`opacity-${suffix}`] as Array<Base>;
}

// Box shadow

export function shadow(suffix?: Shadow): Array<Base> {
  return (suffix ? [`shadow-${suffix}`] : ["shadow"]) as Array<Base>;
}

// Cursor

export function cursor(suffix: Cursor): Array<Base> {
  return [`cursor-${suffix}`] as Array<Base>;
}

// Reset class for <ul> & <ol>

export function listReset(): Array<Base> {
  return ["list-reset"] as Array<Base>;
}

// Types that enable safe composition

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

// Private convenience function

function make(...strings: Array<string>): Array<Base> {
  return strings as Array<Base>;
}
