import React from 'react'
import {useState} from 'react' //useState hook use kely
// import React, {useState} from 'react' - aspn lihu shkta

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked"); //button vr clik kelyvar text area mdhe setetxt val sentence disel new text/state update kely
        let newText = text.toUpperCase();
        // setText("You have clicked on handleUpClick")  //state update hogya matlab re-render hogya 
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Cleared text", "success");
    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value); //ab textbox me settext ke brabr kuch type kr sakte hai isiliye ye use kiya. aur jb type krenge kuch tb onchange event run hoga means console me onchange wtite hooga
    }  //target.value mhnje he event call hoil n tevha input field mdhala input access kru shknar apn
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/); //split method split kren strng la sub strng mdhe return krel array form mdhe
        setText(newText.join(" ")); //join method join krel strng chya array la nd new strng return krel
        props.showAlert("Extra Spaces Removed", "success");
    }

    const [text, setText] = useState('');  //new state variable create krych format..usestate brackets mdhe default value
    // text = "new text"; text variable set kelay tychi value usestate mdhli bracket,, wrong way to change the state
    // setText("new text"); setetxt function mdhe new text update krnar.
    return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}> 
    <h1>{props.heading}</h1>

    <div className="mb-3">
                                        {/* {text} texarea chi value hoil ji me value= mdhe set keliye ti ,,means usestate bracket mdhala sentence, textaream me jo bhi text ki value hai wo set ho jayegi 
                                        ,value chya place vr kahipn name use kru shkto like name  */}
                                        {/* onchange event ahe mandatory hai likhna ye event */}
    <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>  
    </div>                                {/* style mdhe don curly ka use kely coz ek js ch ahe ek object sathi ahe*/}
                                          {/* jevha jevha apn onchange props set krnar value taknar tevha handleonchange event call honar */}
                                          {/* onClick={handleUpClick}- ye button pr click krne ke bad koi function run hona chahiye, upar arrow fun likha hai function name handleupclick*/}
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    {/* ek word la 0.008 evda time lahto tr no.of words la 0.008 ne multiply krnar mhnje tevdya min mdhe te read honar text */}
    <h2>Preview</h2>
    <p>{text.length>0 ?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
    )
                                    
}

// An onChange event is triggered when values are entered in the input. 
//  This fires a function handleChange(), that is used to set a new state for the input 