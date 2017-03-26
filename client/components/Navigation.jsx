import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h3>I want to..</h3>
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-default"><Link to = {'/colors'}>play with colors</Link></button>
          <button type="button" className="btn btn-default"><Link to = {'/draw'}>draw</Link></button>
          <button type="button" className="btn btn-default"><Link to = {'/music'}>play music</Link></button>
        </div>
      </div>
    )
  }
})
