import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: "18px",
        marginRight: "10px"
    },

    '& > *': {
        margin: theme.spacing(1),
    },

    title: {
        padding: "10px",
        textAlign: 'center',
        lineHeight: '0px',
        color: "#4053bf",
    },
    showList: {
        display: "block"
    },
    hideList: {
        display: "none"
    }
}));


function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const classes = useStyles();

    function handleUsername(event) {
        setUsername(event.target.value);
    }
    function handlePassword(event) {
        setPassword(event.target.value)
    }

    return (<>

        <h1 className={classes.title}>Login To Your Account </h1>
        <div className={classes.root}>
            Username : <TextField type="text" value={username} onChange={handleUsername} /><br /><br />
                Password : <TextField type="password" value={password} onChange={handlePassword} /><br /><br />
        </div>
        <div ><Button variant="contained" color="primary" href={"/HomeLogIn/" + username.trim()} >Login</Button> <span> &#160;</span>
            <Button variant="contained" color="primary">Reset </Button></div><br />
        <Button variant="contained" color="primary">Sign Up</Button>
    </>)
}
export default Login