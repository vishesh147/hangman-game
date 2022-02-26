import React from 'react'
import "./Drawing.css"

const Drawing = (mistakes) => {
  return (
    <svg className='svgcanvas' height="auto" width="auto" viewBox='0 0 500 500'>
      <g >
        {/* Rod */}
        <line className='hm rod' x1="100" y1="50" x2="100" y2="450" /> 
        <line className='hm rod' x1="50" y1="450" x2="200" y2="450" />
        <line className='hm rod' x1="100" y1="50" x2="400" y2="50" />
        <line class='hm rod' x1="100" y1="100" x2="150" y2="50" />
        {/* Head */}
        {mistakes > 0 && <circle className='hm fhead' cx="320" cy="130" r="30" />}
        {/* Body */}
        {mistakes > 1 && <line className='hm fbody' x1="320" y1="160" x2="320" y2="325" />}
        {mistakes > 2 && <line className='hm fbody' x1="320" y1="170" x2="270" y2="230" />}
        {mistakes > 3 && <line className='hm fbody' x1="320" y1="170" x2="370" y2="230" />}
        {mistakes > 4 && <line className='hm fbody' x1="320" y1="325" x2="270" y2="400" />}
        {mistakes > 5 && <line className='hm fbody' x1="320" y1="325" x2="370" y2="400" />}
        {/* Rope */}
        {mistakes> 6 && <line className='hm rope' x1="320" y1="100" x2="320" y2="50" />}
        {/* Face */}
        {mistakes> 6 && <text x="304" y="127" className="eye">x</text>}
        {mistakes> 6 && <text x="328" y="127" className="eye">x</text>}
        {mistakes> 6 && <line className="hm mouth" x1="310" y1="140" x2="330" y2="140" />}
        {/*mistakes>  1 && <text x="320" y="199" className="tongue">U</text>*/}
      </g>
    </svg>
  )
}

export default Drawing