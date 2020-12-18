import React from 'react'

interface Props {
    frame: any
    // in the future, upload many photos to be able to toggle
    uploadedImage?: any
}

/**
 * This is just the
 */
export default ({frame, uploadedImage}: Props) => {
    console.log(frame)
    return (
        <img src={frame.image}
             // style={{height: '100vp', width: '100vp'}}
        />
    )
}
