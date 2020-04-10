import React from "react";


export default function MyComponent() {

  const getSelectedText = () => {
    const selection = window.getSelection();
    if (selection) {
      const selectedText = selection.toString();
      if (selectedText) {
        console.log(selectedText);
      }
    }
  };

  return (
    <div
      onMouseUp={getSelectedText}
    >
      Some text <div id="id1">Click me</div>
    </div>
  );
}
