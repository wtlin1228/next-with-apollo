import React, { Fragment } from 'react'
import { Router, Link } from '@reach/router'

import About from './about'
import Haha from './haha'

function Pages() {
  return (
    <Fragment>
      <Router primary={false} component={Fragment}>
        <Haha path='/' />
        <About path='about' />
      </Router>
      <div>
        <p>this is footer</p>
        <Link to='/'>Index</Link>
        <Link to='/about'>About</Link>
      </div>
    </Fragment>
  )
}

export default Pages
