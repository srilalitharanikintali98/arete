import { Text as RNText, TextProps } from "react-native"

import { cn } from "../cn"

const variants = {
  display: "text-display font-inter-light uppercase",
  "heading-lg": "text-heading-lg font-inter-regular",
  "heading-sm": "text-heading-sm font-inter-regular",
  body: "text-body font-inter-regular",
  eyebrow: "text-eyebrow font-inter-semibold uppercase",
  label: "text-label font-inter-semibold",
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
