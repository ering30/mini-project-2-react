import React, { useEffect} from 'react'
import { Button } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    locationForm: {
        background: 'white',
    },
    detailButton: {
        background: '#357a38',
        color: '#FAFAFA',
        width: '30%',
        height: '3rem'
    }
    
}));

export default function GetStartedButton() {
    const classes = useStyles();
    const navigate = useNavigate()
    return (
        <div>
            <Button disableRipple className={classes.detailButton} variant="contained" onClick={() => navigate('/calculator')}>Get Started</Button>  
        </div>
    )
}
