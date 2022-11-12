import * as React from "react";
import {Button} from "@mui/material";

interface Props {
    name: string;
    func: () => Promise<void>
}

export default function ClickButton(props: Props) {
    return (
        <Button variant="contained" onClick={props.func} sx={{ width: 200, padding: 1, margin: 2}}>{props.name}</Button>
    );
}

