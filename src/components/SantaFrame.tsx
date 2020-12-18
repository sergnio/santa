import React from 'react'
import {FrameImage} from "../assets/santaFrames";

interface Props {
    frame: FrameImage
    // in the future, upload many photos to be able to toggle
    uploadedImage?: any
}

/**
 * This is just the
 */
export default ({frame, uploadedImage}: Props) => {
    console.log(frame)
    return (
        <img
            src={frame.image.src}
            style={{height: '100vh', width: '100vh'}}
        />
    )
}
