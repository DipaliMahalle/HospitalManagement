import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import hospitalList from '../mockdata/hospitalList.json'
import getLifeHospitalBranch from '../mockdata/getLifeHospitalBranch.json';
import ojasHospitalBranch from '../mockdata/ojasHospitalBranch.json';
import kolteHospitalBranch from '../mockdata/kolteHospitalBranch.json';
import doctorList from '../mockdata/doctorList.json'

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
        display: "block"
    },
    hideList: {
        display: "none"
    }

});


function HospitalList() {

    const classes = useStyles();
    const [show, setShow] = useState(true);
    const [details, setDetails] = useState({ id: "", name: "", type: "", city: "" })
    const [branches, setBranches] = useState({ id: "" })

    const [flag, setFlag] = useState(0);

    function handleHospitalDetails(hospital) {
        setShow(false);
        setDetails({ ...hospital });
        setFlag(1);
    }
    function handleHospitalBranches(hospital) {
        setShow(false);
        setBranches({ ...hospital });
        setFlag(2);
    }
    function handleHospitalDoctors(hospital) {
        setShow(false);
        setDetails({ ...hospital });
        setFlag(3);
    }
    function handleBack() {
        setShow(true);
    }

    return (

        <div>
            <div className={show ? classes.showList : classes.hideList} >
                <div><h2>Hospitals List</h2></div>

                {hospitalList.map(hospital => (<div>
                    <Card className={classes.root}>
                        <div className={classes.details}>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                image={hospital.image}
                                title="doctor"
                                className={classes.cover}

                            />
                        </div>
                        <CardContent >
                            <Typography gutterBottom variant="h5" component="h2">
                                <table className={classes.tableinfo} >
                                    <tr><td>Name</td><td>{hospital.name}</td></tr>
                                    <tr><td> Type </td> <td>{hospital.type}</td></tr>
                                    <tr><td> Contact No.</td><td>{hospital.contactNo}</td></tr>
                                    <tr><td>Email Id</td><td>{hospital.email}</td></tr>
                                    <tr><td> City </td><td>{hospital.city}</td></tr>

                                </table>
                            </Typography>
                        </CardContent> <br />
                    </Card>
                    <Card>
                        <CardActions>
                            <Button color="primary" onClick={() => handleHospitalDetails(hospital)}>
                                View Details
                </Button>
                            <Button color="primary" onClick={() => handleHospitalBranches(hospital)}>
                                Branches
                </Button>
                            <Button color="primary" onClick={() => handleHospitalDoctors(hospital)}>
                                Doctors
                </Button>
                        </CardActions>
                    </Card>
                    <br />

                </div >))
                }
            </div>
            <div className={show ? classes.hideList : classes.showList} >

                {(() => {
                    if (flag === 1) {
                        // return <div><DoctorDetails /></div>;

                        return <div>
                            <button onClick={() => handleBack()}>Back</button><br /><br />

                            <h1> Hospital Details </h1>
                            <Card className={classes.root}>
                                <div className={classes.details}>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        image={details.image}
                                        title="doctor"
                                        className={classes.cover}
                                    />
                                </div>
                                <table>
                                    <tr><td>Name</td><td> {details.name}</td></tr>
                                    <tr><td> Type </td> <td> {details.type}</td></tr>
                                    <tr><td> Contact No.</td><td> {details.contactNo}</td></tr>
                                    <tr><td>Email Id</td><td> {details.email}</td></tr>
                                    <tr><td> City </td><td>{details.city}</td></tr>
                                </table>
                            </Card>
                        </div>;
                    } else if (flag === 2) {
                        return <div>
                            <button onClick={() => handleBack()}>Back</button><br /><br />
                            <h1>Branches of {branches.name} Hospital</h1>

                            {(() => {

                                switch (branches.id) {

                                    case 'H01':
                                        return (<div>{getLifeHospitalBranch.map(getlife => (<div>{getlife.branchName} {getlife.branchFacility}</div>))}</div>)
                                    case 'H02':
                                        return (<div>{ojasHospitalBranch.map(ojas => (<div>{ojas.branchName} {ojas.branchFacility}</div>))}</div>)
                                    case 'H03':
                                        return (<div>{kolteHospitalBranch.map(kolte => (<div>{kolte.branchName} {kolte.branchFacility}</div>))}</div>)

                                    default: return (<div><h1>There is no branch</h1></div>)
                                }

                            })()}


                            {/* {doctorTimes.filter(person => doctorTime.id == person.id).map(docttime => <div>
                                <table>
                                    <tr><td>Name</td><td> {docttime.name}</td></tr>
                                    <tr><td> Monday </td> <td> {docttime.monday}</td></tr>
                                    <tr><td> Tuesday </td> <td> {docttime.tuesday}</td></tr>
                                    <tr><td> Wensday</td><td> {docttime.wensday}</td></tr>
                                    <tr><td>Thursday</td><td> {docttime.thursday}</td></tr>
                                    <tr><td> Friday </td><td>{docttime.friday}</td></tr>
                                    <tr><td> saturday </td><td>{docttime.saturday}</td></tr>
                                    <tr><td>sunday </td><td>{docttime.sunday}</td></tr>
                                </table> <br /></div>)} */}
                        </div>;
                    }
                    else if (flag === 3) {
                        return <div>
                            <button onClick={() => handleBack()}>Back</button><br /><br />
                            <h1>Doctor of {details.name} Hospital </h1>

                            {doctorList.filter(doct => (doct.id.includes(details.id))).map(d => <div>{d.name}</div>)}
                            {/* Doctor Name : <input type="text" label="username" value={appoinment.name} /><br /><br />
                            Appoinment Date: <input type="text" label="date" /><br /><br />
                            Patient Name : <input type="text" label="patientname" /><br /><br />
                            Email : <input type="text" label="email" /><br /><br />
                        Contact No.: <input type="text" label="contactno" /><br /><br />
                        Address: <input type="text" label="address" /><br /><br />
                            <button onClick={() => handleAppoinment()}>Book Appoinment</button>
                            <button>Reset</button><br /><br /> */}
                        </div>;
                    }
                })()}

            </div>


        </div >
    )
}
export default HospitalList