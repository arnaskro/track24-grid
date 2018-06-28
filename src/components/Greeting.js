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
    
    if (state && state.main && state.main.user)
        return { name: state.main.user.name }
    else return { name: "-" }
};

export default connect(mapStateToProps)(Greeting);