import React, {useState} from 'react'
import SantaFrame from "./SantaFrame";
import {santaFrames} from '../assets/santaFrames'
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
        <>
            <ToggleButtonGroup
                value={currentFrame}
                exclusive
                onChange={(event, value) => setCurrentFrame(value)}
            >
                <ToggleButton value={0}>
                    1
                </ToggleButton>
                <ToggleButton value={1}>
                    2
                </ToggleButton>
                <ToggleButton value={2}>
                    3
                </ToggleButton>
                {/*<ToggleButton value={3}>*/}
                {/*    4*/}
                {/*</ToggleButton>*/}
            </ToggleButtonGroup>
            <canvas style={{width: '100vh', height: '100vh'}}>
            {/*    <div style={{position: 'relative'}}>*/}
            {/*        <SantaFrame frame={santaFrames[currentFrame]} uploadedImage={1}/>*/}
            {/*    </div>*/}
            </canvas>
        </>
    )
}
