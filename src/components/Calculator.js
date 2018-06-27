import React, {Component} from 'react';

import CalculatorActions from '../actions/CalculatorActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const { Button, Input } = window.Framework;

class Calculator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: 0
        }
    }

    _increase = () => {
        this.props.actions.add(this.state.input)
    }

    _decrease = () => {
        this.props.actions.subtract(this.state.input)
    }

    _updateInput = (val) => {
        this.setState({ input: parseInt(val) })
    }

    render() {
        return (
            <div className="Calculator">
                <h1>{this.props.value}</h1>
                <Input 
                    label="Input" 
                    type="number"
                    onChange={this._updateInput} 
                    placeholder="Your number here"
                    />
                <br /><br />
                <Button text="Increase" callback={this._increase} />
                <br /><br />
                <Button text="Decrease" callback={this._decrease} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
	return {...state.calculator};
};

const mapDisptachToProps = (dispatch) => {
  return {
    actions: bindActionCreators(CalculatorActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(Calculator);