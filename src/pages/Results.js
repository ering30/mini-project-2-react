import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


const useStyles = makeStyles((theme) => ({
    pageWrapper: {
        width: '80%',
        margin: '0 auto',
        paddingTop: '15%',
        textAlign: 'center',
    },
    resultsTable:{
        color: '#357a38',
        width: '100%'
    },
    resultButton:{
        margin: '0 auto',
        background: '#357a38',
        color: '#FAFAFA'
    },
    noteText:{
        margin: '1%',
        color: '#357a38',
    },
}));

export default function Results(props) {
    
    const classes= useStyles();
    const navigate = useNavigate();
    const location = useLocation();
    const {from} = location.state
    const tableData = location.state.data;
    console.log(tableData);

    let grams = tableData.co2e_gm
    let kilo = tableData.co2e_kg
    let tonnes = tableData.co2e_mt
    let distance= tableData.distance_value
    let vehicle = "Average Car"
    let units = tableData.distance_unit
    // let billionaire = 3100000
    // let trips = billionaire/(parseInt(tonnes))
    // let tripsRounded = roundTo(trips,2)


    return (
        <div className={classes.pageWrapper}>
            
            <Card sx={{ minWidth: 275 }} className={classes.card} style={{backgroundColor: "#fafbed"}}>
        <CardContent >
        <table className={classes.resultsTable}>
                <thead>
                <tr className={classes.tableHeadRow}>
                    <th>Distance</th>
                    <th>Distance Unit</th>
                    <th>Vehicle Type</th>
                    <th>g CO<sub>2e</sub></th>
                    <th>kg CO<sub>2e</sub></th>
                    <th>tonnes CO<sub>2e</sub></th>
                    <th>Global Average Annual tonnes CO<sub>2e</sub></th>
                    <th>Billionaire Average Annual tonnes CO<sub>2e</sub></th>
                </tr>
                </thead>
                <tbody>
                <tr className={classes.tableDataRow}>
                    <td>{distance}</td>
                    <td>{units}</td>
                    <td>{vehicle}</td>
                    <td>{grams}</td>
                    <td>{kilo}</td>
                    <td>{tonnes}</td>
                    <td>2.76 *</td>
                    <td>3.1 million *</td>
                </tr>
                </tbody>
            </table>
            <p className={classes.noteText}>* source: Oxfam 2022, <a href="https://oxfamilibrary.openrepository.com/bitstream/handle/10546/621446/bn-carbon-billlionaires-071122-en.pdf?sequence=14">"Carbon Billionaires: The investment emissions of the worlds richest people"</a></p>

        </CardContent>
        <CardActions>
        <Button className={classes.resultButton} variant="contained" onClick={()=> navigate(-1)}>Try Again</Button>
        </CardActions>
        <p className={classes.noteText}>
            Note: You will lose the current data.
            </p>
        </Card>
        </div>
    )
}
