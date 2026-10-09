import { Tabs } from "expo-router"
import { BottomTabBar, type TabItem } from "../../ui/components/BottomTabBar"

const ICONS: Record<string, TabItem["icon"]> = {
  index: "calendar",
  progress: "progress",
  goals: "goals",
  me: "me",
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation, insets }) => {
        const tabs = state.routes.map((route) => ({
          key: route.key,
          label: descriptors[route.key].options.title ?? route.name,
          icon: ICONS[route.name],
        }))

        return (
          <BottomTabBar
            tabs={tabs}
            activeKey={state.routes[state.index].key}
            bottomInset={insets.bottom}
            onPress={(key) => {
              const route = state.routes.find((r) => r.key === key)
              if (!route) return

              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              })

              if (state.routes[state.index].key !== key && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params)
              }
            }}
          />
        )
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Today" }} />
      <Tabs.Screen name="progress" options={{ title: "Progress" }} />
      <Tabs.Screen name="goals" options={{ title: "Goals" }} />
      <Tabs.Screen name="me" options={{ title: "Me" }} />
    </Tabs>
  )
}
