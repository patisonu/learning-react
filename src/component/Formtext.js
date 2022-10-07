import React, { useState } from 'react'

export default function Formtext() {
   
    const handleUpClick = ()=>{
        let newtext = areaval.toUpperCase();
        setAreaval(newtext);
    }
    const handleOnChange = (event)=>{
        setAreaval(event.target.value);
    }
    const [areaval, setAreaval] = useState('Enter text here');
    return (
    <>
     <h2>Write Something</h2>
        <div className="mb-3">
            <textarea className="form-control" value={areaval} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div><button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to lowercase</button>
        <div className="my-2">
            <p>Words {areaval.split(" ").length}</p>
            <p>Characters {areaval.length}</p>
            <p>Words</p>
        </div>
    </>
    )
}
