import React, { useState } from 'react';
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
    }
});
function DoctorDetails(props) {
    const classes = useStyles();
    const [backButton, setBackButton] = useState(true);
    function handleBackButton() {
        setBackButton(false)
    }

    return (<div>
        <div className={backButton ? classes.showList : classes.hideList}>
            <div className={classes.back}><button onClick={() => handleBackButton()}>back</button></div>
            <div className={classes.title}><h1>Dr. {props.activeDoctor.name} Details </h1></div>
            <div className={classes.root}>
                <table className={classes.tableinfo}>
                    {
                        [{ "name": "Doctor Name", prop: "name", bgcolor: "#4053bf" },
                        { "name": "Doctor Type", prop: "type", bgcolor: "#4053bf " },
                        { "name": "Qualification", prop: "qualification", bgcolor: "#4053bf " },
                        { "name": "Contact No.", prop: "contactNo", bgcolor: "#4053bf" },
                        { "name": "Email Id", prop: "email", bgcolor: "#4053bf" },
                        { "name": "City", prop: "city", bgcolor: "#4053bf" }
                        ].map(
                            (row) =>
                            (<thead><tr>
                                <th bgcolor={row.bgcolor} className={classes.tableinfo}>{row.name}</th>
                                <td className={classes.tableinfo}> {props.activeDoctor[row.prop]}</td>
                            </tr>
                            </thead>))
                    }
                </table>
                <table className={classes.imageDetails}>
                    <tr>Dr. {props.activeDoctor.name}</tr>
                    <tr><img src={props.activeDoctor.image} alt="doctor" width="450" height="300" /></tr>
                </table>
            </div>
        </div>
        <div className={backButton ? classes.hideList : classes.showList}>
            <DoctorList />
        </div>
    </div >



        // <h1> Doctor Details</h1>
        // <Card className={classes.root}>
        //     <div className={classes.details}>
        //         <CardMedia
        //             component="img"
        //             alt="Contemplative Reptile"
        //             image={props.activeDoctor.image}
        //             title="doctor"
        //             className={classes.cover}
        //         />
        //     </div>
        //     <table className={classes.tableinfo}>

        //         <tr><th>Name</th><th> {props.activeDoctor.name}</th></tr>
        //         <tr><th> Type </th> <th> {props.activeDoctor.type}</th></tr>
        //         <tr><th> Qualification </th> <th> {props.activeDoctor.qualification}</th></tr>
        //         <tr><th> Contact No.</th><th> {props.activeDoctor.contactNo}</th></tr>
        //         <tr><th>Email Id</th><th> {props.activeDoctor.email}</th></tr>
        //         <tr><th> City </th><th>{props.activeDoctor.city}</th></tr>
        //     </table>
        // </Card>


    )
}
export default DoctorDetails





