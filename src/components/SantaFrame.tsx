import React from 'react'
import {FrameImage} from "../assets/santaFrames";

interface Props {
    frame: FrameImage
    // in the future, upload many photos to be able to toggle
    uploadedImage?: any
}

const styles = {
    parent: {
        position: 'relative',
        top: 0,
        left: 0,
    },
    image1: {
        position: 'relative',
        top: 0,
        left: 0,
        border: '1px red solid',
    },
    image2: {
        position: 'absolute',
        top: '30px',
        left: '30px',
        border: '1px green solid',
    }
}

/**
 * This is just the
 */
export default ({frame, uploadedImage}: Props) => {
    const {parent, image1, image2} = styles
    console.log(frame)
    return (
        <>
            <div style={{position: 'relative', top: 0, left: 0}}>
                <img src={frame.image.src} style={{
                    position: 'relative',
                    top: 0,
                    left: 0,
                    height: '500px',
                    width: '500px',
                    zIndex: 10
                }}/>
                {uploadedImage &&
                <img
                    style={{
                        position: 'absolute',
                        top: '0px',
                        left: '0px',
                        height: '500px',
                        width: '500px',
                        zIndex: 1
                    }}
                    src={uploadedImage}/>}
            </div>
        </>
    )
}
