import React, {useEffect, useRef} from 'react'
import {FrameImage} from "../assets/santaFrames";
import '../styles.css'
import {Circle, Image as KonvaImage, Layer, Rect, Stage} from "react-konva";

interface Props {
    frame: FrameImage
    // in the future, upload many photos to be able to toggle
    uploadedImage?: HTMLImageElement
}

/**
 * This is just the
 */
export default ({frame, uploadedImage}: Props) => {
    const canvasRef = useRef(null)

    useEffect(() => {
        console.log({uploadedImage})
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
            {/*// Stage - is a div wrapper*/}
            {/*// Layer - is an actual 2d canvas element, so you can have several layers inside the stage*/}
            {/*// Rect and Circle are not DOM elements. They are 2d shapes on canvas*/}
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    {/*<KonvaImage*/}
                    {/*    image={frame.image}*/}
                    {/*    width={window.innerWidth}*/}
                    {/*    height={window.innerHeight}*/}
                    {/*/>*/}
                    {uploadedImage &&
                    // <Rect width={50} height={50} fill="red" />
                        <KonvaImage
                            // className='UploadedImage'
                            width={window.innerWidth}
                            height={window.innerHeight}
                            image={uploadedImage}
                    />
                    }
                </Layer>
            </Stage>
                {uploadedImage &&
                <img src={uploadedImage.src}/>}
                <canvas
                    ref={canvasRef}
                    className='SantaCanvas'
                    width={window.innerWidth}
                    height={window.innerHeight}
                />
            </div>
        </>
    )
}
