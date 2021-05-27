import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DoctorBookAppointment from './DoctorBookAppointment'
import DoctorDetails from './DoctorDetails';
import DoctorTiming from './DoctorTiming';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        paddingBottom: "24px",
    },
    title: {
        padding: "2px",
        textAlign: 'left',
        lineHeight: '0px',
        color: "#4053bf",
    },
    border: {
        border: "1px solid",
        borderColor: "#D9E3F0",
        width: 600,

    },
    cover: {
        '& > *': {
            margin: theme.spacing(0.6),
        },

    },
    tableinfo: {
        textAlign: "left",
        width: 720,
        height: 300,
        border: "1px solid ",
        borderColor: "#D9E3F0",
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

}));


function DoctorList() {
    const [flag, setFlag] = useState(0)
    const [show, setShow] = useState(true);
    const classes = useStyles();
    const [doctorList, setDoctorList] = useState([])
    const [activeDoctor, setActiveDoctor] = useState({ name: "", contactNo: "", email: "" });
    const [doctorTime, setDoctorTime] = useState({ id: "" });
    const [appointment, setAppointment] = useState({ id: "" })

    useEffect(() => {
        axios
            .get(
                'http://localhost:8000/doctorList'
            )
            .then((res) => {

                setDoctorList(res.data);
            });
    }, []);

    function handleDoctorDetails(doctor) {
        setShow(false);
        setActiveDoctor({ ...doctor });
        setFlag(1);
        //console.log(doctor.name + " " + doctor.contactNo + "  " + doctor.email);

    }
    function handleDoctorTiming(doctor) {
        setShow(false);
        setDoctorTime({ ...doctor });
        setFlag(2);
        //alert("Timing")

    }
    function handleDoctorAppointment(doctor) {

        setShow(false);
        setAppointment({ ...doctor });
        setFlag(3);

        //alert("Appoinment")
    }
    return (
        <div>

            <div className={show ? classes.showList : classes.hideList}>

                <div className={classes.title}><h1>All Doctors </h1></div>


                {doctorList.map((doctor) => (<div className={classes.root}>
                    <table className={classes.tableinfo} >
                        <tr className={classes.border}><td><img src={doctor.image} alt="Doctor" width="200" height="170" /></td>
                            <td>
                                <table className={classes.tableinfo} >
                                    {
                                        [{ "name": "Doctor Name", prop: "name" },
                                        { "name": "Doctor Type", prop: "type" },
                                        { "name": "Qualification", prop: "qualification" },
                                        { "name": "Contact No.", prop: "contactNo" },
                                        { "name": "Email Id", prop: "email" },
                                        { "name": "City", prop: "city" }
                                        ].map(
                                            (row) =>
                                            (<tr>
                                                <th bgcolor={row.bgcolor} className={classes.border}>{row.name}</th>
                                                <td className={classes.border}> {doctor[row.prop]}</td>
                                            </tr>
                                            ))
                                    }
                                    <tr><td className={classes.cover}>
                                        <Button variant="contained" color="primary" onClick={() => handleDoctorDetails(doctor)}>
                                            <b> Doctor Details</b>
                                        </Button>
                                        <Button variant="contained" color="primary" onClick={() => handleDoctorTiming(doctor)}>
                                            <b>Doctor Timing</b>
                                        </Button></td>
                                        <td className={classes.cover}> <Button variant="contained" color="primary" onClick={() => handleDoctorAppointment(doctor)}>
                                            <b> Book Appoinment</b>
                                        </Button>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </div>))}
            </div >

            <div className={show ? classes.hideList : classes.showList}>
                {/* <h1>  {JSON.stringify(activeDoctor)} </h1>
                    <h1>  {JSON.stringify(activeDoctor)} </h1>
                    <h1>  {JSON.stringify(activeDoctor)} </h1> */}

                {(() => {
                    if (flag === 1) {

                        return <div>
                            <DoctorDetails activeDoctor={activeDoctor} />
                        </div>


                    } else if (flag === 2) {
                        return <div>
                            <DoctorTiming doctorTime={doctorTime} />
                        </div>;
                    }
                    else if (flag === 3) {
                        return <div>
                            <DoctorBookAppointment appointment={appointment} />
                        </div>;
                    }
                })()}
            </div>
        </div>
    )
}
export default DoctorList