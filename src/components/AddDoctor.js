import React from 'react'
import axios from 'axios'
import { withStyles } from "@material-ui/core/styles";
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

class AddDoctor extends React.Component {

    state = {
        id: '',
        name: '',
        type: '',
        qualification: '',
        contactNo: '',
        emailId: '',
        city: '',
        image: ''
    }
    handleId = event => {
        this.setState({ id: event.target.value });
    }

    handleName = event => {
        this.setState({ name: event.target.value });
    }
    handleType = event => {
        this.setState({ type: event.target.value });
    }
    handleQualification = event => {
        this.setState({ qualification: event.target.value });
    }
    handleContactNo = event => {
        this.setState({ contactNo: event.target.value });
    }
    handleEmailId = event => {
        this.setState({ emailId: event.target.value });
    }
    handleCity = event => {
        this.setState({ city: event.target.value });
    }
    handleImage = event => {
        this.setState({ image: event.target.value });
    }

    handleSubmit = () => {
        const id = this.state.id;
        const name = this.state.name;
        const type = this.state.type;
        const qualification = this.state.type;
        const contactNo = this.state.contactNo;
        const emailId = this.state.emailId;
        const city = this.state.city;
        const image = this.state.image;

        axios.post(`http://localhost:8000/doctorList`, { id, name, type, qualification, contactNo, emailId, city, image })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        const { classes } = this.props;
        return (<div>
            <div className={classes.title}><h1>Fill Details Of Doctor  </h1></div>

            <table className={classes.tableinfo}>
                <tr><th>Doctor Id</th><th><TextField variant="filled" onChange={this.handleId} /></th></tr>
                <tr><th>Doctor Name </th><th><TextField variant="filled" type="text" name="name" onChange={this.handleName} /></th> </tr>
                <tr><th>Doctor Type</th><th><TextField variant="filled" onChange={this.handleType} /></th></tr>
                <tr><th>Qualification</th><th><TextField variant="filled" onChange={this.handleQualification} /></th></tr>
                <tr><th>Contact No.</th><th><TextField type="text" variant="filled" onChange={this.handleContactNo} /></th></tr>
                <tr><th>Email Id </th><th><TextField type="text" variant="filled" onChange={this.handleEmailId} /></th></tr>
                <tr><th>City </th><th><TextField type="text" variant="filled" onChange={this.handleCity} /></th></tr>
                <tr><th>Image </th><th><TextField type="text" variant="filled" onChange={this.handleImage} /></th></tr>
                <tr><br /></tr>

                <tr><th> <Button variant="contained" color="primary" onClick={this.handleSubmit}>Add Doctor</Button>
                </th><th><Button variant="contained" color="primary"> Reset</Button></th></tr>
            </table>

        </div>
        )
    }
}
export default withStyles(styles, { withTheme: true })(AddDoctor);



