import React from "react";

type Props = {
    className?: string;
    children?: React.ReactNode;
    styles?: React.CSSProperties;
};

export default function Wrapper(props: Props) {
    return (
        <div style={props.styles} className={props.className}>
            {props.children}
        </div>
    )
}
