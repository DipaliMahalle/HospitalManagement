import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import DoctorList from './DoctorList';


const useStyles = makeStyles({
    root: {
        display: 'flex',
    },
    title: {
        padding: "2px",
        textAlign: 'left',
        lineHeight: '0px',
        color: "#4053bf",
    },
    imageDetails: {
        marginLeft: "auto",
    },

    tableinfo: {
        alignItems: "right",
        fontSize: "20px",
        textAlign: "left",
        width: 600,
        border: "1px solid ",
        borderColor: "#D9E3F0",
        height: 50,
    },
    showList: {
        display: "block"
    },
    hideList: {
        display: "none"
    },
    back: {
        textAlign: "left",
    },
});

function DoctorTiming(props) {

    const classes = useStyles();
    const [backButton, setBackButton] = useState(true);
    const [doctorTiming, setDoctorTiming] = useState([]);

    function handleBackButton() {
        setBackButton(false)
    }
    useEffect(() => {
        axios
            .get(
                'http://localhost:8000/doctorTimes'
            )
            .then((res) => {

                setDoctorTiming(res.data);
            });
    }, []);

    return (
        <div>
            <div className={backButton ? classes.showList : classes.hideList}>
                <div className={classes.back}><button onClick={() => handleBackButton()}>back</button></div>
                <div className={classes.title}><h1>Dr. {props.doctorTime.name} Timing </h1></div>
                <div className={classes.root}>
                    {doctorTiming.filter(person => person.name === props.doctorTime.name).map(doctTime => <div>

                        <table className={classes.tableinfo}>
                            <thead><tr><th className={classes.tableinfo}>Day</th><th className={classes.tableinfo}>Timing Hour</th><th className={classes.tableinfo}>Fees</th></tr></thead>
                            {
                                [{ "name": "Monday", prop: "monday", bgcolor: "#4053bf" },
                                { "name": "Tuesday ", prop: "tuesday", bgcolor: "#4053bf " },
                                { "name": "Wensday", prop: "wensday", bgcolor: "#4053bf " },
                                { "name": "Thursday", prop: "thursday", bgcolor: "#4053bf" },
                                { "name": "Friday", prop: "friday", bgcolor: "#4053bf" },
                                { "name": "Saturday ", prop: "saturday", bgcolor: "#4053bf" },
                                { "name": "Sunday  ", prop: "sunday", bgcolor: "#4053bf" }
                                ].map(
                                    (row) =>
                                    (
                                        <tr>
                                            <th bgcolor={row.bgcolor} className={classes.tableinfo}>{row.name}</th>
                                            <td className={classes.tableinfo}> {doctTime[row.prop]}</td>
                                            <td className={classes.tableinfo}>{doctTime.fees} </td>
                                        </tr>
                                    ))
                            }
                        </table>
                    </div>)}
                </div>
            </div>
            <div className={backButton ? classes.hideList : classes.showList}>
                <DoctorList />
            </div>
        </div>)
}
export default DoctorTiming

