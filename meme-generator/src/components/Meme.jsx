import React from 'react';

const Form = () => {
  return (
    <main>
      <form className="form" action="">
        <input className="form--input" type="text" placeholder="top text" />
        <input className="form--input" type="text" placeholder="bottom text" />
        <button className="form--button" type="submit">Get a new meme image 🖼</button>
      </form>
    </main>

  );
};

export default Form;
