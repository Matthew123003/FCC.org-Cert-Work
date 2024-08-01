import React, { useState } from 'react';

export const Document = () => {
  const [text, setText] = useState('');
  const [document, setDocument] = useState('');
  //Create function that adds text inside of the textarea should be added to the document.

  //When text is added, it should be highlighted in blue and the highlight should fade after 2 seconds.

  //Textarea field should be cleared after the text is submitted / when enter is pressed.

  const handleSubmit = () => {
    addTextToDocument();
    setText('');
  }


  const addTextToDocument = () => {
    let textToAdd = `<p className="added-text">${text}</p>`
    setDocument(document + textToAdd);
  }

  const resetText = () => {
    setDocument('');
  }
  
  return <div className="doc-container">
    Add Text to Document
    <form onSubmit={handleSubmit}
    onKeyDown={
      (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          event.stopPropagation();
          handleSubmit();
        }
      }
    }>
    <textarea value={text} onChange={(e) => setText(e.target.value)}>

    </textarea>
    </form>
    <button type="submit" onClick={resetText}>Reset</button>

    <div>
      Added Text:
      <p className="added-text" dangerouslySetInnerHTML={{__html: document}}></p>
    </div>
  </div>;
};
