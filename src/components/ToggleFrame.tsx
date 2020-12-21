import React, {useCallback, useState} from 'react'
import SantaFrame from "./SantaFrame";
import {santaFrames} from '../assets/santaFrames'
import ImageUpload from "./Dropzone";
import ToggleGroup from "./ToggleGroup";
import { Stage, Layer, Rect, Circle } from 'react-konva';

export default () => {
    // state here
    // toggle button changes state
    const [currentFrame, setCurrentFrame] = useState(0)
    // todo - srn - restrict
    const [uploadedImage, setUploadedImage] = useState<HTMLImageElement>()

    // use some library here to get the image
    // eventually pass that image into SantaFrame

    const onUpload = useCallback((acceptedFiles: File[]) => {
        console.log({acceptedFiles});
        const uploadedFile = acceptedFiles[0]

        if (acceptedFiles.length === 0) {
            console.error('Please upload at most one file')
        } else {
            const image = new Image()
            image.src = uploadedFile.name
            setUploadedImage(image)
            if (FileReader && uploadedFile) {
                let fr = new FileReader();
                fr.onload = function () {
                    // console.log(fr.result)
                    // @ts-ignore
                    setUploadedImage(fr.result)
                    console.log('got here')
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
            <div className='relative'>
                <SantaFrame frame={santaFrames[currentFrame]} uploadedImage={uploadedImage}/>
            </div>
        </>
    )
}
