import { View, ViewProps } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { cn } from "../cn"

type Props = ViewProps & {
  className?: string
}

export function Screen({ className, style, ...rest }: Props) {
  const insets = useSafeAreaInsets()

  return (
    <View
      className={cn("flex-1 bg-background", className)}
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
        style,
      ]}
      {...rest}
    />
  )
}
