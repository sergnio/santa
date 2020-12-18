import image1 from '../assets/SantaDigitalFrameBackdrop-1.jpg'
import image2 from '../assets/SantaDigitalFrameBackdrop-2.jpg'
import image3 from '../assets/SantaDigitalFrameBackdrop-3.jpg'

export interface FrameImage {
    image: HTMLImageElement
    boxDimensions: Dimensions
}

interface Dimensions {
    topLeft: number // in px
    topRight: number // in px
    bottomLeft: number // in px
    bottomRight: number // in px
}

const createFrameObject = (imageFilePath: string, boxDimensions: Dimensions): FrameImage => {
    let newImage = new Image();
    newImage.src = imageFilePath
    return (
        {
            image: newImage,
            boxDimensions
        }
    )
}

const createDimensions = (
    topLeft: number,
    topRight: number,
    bottomLeft: number,
    bottomRight: number
): Dimensions => ({
    topLeft, topRight, bottomLeft, bottomRight
})

export const santaFrames: FrameImage[] = [
    createFrameObject(image1, createDimensions(1, 2, 3, 4)),
    createFrameObject(image2, createDimensions(1, 2, 3, 4)),
    createFrameObject(image3, createDimensions(1, 2, 3, 4)),
    // createFrameObject(image4, {height: 1, width: 2})
]
