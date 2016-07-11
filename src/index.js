import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import { Victory } from 'victory'
import { VictoryPie } from 'victory'

const Root = () => <div>Root <VictoryPie /></div>

// Client render (optional):
if (typeof document !== 'undefined') {
  const outlet = document.getElementById('app')

  ReactDOM.render(React.createElement(Root, {}), outlet)
  
}

export default (locals, cb) => {
  const html = ReactDOMServer.renderToString(React.createElement(Root, locals))
  cb(null, html)
}
