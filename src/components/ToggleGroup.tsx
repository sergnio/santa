import React from 'react'
import {santaFrames} from "../assets/santaFrames";
import {ToggleButton} from "@material-ui/lab";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

interface Props {
    currentFrame: number
    onChange(event: React.MouseEvent<HTMLElement>, value: any): void
}

export default ({currentFrame, onChange}: Props) => {
    return (
        <ToggleButtonGroup
            value={currentFrame}
            exclusive
            onChange={onChange}
        >
            {santaFrames.map((image, index) => (
                <ToggleButton value={index}>
                    {index + 1}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    )
}
