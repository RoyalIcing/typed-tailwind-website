import Tailwind from "../tailwind";

type ExcludeDefault<T> = Exclude<T, "default">

export type BackgroundColor = keyof typeof Tailwind.backgroundColors;

export type BorderWidth = ExcludeDefault<keyof typeof Tailwind.borderWidths>;
export type BorderColor = ExcludeDefault<keyof typeof Tailwind.borderColors>;
export type BorderStyle = "solid" | "dashed" | "dotted" | "none";

export type TextSize = keyof typeof Tailwind.textSizes;
export type TextColor = keyof typeof Tailwind.textColors;
export type TextAlign = "left" | "center" | "right" | "justify";

export type FontWeight = keyof typeof Tailwind.fontWeights;

export type Leading = keyof typeof Tailwind.leading;

export type FontStyle = "italic" | "roman";
export type TextTransform = "uppercase" | "lowercase" | "capitalize" | "normal-case";
export type TextDecoration = "underline" | "line-through" | "no-underline";
export type FontSmoothing = "antialiased" | "subpixel-antialiased";

export type Margin = keyof typeof Tailwind.margin;
export type MarginNegative = keyof typeof Tailwind.negativeMargin;
export type Padding = keyof typeof Tailwind.padding;

export type Width = keyof typeof Tailwind.width;
export type Height = keyof typeof Tailwind.height;

export type FlexAlignItems = "stretch" | "start" | "center" | "end" | "baseline";
export type FlexJustify = "start" | "center" | "end" | "between" | "around";
export type FlexItem = "initial" | "1" | "auto" | "none" | "grow" | "shrink" | "no-grow" | "no-shrink";

export type Rounded = ExcludeDefault<keyof typeof Tailwind.borderRadius>;

export type Display = "block" | "inline-block" | "inline" | "table" | "table-row" | "table-cell" | "hidden" | "flex" | "inline-flex";

export type Pin = "pin-t" | "pin-r" | "pin-b" | "pin-l" | "pin-y" | "pin-x" | "pin" | "pin-none";

export type SVGFill = keyof typeof Tailwind.svgFill;
export type SVGStroke = keyof typeof Tailwind.svgStroke;

export type Opacity = keyof typeof Tailwind.opacity;

export type Shadow = keyof typeof Tailwind.shadows;

export type Cursor = "auto" | "default" | "pointer" | "wait" | "move" | "not-allowed";
