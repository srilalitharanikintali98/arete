import Svg, { Path } from "react-native-svg"
import { primitives } from "@arete/tokens"

export type GrowthStageName = "planted" | "sprouting" | "growing" | "flourishing"

type Shape = {
  d: string
  stroke?: string
  strokeWidth?: number
  fill?: string
}

type GrowthStageProps = {
  stage: GrowthStageName
  width?: number
}

const ground: Shape = { d: "M6 50H38", stroke: primitives.sage, strokeWidth: 2 }

const shapes: Record<GrowthStageName, Shape[]> = {
  planted: [
    ground,
    {
      d: "M22 49.5C25.0376 49.5 27.5 47.933 27.5 46C27.5 44.067 25.0376 42.5 22 42.5C18.9624 42.5 16.5 44.067 16.5 46C16.5 47.933 18.9624 49.5 22 49.5Z",
      fill: primitives.olive,
    },
  ],
  sprouting: [ground, { d: "M22 50V40", stroke: primitives.olive, strokeWidth: 2.5 }, { d: "M22 42C17 42 14 38 14 34C19 34 22 37 22 42Z", fill: primitives.olive }],
  growing: [ground, { d: "M22 50V24", stroke: primitives.olive, strokeWidth: 2.5 }, { d: "M22 34C14 34 10 28 10 22C18 22 22 27 22 34Z", fill: primitives.olive }, { d: "M22 28C30 28 34 22 34 16C26 16 22 21 22 28Z", fill: primitives.forest }],
  flourishing: [
    ground,
    { d: "M22 50V18", stroke: primitives.olive, strokeWidth: 2.5 },
    { d: "M22 40C14 40 10 34 10 28C18 28 22 33 22 40Z", fill: primitives.olive },
    { d: "M22 34C30 34 34 28 34 22C26 22 22 27 22 34Z", fill: primitives.forest },
    { d: "M22 28C14 28 10 22 10 16C18 16 22 21 22 28Z", fill: primitives.olive },
    {
      d: "M22 18C24.2091 18 26 16.2091 26 14C26 11.7909 24.2091 10 22 10C19.7909 10 18 11.7909 18 14C18 16.2091 19.7909 18 22 18Z",
      fill: primitives.gold,
    },
  ],
}

export function GrowthStage({ stage, width = 44 }: GrowthStageProps) {
  const height = (width * 56) / 44

  return (
    <Svg width={width} height={height} viewBox="0 0 44 56">
      {shapes[stage].map((shape, index) => (
        <Path key={index} d={shape.d} fill={shape.fill ?? "none"} stroke={shape.stroke} strokeWidth={shape.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      ))}
    </Svg>
  )
}
