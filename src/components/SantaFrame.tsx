import React, {useEffect, useRef} from 'react'
import {FrameImage} from "../assets/santaFrames";
import '../styles.css'
import Vanilla from "./Vanilla";

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
    const frameCanvasReference = useRef(null)
    const uploadedImageCanvasReference = useRef(null)

    function imageToCanvas(canvasRef: any, imageSource: any) {
        const canvas = canvasRef.current
        // @ts-ignore
        const context = canvas.getContext('2d')
        // todo - how to clear canvas..
        // context.clearRect(0,0, window.innerWidth, window.innerHeight)

        // convert the image to canvas
        const image = new Image();
        image.src = imageSource
        image.onload = () => {
            context.drawImage(
                image,
                0,
                0,
                // scale wit this, but keep original aspect ratio
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
    }

    useEffect(() => {
        imageToCanvas(frameCanvasReference, frame.image.src);
         if (uploadedImage) {
            imageToCanvas(uploadedImageCanvasReference, uploadedImage)
         }
    })

    return (
        <>
            <Vanilla/>
            <div className='anchorTopLeft'>
                <canvas
                    ref={frameCanvasReference}
                    className='SantaCanvas'
                    width={window.innerWidth}
                    height={window.innerHeight}
                />
                <canvas
                    ref={uploadedImageCanvasReference}
                    className='UploadedImage'
                    width={window.innerWidth}
                    height={window.innerHeight}
                />
            </div>
        </>
    )
}
