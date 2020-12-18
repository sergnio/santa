import image1 from '../assets/SantaDigitalFrameBackdrop-1.jpg'
import image2 from '../assets/SantaDigitalFrameBackdrop-2.jpg'
import image3 from '../assets/SantaDigitalFrameBackdrop-3.jpg'
import image4 from '../assets/SantaDigitalFrameBackdrop-4.jpg'

interface FrameImage {
    image: any
    dimensions: Dimensions
}

interface Dimensions {
    height: number // in px
    width: number // in px
}

const createFrameObject = (image: any, dimensions: Dimensions): FrameImage => (
    {
        image,
        dimensions
    }
)

export const frames: FrameImage[] = [
    createFrameObject(image1, {height: 1, width: 2}),
    createFrameObject(image2, {height: 2, width: 2}),
    createFrameObject(image3, {height: 1, width: 2}),
    createFrameObject(image4, {height: 1, width: 2})
]

