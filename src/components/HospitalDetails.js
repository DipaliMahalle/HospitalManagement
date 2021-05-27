import { makeStyles } from '@material-ui/core/styles';
import HospitalList from './HospitalList';
import React, { useState } from "react";

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

function HospitalDetails(props) {
    const classes = useStyles();
    const [backButton, setBackButton] = useState(true);


    function handleBackButton() {
        setBackButton(false)
    }

    return (<div >

        <div className={backButton ? classes.showList : classes.hideList}>
            <div className={classes.back}><button onClick={() => handleBackButton()}>back</button></div>
            <div className={classes.title}><h1> {props.details.name} Details </h1></div>
            <div className={classes.root}>

                <table className={classes.tableinfo}>

                    {
                        [{ "name": "Hospital Name", prop: "name", bgcolor: "#4053bf" },
                        { "name": "Hospital Type", prop: "type", bgcolor: "#4053bf " },
                        { "name": "Contact No.", prop: "contactNo", bgcolor: "#4053bf" },
                        { "name": "Email Id", prop: "email", bgcolor: "#4053bf" },
                        { "name": "City", prop: "city", bgcolor: "#4053bf" }
                        ].map(
                            (row) =>
                            (<thead><tr>
                                <th bgcolor={row.bgcolor} className={classes.tableinfo}>{row.name}</th>
                                <td className={classes.tableinfo}> {props.details[row.prop]}</td>
                            </tr>
                            </thead>))
                    }
                </table>
                <table className={classes.imageDetails}>
                    <tr> {props.details.name}</tr>
                    <tr><img src={props.details.image} alt="hospital" width="450" height="300" /></tr>
                </table>
            </div>
        </div>
        <div className={backButton ? classes.hideList : classes.showList}>
            <HospitalList />
        </div>
    </div >)
}
export default HospitalDetails

