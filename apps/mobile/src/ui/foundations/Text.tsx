import { Text as RNText, TextProps } from "react-native"

import { cn } from "../cn"

const variants = {
  display: "text-display font-inter-light uppercase",
  "heading-lg": "text-heading-lg font-inter-regular",
  "heading-sm": "text-heading-sm font-inter-regular",
  body: "text-body font-inter-regular",
  eyebrow: "text-eyebrow font-inter-semibold uppercase",
  label: "text-label font-inter-semibold",
  meta: "text-meta font-inter-regular",
  "display-name": "font-serif-regular text-display-name",
  "quote-identity": "font-serif-medium text-quote-identity",
  "heading-serif": "font-serif-medium text-heading-serif",
  "title-serif": "font-serif-semibold text-title-serif",
  greeting: "font-serif-medium-italic text-greeting",
  "caption-serif": "font-serif-medium-italic text-caption-serif",
}

const base = "text-content"

export type TextVariant = keyof typeof variants

type Props = TextProps & {
  variant?: TextVariant
  className?: string
}

export function Text({ variant = "body", className, ...rest }: Props) {
  const classes = cn(base, variants[variant], className)
  return <RNText className={classes} {...rest} />
}
