import React from 'react';
import memesData from '../memesData.js';

const Meme = () => {
  const [meme, setMeme] = React.useState()
  const generateMemeImage = () => {
    const random = Math.floor(Math.random() * memesData.data.memes.length)
    return memesData.data.memes[random].url
  }

  const [formData, setFormData] = React.useState(
    {
      top: "",
      bottom: ""
    }
  )

  console.log(formData)
  function handleChange(event) {
    setFormData(prevState => (
      {
        ...prevState,
        [event.target.name]: event.target.value
      }
    ))
  }

  const handleClick = () => {
    setMeme(generateMemeImage)
  }
  return (
    <main>
      <div className="form">
        <input
          className="form--input"
          type="text"
          placeholder="top text"
          onChange={handleChange}
          name="top"
          value={formData.top}
        />
        <input
          className="form--input"
          type="text"
          placeholder="bottom text"
          onChange={handleChange}
          name="bottom"
          value={formData.bottom}
        />
        <button
          onClick={handleClick}
          className="form--button"
          type="submit">Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img className="meme--image" src={meme} alt="meme" />
        <h2 className="meme--text top">{formData.top}</h2>
        <h2 className="meme--text bottom">{formData.bottom}</h2>
      </div>
    </main>

  );
};

export default Meme;
