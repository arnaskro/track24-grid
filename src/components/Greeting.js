import React, {Component} from 'react';
import { connect } from 'react-redux';

class Greeting extends Component {
    render() {
        return (
            <div className="Greeting">
                Hi {this.props.name}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        name: ""
    }
};

export default connect(mapStateToProps)(Greeting);