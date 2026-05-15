import React from "react";
type TypographysVariant = "DisplayLarge" | "HeadlineLarge" | "HeadlineMedium" | "BodyLarge" | "LabelLarge";

type TypographyProps = {
    variant: TypographysVariant;
    children: React.ReactNode;
    className?: string;
    color?: string;
    as?: keyof JSX.IntrinsicElements;
};

const TipografiaVar: Record<TypographysVariant, string> = {
    DisplayLarge: "typography typography--display-large",
    HeadlineLarge: "typography typography--headline-large",
    HeadlineMedium: "typography typography--headline-medium",
    BodyLarge: "typography typography--body-large",
    LabelLarge: "typography typography--label-large",
}

const defaultTags: Record<TypographysVariant, keyof JSX.IntrinsicElements> = {
    DisplayLarge: "p",
    HeadlineLarge: "p",
    HeadlineMedium: "p",
    BodyLarge: "p",
    LabelLarge: "p"
}

export function Text({
    variant,
    children,
    className = "",
    color,
    as,
}: TypographyProps ){
    const Component = as || defaultTags[variant];

    return (
        <Component
        className={`${TipografiaVar[variant]} ${className}`}
        style={color? {color} : undefined}
        >
            {children}
        </Component>
    );
}
