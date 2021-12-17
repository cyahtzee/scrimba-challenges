import React from 'react';
import memesData from '../memesData.js';

const Meme = () => {
  const [memeImage, setMemeImage] = React.useState('')
  const generateMemeImage = () => {
    const random = Math.floor(Math.random() * memesData.data.memes.length)
    return memesData.data.memes[random].url
  }
  const handleClick = () => {
    setMemeImage(generateMemeImage)
  }
  return (
    <main>
      <div className="form">
        <input className="form--input" type="text" placeholder="top text" />
        <input className="form--input" type="text" placeholder="bottom text" />
        <button onClick={handleClick} className="form--button" type="submit">Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={memeImage} alt="meme" />
      </div>
    </main>

  );
};

export default Meme;
