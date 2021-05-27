import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    title: {
        padding: "2px",
        textAlign: 'left',
        lineHeight: '0px',
        color: "#4053bf",
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    tableinfo: {

        textAlign: "left",
        verticalAlign: "middle",
    },
    tablePrint: {
        alignItems: "right",
        fontSize: "20px",
        textAlign: "left",
        width: 600,
        border: "1px solid ",
        borderColor: "#D9E3F0",
        height: 50,
    },
    formInput: {
        width: "100%",

    },
    showList: {
        display: "block",
    },
    hideList: {
        display: "none",
    }
}));

function DoctorBookAppointment(props) {
    const classes = useStyles();
    const [show, setShow] = useState(true);
    const [patientName, setPatientName] = useState("")
    const [appointmentTime, setAppointmentTime] = useState("");
    const [appointmentDate, setAppointmentDate] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [address, setAddress] = useState("");


    function handlePatientName(event) {

        setPatientName(event.target.value)
    }
    function handleAppointmentDate(event) {
        setAppointmentDate(event.target.value)
    }
    function handleAppointmentTime(event) {
        setAppointmentTime(event.target.value)
    }
    function handleContactNo(event) {
        setContactNo(event.target.value)
    }
    function handleAddress(event) {
        setAddress(event.target.value)
    }
    function handleSubmit() {
        setShow(false);
        // alert('patient name :  ' + patientName);
    }
    return (<div>
        <div className={show ? classes.showList : classes.hideList}>
            <div>

                <div className={classes.title}><h1>Book Appointment of Dr. {props.appointment.name}  </h1></div>
                <table className={classes.tableinfo}>
                    <tr><th>Doctor Name :</th><th><TextField variant="filled" value={props.appointment.name} /></th> </tr>
                    <tr><th>Appoinment Date:</th><th ><TextField className={classes.formInput}
                        id="filled-basic"
                        variant="filled"
                        type="date"
                        defaultValue="2021-05-25"
                        value={appointmentDate}
                        onChange={handleAppointmentDate}

                    /></th></tr>
                    <tr><th>Appoinment Time: </th><th><TextField className={classes.formInput} variant="filled" type="time"
                        defaultValue="09:30"
                        inputProps={{
                            step: 300, // 5 min
                        }}
                        value={appointmentTime}
                        onChange={handleAppointmentTime}
                    />
                    </th></tr>
                    <tr><th>Patient Name :</th><th><TextField type="text" variant="filled" value={patientName} onChange={handlePatientName} /></th></tr>
                    <tr><th>Contact No.:</th><th><TextField type="text" variant="filled" value={contactNo} onChange={handleContactNo} /></th></tr>
                    <tr><th>Address : </th><th><TextField type="text" variant="filled" value={address} onChange={handleAddress} /></th></tr>
                    <tr><br /></tr>

                    <tr><th> <Button variant="contained" color="primary" onClick={() => handleSubmit()}>Book Appoinment</Button>
                    </th><th><Button variant="contained" color="primary"> Reset</Button></th></tr>
                </table>
            </div>
        </div>
        <div className={show ? classes.hideList : classes.showList}>
            <h1 className={classes.title}>Appoinment Book</h1>
            <table className={classes.tablePrint}>
                {/* {
                    [{ "name": "Doctor Name", prop: "props.appointment.name", bgcolor: "#4053bf" },
                    { "name": "Patient Name", prop: "patientName", bgcolor: "#4053bf " },
                    { "name": "Appoinment Date", prop: "appointmentDate", bgcolor: "#4053bf " },
                    { "name": "Appoinment Time", prop: "appointmentTime", bgcolor: "#4053bf" },
                    { "name": "Contact No.", prop: "contactNo", bgcolor: "#4053bf" },
                    { "name": "Saturday ", prop: "address", bgcolor: "#4053bf" }
                    ].map(
                        (row) =>
                        (<thead><tr>
                            <th bgcolor={row.bgcolor} className={classes.tableinfo}>{row.name}</th>
                            <td className={classes.tableinfo}> {([row.prop])}</td>
                        </tr>
                        </thead>))
                }
            </table> */}
                <tr><th bgcolor="#4053bf" className={classes.tablePrint}>Doctor Name </th><th className={classes.tablePrint}>{props.appointment.name} </th> </tr>
                <tr><th bgcolor="#4053bf" className={classes.tablePrint}>PatientName </th><th className={classes.tablePrint}>{patientName}</th></tr>
                <tr><th bgcolor="#4053bf" className={classes.tablePrint}>Appointment Date</th><th className={classes.tablePrint}>{appointmentDate} </th></tr>
                <tr><th bgcolor="#4053bf" className={classes.tablePrint}>Appoinment Time </th><th className={classes.tablePrint}>{appointmentTime}  </th></tr>
                <tr><th bgcolor="#4053bf" className={classes.tablePrint}>Contact No.</th><th className={classes.tablePrint}>{contactNo}</th></tr>
                <tr><th bgcolor="#4053bf" className={classes.tablePrint}>Address </th><th className={classes.tablePrint}> {address} </th></tr>
            </table>
        </div>
    </div>)
}
export default DoctorBookAppointment
