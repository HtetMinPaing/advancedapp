import React, { useState } from 'react'
import "../Lab2/Form.css"

const Feedback = () => {

    const [score,setScore] = useState("10");
    const [comment, setComment] = useState("");


    const handleSubmit = (e) =>{

        e.preventDeafult();

        if(Number(score)<=5 && comment.length<=10){
            alert("Please write a detailed feedback about the experience.")
            return;
        }

        setComment("");
        setScore("10");
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <h2>Feedback Form</h2>
                <div className='Field'>
                    <label>Score : {score}</label>
                    <input type="range" min='0' max="10" value={score} onChange={e=> setScore(e.target.value)}/>
                </div>
                <div className='Field'>
                    <label>Comment : </label>
                    <textarea value={comment} onChange={e=>setComment(e.target.value)}></textarea>
                </div>
                <button type='submit'>Submit</button>
            </fieldset>
        </form>
    </div>
  )
}

export default Feedback