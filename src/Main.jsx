import { useState,useEffect } from "react";  
export default function Main() {
  const [data,setData] = useState(null)
  
  const [meme, setMeme] = useState({
    topText: "ONE DOES NOT SIMPLY",
    bottomText: "WALK INTO MORDOR",
    imageUrl: "https://i.imgflip.com/2xscjb.png",
  });

  function handleChange(event){
        const {value,name} = event.currentTarget
        setMeme(prev => ( 
            {...prev,[name]:value}
         ) )
  }

  useEffect(() => {
      async function getData(){
          const des = await fetch("https://api.imgflip.com/get_memes");
          const dat = await des.json();
          setData(dat);          
      }
      getData();
  }, [])    

  function getRandomMeme(){
    const randomNumber = Math.floor(Math.random() * data.data.memes.length);
    const url = data.data.memes[randomNumber].url;
    setMeme(prev => ({
      ...prev,
      imageUrl: url
    }))
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
      <button
      onClick={getRandomMeme}
      >Get a new meme image</button>
      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="topText"> {meme.topText} </span>
        <span className="bottomText"> {meme.bottomText} </span>
      </div>
    </div>
  );
}
