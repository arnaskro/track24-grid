import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Calculator from './Calculator';
import Greeting from './Greeting';

class Grid extends Component {
  render() {
    return <div>
      <h2>Welcome to Grid</h2>
      <Greeting />
      <br /><br /><br />
      <Calculator />
    </div>
  }
}

Grid.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  })
}

export default Grid;