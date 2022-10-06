// import React from 'react'
import React, { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState("");

    function handleupClick(){
        // console.log("HandleUP was Clicked " + text)
        let newText= text.toUpperCase();
        setText(newText)
    }
    function handlelowClick(){
        // console.log("HandleUP was Clicked " + text)
        let newText= text.toLowerCase();
        setText(newText)
    }
    function handleBoldClick(){
        // console.log("HandleUP was Clicked " + text)
        text.value= document.getElementById("exampleFormControlTextarea1").style.fontWeight='bold';  
        setText(text)
    }
    function handleclearClick(){
        // console.log("HandleUP was Clicked " + text)
        let newText= "";
        setText(newText)
        props.showAlert("Text Cleared", "success")
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }
    function handleonChange(event){
        // console.log("On Change")
        setText(event.target.value)
    }
    return (
        <>
        <div>
            <h1 style={{color: props.mode === 'dark'?'white':'#000440'}}>{props.text}</h1>
            <div className="mb-3">
                {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" style={{backgroundColor: props.mode === 'dark'?'#4a4a4a':'white', color: props.mode === 'dark'?'white':'#000440'}} onChange={handleonChange} value={text}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary my-1" onClick={handleupClick}>To Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlelowClick}>To Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-1 " onClick={handleBoldClick}>To BoldText</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>CopyText</button>
            <button disabled={text.length===0} className="btn btn-danger my-10" onClick={handleclearClick}>ClearText</button>
        </div>
        <div className='container my-2' style={{color: props.mode === 'dark'?'white':'#000440'}}>
            <h2 style={{color: props.mode === 'dark'?'white':'#000440'}}>Text Summary</h2>
            <p><b>{text.split(" ").filter((element)=>{return element.length!=0}).length}</b> words <b>{text.length}</b> characters</p>
            <p><b>{0.008*text.split(" ").filter((element)=>{return element.length!=0}).length}</b> minutes to read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
        
    )
}
