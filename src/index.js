import React, {Component} from 'react'
import PropTypes from 'prop-types';

class Grid extends Component {
  render() {
    return <div>
      <h2>Welcome to Grid</h2>
      {this.props.user.name}
    </div>
  }
}

Grid.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  })
}

export default Grid;