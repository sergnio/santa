import React, {useEffect, useRef} from 'react'
import {FrameImage} from "../assets/santaFrames";
import '../styles.css'

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
        // todo - how to clear canvas..
        // context.clearRect(0,0, window.innerWidth, window.innerHeight)

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
            <div className='anchorTopLeft'>
                <canvas
                    ref={canvasRef}
                    className='SantaCanvas'
                    width={window.innerWidth}
                    height={window.innerHeight}
                />
                {uploadedImage &&
                <img
                    className='UploadedImage'
                    width={window.innerWidth}
                    height={window.innerHeight}
                    // @ts-ignore
                    src={uploadedImage}
                    alt='uploadedImage'
                />
                }
            </div>
        </>
    )
}
