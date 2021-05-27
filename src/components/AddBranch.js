import React from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
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
});

class AddBranch extends React.Component {

    state = {
        hospitalName: '',
        branchName: '',
        contactNo: '',
        emailId: '',
        facility: '',
        city: '',
        state: ''
    }
    handleHospitalName = event => {
        this.setState({ hospitalName: event.target.value });
    }

    handleBranchName = event => {
        this.setState({ BranchName: event.target.value });
    }
    handleContactNo = event => {
        this.setState({ contactNo: event.target.value });
    }
    handleEmailId = event => {
        this.setState({ emailId: event.target.value });
    }
    handleFacility = event => {
        this.setState({ facility: event.target.value });
    }
    handleCity = event => {
        this.setState({ city: event.target.value });
    }
    handleState = event => {
        this.setState({ state: event.target.value });
    }

    handleSubmit = () => {
        const hospitalName = this.state.hospitalName;
        const branchName = this.state.branchName;
        const contactNo = this.state.contactNo;
        const emailId = this.state.emailId;
        const facility = this.state.facility;
        const city = this.state.city;
        const state = this.state.state;

        var temp = hospitalName.replace(/\s+/g, '') + "branch";

        axios.post(`http://localhost:8000/` + temp, { branchName, contactNo, emailId, facility, city, state })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        const { classes } = this.props;
        return (<div>
            <div className={classes.title}><h1>Fill Details Of Branches  </h1></div>

            <table className={classes.tableinfo}>
                <tr><th>Hospital Name </th><th><TextField variant="filled" type="text" name="name" onChange={this.handleHospitalName} /></th> </tr>
                <tr><th>Branch Name</th><th><TextField variant="filled" onChange={this.handleBranchName} /></th></tr>
                <tr><th>Contact No.</th><th><TextField type="text" variant="filled" onChange={this.handleContactNo} /></th></tr>
                <tr><th>Email Id </th><th><TextField type="text" variant="filled" onChange={this.handleEmailId} /></th></tr>
                <tr><th>Facility</th><th><TextField variant="filled" onChange={this.handleFacility} /></th></tr>
                <tr><th>City </th><th><TextField type="text" variant="filled" onChange={this.handleCity} /></th></tr>
                <tr><th>State </th><th><TextField type="text" variant="filled" onChange={this.handleState} /></th></tr>
                <tr><br /></tr>

                <tr><th> <Button variant="contained" color="primary" onClick={this.handleSubmit}>Add Doctor</Button>
                </th><th><Button variant="contained" color="primary"> Reset</Button></th></tr>
            </table>

        </div>)
    }
}
export default withStyles(styles, { withTheme: true })(AddBranch);




