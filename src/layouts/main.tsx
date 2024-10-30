import React from "react";

type Props = {
    className?: string;
    children?: React.ReactNode;
    styles?: React.CSSProperties;
};

export default function Main(props: Props) {
    return (
        <main style={props.styles} className={`${props?.className}`}>
            {props.children}
        </main>
    )
}
