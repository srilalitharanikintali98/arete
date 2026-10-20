import { View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { HeroArch } from "../../../ui/components/HeroArch"
import { Text } from "../../../ui/foundations/Text"

function greetingFor(hour: number) {
  if (hour < 12) return "Good morning,"
  if (hour < 18) return "Good afternoon,"
  return "Good evening,"
}

// TODO: Once the APIs are in place recheck prop types
type TodayHeroProps = {
  name: string
  identity: string | null
}

export function TodayHero({ name, identity }: TodayHeroProps) {
  const insets = useSafeAreaInsets()
  const top = insets.top + 4

  return (
    <View className="bg-inverse px-lg pb-[56px]" style={{ paddingTop: top }}>
      <Text variant="greeting" className="text-on-inverse-muted">
        {greetingFor(new Date().getHours())}
      </Text>
      <Text variant="display-name" className="text-on-inverse">
        {name}
      </Text>
      {identity ? (
        <View className="gap-[12px] pt-[44px]">
          <Text variant="eyebrow" className="text-on-inverse-muted">
            YOU'RE WORKING TOWARDS BECOMING
          </Text>
          <Text variant="quote-identity" className="text-on-inverse">
            {identity}
          </Text>
        </View>
      ) : null}
      <View className="absolute right-lg" style={{ top }}>
        <HeroArch />
      </View>
    </View>
  )
}
