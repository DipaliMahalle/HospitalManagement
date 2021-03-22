import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import doctorList from '../mockdata/doctorList.json';
import doctorTimes from '../mockdata/doctorTimes.json'

import DoctorBookAppoinment from './DoctorBookAppoinment'
import DoctorDetails from './DoctorDetails';

const useStyles = makeStyles({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 200,
        height: 200
    },
    tableinfo: {

        textAlign: "left",

    },
    showList: {
        display: "block",
    },
    hideList: {
        display: "none",
    }

});


function DoctorList() {
    const [flag, setFlag] = useState(0)
    const [show, setShow] = useState(true);
    const classes = useStyles();
    const [activeDoctor, setActiveDoctor] = useState({ name: "", contactNo: "", email: "" });
    const [doctorTime, setDoctorTime] = useState({ id: "" });
    const [appoinment, setAppoinment] = useState({ id: "" })

    function doctorDetails(doctor) {
        setShow(false);
        setActiveDoctor({ ...doctor });
        setFlag(1);
        //console.log(doctor.name + " " + doctor.contactNo + "  " + doctor.email);

    }
    function doctorTiming(doctor) {
        setShow(false);

        setDoctorTime({ ...doctor });
        setFlag(2);
        //alert("Timing")

    }
    function doctorAppoinment(doctor) {

        setShow(false);
        setAppoinment({ ...doctor });
        setFlag(3);

        //alert("Appoinment")
    }
    function handleBack() {
        setShow(true);
    }
    function handleAppoinment(event) {
        event.preventDefault();
        console.log("appoinment")
        // setValue(event.target.value)

    }


    return (
        <div>

            <div className={show ? classes.showList : classes.hideList}>

                <div><h2>Doctors List</h2></div>

                {doctorList.map((doctor, index) => (<div>
                    <Card className={classes.root}>
                        <div className={classes.details}>
                            <CardMedia
                                component="img"
                                alt="doctorjpg"
                                image={doctor.image}
                                title="doctor"
                                className={classes.cover}
                            />
                        </div>
                        <CardContent >
                            <Typography gutterBottom variant="h5" component="h2">
                                <table className={classes.tableinfo} >
                                    <tr><td>Name</td><td> {doctor.name}</td></tr>
                                    <tr><td> Type </td> <td> {doctor.type}</td></tr>
                                    <tr><td> Qualification </td> <td> {doctor.qualification}</td></tr>
                                    <tr><td> Contact No.</td><td> {doctor.contactNo}</td></tr>
                                    <tr><td>Email Id</td><td> {doctor.email}</td></tr>
                                    <tr><td> City </td><td>{doctor.city}</td></tr>
                                </table>
                            </Typography>
                        </CardContent>
                        <br />
                    </Card>
                    <Card>
                        <CardActions>
                            <Button color="primary" onClick={() => doctorDetails(doctor)}>
                                Details of Doctor
                        </Button>
                            <Button color="primary" onClick={() => doctorTiming(doctor)}>
                                Timing of doctor
                        </Button>
                            <Button color="primary" onClick={() => doctorAppoinment(doctor)}>
                                Book Appointment
                            </Button>
                        </CardActions>
                    </Card>
                    <br />
                </div >))
                }
            </div >

            <div className={show ? classes.hideList : classes.showList}>
                {/* <h1>  {JSON.stringify(activeDoctor)} </h1>
                    <h1>  {JSON.stringify(activeDoctor)} </h1>
                    <h1>  {JSON.stringify(activeDoctor)} </h1> */}

                {(() => {
                    if (flag === 1) {
                        // return <div><DoctorDetails /></div>;

                        return <div>
                            <button onClick={() => handleBack()}>Back</button><br /><br />

                            <h1> Doctor Details </h1>
                            <Card className={classes.root}>
                                <div className={classes.details}>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        image={activeDoctor.image}
                                        title="doctor"
                                        className={classes.cover}
                                    />
                                </div>
                                <table>
                                    <tr><td>Name</td><td> {activeDoctor.name}</td></tr>
                                    <tr><td> Type </td> <td> {activeDoctor.type}</td></tr>
                                    <tr><td> Qualification </td> <td> {activeDoctor.qualification}</td></tr>
                                    <tr><td> Contact No.</td><td> {activeDoctor.contactNo}</td></tr>
                                    <tr><td>Email Id</td><td> {activeDoctor.email}</td></tr>
                                    <tr><td> City </td><td>{activeDoctor.city}</td></tr>
                                </table>
                            </Card>
                        </div>;
                    } else if (flag === 2) {
                        return <div>
                            <button onClick={() => handleBack()}>Back</button><br /><br />
                            <h1>Doctor Timing</h1>
                            {doctorTimes.filter(person => doctorTime.id == person.id).map(docttime => <div>
                                <table>
                                    <tr><td>Name</td><td> {docttime.name}</td></tr>
                                    <tr><td> Monday </td> <td> {docttime.monday}</td></tr>
                                    <tr><td> Tuesday </td> <td> {docttime.tuesday}</td></tr>
                                    <tr><td> Wensday</td><td> {docttime.wensday}</td></tr>
                                    <tr><td>Thursday</td><td> {docttime.thursday}</td></tr>
                                    <tr><td> Friday </td><td>{docttime.friday}</td></tr>
                                    <tr><td> saturday </td><td>{docttime.saturday}</td></tr>
                                    <tr><td>sunday </td><td>{docttime.sunday}</td></tr>
                                </table> <br /></div>)}
                        </div>;
                    }
                    else if (flag === 3) {
                        return <div>
                            <button onClick={() => handleBack()}>Back</button><br /><br />
                            {/* <DoctorBookAppoinment appoinment={appoinment} /> */}
                            Doctor Name : <input type="text" label="username" value={appoinment.name} /><br /><br />
                            Appoinment Date: <input type="text" label="date" /><br /><br />
                            Patient Name : <input type="text" label="patientname" /><br /><br />
                            Email : <input type="text" label="email" /><br /><br />
                        Contact No.: <input type="text" label="contactno" /><br /><br />
                        Address: <input type="text" label="address" /><br /><br />
                            <button onClick={() => handleAppoinment()}>Book Appoinment</button>
                            <button>Reset</button><br /><br />
                        </div>;
                    }
                })()}
            </div>
        </div>
    )
}
export default DoctorList