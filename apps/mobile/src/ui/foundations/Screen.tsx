import { View, ViewProps } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { cn } from "../cn"

type Props = ViewProps & {
  className?: string
  edges?: ("top" | "bottom" | "left" | "right")[]
}

export function Screen({ className, style, edges = ["bottom", "left", "right", "top"], ...rest }: Props) {
  const insets = useSafeAreaInsets()

  return (
    <View
      className={cn("flex-1 bg-background", className)}
      style={[
        {
          paddingTop: edges.includes("top") ? insets.top : 0,
          paddingBottom: edges.includes("bottom") ? insets.bottom : 0,
          paddingLeft: edges.includes("left") ? insets.left : 0,
          paddingRight: edges.includes("right") ? insets.right : 0,
        },
        style,
      ]}
      {...rest}
    />
  )
}
