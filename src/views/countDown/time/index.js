import React from 'react'
import { pad } from 'utils/index.js'
import './index.css'

export default ({ m, s }) => {
  return (
    <div className="card-content">
      <div className="time">
        {m}:{pad(s)}
      </div>
    </div>
  )
}
