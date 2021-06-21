import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import Box from '@material-ui/core/Box';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '50%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

export default function Services(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [message, setMessage] = useState(props.message);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    useEffect(()=>{
        setMessage(props.message);
    })

    const temp =
        message.map((me,i) =>
                <Accordion   expanded={expanded === i} onChange={handleChange(i)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1bh-content"
                        id={i}
                    >
                        <Typography   className={classes.heading}>{me.name}</Typography>
                        <Typography className={classes.secondaryHeading}>{me.condition}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {me.url}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            );

    return (
        <Box m={2}>
            <div className={classes.root}>
                {temp.length === 0  ? <h3>Waiting data form server</h3> : <h3>List of services</h3>}
                {temp}
            </div>
        </Box>
    );
}