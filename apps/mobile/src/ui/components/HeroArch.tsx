import Svg, { Circle, ClipPath, Defs, Ellipse, G, Path } from "react-native-svg"
import { primitives } from "@arete/tokens"

const ARCH = "M0 44C0 19.6995 19.6995 0 44 0C68.3005 0 88 19.6995 88 44V116H0V44Z"

export function HeroArch() {
  return (
    <Svg width={88} height={116} viewBox="0 0 88 116">
      <Defs>
        <ClipPath id="hero-arch-clip">
          <Path d={ARCH} />
        </ClipPath>
      </Defs>
      <G clipPath="url(#hero-arch-clip)">
        <Path d={ARCH} fill={primitives.sage} />
        <Ellipse cx={44} cy={115} rx={60} ry={35} fill={primitives.olive} />
        <Circle cx={44} cy={34} r={8} fill={primitives.ivory} />
      </G>
    </Svg>
  )
}
