import { extendTailwindMerge } from "tailwind-merge"

const cn = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["display", "heading-lg", "heading-sm", "body", "eyebrow", "label", "meta", "display-name", "quote-identity", "heading-serif", "title-serif", "greeting", "caption-serif"] }],
    },
  },
})

export { cn }
