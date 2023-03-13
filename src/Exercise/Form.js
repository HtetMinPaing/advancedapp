import React, { useState } from 'react'
import "../Lab2/Form.css"

const Form = () => {

    const [name,setName] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        setName("");
        console.log("Successfully Submitted!");
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div className='Field'>
                    <label htmlFor='name'>Name</label>
                    <input id='name' type="text" placeholder='Name' name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <button disabled={!name} type='submit'>Submit</button>
            </fieldset>
        </form>
    </div>
  )
}

export default Form