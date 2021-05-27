import axios from 'axios';
import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import HospitalDetails from './HospitalDetails';
import HospitalBranches from './HospitalBranches';
import HospitalDoctor from './HospitalDoctor';

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
            margin: theme.spacing(1),
        },

    },
    tableinfo: {
        textAlign: "left",
        width: 670,
        height: 250,
        border: "1px solid ",
        borderColor: "#D9E3F0",
    },
    showList: {
        display: "block"
    },
    hideList: {
        display: "none"
    },



}));


function HospitalList() {

    const classes = useStyles();
    const [show, setShow] = useState(true);
    const [hospitals, setHospitals] = useState([]);
    const [details, setDetails] = useState({ name: "", contactNo: "", email: "" });
    const [branches, setBranches] = useState({ id: "" })
    const [doctors, setDoctors] = useState({ id: "" })
    const [flag, setFlag] = useState(0);

    useEffect(() => {
        axios
            .get(
                'http://localhost:8000/hospitalList'
            )
            .then((res) => {

                setHospitals(res.data);
            });
    }, []);

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
        setDoctors({ ...hospital });
        setFlag(3);
    }

    return (

        <div>
            <div className={show ? classes.showList : classes.hideList}>
                <div className={classes.title}><h1>All Hospitals</h1></div>
                {hospitals.map((hospital) => (<div>
                    <div className={classes.root}>
                        <table className={classes.tableinfo} >
                            <tr className={classes.border}><td><img src={hospital.image} alt="hospital" width="200" height="200" /></td>
                                <td>
                                    <table className={classes.tableinfo} >
                                        {
                                            [{ "name": "Hospital Name", prop: "name" },
                                            { "name": "Hospital Type", prop: "type" },
                                            { "name": "Contact No.", prop: "contactNo" },
                                            { "name": "Email Id", prop: "email" },
                                            { "name": "City", prop: "city" }
                                            ].map(
                                                (row) =>
                                                (<tr>
                                                    <th className={classes.border}>{row.name}</th>
                                                    <td className={classes.border}> {hospital[row.prop]}</td>
                                                </tr>

                                                ))

                                        }
                                        <tr><td className={classes.cover}>
                                            <Button variant="contained" color="primary" onClick={() => handleHospitalDetails(hospital)}>
                                                <b> View Details</b>
                                            </Button>
                                            <Button variant="contained" color="primary" onClick={() => handleHospitalBranches(hospital)}>
                                                <b>Branches</b>
                                            </Button></td>
                                            <td className={classes.cover}> <Button variant="contained" color="primary" onClick={() => handleHospitalDoctors(hospital)} >
                                                <b> Doctors</b>
                                            </Button>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>))}
            </div>
            <div className={show ? classes.hideList : classes.showList}>
                {(() => {
                    if (flag === 1) {
                        return <div>
                            <HospitalDetails details={details} />
                        </div>;
                    } else if (flag === 2) {
                        return <div>
                            <HospitalBranches branches={branches} />
                        </div>;
                    }

                    else if (flag === 3) {
                        return <div>
                            <HospitalDoctor details={doctors} />
                        </div>;
                    }

                })()}

            </div>


        </div >
    )
}
export default HospitalList