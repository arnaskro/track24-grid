import React, {Component} from 'react'
import {render} from 'react-dom'
import './index.css';


import { Provider } from 'react-redux';
import store from '../../src/store';

import Grid from '../../src/components/App'

class Demo extends Component {
  render() {
    return <div>
      
      <Grid user={{ name: "Arnas" }}/>
    </div>
  }
}

render(<Provider store={store}>
  <Demo />
</Provider>, document.querySelector('#demo'))
