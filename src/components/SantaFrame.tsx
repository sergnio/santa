import React, {useEffect, useRef} from 'react'
import {FrameImage} from "../assets/santaFrames";

interface Props {
    frame: FrameImage
    // in the future, upload many photos to be able to toggle
    uploadedImage?: HTMLImageElement
}

/**
 * This is just the
 */
export default ({frame, uploadedImage}: Props) => {
    console.log(frame)
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        // @ts-ignore
        const context = canvas.getContext('2d')
        // convert the image to canvas
        const image = new Image();
        image.src = frame.image.src
        image.onload = () => {
            context.drawImage(
                image,
                0,
                0,
                window.innerWidth,
                window.innerHeight,
                // 0,
                // 0,
                // 300,
                // 100
            );
            // ctx.getImageData on that context
            // somewhere ImageData is used....
            // loop through all pixels of the image
            // if the alpha value is < 255, this means there's some transparency
        };
    }, [])

    return (
        <>
            <div style={{position: 'relative', top: 0, left: 0}}>
                <canvas ref={canvasRef}
                        style={{
                            position: 'relative',
                            top: 0,
                            left: 0,
                            // width: '1000px',
                            // height: '1000px',
                            zIndex: 10
                        }}
                        width={window.innerWidth}
                        height={window.innerHeight}
                />
                {uploadedImage &&
                <img
                    width={window.innerWidth}
                    height={window.innerHeight}
                    style={{
                        position: 'absolute',
                        top: '0px',
                        left: '0px',
                        zIndex: 1
                    }}
                    // @ts-ignore
                    src={uploadedImage} alt='uploadedImage'
                />
                }
            </div>
        </>
    )
}
