import React from "react";

type Props = {
    className?: string;
    children?: React.ReactNode;
    styles?: React.CSSProperties;
};

export default function Container(props: Props) {
    return (
        <section style={props.styles} className={props.className}>
            {props.children}
        </section>
    )
}
