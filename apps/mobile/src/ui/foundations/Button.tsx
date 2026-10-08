import { PressableProps } from "react-native"

import { cn } from "../cn"
import { Pressable } from "../foundations/Pressable"
import { Text } from "../foundations/Text"

const containers = {
  primary: "bg-primary",
  secondary: "bg-surface border border-primary",
  ghost: "",
}

const labels = {
  primary: "text-on-primary",
  secondary: "text-primary",
  ghost: "text-primary",
}

const disabledContainers = {
  primary: "bg-surface border border-line",
  secondary: "bg-surface border border-line",
  ghost: "bg-surface",
}

export type ButtonVariant = keyof typeof containers

type Props = Omit<PressableProps, "children"> & {
  label: string
  variant?: ButtonVariant
  className?: string
}

export function Button({ label, variant = "primary", disabled, className, ...rest }: Props) {
  return (
    <Pressable disabled={disabled} className={cn("items-center justify-center rounded-full px-xl py-md disabled:opacity-100", disabled ? disabledContainers[variant] : containers[variant], className)} {...rest}>
      <Text variant="label" className={disabled ? "text-content-disabled" : labels[variant]}>
        {label}
      </Text>
    </Pressable>
  )
}
