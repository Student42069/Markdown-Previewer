import { useState } from "react";
import { Remarkable } from "remarkable";
import text from "./text";
import "./App.css";

function App() {
  let md = new Remarkable();
  const [value, setValue] = useState(text);

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  function getRawMarkup() {
    return { __html: md.render(value) };
  }

  return (
    <div className="app">
      <div className="editor">
        <p id="editor-title" className="fontt">
          Editor
        </p>
        <textarea id="editor" onChange={handleChange} value={value} />
      </div>
      <div className="preview">
        <p id="preview-title" className="fontt">
          Preview
        </p>
        <div id="preview" dangerouslySetInnerHTML={getRawMarkup()} />
      </div>
      {/* <h3>Input</h3>
      <label htmlFor="markdown-content">Enter some markdown</label>
      <textarea id="editor" onChange={handleChange} defaultValue={value} />
      <h3>Output</h3>
      <div className="content" dangerouslySetInnerHTML={getRawMarkup()} /> */}
    </div>
  );
}

export default App;
