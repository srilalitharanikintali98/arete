const primitives = {
  cream: "#F7F3EC",
  ivory: "#FDFBF8",
  forest: "#2E4B36",
  olive: "#5B775E",
  sage: "#A8B59A",
  "sage-55": "rgba(168, 181, 154, 0.55)",
  gold: "#B89B53",
  clay: "#D6A373",
  charcoal: "#262626",
  "warm-gray": "#696E69",
  "gray-disabled": "#A6A6A6",
  white: "#FFFFFF",
}

const semantic = {
  background: { base: primitives.cream, surface: primitives.ivory, inverse: primitives.forest },
  border: { subtle: primitives.sage, hairline: primitives["sage-55"] },
  action: { primary: primitives.forest, secondary: primitives.olive },
  accent: { subtle: primitives.sage, gold: primitives.gold },
  decorative: { clay: primitives.clay },
  text: {
    primary: primitives.charcoal,
    secondary: primitives["warm-gray"],
    disabled: primitives["gray-disabled"],
    "on-primary": primitives.ivory,
    "on-dark": primitives.white,
    "on-inverse": primitives.ivory,
    "on-inverse-muted": primitives.sage,
  },
  icon: { primary: primitives.forest, secondary: primitives.olive },
}

const tailwindColors = {
  background: { DEFAULT: semantic.background.base },
  surface: semantic.background.surface,
  line: semantic.border.subtle,
  primary: semantic.action.primary,
  secondary: semantic.action.secondary,
  tint: semantic.accent.subtle,
  gold: semantic.accent.gold,
  clay: semantic.decorative.clay,
  hairline: semantic.border.hairline,
  inverse: semantic.background.inverse,
  content: {
    DEFAULT: semantic.text.primary,
    secondary: semantic.text.secondary,
    disabled: semantic.text.disabled,
  },
  on: {
    primary: semantic.text["on-primary"],
    dark: semantic.text["on-dark"],
    inverse: semantic.text["on-inverse"],
    "inverse-muted": semantic.text["on-inverse-muted"],
  },
  icon: {
    primary: semantic.icon.primary,
    secondary: semantic.icon.secondary,
  },
}

module.exports = { primitives, semantic, tailwindColors }
