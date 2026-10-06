export const primitives: {
    cream: string;
    ivory: string;
    forest: string;
    olive: string;
    sage: string;
    gold: string;
    clay: string;
    charcoal: string;
    "warm-gray": string;
    "gray-disabled": string;
    white: string;
};
export namespace semantic {
    namespace background {
        export default primitives.cream;
        import surface = primitives.ivory;
        export { surface };
    }
    namespace border {
        import subtle = primitives.sage;
        export { subtle };
    }
    namespace action {
        import primary = primitives.forest;
        export { primary };
        import secondary = primitives.olive;
        export { secondary };
    }
    namespace accent {
        import subtle_1 = primitives.sage;
        export { subtle_1 as subtle };
        import gold = primitives.gold;
        export { gold };
    }
    namespace decorative {
        import clay = primitives.clay;
        export { clay };
    }
    let text: {
        primary: string;
        secondary: string;
        disabled: string;
        "on-primary": string;
        "on-dark": string;
    };
    namespace icon {
        import primary_1 = primitives.forest;
        export { primary_1 as primary };
        import secondary_1 = primitives.olive;
        export { secondary_1 as secondary };
    }
}
export namespace tailwindColors {
    export namespace background_1 {
        import DEFAULT = default;
        export { DEFAULT };
    }
    export { background_1 as background };
    import surface_1 = surface;
    export { surface_1 as surface };
    import line = subtle;
    export { line };
    import primary_2 = primary;
    export { primary_2 as primary };
    import secondary_2 = secondary;
    export { secondary_2 as secondary };
    import tint = subtle;
    export { tint };
    import gold_1 = gold;
    export { gold_1 as gold };
    import clay_1 = clay;
    export { clay_1 as clay };
    export namespace content {
        import DEFAULT_1 = primary;
        export { DEFAULT_1 as DEFAULT };
        import secondary_3 = secondary;
        export { secondary_3 as secondary };
        import disabled = disabled;
        export { disabled };
    }
    export namespace on {
        let primary_3: string;
        export { primary_3 as primary };
        export let dark: string;
    }
    export namespace icon_1 {
        import primary_4 = primary;
        export { primary_4 as primary };
        import secondary_4 = secondary;
        export { secondary_4 as secondary };
    }
    export { icon_1 as icon };
}
