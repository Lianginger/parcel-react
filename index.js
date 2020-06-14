import React from 'react'
import ReactDom from 'react-dom'

const Hello = () => {
  return <div>WHATS UP!?</div>
}

ReactDom.render(<Hello />, document.getElementById('app'))