import React from "react";
import { useState } from "react";

export default function Form(props) {
  const [text, settext] = useState("");
  const newtext = (event) => {
    settext(event.target.value);

    // console.log(e.target.value);
  };
  const UpCase = () => {
    settext(text.toUpperCase());
  };
  const LowCase = () => {
    settext(text.toLowerCase());
  };

  const CapCase = () => {
    settext(
      text
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ")
    );
  };

  const AltCase = () => {
    let result = "";
    let useUpper = true;
    for (let char of text) {
      if (char.match(/[a-z]/i)) {
        result += useUpper ? char.toUpperCase() : char.toLowerCase();
        useUpper = !useUpper;
      } else {
        result += char;
      }
    }
    settext(result);
  };
  const CopyCase = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    alert("Text copied to clipboard!");
  };
  const ClearCase = () => {
    settext("");
  };

  {
    return (
      <div style={props.style}>
        <h2 className="my-4">Text Utility App</h2>
        <h4>
          This app provides various text manipulation features such as
          converting text to uppercase, lowercase, capitalized case, alternating
          case, copying text to clipboard, and clearing the text.
        </h4>
        <div>
          <textarea value={text} onChange={newtext} rows={8} />
        </div>
        <br></br>
        <button onClick={UpCase}>Up Case</button>
        <button onClick={LowCase}>lower case</button>
        <button onClick={CapCase}>Capitalized Case</button>
        <button onClick={AltCase}>AlTeRnAtInG CaSe</button>
        <button onClick={CopyCase}>Copy to Clipboard</button>
        <button onClick={ClearCase}>Clear</button>

        <div className="show">
          <p>{text}</p>
        </div>
        <h2>Word count</h2>
        <h2>{text.split(" ").length}</h2>
      </div>
    );
  }
}
