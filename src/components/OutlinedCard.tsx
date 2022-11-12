import {Box, Card, CardContent, Typography} from "@mui/material";
import * as React from "react";
import ClickButton from "./ClickButton";

interface Props {
    buttonProps: {
        name: string,
        func: () => void
    }[],
    cardTitle: string
}

export default function OutlinedCard(props: Props) {
    const buttonProps = props.buttonProps;
    const buttonList = buttonProps
        .map((button) => <ClickButton name={button.name} func={button.func} key={button.name}/>);

    return (
        <Box sx={{minWidth: 275}}>
            <Card variant="outlined">
                <Typography sx={{fontSize: 28, padding: 1, margin: 2}} color="text.secondary" gutterBottom
                            textAlign="center">
                    Copy formats
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" textAlign="center">
                    copy the URL and Title
                </Typography>
                <CardContent>
                    {buttonList}
                </CardContent>
            </Card>
        </Box>
    );
}