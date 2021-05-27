import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

import HomeMain from './HomeMain'
import HospitalList from './HospitalList'
import DoctorList from './DoctorList'
import Login from './Login'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'


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
        paddingBottom: "0px",


    },
    title: {
        flexGrow: 1,
        marginRight: theme.spacing(2),
        textAlign: 'left',

    },

}));

export default function Home() {


    const classes = useStyles();
    const [value, setValue] = React.useState("one");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>

            <AppBar position="static" >
                <Toolbar>
                    <Typography variant={'h2'} className={classes.title}>
                        Hospitals
                    </Typography>
                </Toolbar>
            </AppBar>
            <div>
                <div>
                    <AppBar position="static" style={{ background: '#0097A7' }} >
                        <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
                            <Tab value="one" label="Home" {...a11yProps('one')} />
                            <Tab value="two" label="Hospital List" {...a11yProps('two')} />
                            <Tab value="three" label="Doctor list" {...a11yProps('three')} />
                            <Tab value="four" label="About us" {...a11yProps('four')} />
                            <Tab value="five" label="Contact us" {...a11yProps('five')} />
                            <Tab value="six" label="Login" {...a11yProps('six')} />
                        </Tabs>
                        {(() => {
                            if (value === "one") {
                                return <div>
                                    <AppBar position="static">
                                        <img src="/Image/iStock-695349930.jpg" alt="hospital" height="250" />
                                    </AppBar>
                                </div>
                            }
                        })()}

                    </AppBar>
                </div>
                <div>
                    <TabPanel value={value} index="one" component={'span'}>
                        <HomeMain />
                    </TabPanel>
                    <TabPanel value={value} index="two">
                        <HospitalList />
                    </TabPanel>
                    <TabPanel value={value} index="three">
                        <DoctorList />
                    </TabPanel>
                    <TabPanel value={value} index="four">
                        <AboutUs />
                    </TabPanel>
                    <TabPanel value={value} index="five">
                        <ContactUs />
                    </TabPanel>
                    <TabPanel value={value} index="six" variant={'body2'}>
                        <Login />
                    </TabPanel>
                </div>
            </div>
        </div>
    );
}