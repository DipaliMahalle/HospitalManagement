import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    tableinfo: {

        textAlign: "left",
        verticalAlign: "middle"
    },
    formInput: {
        width: "100%",

    }
}));

function DoctorBookAppoinment(props) {
    const classes = useStyles();
    const [value, setValue] = useState(" ");

    function handleAppoinment(event) {
        event.preventDefault();
        console.log("appoinment")
        // setValue(event.target.value)

    }
    function handleSubmit() {
        alert("appoinment  jkkjkj")
        console.log("value")


    }
    return (<div>
        <form onSubmit={() => handleSubmit()}>
            <div>
                <table >
                    <tr><h2>Book Doctor Appoinment</h2></tr>
                    <div className={classes.tableinfo}>
                        <tr> <th> Doctor Name :</th><th><TextField id="filled-basic" variant="filled" value={props.appoinment.name} /></th> </tr>
                        <tr><th>Appoinment Date:</th><th ><TextField className={classes.formInput}
                            id="filled-basic"
                            variant="filled"
                            type="date"
                            defaultValue="2021-05-25"
                        /></th></tr>
                        <tr><th>Appoinment Time: </th><th><TextField className={classes.formInput} id="filled-basic" variant="filled" type="time"
                            defaultValue="09:30"
                            inputProps={{
                                step: 300, // 5 min
                            }} />
                        </th></tr>
                        <tr><th>Patient Name : </th><th><TextField id="filled-basic" type="text" variant="filled" /></th></tr>
                        <tr><th>Contact No.:</th><th><TextField id="filled-basic" type="text" variant="filled" /></th></tr>
                        <tr><th>Address : </th><th><TextField id="filled-basic" type="text" variant="filled" /></th></tr>
                        <tr><br /></tr>

                        <tr><th> <Button variant="contained" color="primary" type="submit" onClick={() => handleAppoinment()}>Book Appoinment</Button>
                        </th><th><Button variant="contained" color="primary"> Reset</Button></th></tr>

                    </div>

                </table>
            </div>
        </form>
    </div>)
}
export default DoctorBookAppoinment
