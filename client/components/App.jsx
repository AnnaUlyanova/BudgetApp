import React from 'react'
import { Link } from 'react-router'

import Nav from './Navigation'

export default React.createClass({
  render () {
    return (
      <div>
        <Link to = {'/'}><h1>Budget Application</h1></Link>

        <Nav />

        <div>{this.props.children}</div>

      </div>
    )
  }
})
