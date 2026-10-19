import { TodayHero } from "../components/TodayHero"
import { useProfile } from "../hooks/useProfile"

export function HeroSection() {
  const { name, identity, status } = useProfile()

  // Until the hero's empty and error views are designed, the identity block simply hides.
  return <TodayHero name={name} identity={status === "ready" ? identity : null} />
}
