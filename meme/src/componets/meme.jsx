import React from "react";

export default function Meme(){

    const [memeImage, setMemeImage] =React.useState({
        topText:"",
        bottomText:"", 
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    const [allMeme, setAllMeme] = React.useState([])
    
    React.useEffect(() =>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data =>setAllMeme(data.data.memes))
    }, [])

      function getMemeimage(){
        const randomNumber = Math.floor(Math.random() * allMeme.length)
        const url = allMeme[randomNumber].url
        setMemeImage(prevMeme => ({
            ...prevMeme, randomImage : url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMemeImage(prevMeme => ({
            ...prevMeme, 
            [name] : value
        }))
    }

    return(
        <main>
            <div className="form">
                <input type="text" 
                   className="form--input" 
                       placeholder="Top text"
                       name= "topText"
                       value= {memeImage.topText}
                       onChange= {handleChange}/>
                       
                <input type="text" 
                    className="form--input" 
                       placeholder="Bottom text"
                       name="bottomText"
                       value= {memeImage.bottomText}
                       onChange= {handleChange}/>

               <button 
               className="form--button" 
               onClick={getMemeimage}>
               Get a new meme image 🖼
               </button>
            </div>
            <div className="meme">
                <img src= {memeImage.randomImage} className="meme--image" />
                <h2 className="meme--textTop">{memeImage.topText}</h2>
                <h2 className="meme--textBottom">{memeImage.bottomText}</h2>
            </div>
        </main>
    )

}