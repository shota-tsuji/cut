import * as React from "react";

interface Props {
    name: string;
    func: () => Promise<void>
}

export default function Popup(props: Props) {
    return (
        <button onClick={props.func}>{props.name}</button>
    );
}

