import React, {useState} from 'react'
import SantaFrame from "./SantaFrame";
import {frames} from '../assets/frames'
import {ToggleButton} from "@material-ui/lab";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

export default () => {
    // state here
    // toggle button changes state
    const [currentFrame, setCurrentFrame] = useState(0)

    // use some library here to get the image
    // eventually pass that image into SantaFrame

    // css: background
    return (
        <div>
            <ToggleButtonGroup
                value={currentFrame}
                exclusive
                onChange={(event, value) => setCurrentFrame(value)}
            >
                <ToggleButton value={1}>
                    1
                </ToggleButton>
                <ToggleButton value={2}>
                    2
                </ToggleButton>
                <ToggleButton value={3}>
                    3
                </ToggleButton>
                <ToggleButton value={4}>
                    4
                </ToggleButton>
            </ToggleButtonGroup>
            <SantaFrame frame={frames[currentFrame]} uploadedImage={1}/>
        </div>
    )
}
