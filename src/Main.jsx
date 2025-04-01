import { useState } from "react";
export default function Main() {
  const [meme, setMeme] = useState({
    topText: "ONE DOES NOT SIMPLY",
    bottomText: "WALK INTO MORDOR",
    imageUrl: "",
  });
  function handleChange(event){
        const {value,name} = event.currentTarget
        setMeme(prev => ( 
            {...prev,[name]:value}
         ) )
  }
  return (
    <div className="main">
      <div>
        <label htmlFor="topText">
          Top Text
          <input type="text" name="topText" placeholder={meme.topText}
           onChange={handleChange} 
           value={meme.topText} />
        </label>
        <label htmlFor="bottomText">
          Bottom Text
          <input type="text" name="bottomText" placeholder={meme.bottomText} 
           onChange={handleChange}
           value={meme.bottomText} />
        </label>
      </div>
      <button>Get a new meme image</button>
      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="topText"> {meme.topText} </span>
        <span className="bottomText"> {meme.bottomText} </span>
      </div>
    </div>
  );
}
