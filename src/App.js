import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Home from './components/Home';
import HomeLogIn from './components/HomeLogIn';
import { useState } from 'react';

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

function App(props) {

  const [show, setShow] = useState(false);
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.root}>

        <AppBar position="static" >
          <Toolbar>
            <Typography variant="h3" className={classes.title}>
              Hospitals
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      { props.logIn ? <HomeLogIn /> : <Home />}

      {/* <div>
        {(() => {
          if (props.flag === 1) {
            return <div className={show ? classes.hideList : classes.showList}>
              <HomeLogIn />
            </div>
          } else {
            return <div className={show ? classes.hideList : classes.showList}>
              <Home />
            </div>
          }
        })()}
      </div> */}
    </div>

  )
}

{/* {(() => {
        if (props.logIn) {
          setShow(false);
          return (<div className="App"><div className={show ? classes.hideList : classes.showList}>log in</div></div>)
        }
        else {
          return (
            <div>
              <Home />
            </div>
          )
        }
      })()}
 */}


export default App;
