import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import FetchCarbonSutra from './FetchCarbonSutra';
import { makeStyles } from '@material-ui/core';

class CalculatorFormSutra extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number1: '',
            transportMode: ''
        }
    }
    
    handleInputChange = event => {
        event.target.name === "num1"
        ? this.setState({
            number1:event.target.value
        }) 
        : console.log("error")
    }

    // handleTransportChange(transportMode) {
    //     this.setState({
    //         transportMode: transportMode
    //     }) 
    // }
    
    render() {
        const useStyles = makeStyles((theme) => ({
            instructions: {
                fontFamily: 'Unbounded',
                fontWeight: '200'
            },
        }));
        const classes = useStyles
        const {number1} = this.state
        
        return (
            <>
            <form className={classes.formInput}>
                    <TextField
                        required
                        autoFocus
                        className={classes.textInput}
                        variant="filled"
                        label="required"
                        type="text"
                        name="num1"
                        helperText="Enter a distance in km e.g. 2500"
                        value={number1}
                        onChange={this.handleInputChange}
                        color="primary"
                    />
                <div>
                {this.state.number1 >0 ? 
                <>
                <FetchCarbonSutra distance={number1} /> 
                </>
                : null}
                </div>
            </form>
            </>
        )
    }
}
//&& this.state.number2>0 // end={number2} transportMode={transportMode}
export default CalculatorFormSutra