'use client';
import { useRef, useState } from 'react';
import classes from './image-picker.module.css';

export default function ImagePicker({ label, name }) {

    const imageInput = useRef();
    const [pickedImage, setPickedImage] = userState()

    function handlePickClick(){
        imageInput.current.click();
    }

    function handleImageChange(event){
        const file = event.target.file[0]

        if(!file){
            setPickedImage(null)
            return
        }


    }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button className={classes.button} type='button' onClick={handlePickClick}>Pick an image</button>
      </div>
    </div>
  );
}
