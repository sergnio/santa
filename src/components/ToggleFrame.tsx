import React, {useCallback, useState} from 'react'
import SantaFrame from "./SantaFrame";
import {santaFrames} from '../assets/santaFrames'
import ImageUpload from "./Dropzone";
import ToggleGroup from "./ToggleGroup";

export default () => {
    // state here
    // toggle button changes state
    const [currentFrame, setCurrentFrame] = useState(0)
    // todo - srn - restrict
    const [uploadedImage, setUploadedImage] = useState<any>()
    const [bs, sb] = useState<any>()

    // use some library here to get the image
    // eventually pass that image into SantaFrame

    const onUpload = useCallback((acceptedFiles: File[]) => {
        console.log({acceptedFiles});
        const uploadedFile = acceptedFiles[0]

        if (acceptedFiles.length === 0) {
            console.error('Please upload at most one file')
        } else {
            if (FileReader && uploadedFile) {
                var fr = new FileReader();
                fr.onload = function () {
                    // console.log(fr.result)
                    setUploadedImage(fr.result)
                }
                fr.readAsDataURL(uploadedFile);
            }
        }
    }, [])

    const onChangeFrame = (event: React.MouseEvent<HTMLElement>, value: any) => setCurrentFrame(value)

    return (
        <>
            <ToggleGroup currentFrame={currentFrame} onChange={onChangeFrame}/>
            <ImageUpload callback={onUpload}/>
            {/*// Stage - is a div wrapper*/}
            {/*// Layer - is an actual 2d canvas element, so you can have several layers inside the stage*/}
            {/*// Rect and Circle are not DOM elements. They are 2d shapes on canvas*/}
            <div className='relative'>
                <SantaFrame frame={santaFrames[currentFrame]} uploadedImage={uploadedImage}/>
            </div>
        </>
    )
}
