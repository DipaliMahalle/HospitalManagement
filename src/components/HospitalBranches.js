import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
        width: 700,
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

function HospitalBranches(props) {
    const classes = useStyles();
    const [backButton, setBackButton] = useState(true);
    const [branch, setBranch] = useState([]);
    function handleBackButton() {
        setBackButton(false)
    }

    useEffect(() => {
        var temp = props.branches.name.replace(/\s+/g, '') + 'Branch';
        axios
            .get(
                'http://localhost:8000/' + temp
            )
            .then((res) => {

                setBranch(res.data);
            });
    });


    return (<div>
        <div className={backButton ? classes.showList : classes.hideList}>
            <div className={classes.back}><button onClick={() => handleBackButton()}>back</button></div>
            <h1 className={classes.title}>Branches of {props.branches.name}</h1>
            {branch.map((bran) => (<div>

                <table className={classes.tableinfo}>
                    {
                        [{ "name": "Branch Name", prop: "branchName", bgcolor: "#4053bf" },
                        { "name": "Branch facility", prop: "branchFacility", bgcolor: "#4053bf" },
                        { "name": "Contact No.", prop: "branchContactNo", bgcolor: "#4053bf" },
                        { "name": "Email Id", prop: "branchEmail", bgcolor: "#4053bf" },
                        { "name": "City", prop: "branchCity", bgcolor: "#4053bf" },
                        { "name": "State", prop: "branchState", bgcolor: "#4053bf" }
                        ].map(
                            (row) =>
                            (<thead><tr>
                                <th bgcolor={row.bgcolor} className={classes.tableinfo}>{row.name}</th>
                                <td className={classes.tableinfo}> {bran[row.prop]}</td>
                            </tr></thead>))
                    }
                </table>
                <br /><br /><br />
            </div>))}


            {/* {(() => {

                switch (props.branches.name) {
                    case "Sahyadri Hospital":
                        return (<div>{sahyadriHospitalBranch.map(sahyadri => (
                            <div className={classes.root}>

                                <table className={classes.tableinfo}>

                                    {
                                        [{ "name": "Branch Name", prop: "branchName", bgcolor: "#4053bf" },
                                        { "name": "Branch facility", prop: "branchFacility", bgcolor: "#4053bf" },
                                        { "name": "Contact No.", prop: "branchContactNo", bgcolor: "#4053bf" },
                                        { "name": "Email Id", prop: "branchEmail", bgcolor: "#4053bf" },
                                        { "name": "City", prop: "branchCity", bgcolor: "#4053bf" },
                                        { "name": "State", prop: "branchState", bgcolor: "#4053bf" }
                                        ].map(
                                            (row) =>
                                            (<thead><tr>
                                                <th bgcolor={row.bgcolor} className={classes.tableinfo}>{row.name}</th>
                                                <td className={classes.tableinfo}> {sahyadri[row.prop]}</td>
                                            </tr></thead>))
                                    }

                                </table>

                            </div>

                        ))} </div>)

                    case 'Deenanath Mangeshkar Hospital':
                        return (<div>{deenanathHospitalBranch.map(deenanath => (
                            <div className={classes.root}>

                                <table className={classes.tableinfo}>

                                    {
                                        [{ "name": "Branch Name", prop: "branchName", bgcolor: "#4053bf" },
                                        { "name": "Branch facility", prop: "branchFacility", bgcolor: "#4053bf" },
                                        { "name": "Contact No.", prop: "branchContactNo", bgcolor: "#4053bf" },
                                        { "name": "Email Id", prop: "branchEmail", bgcolor: "#4053bf" },
                                        { "name": "City", prop: "branchCity", bgcolor: "#4053bf" },
                                        { "name": "State", prop: "branchState", bgcolor: "#4053bf" }
                                        ].map(
                                            (row) =>
                                            (<thead><tr>
                                                <th bgcolor={row.bgcolor} className={classes.tableinfo}>{row.name}</th>
                                                <td className={classes.tableinfo}> {deenanath[row.prop]}</td>
                                            </tr></thead>))
                                    }

                                </table>

                            </div>

                        ))} </div>)

                    case 'Kolte Patil Hospital':
                        return (<div>{kolteHospitalBranch.map(kolte => (<div><div className={classes.root}>

                            <table className={classes.tableinfo}>

                                {
                                    [{ "name": "Branch Name", prop: "branchName", bgcolor: "#4053bf" },
                                    { "name": "Branch facility", prop: "branchFacility", bgcolor: "#4053bf" },
                                    { "name": "Contact No.", prop: "branchContactNo", bgcolor: "#4053bf" },
                                    { "name": "Email Id", prop: "branchEmail", bgcolor: "#4053bf" },
                                    { "name": "City", prop: "branchCity", bgcolor: "#4053bf" },
                                    { "name": "State", prop: "branchState", bgcolor: "#4053bf" }
                                    ].map(
                                        (row) =>
                                        (<thead><tr>
                                            <th bgcolor={row.bgcolor} className={classes.tableinfo}>{row.name}</th>
                                            <td className={classes.tableinfo}> {kolte[row.prop]}</td>
                                        </tr></thead>))
                                }

                            </table>

                        </div></div>))}</div>)

                    case 'Aditya Birla Memorial Hospital':
                        return (<div>{adityaBirlaHospitalBranch.map(aditya => (
                            <div className={classes.root}>

                                <table className={classes.tableinfo}>

                                    {
                                        [{ "name": "Branch Name", prop: "branchName", bgcolor: "#4053bf" },
                                        { "name": "Branch facility", prop: "branchFacility", bgcolor: "#4053bf" },
                                        { "name": "Contact No.", prop: "branchContactNo", bgcolor: "#4053bf" },
                                        { "name": "Email Id", prop: "branchEmail", bgcolor: "#4053bf" },
                                        { "name": "City", prop: "branchCity", bgcolor: "#4053bf" },
                                        { "name": "State", prop: "branchState", bgcolor: "#4053bf" }
                                        ].map(
                                            (row) =>
                                            (<thead><tr>
                                                <th bgcolor={row.bgcolor} className={classes.tableinfo}>{row.name}</th>
                                                <td className={classes.tableinfo}> {aditya[row.prop]}</td>
                                            </tr></thead>))
                                    }

                                </table>

                            </div>

                        ))} </div>)
                    case 'Get Life Hospital':
                        return (<div>{getLifeHospitalBranch.map(getlife => (
                            <div className={classes.root}>

                                <table className={classes.tableinfo}>

                                    {
                                        [{ "name": "Branch Name", prop: "branchName", bgcolor: "#4053bf" },
                                        { "name": "Branch facility", prop: "branchFacility", bgcolor: "#4053bf" },
                                        { "name": "Contact No.", prop: "branchContactNo", bgcolor: "#4053bf" },
                                        { "name": "Email Id", prop: "branchEmail", bgcolor: "#4053bf" },
                                        { "name": "City", prop: "branchCity", bgcolor: "#4053bf" },
                                        { "name": "State", prop: "branchState", bgcolor: "#4053bf" }
                                        ].map(
                                            (row) =>
                                            (<thead><tr>
                                                <th bgcolor={row.bgcolor} className={classes.tableinfo}>{row.name}</th>
                                                <td className={classes.tableinfo}> {getlife[row.prop]}</td>
                                            </tr></thead>))
                                    }

                                </table>

                            </div>

                        ))} </div>)
                    case 'Ojas Hospital':
                        return (<div>{ojasHospitalBranch.map(ojas => (<div>

                            <div className={classes.root}>

                                <table className={classes.tableinfo}>
                                    {
                                        [{ "name": "Branch Name", prop: "branchName", bgcolor: "#4053bf" },
                                        { "name": "Branch facility", prop: "branchFacility", bgcolor: "#4053bf" },
                                        { "name": "Contact No.", prop: "branchContactNo", bgcolor: "#4053bf" },
                                        { "name": "Email Id", prop: "branchEmail", bgcolor: "#4053bf" },
                                        { "name": "City", prop: "branchCity", bgcolor: "#4053bf" },
                                        { "name": "State", prop: "branchState", bgcolor: "#4053bf" }
                                        ].map(
                                            (row) =>
                                            (<thead><tr>
                                                <th bgcolor={row.bgcolor} className={classes.tableinfo}>{row.name}</th>
                                                <td className={classes.tableinfo}> {ojas[row.prop]}</td>
                                            </tr></thead>))
                                    }

                                </table>

                            </div>
                        </div>))}</div>)

                    default: return (<div><h1>There is no branch</h1></div>)
                }

            })()} */}
        </div>
        <div className={backButton ? classes.hideList : classes.showList}>
            <HospitalList />
        </div>

    </div>)
}
export default HospitalBranches

