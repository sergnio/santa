import React from 'react'
import {useDropzone} from 'react-dropzone'

interface Props {
    callback: Function
}

export default ({callback}: Props) => {
    // @ts-ignore
    const {getRootProps, getInputProps, isDragActive, isDragReject} = useDropzone({onDrop: callback, maxFiles: 1})

    if (isDragReject) {
        console.error("rejected you stink")
    }

    const customInputProps = {accept:"image/*"};

    return (
        <div {...getRootProps()}>
            <input {...getInputProps(customInputProps)} />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>
    );
}
