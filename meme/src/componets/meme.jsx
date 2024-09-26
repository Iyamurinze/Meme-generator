import React from "react";

export default function Meme(){
    return(
        <main>
            <form>
                <input type="text" 
                   className="form--input" 
                       placeholder="Top text"/>
                <input type="text" 
                    className="form--input" 
                       placeholder="Bottom text"/>
               <botton className="form--botton">
               Get a new meme image  🖼
               </botton>
            </form>
        </main>
    )

}