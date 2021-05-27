import axios from 'axios';
import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import HospitalList from './HospitalList'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        paddingBottom: "50px",
    },
    title: {
        padding: "2px",
        textAlign: 'left',
        lineHeight: '0px',
        color: "#4053bf",
    },
    tableinfo: {
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
    }
});
function HospitalDoctor(props) {
    const classes = useStyles();
    const [backButton, setBackButton] = useState(true);
    const [doctorData, setDoctorData] = useState([]);
    function handleBackButton() {
        setBackButton(false)
    }
    useEffect(() => {
        axios
            .get(
                'http://localhost:8000/doctorList'
            )
            .then((res) => {

                setDoctorData(res.data);
            });
    }, []);
    return (<div>

        <div className={backButton ? classes.showList : classes.hideList}>
            <div className={classes.back}><button onClick={() => handleBackButton()}>back</button></div>
            <h1 className={classes.title}>Doctor of {props.details.name} </h1>


            {doctorData.filter(doct => (props.details.doctorsName.includes(doct.name))).map(doctor => <div>
                <div className={classes.root}>
                    <table className={classes.tableinfo}>
                        {
                            [{ "name": "Doctor Name", prop: "name", bgcolor: "#4053bf" },
                            { "name": "Doctor Type", prop: "type", bgcolor: "#4053bf" },
                            { "name": "Qualification", prop: "qualification", bgcolor: "#3f51b5" },
                            { "name": "Contact No.", prop: "contactNo", bgcolor: "#3f51b5" },
                            { "name": "Email Id", prop: "email", bgcolor: "#3f51b5" },
                            { "name": "City", prop: "city", bgcolor: "#3f51b5" }

                            ].map(
                                (row) =>
                                (<thead><tr>
                                    <th bgcolor={row.bgcolor} className={classes.tableinfo}>{row.name}</th>
                                    <td className={classes.tableinfo}> {doctor[row.prop]}</td>
                                </tr></thead>))
                        }

                    </table>
                </div>
            </div>)}
        </div>
        <div className={backButton ? classes.hideList : classes.showList}>
            <HospitalList />
        </div>
    </div>)
}
export default HospitalDoctor