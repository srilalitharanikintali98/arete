const fontFamily = {
  "inter-light": ["Inter_300Light"],
  "inter-regular": ["Inter_400Regular"],
  "inter-semibold": ["Inter_600SemiBold"],
  "serif-regular": ["CormorantGaramond_400Regular"],
  "serif-medium": ["CormorantGaramond_500Medium"],
  "serif-semibold": ["CormorantGaramond_600SemiBold"],
  "serif-medium-italic": ["CormorantGaramond_500Medium_Italic"],
}

// Tailwind format: name: [fontSize, { lineHeight, letterSpacing }]
const fontSize = {
  display: ["28px", { letterSpacing: "0.14em" }],
  "heading-lg": ["36px", { lineHeight: "1.12" }],
  "heading-sm": ["22px", { lineHeight: "1.3" }],
  body: ["15px", { lineHeight: "1.5" }],
  eyebrow: ["12px", { letterSpacing: "0.14em" }],
  label: ["15px", { letterSpacing: "0.03em" }],
  meta: ["13px", { lineHeight: "1.4" }],
  "display-name": ["56px", { lineHeight: "1", letterSpacing: "-0.01em" }],
  "quote-identity": ["30px", { lineHeight: "1.2" }],
  "heading-serif": ["28px", { lineHeight: "1.18" }],
  "title-serif": ["22px", { lineHeight: "1.15" }],
  greeting: ["22px", { lineHeight: "1.1" }],
  "caption-serif": ["19px", { lineHeight: "1.2" }],
}

module.exports = { fontFamily, fontSize }
