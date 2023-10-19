import React, { useState } from "react";
import styled from "styled-components";

const InputCustom = styled.input`
    background-color: transparent;
    color: black;  
    transition: 0.5s;
    border: 1.5px solid #797979;
    &:hover{
        cursor: pointer;
        background-color: var(--gray-element); 
    }
    &:focus-visible{
        outline: null;
    }
    width: 115px;
`

function InputImage({name, type, accept, onChange, Img, alt, src}) {
    const [NowImg, SetNowImg] = useState();

    const HandleChange = (Input) => {
        let NewImg = Img? Img : {main_img: null, front_img: null, back_img: null};
        const imgInput = {
            preview: URL.createObjectURL(Input.target.files[0]),
            data: Input.target.files[0],
        }
        switch (Input.target.name) {
            case "main_img":
                NewImg.main_img = imgInput;
                onChange(NewImg);
                SetNowImg(imgInput);
                break;
            case "front_img":
                NewImg.front_img = imgInput;
                onChange(NewImg);
                SetNowImg(imgInput);
                break;
            case "back_img":
                NewImg.back_img = imgInput;
                onChange(NewImg);
                SetNowImg(imgInput);
                break;
            default:
                break;
        }
    }
    return(
        <div style={{display: "flex", flexDirection: "column", height: 200, width: 200, justifyContent: "space-between"}}>
            <img src={NowImg?.preview? NowImg.preview : `${src}`} alt="" width={"80%"} height={"80%"}/>
            <InputCustom name={name} type={type} accept={accept} src={src} onChange={e => HandleChange(e)} alt={alt}/>
        </div>
    )
}

export default InputImage 