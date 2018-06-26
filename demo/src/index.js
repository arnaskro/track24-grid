import React, {Component} from 'react'
import {render} from 'react-dom'

import Grid from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <Grid user={{ name: "Arnas" }}/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
