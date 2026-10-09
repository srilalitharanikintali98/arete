import type { ComponentProps } from "react"
import { View } from "react-native"
import { semantic } from "@arete/tokens"
import { Icon } from "../foundations/Icon"
import { Pressable } from "../foundations/Pressable"
import { Text } from "../foundations/Text"

export type TabItem = {
  key: string
  label: string
  icon: ComponentProps<typeof Icon>["name"]
}

type BottomTabBarProps = {
  tabs: TabItem[]
  activeKey: string
  onPress: (key: string) => void
  bottomInset?: number
}

export function BottomTabBar({ tabs, activeKey, onPress, bottomInset = 0 }: BottomTabBarProps) {
  return (
    <View className="border-t border-hairline bg-surface" style={{ paddingBottom: bottomInset }}>
      <View className="flex-row px-sm py-xs">
        {tabs.map((tab) => {
          const active = tab.key === activeKey
          return (
            <Pressable key={tab.key} onPress={() => onPress(tab.key)} accessibilityRole="tab" accessibilityState={{ selected: active }} accessibilityLabel={tab.label} className="min-h-12 flex-1 items-center justify-center gap-xs py-xs">
              <Icon name={tab.icon} size={22} color={active ? semantic.icon.primary : semantic.icon.secondary} />
              <Text variant={"meta"} className={active ? "text-primary" : "text-content-secondary"}>
                {tab.label}
              </Text>
            </Pressable>
          )
        })}
      </View>
    </View>
  )
}
