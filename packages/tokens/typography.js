const fontFamily = {
  "inter-light": ["Inter_300Light"],
  "inter-regular": ["Inter_400Regular"],
  "inter-semibold": ["Inter_600SemiBold"],
}

// Tailwind format: name: [fontSize, { lineHeight, letterSpacing }]
const fontSize = {
  display: ["28px", { letterSpacing: "0.14em" }],
  "heading-lg": ["36px", { lineHeight: "1.12" }],
  "heading-sm": ["22px", { lineHeight: "1.3" }],
  body: ["15px", { lineHeight: "1.5" }],
  eyebrow: ["12px", { letterSpacing: "0.14em" }],
  label: ["15px", { letterSpacing: "0.03em" }],
}

module.exports = { fontFamily, fontSize }
