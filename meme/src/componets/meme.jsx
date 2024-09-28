import React from "react";
import memeData from "./memeData";

export default function Meme(){
    const [memeImage, setMemeImage] =React.useState("")

      function getMemeimage(){
        const memeArray = memeData.data.meme
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        setMemeImage(memeArray[randomNumber].url)
    }

    return(
        <main>
            <div className="form">
                <input type="text" 
                   className="form--input" 
                       placeholder="Top text"/>
                <input type="text" 
                    className="form--input" 
                       placeholder="Bottom text"/>

               <button className="form--button" onClick={getMemeimage}>
               Get a new meme image 🖼
               </button>
            </div>
            <div>
                <img src= {memeImage} className="meme--image" />
            </div>
        </main>
    )

}