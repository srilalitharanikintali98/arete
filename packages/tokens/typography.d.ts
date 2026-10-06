export namespace fontFamily {
    let light: string[];
    let regular: string[];
    let semibold: string[];
}
export const fontSize: {
    display: (string | {
        letterSpacing: string;
    })[];
    "heading-lg": (string | {
        lineHeight: string;
    })[];
    "heading-sm": (string | {
        lineHeight: string;
    })[];
    body: (string | {
        lineHeight: string;
    })[];
    eyebrow: (string | {
        letterSpacing: string;
    })[];
    label: (string | {
        letterSpacing: string;
    })[];
};
