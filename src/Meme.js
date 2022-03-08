import React from "react";
import "./index.css";
export default function Meme(){
    const [meme,setMeme]=React.useState({
        toptext:"",
        bottomtext:"",
        randommemeimg:"meme1.jpg"
    })
    const [allmemeimage,setallMemeimage]=React.useState([])

    React.useEffect(()=>{
         fetch("https://api.imgflip.com/get_memes")
         .then(res=>res.json())
         .then(data=>setallMemeimage(data.data.memes))
    },[])

    function getimage(){
        
        const randomNumber=Math.floor(Math.random()*allmemeimage.length)
        // const randomNumber=1
        const url=allmemeimage[randomNumber].url
        setMeme(prevMeme=>({
            ...prevMeme,
            randommemeimg:url
        }))
    }
    function handleChange(event){
       const {name,value}=event.target
       setMeme(prevMeme=>({
           ...prevMeme,
           [name]:value
       }))
    }

    return (
        <main className="main">
          <div className="form">
             <input
              type="text" placeholder="Top text" className="form-input" name="toptext"
              value={meme.toptext} onChange={handleChange}
              />
             <input
              type="text" placeholder="Bottom text" className="form-input" name="bottomtext"
              value={meme.bottomtext}  onChange={handleChange}
              />
             <button className="form-btn" onClick={getimage}>Get a new meme image</button>
          </div>
          <div className="meme">
              <img src={meme.randommemeimg} className="meme-img"/>
              <h2 className="meme--text top">{meme.toptext}</h2>
              <h4 className="meme--text bottom">{meme.bottomtext}</h4>
          </div>
        </main>
    )
}