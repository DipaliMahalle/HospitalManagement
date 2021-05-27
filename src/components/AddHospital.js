import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const styles = theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    title: {
        padding: "2px",
        textAlign: 'left',
        lineHeight: '0px',
        color: "#4053bf",
    },
    tableinfo: {

        textAlign: "left",
        verticalAlign: "middle",
    },
    formControl: {
        margin: theme.spacing(2),
        width: '90%',
        maxWidth: 200,

    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    input: {
        width: "170px",
        height: "70px",
        paddingTop: "8px"
    },
    showList: {
        display: "block",
    },
    hideList: {
        display: "none",
    }
});
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

class AddHospital extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            id: '',
            name: '',
            contactNo: '',
            emailId: '',
            city: '',
            image: '',
            hospitalType: ['Government Hospital', 'Private Hospital'],
            type: [],
            roomList: ['General Ward', 'Twin Sharing Room', 'Deluxe Room', 'Premium Deluxe', 'Intensive Care Unit (ICU)', 'Isolation Rooms'],
            roomType: [],
            doctorList: [],
            doctorName: [],
        };
    }

    componentDidMount() {
        axios
            .get(
                'http://localhost:8000/doctorList'
            )
            .then((res) => {
                console.log("webservice data");
                console.log(res.data);
                this.setState({ doctorList: res.data });
            });
    }
    handleChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        this.setState({ doctorName: value });
    };

    handleId = event => {
        this.setState({ id: event.target.value });
    }

    handleName = event => {
        this.setState({ name: event.target.value });
    }
    handleHospitalType = event => {
        this.setState({ type: event.target.value });
    }
    handleContactNo = event => {
        this.setState({ contactNo: event.target.value });
    }
    handleEmailId = event => {
        this.setState({ emailId: event.target.value });
    }
    handleRoomType = event => {
        this.setState({ roomType: event.target.value });
    }
    handleCity = event => {
        this.setState({ city: event.target.value });
    }
    handleImage = event => {
        this.setState({ image: event.target.value });
    }
    handleDoctorName = event => {
        this.setState({ doctorName: event.target.value });
    }
    handleFileChange = (event) => {
        console.log(event);
        if (event.target.files[0]) {
            this.setState({
                image: {
                    src: URL.createObjectURL(event.target.files[0]),
                    alt: event.target.files[0].name
                }
            });
        }
    }
    handleSubmit = () => {
        const id = this.state.id;
        const name = this.state.name;
        const type = this.state.type;
        const contactNo = this.state.contactNo;
        const emailId = this.state.emailId;
        const roomType = this.state.roomType;
        const city = this.state.city;
        const image = this.state.image.alt;
        const doctorName = this.state.doctorName;

        axios.post(`http://localhost:8000/hospitalList`, { id, name, type, contactNo, emailId, roomType, city, image, doctorName })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        this.setState({ show: false })

    }

    render() {
        const { classes } = this.props;
        return (<div>
            <div className={this.state.show ? classes.showList : classes.hideList}>

                <div className={classes.title}><h1>Fill Details Of Hospital  </h1></div>
                <table className={classes.tableinfo}>
                    <tr><th>Hospital Name </th><th><TextField variant="filled" type="text" name="name" onChange={this.handleName} /></th> </tr>
                    <tr><th>Contact No.</th><th><TextField type="text" variant="filled" onChange={this.handleContactNo} /></th></tr>
                    <tr><th>Email Id </th><th><TextField type="text" variant="filled" onChange={this.handleEmailId} /></th></tr>
                    <tr><th>City </th><th><TextField type="text" variant="filled" onChange={this.handleCity} /></th></tr>
                    <tr><th>Hospital Type</th>
                        {/*   <th><TextField variant="filled" onChange={this.handleType} /></th></tr> */}
                        <th>
                            <FormControl className={classes.formControl}>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    value={this.state.type}
                                    onChange={this.handleHospitalType}
                                // input={<Input />}
                                >
                                    {this.state.hospitalType.map((ty) => (
                                        <MenuItem key={ty} value={ty}>
                                            <ListItemText primary={ty} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </th></tr>
                    <tr><th>Room Type  </th>

                        {/* <TextField type="text" variant="filled" onChange={this.handleRoomType} /></th></tr> */}
                        <th>
                            <FormControl className={classes.formControl}>
                                <Select
                                    labelId="demo-mutiple-checkbox-label"
                                    id="demo-mutiple-checkbox"
                                    multiple
                                    value={this.state.roomType}
                                    onChange={this.handleRoomType}
                                    input={<Input />}
                                    renderValue={(selected) => (
                                        <div className={classes.chips}>
                                            {selected.map((value) => (
                                                <Chip key={value} label={value} className={classes.chip} />
                                            ))}
                                        </div>
                                    )}
                                    MenuProps={MenuProps}
                                >
                                    {this.state.roomList.map((room) => (
                                        <MenuItem key={room} value={room}>
                                            <Checkbox checked={this.state.roomType.indexOf(room) > -1} />
                                            <ListItemText primary={room} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </th>
                    </tr>
                    <tr><th>Doctors Name</th>
                        <th>
                            <FormControl className={classes.formControl}>
                                <Select
                                    labelId="demo-mutiple-checkbox-label"
                                    id="demo-mutiple-checkbox"
                                    multiple
                                    value={this.state.doctorName}
                                    onChange={this.handleDoctorName}
                                    input={<Input />}
                                    renderValue={(selected) => (
                                        <div className={classes.chips}>
                                            {selected.map((value) => (
                                                <Chip key={value} label={value} className={classes.chip} />
                                            ))}
                                        </div>
                                    )}
                                    MenuProps={MenuProps}
                                >
                                    {this.state.doctorList.map((doctor) => (
                                        <MenuItem key={doctor.name} value={doctor.name}>
                                            <Checkbox checked={this.state.doctorName.indexOf(doctor.name) > -1} />
                                            <ListItemText primary={doctor.name} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </th>
                    </tr>
                    <tr><th>Image </th>
                        <th>
                            {/* <TextField type="text" variant="filled" onChange={this.handleImage} /> */}
                            <img src={this.state.image.src} alt={this.state.image.alt} className={classes.input} />
                            <input accept="image/*"
                                // className={classes.input}
                                type="file"
                                id="icon-button-file"
                                onChange={this.handleFileChange}
                                style={{ display: "none" }}
                            />
                            <label htmlFor="icon-button-file">
                                <IconButton color="primary"
                                    aria-label="upload picture"
                                    component="span">
                                    <PhotoCamera />
                                </IconButton>
                            </label>
                        </th></tr>
                    <tr><br /></tr>
                    <tr><th> <Button variant="contained" color="primary" onClick={this.handleSubmit}>Add Hospital</Button>
                    </th><th><Button variant="contained" color="primary"> Reset</Button></th></tr>
                </table>
            </div>

            <div className={this.state.show ? classes.hideList : classes.showList}>
                <h1 className={classes.title}>Hospital information added successfully</h1>
            </div>
        </div>
        )
    }
}
export default withStyles(styles, { withTheme: true })(AddHospital);