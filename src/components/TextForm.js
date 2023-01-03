import React, {useState}from 'react';

export default function TextForm(props) {
    const handleUpclick=()=>{
        // console.log("UpperCase was clicked")
        let newTExt=text.toUpperCase();
        setText(newTExt)
        props.showAlert("Converted to upper case" ,"success");
    }
    const handleLoclick=()=>{
        // console.log("LowerCase was clicked")
        let newTExt=text.toLowerCase();
        setText(newTExt)
        props.showAlert("Converted to lower case" ,"success");
    }
    const handleClclick=()=>{   
        let newTExt= "";
        setText(newTExt)
        props.showAlert("Text is cleared" ,"warning");
    }
    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    const handleCopy=()=>{
        var ttext=document.getElementById("InputBox");
        ttext.select();
        ttext.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(ttext.value);
        props.showAlert("Coppied to clipboard" ,"success");
    }
    const handleExtraSpace=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("All extra spaces removed" ,"success");
        

    }
    const[text,setText]=useState('');
   
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
       <div className="mb-3">
          <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="InputBox" rows="8"></textarea>
       </div>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to upper case</button>
        <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to lower case</button>
        <button className="btn btn-primary mx-2" onClick={handleClclick}>Clear the Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy the text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Delect Extra Spaces</button>



    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
        
        
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} Characters</p>
        <p>Time required to read = {0.008* text.split(" ").length} min</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in text box above to preview here!!"}</p>

    </div>
    </>
  );
}