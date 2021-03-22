import React, { useState } from 'react'
import HomeLogIn from './HomeLogIn';
import App from '../App'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        marginRight: theme.spacing(2),
        textAlign: 'left',
    },
    showList: {
        display: "block"
    },
    hideList: {
        display: "none"
    }
}));


function Login() {
    const [logIn, setLogIn] = useState(false);
    const [flag, setFlag] = useState(0);
    const classes = useStyles();
    function handleLogIn(e) {
        e.preventDefault();
        setLogIn(true);
        setFlag(1);
    }

    return (<div>
        <div className={logIn ? classes.hideList : classes.showList}>
            <h1>Login form</h1>
                UserName : <input type="text" label="username" /><br /><br />
                PassWord : <input type="passsword" label="password" /><br /><br />
            <button onClick={(e) => handleLogIn(e)}> LogIn </button>
            <button> Reset </button><br /><br />
            <button> Sign up </button>
        </div>
        <div className={logIn ? classes.showList : classes.hideList}>
            <App logIn={logIn} />

        </div>

    </div>)


    // return (<div>
    //     <div>
    //         <h1>Login form</h1>
    //             UserName : <input type="text" label="username" /><br /><br />
    //             PassWord :<input type="passsword" label="password" /><br /><br />
    //         <button onClick={() => handleLogIn()}> LogIn </button>
    //         <button>  Reset</button><br /><br />
    //         <button>Sign up</button>
    //     </div>


    // </div>)
}
export default Login