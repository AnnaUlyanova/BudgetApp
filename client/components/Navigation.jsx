import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-default"><Link to = {'/'}>My Daily Expenses</Link></button>
          <button type="button" className="btn btn-default"><Link to = {'/reports'}>My Reports</Link></button>
          <button type="button" className="btn btn-default"><Link to = {'/goals'}>My Saving Goals</Link></button>
          <button type="button" className="btn btn-default"><Link to = {'/about'}>About</Link></button>
        </div>
      </div>
    )
  }
})
