import React from "https://dev.jspm.io/react"
import ReactDOM from "https://dev.jspm.io/react-dom"

const View = () => {
  return (
    <div>
      {new Date().toISOString()}
    </div>
  )
};

ReactDOM.render(View, document.body);