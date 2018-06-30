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

    _increase = (e) => {
        e.preventDefault()
        this.props.actions.add(this.state.input)
    }

    _decrease = (e) => {
        e.preventDefault()
        this.props.actions.subtract(this.state.input)
    }

    _updateInput = (e) => {
        this.setState({ input: parseInt(e.target.value) })
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
                <Button text="Increase" onClick={this._increase} /> <Button text="Decrease" onClick={this._decrease} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    if (state && state.Grid) return {...state.Grid.calculator};
    else if (state)          return {...state.calculator};
    else                     return {};
};

const mapDisptachToProps = (dispatch) => {
  return {
    actions: bindActionCreators(CalculatorActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(Calculator);