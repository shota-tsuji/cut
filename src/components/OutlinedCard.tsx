import {Box, Card, CardContent, Typography} from "@mui/material";
import * as React from "react";
import ClickButton from "./ClickButton";

interface Props {
    buttonProps: {
        name: string,
        func: () => Promise<void>
    }[],
    cardTitle: string
}

export default function OutlinedCard(props: Props) {
    const buttonProps = props.buttonProps;
    const buttonList = buttonProps
        .map((button) => <ClickButton name={button.name} func={button.func}/>);

    return (
        <Box sx={{minWidth: 275}}>
            <Card variant="outlined">
                <Typography sx={{fontSize: 28, padding: 1, margin: 2}} color="text.secondary" gutterBottom
                            textAlign="center">
                    Copy formats
                </Typography>
                <CardContent>
                    {buttonList}
                </CardContent>
            </Card>
        </Box>
    );
}