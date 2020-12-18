import React, {useCallback, useState} from 'react'
import SantaFrame from "./SantaFrame";
import {santaFrames} from '../assets/santaFrames'
import {ToggleButton} from "@material-ui/lab";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ImageUpload from "./Dropzone";

export default () => {
    // state here
    // toggle button changes state
    const [currentFrame, setCurrentFrame] = useState(0)
    // todo - srn - restrict
    const [uploadedImage, setUploadedImage] = useState<any>()

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
                    console.log(fr.result)
                    setUploadedImage(fr.result)
                }
                fr.readAsDataURL(uploadedFile);
            }
        }
    }, [])

    // css: background
    return (
        <>
            <ToggleButtonGroup
                value={currentFrame}
                exclusive
                onChange={(event, value) => setCurrentFrame(value)}
            >
                <ToggleButton value={0}>
                    1
                </ToggleButton>
                <ToggleButton value={1}>
                    2
                </ToggleButton>
                <ToggleButton value={2}>
                    3
                </ToggleButton>
                {/*<ToggleButton value={3}>*/}
                {/*    4*/}
                {/*</ToggleButton>*/}
            </ToggleButtonGroup>
            <ImageUpload callback={onUpload}/>
            {/*<canvas style={{width: '100vh', height: '100vh'}}>*/}
            <div style={{position: 'relative'}}>
                <SantaFrame frame={santaFrames[currentFrame]} uploadedImage={uploadedImage}/>
            </div>
            {/*</canvas>*/}
        </>
    )
}
