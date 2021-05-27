import React from 'react';
import { useParams } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import AddHospital from './AddHospital';
import AddDoctor from './AddDoctor';
import AddBranch from './AddBranch';
import AddTiming from './AddTiming';
import AppoinmentReport from './AppoinmentReport'


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `wrapped-tab-${index}`,
        'aria-controls': `wrapped-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        marginRight: theme.spacing(2),
        textAlign: 'left',
    },
    buttonright: {
        marginLeft: "600px",
        color: "aliceblue",

    },
    bar: {
        backgroundColor: "#D9E3F0",
    }


}));

export default function HomeLogIn() {

    let { username } = useParams();
    const classes = useStyles();
    const [value, setValue] = React.useState("one");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>

            <AppBar position="static" >
                <Toolbar>
                    <Typography variant="h3" className={classes.title}>
                        Hospitals
                    </Typography>
                       Welcome {username}
                </Toolbar>
            </AppBar>
            <AppBar position="static" style={{ background: '#0097A7' }}>
                <Toolbar>
                    <Tabs value={value} onChange={handleChange} className={classes.title}>
                        <Tab value="one" label="Home" {...a11yProps('one')} />
                        <Tab value="two" label=" Add Hospital list" {...a11yProps('two')} />
                        <Tab value="three" label="Add Doctor list" {...a11yProps('three')} />
                        <Tab value="four" label="Add Branches" {...a11yProps('four')} />
                        <Tab value="five" label="Add Timing" {...a11yProps('five')} />
                        <Tab value="six" label="Appoinment Report" {...a11yProps('six')} />
                    </Tabs>
                    <Button href="/">Logout</Button>
                </Toolbar>
                {/* <Button variant="contained" color="primary" href="/">Logout</Button> */}
            </AppBar>
            <TabPanel value={value} index="one">
                <h1>log in succesful</h1>
            </TabPanel>
            <TabPanel value={value} index="two">
                <AddHospital />
            </TabPanel>
            <TabPanel value={value} index="three">
                <AddDoctor />
            </TabPanel>
            <TabPanel value={value} index="four">
                <AddBranch />
            </TabPanel>
            <TabPanel value={value} index="five">
                <AddTiming />
            </TabPanel>
            <TabPanel value={value} index="six">
                <AppoinmentReport />
            </TabPanel>
        </div>
    );
}

